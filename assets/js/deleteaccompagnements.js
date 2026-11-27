const API_URL = 'http://localhost:3000/api/accompagnements';

// Récupération des éléments HTML
const boutonCharger = document.getElementById('btn-charger');
const statutElement = document.getElementById('statut');
const listeElement = document.getElementById('liste-accompagnements');

// Fonction principale pour charger les données (permet d'utiliser await et return)
async function chargerAccompagnements() {
  statutElement.textContent = 'Chargement en cours...';
  statutElement.classList.remove('erreur');
  listeElement.innerHTML = '';

  try {
    const reponse = await fetch(API_URL);
    if (!reponse.ok) {
      throw new Error(`Erreur HTTP : ${reponse.status}`);
    }
    const data = await reponse.json();
    const accompagnements = data.accompagnements;

    statutElement.textContent = '';

    if (accompagnements.length === 0) {
      statutElement.textContent = 'Aucun accompagnement disponible pour le moment.';
      return; // Valide ici car nous sommes dans une fonction !
    }

    accompagnements.forEach(item => {
      const itemId = item._id?.$oid || item._id || item.id;

      const li = document.createElement('li');
      // Ajout de data-id="${itemId}" sur le bouton de suppression
      li.innerHTML = `
        <div class="card testimonial-card text-center p-4 position-relative">
          <button type="button" data-id="${itemId}" class="btn-close position-absolute top-0 end-0 m-3 z-3 delete-btn" aria-label="Supprimer"></button>
          <div class="card-body">
            <span class="icon">${item.icone || '📌'}</span>
            <h2 class="titre">${item.titre || 'Sans titre'}</h2>
            <small class="text-muted">${item.sousTitre || 'Sans sous titre'}</small>
            <p class="mt-3">${item.description || 'Sans description'}</p> 
          </div>
        </div>
      `;
      listeElement.appendChild(li);
    });
  } catch (erreur) {
    console.error('Erreur :', erreur);
    statutElement.textContent = "Impossible de charger la liste. Vérifiez que votre serveur est lancé.";
    statutElement.classList.add('erreur');
  }
}

// Écouteur global pour gérer la suppression au clic
listeElement.addEventListener('click', async (event) => {
  const deleteBtn = event.target.closest('.delete-btn');
  if (!deleteBtn) return;

  const id = deleteBtn.dataset.id;
  

  if (!id || id === 'undefined') {
    alert("Erreur : identifiant introuvable sur ce bouton.");
    return;
  }
//console.log("Clic réussi ! URL et ID récupéré :",API_URL,id);
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE'
    });

    if (response.ok) {
      deleteBtn.closest('li').remove();
      console.log("Collection Accompagnements - document supprimé de MongoDB et de l'écran !");
    } else {
      console.error("Erreur serveur :", response.status);
      alert("Erreur lors de la suppression en base de données.");
    }
  } catch (error) {
    console.error("Erreur réseau :", error);
    alert("Impossible de contacter le serveur.");
  }
});

// Lancement au chargement de la page (ou au clic sur boutonCharger)
chargerAccompagnements();
if (boutonCharger) {
  boutonCharger.addEventListener('click', chargerAccompagnements);
}



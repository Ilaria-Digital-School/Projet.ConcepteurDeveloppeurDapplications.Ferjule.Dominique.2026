const API_URL = 'http://localhost:3000/api/accompagnements';

// Récupération des éléments HTML
const boutonCharger = document.getElementById('btn-charger');
const statutElement = document.getElementById('statut');
const listeElement = document.getElementById('liste-accompagnements');

async function listerAccompagnementAPI() {
  // Réinitialiser l'affichage avant de charger
  statutElement.textContent = 'Chargement en cours...';
  statutElement.classList.remove('erreur');
  //vider la liste à chaque clic => pas d'empilement des mêmes cartes
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
      return;
    }

    accompagnements.forEach(item => {
      const li = document.createElement('li');
      
      li.innerHTML = `
        <div class="card testimonial-card text-center p-4">
                    <div class="card-body">
          <span class="icon">${item.icon || '📌'}</span>
          <h2 class="titre">${item.titre || 'Sans titre'}</h2>
          <small class="text-muted">${item.sousTitre || 'Sans sous titre'}</small>
          <p class="mt-3">${item.description || 'Sans description'}</p>       
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

// Déclencher la fonction uniquement lors du clic sur le bouton
boutonCharger.addEventListener('click', listerAccompagnementAPI);

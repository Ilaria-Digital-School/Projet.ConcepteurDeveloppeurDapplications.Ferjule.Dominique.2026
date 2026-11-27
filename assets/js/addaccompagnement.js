
import { ajouterAccompagnementAPI }
  from "./accompagnementService.js";
//
document.querySelector(".scroll-top").addEventListener("click", function () {
  window.scrollTo({
    top: 0
  })
})
//
class Accompagnement {
  constructor(iconeAccompagnement, titreAccompagnement,
    sousTitreAccompagnement, descriptionAccompagnement) {
    this.icone = iconeAccompagnement;
    this.titre = titreAccompagnement;
    this.sousTitre = sousTitreAccompagnement;
      this.description = descriptionAccompagnement;
  }
}
//
const var1 = document.getElementById('champ-icone');
const var2 = document.getElementById('champ-titre');
const var3 = document.getElementById('champ-soustitre');
const var4 = document.getElementById('champ-description');
const btnSubmit = document.getElementById('btn-submit');
const statForm = document.getElementById('statut-form');

const etatFormulaire = {
      champ1: false,
      champ2: false,
      champ3: false,
      champ4: false
    };
//
// Fonction centrale qui active ou désactive le bouton d'envoi "Créer le service"
function majBoutonEnvoi() {
  const toutEstValide = etatFormulaire.champ1 && etatFormulaire.champ2 && etatFormulaire.champ3 && etatFormulaire.champ4;
  // Si tout est valide (true), !toutEstValide vaut false, donc btnSubmit.disabled = false (le bouton ets désactivé).
  if (toutEstValide) {
    statForm.textContent = '✅ Le formulaire est complet et peut être soumis.';
    statForm.className = 'd-block small mt-1 text-success fw-medium';
    btnSubmit.disabled = false;
  } else {    
    statForm.textContent = '❌ Erreur, impossible de soumettre le formulaire';
    statForm.className = 'd-block small mt-1 text-success fw-medium';
    btnSubmit.disabled = true;
  }
}
// Fonction pour ajouter un type d'accompagnement
function ajouterAccompagnement() {
  //
  // 1.Récupérer les valeurs du formulaire
  //
  const form = document.getElementById('form');
  if (form) {    
     btnSubmit.disabled = true;  
    //
    // État global de validation de chaque champ
    // impose que le texte commence et finisse par une lettre, tout en autorisant un espace, un tiret ou une apostrophe entre deux mots.
    const regexLettres = /^[a-zA-ZÀ-ÿ]+(?:[ '-][a-zA-ZÀ-ÿ]+)*$/;
    var1.addEventListener('input', () => {
      // .trim() permet d'ignorer les espaces vides au début et à la fin
      const valeur = var1.value.trim();
      // 3. Condition de validation (exemple : ')
      // Vérifie si la valeur correspond uniquement à des lettres
      if (regexLettres.test(valeur)) {
        etatFormulaire.champ1 = true;
      } else {
        etatFormulaire.champ1 = false;     
      }
      majBoutonEnvoi();
    });
    var2.addEventListener('input', () => {
      // .trim() permet d'ignorer les espaces vides au début et à la fin
      const valeur = var2.value.trim();
      // 3. Condition de validation (exemple : ')
      // Vérifie si la valeur correspond uniquement à des lettres
      if (regexLettres.test(valeur)) {
        etatFormulaire.champ2 = true;
      } else {
        etatFormulaire.champ2 = false;  
      }
      majBoutonEnvoi();
    });
    var3.addEventListener('input', () => {
      // .trim() permet d'ignorer les espaces vides au début et à la fin
      const valeur = var3.value.trim();
      // 3. Condition de validation (exemple : ')
      // Vérifie si la valeur correspond uniquement à des lettres
      if (regexLettres.test(valeur)) {
        etatFormulaire.champ3 = true;
      } else {
        etatFormulaire.champ3 = false;  
      }
      majBoutonEnvoi();
    });
    var4.addEventListener('input', () => {
      // .trim() permet d'ignorer les espaces vides au début et à la fin
      const valeur = var4.value.trim();
      // 3. Condition de validation (exemple : ')
      // Vérifie si la valeur correspond uniquement à des lettres
      if (regexLettres.test(valeur)) {
        etatFormulaire.champ4 = true;
      } else {
        etatFormulaire.champ4 = false;
      }
      majBoutonEnvoi();
    });
  };
  //
  // Double sécurité lors de la soumission (ex: touche Entrée)
  //
  if (form) {
    form.addEventListener('submit', async (event) => {
       event.preventDefault();
      if (btnSubmit.disabled) {
        return;
      }   
      // si bouton activé => création de l'accompagnement
      // 2.Regrouper les valeurs du formulaire dans un objet
      const accompagnement = new Accompagnement(
        var1.value,
        var2.value,
        var3.value,
        var4.value);              
      // stockage dans local storage de l'utilisateur en vue dialogue avec database
      //localStorage.setItem("Icone",JSON.stringify(var4.value)); 
      //localStorage.setItem("Titre",JSON.stringify(var1.value));  
      //localStorage.setItem("Sous-titre",JSON.stringify(var2.value)); 
      //localStorage.setItem("Description",JSON.stringify(var3.value));  
      //  event.preventDefault(); // À retirer pour un vrai envoi serveur
      //  alert('Avant envoi formulaire vers serveur : Accompagnement presque créé !');
      // Appel de l'accompagnement
      try {       
          const nouveauAccompagnement = await ajouterAccompagnementAPI(accompagnement);
         console.log("Réponse du serveur après test :", nouveauAccompagnement);     
        // form.reset();   
        alert("Accompagnement ajouté !");
      } catch (error) {
        console.log("Erreur détaillée : ", error);
        alert("Erreur lors de l'ajout de l'accompagnement !")
      }
    });
  }
}
ajouterAccompagnement();

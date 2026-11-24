
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
    this.soustitre = sousTitreAccompagnement,
      this.description = descriptionAccompagnement;
  }
}
//
let var1 = document.getElementById('champ-titre');
let var2 = document.getElementById('champ-soustitre');
let var3 = document.getElementById('champ-description');
let var4 = document.getElementById('champ-icone');
let btnSubmit = document.getElementById('btn-submit');
let statForm = document.getElementById('statut-form');

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
    statForm.textContent = '❌ Le formulaire est incomplet.';
    statForm.className = 'd-block small mt-1 text-success fw-medium';
    btnSubmit.disabled = true;
  }
}
// Fonction pour ajouter un type d'accompagnement
function ajouterAccompagnement() {
  //
  // 1.Récupérer les valeurs du formulaire
  //
  let form = document.getElementById('form');
  if (form) {    
     btnSubmit.disabled = true;  
    //
    // État global de validation de chaque champ
    //
    const regexLettres = /^[a-zA-ZÀ-ÿ]+$/;
    var1.addEventListener('input', () => {
      // .trim() permet d'ignorer les espaces vides au début et à la fin
      const valeur = var1.value.trim();
      // 3. Condition de validation (exemple : ')
      // Vérifie si la valeur correspond uniquement à des lettres
      if (regexLettres.test(valeur)) {
        etatFormulaire.champ1 = true;
      } else {
        etatFormulaire.champ1 = false;
         console.log("vide1");
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
           console.log("vide2");
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
           console.log("vide3");
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
           console.log("vide4");
      }
      majBoutonEnvoi();
    });
  };
  //
  // Double sécurité lors de la soumission (ex: touche Entrée)
  //
  if (form) {
    form.addEventListener('submit', (event) => {
      if (btnSubmit.disabled) {
        event.preventDefault();
      }
      event.preventDefault();
      // si tout est ok => création de l'accompagnement
      // 2.Regrouper les valeurs du formulaire dans un objet
      let accompagnement = new Accompagnement(var1, var2, var3, var4);

      // stockage dans local storage de l'utilisateur en vue dialogue avec database
      //localStorage.setItem("Icone",JSON.stringify(var4.value)); 
      //localStorage.setItem("Titre",JSON.stringify(var1.value));  
      //localStorage.setItem("Sous-titre",JSON.stringify(var2.value)); 
      //localStorage.setItem("Description",JSON.stringify(var3.value));  
      //  event.preventDefault(); // À retirer pour un vrai envoi serveur
      //  alert('Avant envoi formulaire vers serveur : Accompagnement presque créé !');
      // Appel de l'accompagnement
      try {
        const nouveauAccompagnement = async () => {
          const nouveauAccompagnement = await ajouterAccompagnementAPI(accompagnement);
        }; 
        // form.reset();
        alert("Accompagnement ajouté !");
      } catch (error) {
        console.log(error);
        alert("Erreur lors de l'ajout de l'accompagnement !")
      }
    });
  }
}
ajouterAccompagnement();

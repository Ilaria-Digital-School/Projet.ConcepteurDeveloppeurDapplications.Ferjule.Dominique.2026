document.querySelector(".scroll-top").addEventListener("click", function () {
  window.scrollTo({
    top: 0
  })
})

// Récupération contenu champ formulaire
const formulaire = document.getElementById('formulaire-inscription');
const champEmail = document.getElementById('champ-email');
const champMdp = document.getElementById('champ-mdp');
const champNom = document.getElementById('champ-nom');
const btnToggle = document.getElementById('toggle-mdp');
const statMdp = document.getElementById('statut-mdp');
const btnSubmit = document.getElementById('btn-submit');

// Sélection des éléments du champ de confirmation
const inputConfirm = document.getElementById('champ-mdp-confirm');
const toggleConfirm = document.getElementById('toggle-mdp-confirm');
const statutConfirm = document.getElementById('statut-mdp-confirm');

// Récupération des éléments de la liste
const critereLongueur = document.getElementById('critere-longueur');
const critereMajuscule = document.getElementById('critere-majuscule');
const critereChiffre = document.getElementById('critere-chiffre');
const critereSpecial = document.getElementById('critere-special');

// Fonction utilitaire pour mettre à jour l'affichage d'un critère
function majCritere(element, estValide, texte) {
  if (estValide) {
    element.textContent = '✅ ' + texte;
    element.style.color = 'green';
  } else {
    element.textContent = '❌ ' + texte;
    element.style.color = 'red';
  }
}
// Fonction centrale qui active ou désactive le bouton d'envoi "se connecter"
function majBoutonEnvoi() {
  // console.log('mail', etatFormulaire.email, 'mdp', etatFormulaire.mdp, 'nom', etatFormulaire.nom);
  const toutEstValide = etatFormulaire.email && etatFormulaire.mdp && etatFormulaire.nom;
  // Si tout est valide (true), !toutEstValide vaut false, donc btnSubmit.disabled = false (le bouton s'active).
  btnSubmit.disabled = !toutEstValide;
}

champMdp.addEventListener('input', (event) => {
  const valeur = event.target.value;

  // 1. Vérification de chaque règle via des Regex simples
  const aLongueur = valeur.length >= 8;
  const aMajuscule = /[A-Z]/.test(valeur);
  const aChiffre = /[0-9]/.test(valeur);
  const aSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(valeur);

  // 2. Mise à jour de chaque ligne
  majCritere(critereLongueur, aLongueur, 'Au moins 8 caractères');
  majCritere(critereMajuscule, aMajuscule, 'Au moins une lettre majuscule');
  majCritere(critereChiffre, aChiffre, 'Au moins un chiffre');
  majCritere(critereSpecial, aSpecial, 'Au moins un caractère spécial (!@#$%^&*)');

  // 3. Bordure globale du champ
  if (aLongueur && aMajuscule && aChiffre && aSpecial) {
    champMdp.style.borderColor = 'green';
    etatFormulaire.mdp = true;
 //   console.log('ok pour mdp initial à la sortie controle mdp');
  } else {
    etatFormulaire.mdp = false;
    champMdp.style.borderColor = valeur.length > 0 ? 'red' : '';
  }
  majBoutonEnvoi();
});
// État global de validation de chaque champ
const etatFormulaire = {
  email: false,
  mdp: false,
  nom: false
};


// 1. Validation de l'e-mail
champEmail.addEventListener('input', () => {
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  // REGEX : objet expression régulière qui s'écrit entre 2 barres obliques //
  // REGEX : exemple : /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/. Chaque bloc correspond à une règle précise
  // de lecture de gauche à droite.
  // / et /. début et la fin de l'expression régulière en JS.
  // ^. début exact de la chaîne de caractères. Rien ne doit précéder ce qui suit.
  // [^\s@]+. identifiant (ex: jean.dupont). Les crochets [] créent une liste de caractères, l'accent circonflexe ^ à l'intérieur signifie « tout sauf », \s désigne un espace et + impose au moins un caractère.
  // @. Exige la présence littérale du symbole arobase.
  // [^\s@]+. Représente le nom de domaine (ex: gmail). Il interdit à nouveau les espaces et un second @.
  // \.. Exige un vrai point. L'antislash \ est indispensable car, seul, le point signifie « n'importe quel caractère » en Regex.
  // [^\s@]{2,}. Représente l'extension (ex: com ou fr). Les accolades {2,} imposent un minimum de 2 caractères sans limite maximale.
  // $. Indique la fin exacte de la chaîne de caractères. Rien ne doit suivre après l'extension.
  // trim = suppression des espaces invisibles ; on peut aussi utiliser .trimStart() ou .trimEnd()
  // test : méthode qui permet de vérifier si une chaîne de caractères respecte le modèle précis défini
  // par regex.
  // etatformulaire : booléen true ou false  
  etatFormulaire.email = regexEmail.test(champEmail.value.trim());
  document.getElementById('statut-email').textContent = etatFormulaire.email ? '✅' : '❌';
  majBoutonEnvoi();
});
//
//  Fonction réutilisable pour afficher ou masquer un mot de passe
//
function configurerBoutonAffichage(bouton, champ) {
  bouton.addEventListener('click', () => {
    //si mode caché passer en mode text mais avec icone masquage
    if (champ.type === 'password') {  
      champ.type = 'text';
      bouton.textContent = '🙈 Masquer';
    } else {      //sinon mode text passer en mode caché mais avec icone affichage
  
      champ.type = 'password';
      bouton.textContent = '👁️ Afficher';
    }
  });
}
configurerBoutonAffichage(btnToggle, champMdp);
configurerBoutonAffichage(toggleConfirm, inputConfirm);
//
// Vérification de la correspondance des deux mots de passe
//
function verifierCorrespondance() { 
  if (etatFormulaire.mdp === false) {
    statutConfirm.textContent = '';
    statutConfirm.className = 'd-block small mt-1';
 //  console.log('erreur mot de passe initial => comparaison mots de passe impossible');
    return;
  }
 //  console.log('état formulaire dans fonction verifier');
  const valMdp = champMdp.value;
  const valConfirm = inputConfirm.value;

  // Ne rien afficher tant que la confirmation est vide
  if (valConfirm.length === 0) {
    statutConfirm.textContent = '';
    statutConfirm.className = 'd-block small mt-1';
    return;
  }

  if (valMdp === valConfirm) {
    statutConfirm.textContent = '✅ Les mots de passe correspondent.';
    statutConfirm.className = 'd-block small mt-1 text-success fw-medium';
//     console.log('Youpi Correspondance entre mots de passe');
  } else {
    statutConfirm.textContent = '❌ Les mots de passe ne correspondent pas.';
    statutConfirm.className = 'd-block small mt-1 fg-danger fw-medium';
//    console.log('pas de correspondance entre mots de passe');
  }
}
//
// Vérification lors de la saisie dans le champ de confirmation du mot de passe
//
inputConfirm.addEventListener('input', verifierCorrespondance);
//
// Contrôle saisie du nom : regex => accepte uniquement les lettres (majuscules, minuscules et accents)
//
const regexLettres = /^[a-zA-ZÀ-ÿ]+$/;
champNom.addEventListener('input', () => {
  // .trim() permet d'ignorer les espaces vides au début et à la fin
  const valeur = champNom.value.trim();
  // 3. Condition de validation (exemple : minimum 5 caractères)
  // Vérifie si la valeur correspond uniquement à des lettres
  if (regexLettres.test(valeur)) {
    etatFormulaire.nom = true;
    document.getElementById('statut-nom').textContent = '✅';
  } else {
    etatFormulaire.nom = false;
    document.getElementById('statut-nom').textContent = '❌';
  }
  majBoutonEnvoi();
});
//
// 4. Double sécurité lors de la soumission (ex: touche Entrée)
//
formulaire.addEventListener('submit', (event) => {
  if (btnSubmit.disabled) {
    event.preventDefault();
    return;
  }
  event.preventDefault(); // À retirer pour un vrai envoi serveur
  alert('Message en attente vrai envoi vers serveur : Formulaire valide et envoyé ! Inscription presque validée !');
});
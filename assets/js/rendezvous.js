// Page Rendez-vous : validation date saisie par l'utilisateur
//
function validerDate() {
  //
  const saisie = document.getElementById('rdv').value;// Ex: "2026-11-02T22:15"
  const resultat = document.getElementById('resultat');
  const conteneurMessage = document.getElementById('status-message');
  // On vide le message précédent à chaque nouvel essai
  conteneurMessage.textContent = "";
  conteneurMessage.style.color = "black";
  //
  // contrôle du choix utilisateur : si saisie alors extraction heure
  //
  if (!saisie) {
    // si champ vide il n'y aura pas de contrôle dans la base de données  
    // console.error("Veuillez sélectionner une date et une heure.");
    conteneurMessage.textContent = "⚠️ Veuillez sélectionner une date et une heure.";
    conteneurMessage.style.color = "#d97706"; // Couleur orange
    return;
  } else {
    const dateObj = new Date(saisie);
    // 0 = Dimanche, 6 = Samedi
    const indexJour = dateObj.getDay();
    if (indexJour === 0 || indexJour === 6) {
      // console.error("❌ Erreur : Pas de consultation le week-end.");
      // Code pour afficher l'erreur HTML...
      conteneurMessage.textContent = "⚠️ Erreur : Pas de consultation le week-end.";
      conteneurMessage.style.color = "#dc3545"; // Rouge d'erreur  
    } else {
      // Extraction date avant mise en forme (padStart) 
      const [dateUniquement] = saisie.split('T'); // Récupère uniquement ce qui est avant le "T" 
      // 1. Créer l'objet Date (en ajoutant "T00:00" pour éviter les décalages de fuseau horaire)
      const heures = String(dateObj.getHours()).padStart(2, '0');
      const minutes = String(dateObj.getMinutes()).padStart(2, '0');
      const heureFormatee = `${heures}`;
      // console.log("✅ Date valide, vous pouvez continuer.", "Date JJMMSS & Heure récupérée :",
      // dateUniquement,heureFormatee); // Résultat : "14"
      conteneurMessage.textContent = `✅ Date valide ${dateUniquement} & heure valide ${heureFormatee}, vous pouvez continuer !`;
      conteneurMessage.style.color = "#198754"; // Vert de succès
      // puis vérifier dans la base de données, si le créneau est libre pour la date et heure saisies    
      // Extraction heures et minutes avec mise en forme (padStart)      
    }
  }
};

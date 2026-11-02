
document.querySelector(".scroll-top").addEventListener("click", function () {
  window.scrollTo({
    top: 0
  })
})

// 1. Base de données des services apportés
// en C4-C5-C6 ces informations pourront provenir directement de la db SQL ou NoSQL
// l'administrateur pourra gérer ces cartes supprimer, modifier, créer 
  const servicesData = [
  {
    icon: "fa-hand-holding-heart",
    title: "Soutien jeunes adultes & adolescents",
    footerText: "Retrouver confiance en vous",
    description: `Un espace d'écoute bienveillant pour accompagner les jeunes.
      
      - Gestion du stress scolaire.
      - Construction de l'estime de soi.`
  },
  {
    icon: "fa-child-reaching",
    title: "Développement personnel",
    footerText: "Vous épanouir",
    description: "Des séances personnalisées pour identifier vos blocages et libérer votre potentiel."
  },
  {
    icon: "fa-users-line",
    title: "Développement collectif",
    footerText: "Un objectif commun",
    description: "Ateliers de groupe visant à améliorer la cohésion et fluidifier la communication."
  },
  {
    icon: "fa-feather",
    title: "Soutien à la parentalité",
    footerText: "Soutenir les parents",
    description: "Un accompagnement sur mesure pour traverser les périodes de doute en famille."
  }
];

const container = document.getElementById('cards-container');
const modalTitle = document.getElementById('serviceModalLabel');
const modalBody = document.getElementById('serviceModalBody');

// 2. Génération des cartes avec les commandes natives Bootstrap 6 (command et commandfor)
container.innerHTML = servicesData.map((service, index) => `
    <div class="col">
      <div class="card h-100 d-flex flex-column">
        <div class="card-header text-center">
          <i class="fa-solid ${service.icon} fa-4x"></i>
        </div>
        <div class="card-body text-center">
          <h2 class="card-title">${service.title}</h2>
        </div>
        <div class="card-footer bg-transparent border-0 text-center pb-3">
          <small class="fg-4 fw-bolder d-block mb-3">${service.footerText}</small>
          <!-- Déclencheurs natifs Bootstrap 6 pour ouvrir le Dialog -->
          <button type="button" 
                  class="btn-solid theme-primary btn-xs btn-en-savoir-plus" 
                  commandfor="serviceModal" 
                  command="show-modal" 
                  data-index="${index}">
            En savoir plus
          </button>
        </div>
      </div>
    </div>
  `).join('');

// 3. Remplissage du texte brut lors du clic (l'ouverture est gérée nativement par le HTML)
container.addEventListener('click', (e) => {
  const button = e.target.closest('.btn-en-savoir-plus');
  if (button) {
    const index = button.getAttribute('data-index');
    const serviceSelected = servicesData[index];

    // Injection sécurisée du texte brut avant affichage
    modalTitle.textContent = serviceSelected.title;
    modalBody.textContent = serviceSelected.description;
  }
});



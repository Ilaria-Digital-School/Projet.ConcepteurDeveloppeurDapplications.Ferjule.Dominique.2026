//adresse de destination (le endpoint) où les données seront envoyées.
//le serveur local exécuté sur le port 3000, à la route /accompagnements.

const API_URL = "http://localhost:3000/accompagnements";

// Fonction pour ajouter des accompagnements
// export : rend la fonction utilisable dans d'autres fichiers du projet.
// async : Indique que la fonction est asynchrone,
// càd qu'elle va effectuer une opération qui prend du temps
// (une requête réseau) sans bloquer le reste du programme.
// accompagnementObj : Le paramètre attendu, qui est un objet contenant
// les informations du nouvel accompagnement à créer
//axios.post : Envoie une requête HTTP de type POST
// (utilisée pour créer une nouvelle ressource) à l'adresse API_URL
// avec les données accompagnementObj.
// await : Met en pause l'exécution de la fonction en attendant que
// le serveur réponde, puis stocke cette réponse complète dans la
// variable reponse
// return reponse.data;renvoie uniquement les données utiles retournées
// par le serveur (souvent l'objet nouvellement créé avec son identifiant
// unique), en ignorant les informations techniques de la requête HTTP
// (comme les en-têtes ou le code de statut).
export async function ajouterAccompagnementAPI(accompagnementObj) {
    const reponse = await axios.post(API_URL, accompagnementObj);
    return reponse.data;    
    }   

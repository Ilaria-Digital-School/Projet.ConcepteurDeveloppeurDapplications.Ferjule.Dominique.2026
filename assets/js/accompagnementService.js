//adresse de destination (le endpoint) où les données seront envoyées.
//le serveur local exécuté sur le port 3000, à la route /accompagnements.

const API_URL = "http://localhost:3000/api/accompagnements";

// export : rend la fonction utilisable dans d'autres fichiers du projet.
// async : Indique que la fonction est asynchrone,
// càd qu'elle va effectuer une opération qui prend du temps
// (une requête réseau) sans bloquer le reste du programme.

//axios.post : Envoie une requête HTTP de type POST ou GET ou DELETE...
// (utilisée pour créer une nouvelle ressource) à l'adresse API_URL
// avec les données accompagnementObj.
//Axios envoie du JSON par défaut en convertissant l'objet d'abord
// await : Met en pause l'exécution de la fonction en attendant que
// le serveur répond, puis stocke cette réponse complète dans la
// variable reponse
// return reponse.data : propriété utilisée par la bibliothèque Axios pour stocker
// les données renvoyées par l'API.
//
// Fonction pour ajouter des accompagnements
// accompagnementObj : Le paramètre attendu, qui est un objet contenant
// les informations du nouvel accompagnement à créer
export async function ajouterAccompagnementAPI(accompagnementObj) {
    const reponse = await axios.post(API_URL, accompagnementObj);    
    return reponse.data;        
    }   
//
// Fonction pour récupérer les accompagnements
export async function listerAccompagnementAPI() {
    const reponse = await axios.get(API_URL);
    return reponse.data;
}

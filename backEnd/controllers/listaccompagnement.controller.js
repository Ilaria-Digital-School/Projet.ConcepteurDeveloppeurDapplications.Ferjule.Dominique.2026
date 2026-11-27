//c'est la logique métier (interaction avec la db)
// fonctions qui manipulent les données via le modèle
import Accompagnement from '../models/accompagnement.mode.js';
//get simple test : c'est la méthode
// paramètre req c'est pour la requete càd l'action
// et la destination de la requete
//
// paramètre res c'est pour la réponse de type JSON
// req = requete reçue du FrontEnd
// res = réponse retournée du BackEnd vers le FrontEnd
// 1 export/méthode est recommandé
// Route pour lister les accompagnements de la db

export const listAccompagnement = async (req, res) => {
    try {
        // récupération des datas de la requête
        // await : attendre jusqu'à ce que...
        // renvoit un tableau contenant tous les documents.
        // Si base vide => renvoit un tableau vide []
        const accompagnements =  await Accompagnement.find();
        // retourner une réponse - code standard lecture = 200
        res.status(200).json({
            message: "Message du Controller : Liste des accompagnements récupérés !", accompagnements
        });
    } catch (error) {
        res.status(500).json({
            message: "Message du Controller : Erreur lors de la récupération des accompagnements",
            error: error.message
        })
    }
}
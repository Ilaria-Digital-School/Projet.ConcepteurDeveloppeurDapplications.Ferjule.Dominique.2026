//c'est la logique métier (interaction avec la db)
// fonctions qui manipulent les données via le modèle
//get simple test : c'est la méthode
// paramètre req c'est pour la requete càd l'action
// et la destination de la requete

import Accompagnement from "../models/accompagnement.mode.js"

// paramètre res c'est pour la réponse de type JSON
// req = requete reçue du FrontEnd
// res = réponse retournée du BackEnd vers le FrontEnd
// 1 export/méthode est recommandé
//// Route pour ajouter une tâche (POST)
export const addAccompagnement = async (req, res) => {
    try {
        // récupération des datas de la requête
        const accompagnement = new Accompagnement(req.body);
        //sauvegarder les datas dans la database
        // await : attendre jusqu'à ce que l'accompagnement soit sauvegardé
        await accompagnement.save();
        // retourner une réponse 
        res.status(201).json({
            message: "Message du Controller : Accompagnement ajouté !", accompagnement
        });
    } catch (error) {
        res.status(500).json({
            message: "Message du Controller : Erreur lors de l'ajout de l'accompagnement",
            error: error.message
        })
    }
}
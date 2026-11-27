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
export const deleteAccompagnement = async (req, res) => {
    try {
        // 1. On récupère l'ID envoyé dans l'URL (ex: /api/accompagnements/id)
        const { id } = req.params;

        // 2. On cherche et on supprime le document correspondant dans MongoDB
        const accompagnementSupprime = await Accompagnement.findByIdAndDelete(id);

        // 3. Si aucun document ne correspond à cet ID, on renvoie une 404
        if (!accompagnementSupprime) {
            return res.status(404).json({
                message: "Message du Controller : Accompagnement introuvable en base de données."
            });
        }

        // 4. Confirmation de la suppression (code 200)
        res.status(200).json({
            message: "Message du Controller : Accompagnement supprimé avec succès !",
            accompagnementSupprime
        });
    } catch (error) {
        res.status(500).json({
            message: "Message du Controller : Erreur lors de la suppression de l'accompagnement",
            error: error.message
        });
    }
};
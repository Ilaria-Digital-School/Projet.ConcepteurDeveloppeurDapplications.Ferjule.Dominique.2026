//Définition des Routes Express utilisant le modèle Mongoose
//lien entre URLs et fonctions du contrôleur grâce à express.Router().
//cette route doit être ajoutée ensuite au fichier app.js de configuration
import express from "express"; 
// les accolades permettent d'exporter une fonctionnalité du fichier controller
// sans les accolades JS recherche export default
import {addAccompagnement} from "../controllers/accompagnement.controller.js";
//lien entre URLs et fonctions du contrôleur grâce à express.Router().
const router = express.Router();
//on ajoute l'action, le path (API) pour lancer la methode "addAccompagnement"
// dans le controller
// "/accompagnements" : url nom que je choisis qui doit être identique au front End
//méthode : addAccompagnement
router.post("/accompagnements", addAccompagnement);

// 1 default par fichier
export default router;
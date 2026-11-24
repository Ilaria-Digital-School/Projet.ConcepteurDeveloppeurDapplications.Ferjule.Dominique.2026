//cette route doit être ajoutée ensuite au fichier app.js de configuration
import express from "express";
import { getHello } from "../controllers/user.controller.js";
//utiliser le routage avec express
const router = express.Router();
//on ajoute l'action, le path (API) pour lancer la methode "getHello"
// dans le controller
// "/hello" : nom que je choisis qui doit être identique au front End
//
router.get("/hello", getHello);

export default router;
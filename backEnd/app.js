// fichier pour la configuration de l'application
import express from "express";
import cors from "cors";
import userRoutes from "./routes/user.routes.js";
import accompagnementRoutes from "./routes/accompagnements.routes.js";
 
const app = express();
//express.json permet à express de comprendre les datas sous forme json envoyées dans le corps de la requetes http vers/du (le) serveur
// ensuite ce JSON sera analysé avant d'arriver aux routes ou middlewares
app.use(express.json());

// 2. Autoriser les requêtes provenant du FE (avant les routes)
// tout autoriser en local
app.use(cors());

//Routes
// évite de répéter dans les routes le "/api"
// l'application va se connecter à userRoutes 
app.use("/api",userRoutes);
// l'application va se connecter à accompagnementRoutes 
app.use("/api",accompagnementRoutes); 
// pour utilisation de app.js en dehors de ce fichier càd l'importer dans un autre fichier 
export default app;
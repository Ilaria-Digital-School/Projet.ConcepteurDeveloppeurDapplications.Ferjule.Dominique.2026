// point d'entrée de l'application backEnd (connexion DB et lancement)
import app from "./app.js";
import connectDB from "./config/db.js"; 
    
//connexion de l'application avec MongoDB
connectDB();
   
// déclarer une constante : port du backEnd utilisant nodejs express
const PORT = 3000;

//écouter le port 3000 : Lancement du serveur
app.listen(PORT,() => {
    console.log(`Server running on port ${PORT}`);    
})

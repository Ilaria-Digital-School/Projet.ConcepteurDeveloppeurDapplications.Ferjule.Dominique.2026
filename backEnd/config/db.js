// bibliothèque qui permet à notre application nodeJS
// de communiquer simplement avec la database (ici MongoDB)
import mongoose from "mongoose";

const connectDB = async () => {
// tente de faire le traitement et si erreur c'est catch qui traite l'erreur  
// await : attendre quee Mongoose se connecte à la db pour continuer 
// 27017 : port de la base MongoDB 
// connecte mon application à la db MongoDB-coachDB qui tourne localement sur 
// mon ordinateur

try {    
//    Connexion à MongoDB (ici en local)
    await mongoose.connect("mongodb://127.0.0.1:27017/coachdb");
    console.log("MongoDB connected");    
} catch (error) {
   console.error("Error MongoDB", error);
   // arrêt programme nodejs
   process.exit(1);
}
};
// pour utilisation de db.js en dehors de ce fichier càd l'importer dans un autre fichier 
export default connectDB;
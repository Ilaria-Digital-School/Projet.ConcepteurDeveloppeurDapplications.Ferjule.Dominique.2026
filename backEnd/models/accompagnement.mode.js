import mongoose from "mongoose"; 
//
//ce que je vais sauvegarder dans la database
//new = schema est un constructeur fournit par mongoose
//créer une nouvelle instance (un nouveau objet) de schéma avec la structure 
    //Définition du schéma
const accompagnementSchema = new mongoose.Schema({
    icone: String,
    titre: String,
    sousTitre: String,
    description: String
    }
);
// création du model à partir du schéma défini au dessus 
const Accompagnement = mongoose.model("Accompagnement", accompagnementSchema);
// export pour utilisation ailleurs
export default Accompagnement;
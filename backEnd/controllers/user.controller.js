// get simple test : c'est la méthode
// paramètre req c'est pour la requete càd l'action
// et la destination de la requete
// paramètre res c'est pour la réponse de type JSON
export const getHello =  (req, res) => {
// message retourné sous forme de JSON donc accolades et mot clé    
res.json({message: "Hello from Express !"});
};
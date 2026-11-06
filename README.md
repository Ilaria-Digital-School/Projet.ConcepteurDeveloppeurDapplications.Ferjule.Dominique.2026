Dossier de conception :
Objectif principal : 
1)	Ce site internet permet à un coach de vie, certifié, de se faire connaître sur la toile, d’attirer des clients, d’inciter un internaute, potentiel client, à prendre un premier rendez-vous avec le coach. Le coach expose ses valeurs, son respect du code déontologique, sa méthode de coaching, les services proposés (coaching personnel, collectif, soutien...), des statistiques de coaching. 
2)	Le client peut ensuite suivre l’évolution de son coaching à travers des statistiques personnalisées. Il peut consulter ses rendez-vous, le nombre de séances de coaching réalisées, à venir...
3)	Deux types d’accès à l’application existent :
a.	Le client : accès à son compte, ses statistiques...
b.	Le coach : c’est le coach qui peut ajouter des services de coaching, améliorer sa méthode, sortir le bilan de coaching par client, des statistiques relatives à tous ses clients, par client, par type de coaching (individuel, collectif...) , archiver des clients, supprimer des clients
c.	L’admin, le créateur du site a accès à tout

C1 – Environnement
Environnement technique
Système d’exploitation : Microsoft Windows
Internet explorer : navigateur Google Chrome

Environnement de développement intégré
Visualcode
HTML
CSS
Javascript
Boostrap 5 puis version 6

Travail  collaboratif :
Microsoft Teams

Outil de Gestion des versions et conteneurs
Git local avec une branche Main
Git remote : 

Utilitaire de contrôle de la qualité du code : 
Pour le code HTML utilisation de  W3C 
Pour le code JS utilisation de projet MDN open source et autres informations sur internet

C2 – Maquettage
Charte graphique : Couleurs : noir, rose, bleu, gris clair, blanc
Schéma du site :
Page d’accueil divisée en : 
Header - bandeau dynamique donnant accès aux pages :
•	A propos : permet d’accéder à la page « A propos »
•	Témoignages : permet d’accéder à la page « Témoignages »
•	Prendre rendez-vous : : permet d’accéder à la page « Prendre rendez-vous »
•	Accès : au compte internaute (une fois celui-ci créé), à la page « inscription »
Bandeau : défilement de mots clés
Section : ce que le coach personnel apporte à ses clients
Section : statistiques du type de prestation fournit
Section : carousel qui décrit la méthode de coaching en 4 étapes
Section : pour inciter l’internaute à prendre un 1er rendez-vous
Footer simple : accès aux réseaux sociaux 

 
Page A propos : cette page décrit le coach : certifications, expérience 
Page Témoignages : cette page affiche les témoignages des clients
Page Prendre rendez vous : cette page permet de prendre un rendez-vous 

C3 – Interface dynamique

Responsivité : dans le navigateur Chrome, j’utilise  l’option « inspecter » puis « dimensions » puis « réactivité » afin de visualiser le rendu du site sur différents supports physiques.

Les pages « inscription », « mon compte » seront développées en C4, C5, C6. Elles seront dynamiques, avec un contrôle d’accès à la base de données.
Les inscriptions seront enregistrées dans la base de données.
Chaque rendez-vous demandé sera contrôlé dans la base de données et enregistré.
Après le 1er rendez-vous, un contrat sera « signé » entre le client et le coach. Il permettra au client de suivre d’autres séances de coaching. Un suivi de coaching sera créé dans la base de données. Il sera restitué au client et alimentera les statistiques affichées sur la page d’accueil. Un bilan de coaching sera signé entre les deux parties à la fin du coaching. Le client n’aura alors accès qu’à ce bilan et rien d’autres si ce n’est la page d’accueil comme tout internaute.
Le coach aura accès aux comptes clients. Il pourra éditer des statistiques pour tous les clients, par client, par type de coaching. Pour chaque client, il gérera son suivi de coaching dans un environnement spécifique. 


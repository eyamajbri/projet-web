En tant que groupe composé d'Ameni Laifi, Zaineb Souissi, Eya Majbri et Nesrine Souissi, nous avons créé un site de jeux comprenant huit jeux différents, chacun accompagné d'une vidéo d'explication et d'une conception JavaScript, HTML et CSS. Voici une description brève de chaque jeu et comment réaliser leur implémentation :

Tic Tac Toe (Morpion) :

Description : Un jeu de stratégie où deux joueurs s'affrontent pour aligner trois symboles (généralement "X" ou "O") sur une grille de 3x3 cases.
Implémentation :
HTML : Utilisez une structure de grille 3x3 pour représenter le plateau de jeu.
CSS : Appliquez des styles pour les cases et le plateau afin de créer une interface utilisateur attrayante.
JavaScript : Gérez la logique du jeu en utilisant des événements de clic pour permettre aux joueurs de placer leurs symboles et vérifiez les conditions de victoire.
Sliding Puzzle (Puzzle Coulissant) :

Description : Un jeu de puzzle où les joueurs doivent reconstituer une image en faisant glisser les pièces dans l'ordre correct.
Implémentation :
HTML : Créez une grille carrée avec des cases représentant les nombres de 1 à 8 et une case vide. Chaque case doit être cliquable pour permettre aux joueurs de les déplacer.

CSS : Appliquez des styles à la grille et aux cases pour créer une interface attrayante. Vous pouvez utiliser des images pour représenter les nombres ou simplement les afficher en texte.

JavaScript : Gérez les événements de clic sur les cases pour permettre aux joueurs de les déplacer. Lorsqu'une case est cliquée, vérifiez si elle peut être déplacée dans la case vide. Si c'est le cas, échangez leur position. Vérifiez également si le joueur a réussi à reconstituer l'image ou la grille en vérifiant si les nombres sont dans le bon ordre.
Matching Pairs (Memory Game) :

Description : Un jeu de mémoire où les joueurs doivent retourner des cartes pour trouver des paires correspondantes.
Implémentation :
HTML : Créez une grille de cartes retournables.
CSS : Appliquez des styles pour les cartes et ajoutez des animations pour les retournements.
JavaScript : Gérez les événements de clic sur les cartes, maintenez la logique du jeu en gardant une trace des cartes retournées et vérifiez si les cartes retournées correspondent.
Trivia Game (Jeu de Questions) :

Description : Un jeu de questions-réponses où les joueurs doivent répondre correctement à des questions dans un temps limité.
Implémentation :
HTML : Créez une structure pour afficher les questions, les options de réponse et le chronomètre.
CSS : Appliquez des styles pour les éléments du jeu et créez une mise en page attrayante.
JavaScript : Gérez le chargement des questions, l'affichage des options de réponse, le suivi des réponses des joueurs et le compte à rebours.
Guess the Word Game (Devinez le Mot) :

Description : Un jeu où les joueurs doivent deviner un mot en proposant des lettres et en recevant des indications sur leur placement correct dans le mot.
Implémentation :
HTML : Créez une interface pour afficher les lettres proposées, le mot à deviner et les indications.
CSS : Appliquez des styles pour les éléments du jeu et assurez-vous qu'ils sont clairs et lisibles.
JavaScript : Gérez les événements de saisie des joueurs, comparez les lettres proposées avec le mot à deviner et donnez les indications appropriées.
Snake Game (Jeu du Serpent) :

Description : Un jeu où les joueurs contrôlent un serpent et doivent le faire grandir en mangeant des objets sans se heurter aux murs ou à eux-mêmes.
Implémentation :
HTML : Créez une structure pour afficher le terrain de jeu et le serpent.
CSS : Appliquez des styles pour le terrain de jeu, le serpent et les objets à manger.
JavaScript : Gérez les événements de contrôle du serpent, les déplacements, la croissance, la détection des collisions et les mises à jour du score.
Rock Paper Scissors (Pierre Feuille Ciseaux) :

Description : Un jeu où les joueurs choisissent entre pierre, feuille ou ciseaux et la victoire est déterminée en fonction des règles du jeu.
Implémentation :
HTML : Créez des boutons ou des éléments interactifs pour les choix des joueurs.
CSS : Appliquez des styles pour les boutons et assurez-vous qu'ils sont clairs et cliquables.
JavaScript : Gérez les événements de clic sur les boutons, comparez les choix des joueurs et déterminez le gagnant en utilisant les règles du jeu.
Hangman (Le Pendu) :

Description : Un jeu où les joueurs doivent deviner un mot en proposant des lettres, avec un nombre limité de tentatives avant que le dessin du pendu ne soit complété.
Implémentation :
HTML : Créez une interface pour afficher le mot à deviner, les lettres proposées, le nombre de tentatives restantes et le dessin du pendu.
CSS : Appliquez des styles pour les éléments du jeu et assurez-vous qu'ils sont clairs et lisibles.
JavaScript : Gérez les événements de saisie des joueurs, comparez les lettres proposées avec le mot à deviner, mettez à jour le dessin du pendu et vérifiez les conditions de victoire ou de défaite.
En ce qui concerne la fonctionnalité de recherche sur le site, vous pouvez créer un champ de recherche dans la barre de navigation où les utilisateurs peuvent saisir le nom ou les premières lettres d'un jeu. Vous pouvez ensuite utiliser JavaScript pour filtrer les jeux correspondants et afficher les résultats.
Lien interne : Chaque jeu de la page du site contient un lien interne qui mène à une autre page identique, mais qui présente une vidéo explicative du jeu. Ce lien permet aux joueurs de mieux comprendre les règles et les stratégies du jeu avant de commencer à jouer.
Le bouton "Contactez-nous" peut être placé dans la barre de navigation et rediriger les utilisateurs vers une section du site, probablement le pied de page (footer), où vous pouvez fournir des informations sur la façon de contacter votre équipe.

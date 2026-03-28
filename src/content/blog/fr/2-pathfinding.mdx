---
title: "#2 - Pathfinding"
pubDate: "2023-03-03T20:57:41.000Z"
substackUrl: "https://jbarbeau.substack.com/p/2-pathfinding"
image: "https://substackcdn.com/image/fetch/$s_!0Ly_!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Faef7fa2b-66ae-4967-882a-b4fb17c0acd5_1840x1380.jpeg"
excerpt: Ou comment je trouve l'inspiration pour créer des choses avec du code
draft: false
---

[

![](https://substackcdn.com/image/fetch/$s_!0Ly_!,w_5760,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Faef7fa2b-66ae-4967-882a-b4fb17c0acd5_1840x1380.jpeg)



](https://substackcdn.com/image/fetch/$s_!0Ly_!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Faef7fa2b-66ae-4967-882a-b4fb17c0acd5_1840x1380.jpeg)

## Préparation pour le voyage

Si vous voulez des mises à jour sur mon parcours créatif, n'hésitez pas à vous abonner! Tous les articles sont gratuits, mais si vous êtes collectionneur et que vous aimez vraiment ce que je fais, vous pouvez vous abonner pour un petit montant. Ça m'aide beaucoup dans mon parcours créatif et vous recevrez des précommandes exclusives sur les futures sorties long-form et collections imprimées.

[Inscrivez-vous maintenant](https://jbarbeau.substack.com/subscribe?)

## Arriver au camp de base

La plupart du temps, quand je commence un nouveau projet, je ne sais pas vraiment ce que je vais faire. Parfois j'aurai une idée très basique en tête ou, comme, un ensemble de règles de base.

Je commence toujours avec un canevas presque vide avec une ellipse au centre, c'est un peu ma propre version de Hello World. Mon environnement de travail actuel est une version modifiée du [boilerplate webpack FX(hash)](https://github.com/fxhash/fxhash-webpack-boilerplate). C'est un système de fichiers très basique conçu pour créer des projets long-form et les publier sur la plateforme fx(hash).

Je pourrais parler de ce que sont le long-form et le court-form, mais mon ami Dan Catt a fait une vidéo assez complète sur sa chaîne YouTube il y a quelques semaines, donc je vais juste mettre le lien ici pour ceux qui sont intéressés : [What is long-form generative art](https://www.youtube.com/watch?v=-rE5tQSVVJs).

Alors revenons au pathfinding. Mon canevas de départ ressemblerait à ça :

[

![](https://substackcdn.com/image/fetch/$s_!Vot5!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa3aa94e9-2c85-48d8-9616-793365893e03_2000x2000.png)



](https://substackcdn.com/image/fetch/$s_!Vot5!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa3aa94e9-2c85-48d8-9616-793365893e03_2000x2000.png)

Ensuite, j'essayais des trucs comme déplacer le cercle sur le canevas pour faire tourner mon cerveau créatif. Pour celui-ci, j'ai décidé de faire un algorithme de cercle packing. En art génératif, le cercle packing est une technique où les cercles sont regroupés les uns contre les autres à l'intérieur d'une limite spécifique, comme un rectangle ou une forme, sans se chevaucher. Les cercles ont souvent des tailles aléatoires et sont placés selon un ensemble de règles déterminées par l'artiste.

Voici une sortie de base de Circle Packing

[

![](https://substackcdn.com/image/fetch/$s_!mpsA!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff183823d-7346-42bb-b82e-5f3892d309e8_2000x2000.png)



](https://substackcdn.com/image/fetch/$s_!mpsA!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff183823d-7346-42bb-b82e-5f3892d309e8_2000x2000.png)

## Explorer le terrain

Même si c'est visuellement intéressant, c'est juste une représentation visuelle d'un algorithme dans sa forme la plus simple. J'utilise souvent ce type d'algorithme comme camp de base pour explorer les alentours.

À ce moment-là, j'étais assez déçu par le temps qu'il fallait pour charger le tout. Le chargement prenait un peu moins de 23 secondes — ça peut sembler peu, mais si quelqu'un veut voir le rendu en direct, un écran de chargement de 23 secondes peut être assez ennuyeux. Le temps que ça prend est compréhensible cependant. Le programme commence par ajouter un cercle et vérifie s'il entre en collision avec le cercle précédent. Si non, il est affiché. S'il y a collision, le cercle actuel est supprimé, puis dessiné ailleurs, et le programme vérifie à nouveau, jusqu'à ce qu'il trouve un endroit pour le placer.

Il y a un nombre limité d'essais qu'il peut traverser. Si le nombre de tentatives dépasse le seuil, le programme considère que tous les cercles possibles ont été placés et se termine. C'est pour éviter les boucles infinies et le crash du navigateur.

## Établir le camp

Je voulais optimiser le chargement ou du moins créer l'illusion que le rendu entier était plus rapide. J'avais récemment appris une astuce avec les fonctions générateur\*. Je les utilise d'une façon qui donne l'impression que le rendu est plus rapide. Au lieu de générer tous les éléments d'une œuvre dans une boucle puis de les rendre (comme 10 000 ellipses avec détection de collision), vous pouvez utiliser une fonction générateur pour rendre les éléments un à la fois ou par lot, ce qui peut créer l'illusion que l'œuvre est créée en temps réel.

Par exemple, vous pourriez utiliser une fonction générateur pour générer chaque forme à la volée et la rendre sur le canevas avant de passer à la forme suivante. Cela peut créer l'impression d'un processus de rendu rapide et dynamique qui évolue constamment.

Je parlerai un peu plus des fonctions générateur dans un prochain article.

## Chercher du bois

Une fois que j'ai senti que la base était solide, j'ai commencé à expérimenter avec différentes couleurs, à essayer de retirer la couleur de remplissage et à jouer avec les contours. C'était correct mais rien qui m'accrochait.

Pour faciliter le débogage, j'ai décidé que le programme dessinerait une ligne entre le cercle actuel et tout cercle existant avec lequel il était en collision. Ça a donné ça :

[

![](https://substackcdn.com/image/fetch/$s_!9eYc!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa4e14792-607a-4f5d-a9e5-d85d18bcf099_2000x2000.png)



](https://substackcdn.com/image/fetch/$s_!9eYc!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa4e14792-607a-4f5d-a9e5-d85d18bcf099_2000x2000.png)

J'ai pensé que ça avait un vrai potentiel visuel, alors j'ai décidé de simplement retirer les cercles et de me concentrer uniquement sur les lignes. Pour leur donner un sens de profondeur tactile, j'ai eu l'idée de rendre deux lignes supplémentaires sous chacune. L'une serait bleue avec un petit décalage vers la droite et l'autre serait rouge avec un petit décalage vers la gauche. Ça a donné quelque chose d'assez intéressant.

[

![](https://substackcdn.com/image/fetch/$s_!Y20F!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc2f2abd8-8884-4b29-a6ad-cf3ce712720d_2000x2000.png)



](https://substackcdn.com/image/fetch/$s_!Y20F!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc2f2abd8-8884-4b29-a6ad-cf3ce712720d_2000x2000.png)

## Allumer le feu

À partir de là, je savais que j'avais quelque chose et j'ai essayé plein de trucs. Cette section sera riche en exemples, alors tenez bon :)

Ici, j'ai essayé le mode de fusion OVERLAY et ça a donné ce résultat assez intéressant

[

![](https://substackcdn.com/image/fetch/$s_!Oi6X!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F21829dda-ed94-4987-b24a-91836feba7a9_2000x2000.png)



](https://substackcdn.com/image/fetch/$s_!Oi6X!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F21829dda-ed94-4987-b24a-91836feba7a9_2000x2000.png)

J'ai ensuite remis les cercles ET utilisé le mode de fusion, ce qui a donné quelques compositions sympas de type spatial que je trouve vraiment intéressantes.

[

![](https://substackcdn.com/image/fetch/$s_!PVZl!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F6c8a71b9-edb5-41cc-93f0-1a61234f870e_2000x2000.png)



](https://substackcdn.com/image/fetch/$s_!PVZl!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F6c8a71b9-edb5-41cc-93f0-1a61234f870e_2000x2000.png)

## Voir dans le noir

Le lendemain, j'ai eu l'idée de supprimer les ellipses originales et de remplacer les lignes par une série d'ellipses très proches les unes des autres.

[

![](https://substackcdn.com/image/fetch/$s_!wnrv!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F34d94a21-756c-49a6-bf18-06e818ed9c92_2222x2222.png)



](https://substackcdn.com/image/fetch/$s_!wnrv!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F34d94a21-756c-49a6-bf18-06e818ed9c92_2222x2222.png)

L'idée suivante que j'ai eue, c'est que les ellipses les plus proches du centre de chaque section seraient plus grandes et deviendraient de plus en plus petites à mesure qu'elles s'éloigneraient du centre. J'ai également donné à chaque ellipse le même traitement que les lignes, ce qui signifiait que chaque petite ellipse aurait aussi deux autres ellipses en dessous avec de petits décalages. L'une serait plus foncée et l'autre plus claire.

[

![](https://substackcdn.com/image/fetch/$s_!EWMg!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fb516f62c-34f7-49de-8893-48f6de62b011_2228x2228.png)



](https://substackcdn.com/image/fetch/$s_!EWMg!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fb516f62c-34f7-49de-8893-48f6de62b011_2228x2228.png)

C'était quelque chose d'autre, ça semblait 3D et organique. Ça rendait une illusion d'ombres mais c'est tout une fraude, une illusion d'optique.

## Survivre et récolter

Mon séjour dans cette partie étrange de la forêt est toujours en cours, mais j'ai trouvé une source abondante de nourriture créative. Maintenant, je dois l'exploiter de façon durable. J'ai déjà quelques belles pépites ici que je veux partager avec vous tous avant de retourner au travail.

[

![](https://substackcdn.com/image/fetch/$s_!fqZN!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd663afc1-059c-4286-977d-292e36a6562f_2470x2470.png)



](https://substackcdn.com/image/fetch/$s_!fqZN!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd663afc1-059c-4286-977d-292e36a6562f_2470x2470.png)

[

![](https://substackcdn.com/image/fetch/$s_!tlIr!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3fb1ad45-f129-4e91-8e99-fb6bcba60e3e_2468x2468.png)



](https://substackcdn.com/image/fetch/$s_!tlIr!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3fb1ad45-f129-4e91-8e99-fb6bcba60e3e_2468x2468.png)

[

![](https://substackcdn.com/image/fetch/$s_!yJ7u!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F9d4f19c4-0cb8-4d15-9bec-622c486b60fa_2412x2412.png)



](https://substackcdn.com/image/fetch/$s_!yJ7u!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F9d4f19c4-0cb8-4d15-9bec-622c486b60fa_2412x2412.png)

## À suivre

Restez à l'affût pour la suite de ce voyage! Merci à tous d'avoir lu, ça compte vraiment pour moi :) Passez une bonne fin de semaine!

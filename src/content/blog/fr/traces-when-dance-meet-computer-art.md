---
title: "Traces : quand la danse rencontre l'art informatique."
pubDate: "2024-04-10T22:11:51.000Z"
substackUrl: "https://jbarbeau.substack.com/p/traces-when-dance-meet-computer-art"
image: "https://substackcdn.com/image/fetch/$s_!coFV!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3bc9e9da-98a8-491d-9e5b-aa0f69972925_3024x4032.jpeg"
excerpt: "Je vais essayer de faire celui-ci beaucoup plus court que le précédent."
draft: false
---

[

![](https://substackcdn.com/image/fetch/$s_!coFV!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3bc9e9da-98a8-491d-9e5b-aa0f69972925_3024x4032.jpeg)



](https://substackcdn.com/image/fetch/$s_!coFV!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3bc9e9da-98a8-491d-9e5b-aa0f69972925_3024x4032.jpeg)

Je vais essayer de faire celui-ci beaucoup plus court que le précédent. On verra si j'y arrive ou non.

En mai de l'an dernier, Philipp Contag-Lada m'a contacté pour un projet qui intégrerait une collaboration entre l'art informatique et la danse. Le projet était financé par le commissaire du gouvernement fédéral allemand chargé de la culture et des médias, et c'était une idée tellement folle que je ne pouvais pas dire non.

J'ai aussi eu la grande chance de faire partie de ce projet avec d'autres artistes incroyables comme Moodsoup, Arwan Beetooh, Danica Schlosser et Philipp Contag-Lada lui-même.

Merci de lire The Weekly Process par Jonathan Barbeau! Abonnez-vous gratuitement pour recevoir de nouveaux articles et soutenir mon travail.

## Comment ça fonctionne?

Philipp et le projet Interface ont développé une façon de capturer par motion capture des chorégraphies de danse. Les données captées seraient ensuite exportées dans un très grand fichier JSON qui stockerait tous les mouvements de tous les membres du corps humain, 30 fois par seconde (30 fps) pendant toute la durée de la séquence de danse. En tant qu'artistes, nous pouvions ensuite utiliser ces données pour les interpréter visuellement à travers l'art informatique.

[

![](https://substackcdn.com/image/fetch/$s_!lVVg!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc8d9541a-0768-4b43-b507-67cd8a9a1f8c_1616x1512.png)



](https://substackcdn.com/image/fetch/$s_!lVVg!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc8d9541a-0768-4b43-b507-67cd8a9a1f8c_1616x1512.png)

Interprétation préliminaire des données appelée « Le Bonhomme de bois »

L'équipe d'Interfaces avait déjà mis en place un serveur live sur leur site web avec quelques exemples. C'était vraiment utile pour m'orienter dans les données fournies. Dans l'image ci-dessus, chaque cercle représente une articulation et chaque ligne représente un « os ». En partant de là, je pouvais vraiment commencer à m'amuser et à trouver des façons d'interpréter visuellement les mouvements de danse.

## L'ingrédient secret

À peu près au même moment où j'ai commencé à travailler sur le projet, j'ai commandé un petit contrôleur MIDI d'Intech appelé le « Grid ».

[

![](https://substackcdn.com/image/fetch/$s_!dTKO!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1a4832fb-b8f6-42ae-89d4-24668c297a58_4032x3024.jpeg)



](https://substackcdn.com/image/fetch/$s_!dTKO!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1a4832fb-b8f6-42ae-89d4-24668c297a58_4032x3024.jpeg)

En utilisant le Grid, j'ai mappé les quatre boutons rotatifs de la rangée supérieure à la largeur, la teinte, la saturation et la luminosité des particules respectivement.

J'ai ensuite divisé la durée de la chorégraphie (nombre total de trames) par quatre et attribué chaque quart à son curseur correspondant.

Les boutons de la rangée du bas étaient mappés aux fonctions utilitaires :

-   Supprimer la particule (mais garder ce qui avait été dessiné)

-   Effacer le canevas complètement

-   Changer le thème (clair ou sombre)

-   Changer les octaves du bruit de Perlin


De cette façon, je pouvais effectivement parcourir la chorégraphie sans avoir à trouver le numéro de trame parfait. J'ai aussi pu incorporer le mouvement dans le résultat et je pense que c'est vraiment important puisque les sujets principaux sont des danseurs.

Voici un très bon exemple où l'on peut voir le point de départ des particules et la silhouette.

[

![](https://substackcdn.com/image/fetch/$s_!-52D!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F421b0539-2bd3-487a-a4e2-179ed4a9b296_1010x1358.png)



](https://substackcdn.com/image/fetch/$s_!-52D!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F421b0539-2bd3-487a-a4e2-179ed4a9b296_1010x1358.png)

## La collection

Après avoir joué avec l'algorithme, j'ai pu obtenir des œuvres très satisfaisantes et les envoyer à 7pc pour qu'ils travaillent sur l'exposition.

Voici les deux œuvres choisies pour cette première exposition.

[

![](https://substackcdn.com/image/fetch/$s_!qH9a!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F306b75df-f56b-4f25-9d30-ddec930c68f5_1128x1554.png)



](https://substackcdn.com/image/fetch/$s_!qH9a!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F306b75df-f56b-4f25-9d30-ddec930c68f5_1128x1554.png)

[

![](https://substackcdn.com/image/fetch/$s_!nc0p!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F688d20da-3808-42f0-b499-39a8cd9ac656_1112x1532.png)



](https://substackcdn.com/image/fetch/$s_!nc0p!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F688d20da-3808-42f0-b499-39a8cd9ac656_1112x1532.png)

## La première exposition

Le projet Interface a été exposé à l'Opéra de Hanovre en Allemagne lors de la dernière semaine de mars 2024. C'est la première exposition pour le projet et je suis certain que ce ne sera pas la dernière. C'est une expérience incroyable de voir notre travail affiché dans un si beau cadre.

Voici une courte vidéo de Philipp qui explique un peu plus le projet et l'exposition :

<iframe src="https://www.youtube-nocookie.com/embed/YIAze8QFKVA?rel=0&amp;autoplay=0&amp;showinfo=0&amp;enablejsapi=0" frameborder="0" loading="lazy" gesture="media" allow="autoplay; fullscreen" allowautoplay="true" allowfullscreen="true" width="728" height="409"></iframe>

La collection Traces complète, qui comprend un total de sept œuvres, est disponible à collecter sur OBJKT ici : [https://objkt.com/collections/KT1Tw7BRpsMomGE4bf3bxjAc4AgNV8xq7BYb](https://objkt.com/collections/KT1Tw7BRpsMomGE4bf3bxjAc4AgNV8xq7BYb)

## Et la suite?

Bien que la collection Traces du projet Interface soit terminée, ma contribution au projet ne l'est pas. Je travaille de plus en plus avec le Grid d'Intech et c'est vraiment amusant.

J'ai programmé différents ID sur chaque page du contrôleur, de sorte que lorsque je clique sur le bouton utilitaire (caché sur le côté), il change de page, ce qui transforme le Grid en un contrôleur totalement différent. Il y a 4 pages au total, ce qui signifie que je peux mapper un total de 48 fonctions à cette petite machine. C'est incroyable.

J'ai également travaillé avec la rotation et différentes techniques d'échelle de bruit et de déplacement de particules. Voici un aperçu de l'état de ma recherche.

[

![](https://substackcdn.com/image/fetch/$s_!Pu0a!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F2ba89752-e303-4732-89f2-a729a5fc504f_1716x1788.png)



](https://substackcdn.com/image/fetch/$s_!Pu0a!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F2ba89752-e303-4732-89f2-a729a5fc504f_1716x1788.png)

[

![](https://substackcdn.com/image/fetch/$s_!JqSm!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F50c3bf8f-6679-4556-b1f2-f7b27a8b5b49_2469x2469.png)



](https://substackcdn.com/image/fetch/$s_!JqSm!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F50c3bf8f-6679-4556-b1f2-f7b27a8b5b49_2469x2469.png)

[

![](https://substackcdn.com/image/fetch/$s_!zJyE!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff8713d2d-69b1-4d5c-948c-e3ba9dc88e5c_2469x2469.png)



](https://substackcdn.com/image/fetch/$s_!zJyE!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff8713d2d-69b1-4d5c-948c-e3ba9dc88e5c_2469x2469.png)

[

![](https://substackcdn.com/image/fetch/$s_!FHZV!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F08abfdc4-c7ca-41ef-9e82-f3153a312d43_2469x2469.png)



](https://substackcdn.com/image/fetch/$s_!FHZV!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F08abfdc4-c7ca-41ef-9e82-f3153a312d43_2469x2469.png)

## À vos marques, dansez!

Voilà, c'est tout! J'espère que vous avez aimé et que ce n'était pas ennuyeux à lire. Je sais que j'avais dit que ce serait plus court, mais c'est difficile à respecter lol. La prochaine fois sera plus courte, je le promets!

En attendant, passez une bonne fin de semaine et à bientôt!

Merci de lire The Weekly Process par Jonathan Barbeau! Abonnez-vous gratuitement pour recevoir de nouveaux articles et soutenir mon travail.

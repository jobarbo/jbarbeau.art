---
title: "Récit de processus : Aweille!"
pubDate: "2023-09-11T20:10:07.000Z"
substackUrl: "https://jbarbeau.substack.com/p/process-story-aweille"
image: "https://substack-post-media.s3.amazonaws.com/public/images/d2ac32ac-ae79-4568-91f3-9464732e4532_5400x3024.png"
excerpt: "Parlons de mon premier speedrun"
draft: false
---

Le mois dernier, j'ai eu une de ces journées où rien ne semblait avancer. Vous connaissez ce type de journée où on travaille sans relâche mais sans atteindre aucun jalon, et on n'a pas l'impression d'avoir progressé d'aucune façon. C'est juste rempli de travail inutile.

Il était 15h et j'étais prêt à plier bagages pour rentrer me reposer quand l'idée de créer une collection long-form en moins de 2 heures m'a traversé l'esprit. J'ai pensé : « Pourquoi pas? Rien de productif n'est sorti de cette journée, alors autant faire quelque chose. » Je me suis fixé une échéance : ça devait être prêt pour publication à 18h et sorti le lendemain matin à 9h.

Merci de lire The Weekly Process par Jonathan Barbeau! Abonnez-vous gratuitement pour recevoir de nouveaux articles et soutenir mon travail.

## Le projet finalisé

Vous pouvez accéder au projet directement sur fx(hash) si vous souhaitez consulter la collection en lisant.

**[Aweille!](https://www.fxhash.xyz/generative/slug/aweille!)**

## Le nom

Pourquoi avoir choisi de l'appeler « Aweille! »? Qu'est-ce que ça veut dire?

« Aweille! » est un mot ou un argot franco-canadien (québécois) qui dérive du mot français « Envoie », qui signifie « envoyer ». Il est généralement utilisé pour presser quelqu'un de se dépêcher. Par exemple, si vous partez pour un rendez-vous et que la personne avec qui vous partez prend son temps, vous pourriez dire : « Aweille! On doit être là pour 16h. »

J'espère que vous utiliserez ce mot avec respect.

Ça se prononce comme « A-WAY-E » (le E est un peu aspiré ou coupé à moitié).

## Créer à partir de l'intuition (16h)

J'aime vraiment créer à partir de l'intuition et accueillir les surprises qui me guident dans de nouvelles directions.

Pour ce projet, j'ai commencé avec une simple balle au milieu du canevas, c'est tout.

[

![](https://substackcdn.com/image/fetch/$s_!tZGI!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F2ad64d3a-848f-4f64-bd62-41e7400c3724_2832x2832.png)



](https://substackcdn.com/image/fetch/$s_!tZGI!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F2ad64d3a-848f-4f64-bd62-41e7400c3724_2832x2832.png)

puis j'ai décidé d'éliminer l'opacité et d'en générer plusieurs pour les positionner aléatoirement sur l'axe X tout en restant fixes sur l'axe Y.

[

![](https://substackcdn.com/image/fetch/$s_!6Yt1!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F0070e47f-795b-48c8-a257-baeb250d89df_2622x2622.png)



](https://substackcdn.com/image/fetch/$s_!6Yt1!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F0070e47f-795b-48c8-a257-baeb250d89df_2622x2622.png)

Pour travailler efficacement avec des éléments à faible opacité, vous avez besoin d'une quantité significative; sinon, ils semblent un peu pâles et ne créent pas un bel effet visuel. Par conséquent, au lieu d'avoir environ 50 cercles, j'ai choisi d'en générer environ 60 000.

[

![](https://substackcdn.com/image/fetch/$s_!jbJz!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F0b91a8e2-4848-4b03-9b9f-54d4c8b4bd12_2832x2832.png)



](https://substackcdn.com/image/fetch/$s_!jbJz!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F0b91a8e2-4848-4b03-9b9f-54d4c8b4bd12_2832x2832.png)

Ce qui a suivi ressemblait à du plâtre ou à un étrange skateboard flou, mais ce n'était pas tout à fait ça. Alors une idée m'a frappé : je pourrais allonger ces cercles au point qu'ils ressemblent à des rectangles, tout en étant composés d'ellipses, ce qui permettrait à la « lumière » de fond de passer au travers.

Pour réaliser cet allongement, j'ai décidé que chaque cercle ferait principalement 0,5 à 3 pixels de largeur, tandis que sa hauteur représenterait environ un cinquième de la hauteur du canevas. Pour distribuer chaque cercle, j'ai mappé la valeur retournée par une fonction de bruit (allant de 0 à 1) à sa position de gauche à droite. J'ai appliqué le même concept pour ajuster les couleurs de chaque cercle, créant un sentiment de continuité plutôt que des couleurs aléatoires.

Le résultat est devenu intriguant, et à ce stade, j'avais travaillé dessus pendant environ une heure.

[

![](https://substackcdn.com/image/fetch/$s_!q3rf!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc5e1e0ce-2ff4-4296-bdc3-5524bdb85ded_2832x2832.png)



](https://substackcdn.com/image/fetch/$s_!q3rf!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc5e1e0ce-2ff4-4296-bdc3-5524bdb85ded_2832x2832.png)

## Touches finales (17h)

Il me restait environ 30 minutes pour finaliser le code et 30 autres minutes pour publier le projet.

Pour introduire un peu de variété, j'ai décidé d'incorporer deux types de caractéristiques dans la collection. La première était le « Type de teinte », qui avait quatre paramètres. Une extrémité produirait des motifs vibrants et multicolores (similaire à celui mentionné juste au-dessus), tandis que l'autre extrémité générerait un motif plus statique avec une couleur dominante et quelques variations de saturation et de luminosité. Les deux autres paramètres se situaient quelque part entre les deux.

La deuxième caractéristique que j'ai introduite est ce que j'appelle le « Type de mode », qui consiste en trois modes : « Droit », « Modéré » et « Fou ». Ce mode influencerait la hauteur de chaque cercle.

-   « Droit » produirait une structure rectangulaire droite.

-   « Modéré » créerait une structure en blocs mais variable.

-   « Fou » entraînerait une structure ondulée, ressemblant parfois à un poisson.


Voici un exemple du mode « Fou » en train de s'afficher :

[

![](https://substackcdn.com/image/fetch/$s_!yPDs!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa57b4ca1-efe4-4505-8519-3f936df953a9_1080x1080.png)



](https://substackcdn.com/image/fetch/$s_!yPDs!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa57b4ca1-efe4-4505-8519-3f936df953a9_1080x1080.png)

Aweille! #48, collecté par P1x3lboy

Le mode « Droit » avait une probabilité plus élevée d'être généré (50 %), tandis que les deux autres modes avaient chacun 25 % de chances.

Pour compléter la composition, j'ai opté pour introduire de la texture en rendant de nombreux points allant du blanc au noir, créant un effet de texture en relief.

## Publication (17h30)

Je n'étais pas entièrement satisfait du résultat, pour être honnête, mais mon temps était écoulé et je m'étais fait une promesse de sortir le travail qu'il soit prêt ou non. Malgré ne pas être pleinement content de la qualité, je me suis énormément amusé à y travailler. Puisque le projet était libre d'attentes et du stress qui accompagne souvent les projets à long terme, ça ressemblait à un jeu amusant et spontané de construire quelque chose à partir de rien.

J'ai décidé de publier le projet sur fx(hash) avec un total de 128 éditions. J'ai jugé que le prix de 2 tez était raisonnable pour ce type de projet (ce qui représentait environ 2 $ à l'époque). Je n'avais pas d'attentes spécifiques pour la performance du projet et je me suis abstenu de partager du travail en cours ou des teasers sur les réseaux sociaux. Quand le lendemain est arrivé, j'ai simplement publié un seul tweet.

La réponse a été remarquablement positive, et la collection s'est vendue en environ une semaine et demie. J'étais vraiment ravi et je ne peux pas exprimer assez ma gratitude à tous les supporters. Même si c'était seulement 2 tez chacun, c'était mon premier projet long-form à se vendre complètement, et ça compte énormément pour moi. Alors, encore une fois, merci à tous les collectionneurs et artistes pour votre soutien. Ça veut vraiment dire le monde pour moi.

J'espère que vous avez trouvé cet article de processus intéressant. N'hésitez pas à commenter, aimer et partager cet article si vous l'avez apprécié. J'adore recevoir des retours, et ça aide à faire passer le mot. De plus, ça déclenche une réponse dopaminergique dans mon cerveau et tout ce que ça implique de bon!

Tchao!

Merci de lire The Weekly Process par Jonathan Barbeau! Abonnez-vous gratuitement pour recevoir de nouveaux articles et soutenir mon travail.

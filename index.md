# Formation HTML CSS Jquery

## Problèmes CSS Courants
Le CSS par défaut des navigateur date des premiers navigateur, et est essentiellement utile pour de l'impression directe.

Ce CSS est inadapté sur beaucoup de niveaux

- Le calcul des largeurs des éléments est basé sur le contenu des éléments et non pas l'extérieur des bordures des éléments
- L'accessibilité, la police de caractère utilisée, avec empatement n'est pas accessible
- La taille par défaut de la police n'est pas adaptée à la diffusion sur les appareils modernes (smartphone, tablettes, crans modernes)
- L'interlignage n'est pas adapté (pour les supports cités précédemment)

### Le calcul des largeur d'éléments
On change le comportement par défaut du navigateur `box-sizing: content-box` en intervenant sur tous les éléments de la page grâce au sélecteur `*`, indiquant la propriété suivante `box-sizing: border-box`

Les largeur des éléments se calculeront désormais depuis l'extérieur des bordures et non depuis la largeur du contenu de l'élément.

### La police de caractère

Pour rendre une site accessible, il est préconisé d'utiliser une police de caractère sans empatement : `sans-serif`

### La taille des polices

De base, les navigateur utilisent le cadratin em comme mesure pour les polices (et aussi pour les marges).

Le problème réside dans le fait que le em se calcul par rapport à la taille déclaré dans l'élément parent.

<div style="font-size: 2em;">
    <p>
        <code>style="font-size: 2em;</code>
    </p>
    <div style="font-size: 2em;">
        <p>
            <code>style="font-size: 2em;</code>
        </p>
    </div>
</div>

Pour remédier à cela, on va préferer utiliser le cadratin racine, son avantage : il se calcul par rapport à la taille de la police racine (:root)

<div style="font-size: 2rem;">
    <p>
        <code>style="font-size: 2rem;</code>
    </p>
    <div style="font-size: 2rem;">
        <p>
            <code>style="font-size: 2rem;</code>
        </p>
    </div>
</div>

### L'interligne
De base l'interligne est trop petit sur les navigateur, il faudra l'augmenter pour rendre le contenu lisible, principalement pour les appareils avec un petit écran.

## Balises de contenu
## Balise mise en forme du texte
## Les tableaux HTML
## Les images
## Les media
## Les formulaires
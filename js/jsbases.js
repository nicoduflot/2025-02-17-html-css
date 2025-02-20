console.log('L\'originlaité d\'utliser des apostrophes, \nou de revenir à la ligne dans un affichge console\n\t\tespace');
console.error('Une erreur');
console.log(['toto', 'titi', 'tata']);
console.table(['toto', 'titi', 'tata']);
// Commentaire en une lgne a éviter, en cas de "minification" (tous le code js en une seule ligne), risque de commenter des sections utiles
/* 
On préfère le commentaire en bloc
*/

/* les variables */
var prenom = 'Jean'; /* dépréciée despuis ESC6 */
console.log(prenom);
/*
    Constante : avec ES6, il est préconisé d'utiliser au maximum la déclaration de constantes pour toutes les variables qui ne changeront jamais de contenu dans le script, sachant que la plupart de ce qu'on utilise en web avec javascript se trouve sous la forme d'objets, un objet ne se modifie jamais, c'est le contenu de ses attributs et ses méthodes qui changent
*/

const jourSemaine = [];

console.log(jourSemaine);

jourSemaine.push('Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche');
console.log(jourSemaine);
console.log(jourSemaine.length);

/* si la valeur d'une variable évolue, on utilise alors le mot clef let */
let nom = 'Durand';
nom = 'Neige';
const PI = Math.PI;

/* le type de variable */
console.log(typeof PI);
console.log(typeof jourSemaine);
console.log(typeof nom);

/* les variables peuvent changer de type : elle sont typées par leur contenu => c'est le transtype */
nom = 42;
console.log(nom, typeof nom);
nom = nom + 12;
console.log(nom, typeof nom);
nom = nom + 'toto';
console.log(nom, typeof nom);
const aujourdhui = new Date();
console.log(aujourdhui.getFullYear(), typeof aujourdhui.getFullYear());

const ageActuel = aujourdhui.getFullYear() - 1980;
const depActuel = 59;
const prenomActuel = 'Nicolas';

/* bonjour, je m'appelle prenomActuel, j'ai ageActuel ans et j'habite dans le depActuel */
/* La concaténation de chaînes et de variable avec le signe plus ne s'utilise plus, il génère trop d'erreurs, notemment le transtypage */
console.log('Bonjour, je m\'appelle ' + prenomActuel + ', j\'ai ' + ageActuel + ' ans et j\'habite dans le ' + depActuel);
/* on utilisera dans ce cas l'interpolation de texte */
console.log(`Bonjour, je m'appelle ${prenomActuel}, j'ai ${ageActuel} ans et j'habite dans le ${depActuel}`);
const x = 4;
const y = 38;
console.log(`La somme de ${x} et ${y} est ${x + y} `);
console.log(`l'année actuelle est ${aujourdhui.getFullYear()}, dans JS, PI est égal à ${Math.PI}`);

/*
les types de variables
Deux catégories de variables
[Type primitif]
    int => nombre entier (sous-type de number => un nombre)
    float => nombre à virgule flottante (sous-type de number => un nombre)
    bool => booléeen (vrai ou faux)
 
[Type référence]
    string => chaîne de caractère
    array => tableau de variables
    object => les objets
    JSON => JavaScript Object Notation
*/
/* créons un objet litéral */
const obj = {
    tab: [1, 2, 3, 4],
    nom: 'Duflot',
    somme: function (x, y) {
        return x + y;
    }
};

console.log(obj);
console.log(typeof obj);
console.log(obj.somme(5, 4));
console.log(obj.tab);

/* un objet JSON */
const clientJson = {
    'Nom': 'Duflot',
    'Prenom': 'Nicolas',
    'Age': ageActuel
}

console.log(clientJson);
console.log(typeof clientJson);
console.log(clientJson.Nom);

/*
Opérateurs :
Mathématiques : 
    + addition 
    - soustraction 
    * multiplication 
    / division 
    % modulo : récupère le reste d'une division entière
    ** remplace Math.pow()
*/

console.log(Math.pow(2, 2));
console.log(2 ** 2);
/* 
L'incrémentation et la décrémentation 
$variable++ ++$variable
$variable-- --$variable
*/

let z = 22;
console.log(z);     /* affiche 22 */
console.log(z++);   /* affiche 22 puis ajoute 1 à la valeur z devient 23 */
console.log(++z);   /* ajoute 1 à z puis affiche 24 */

/* les normes préconisent d'éviter les raccourcis de ce type, on notera à la place d'un ++ */
console.log(z = z + 1);
/* 
Opérateurs de comparaison 
 
> supérieur à
< inférieur à
>= supérieur ou égal à
<= inférieur ou égal à
== égalité de valeur (non stricte)
*/
console.log(`2 == 2 : ${2 == 2}`);
console.log(`2 == '2' : ${2 == '2'}`);
/*
=== égalité stricte
*/
console.log(`2 === 2 : ${2 === 2}`);
console.log(`2 === '2' : ${2 === '2'}`);
/*
même chose pour la différence
!= (différence non stricte)
!== (différence stricte)

>== et <== n'existent pas

*/

console.log(`'1' >= 2 : ${'1' >= 2}`);
console.log(`'2' >= 2 : ${'2' >= 2}`);
console.log(`'3' >= 2 : ${'3' >= 2}`);

/* 
Opérateurs logiques
&& ET

a && b si a est vrai et b est vrai alors retourne vrai
a && b si a est vrai et b est faux alors retourne faux
a && b si a est faux et b est vrai alors retourne faux
a && b si a est faux et b est faux alors retourne faux

|| OU 
a || b si a est vrai et b est vrai alors retourne vrai
a || b si a est vrai et b est faux alors retourne vrai
a || b si a est faux et b est vrai alors retourne vrai
a || b si a est faux et b est faux alors retourne faux

! NON
!a et a est vrai retourne faux
!a et a est faux retourne vrai

^ OU EXCLUSIF BINAIRE (X-OR)
a ^ b si a est vrai et b est vrai alors retourne faux
a ^ b si a est vrai et b est faux alors retourne vrai
a ^ b si a est faux et b est vrai alors retourne vrai
a ^ b si a est faux et b est faux alors retourne faux
*/

/* tableaux */
const cars = ['Peugeot', 'Ford'];
console.log(cars);
cars.push('Hyundai');
cars.push('Fiat', 'Alpine');
console.log(cars);
cars.splice(0, 0, 'Dacia');
console.log(cars);
const extract = cars.splice(1, 2, 'GMC');
console.log(cars);
cars.splice(2, 0, extract[0], extract[1]);
console.log(extract);
/* comment créer un tableau à partir d'un tableau existant */
const carsClone = cars.slice();
const carsClone2 = cars.slice(2, 6);
console.log(cars);
console.log(carsClone);
console.log(carsClone.pop());
console.log(cars);
console.log(carsClone);
console.log(carsClone2);

/*
 créer un tableau s'appelant toto contenant les variables suivantes

 12, 42, Marguerite et Pimprenelle
 
 l'afficher dans la console
 l'afficher dans la console sous une autre forme

 ensuite y ajouter la valeur Megatron
*/

const toto = [12, 42, 'Marguerite', 'Pimprenelle'];
console.log(toto);
console.table(toto);
toto.push('Megatron');
console.log(toto);
console.table(toto);

/* 
les boucles sont des moyens pour parcourir les objets itérable
un tableau est un objet itérable particulier, on utilise plusieurs sortes de boucles
Les tableau possèdent aussi des méthodes d'itération qui renvoient des résultats différents
*/

/* pour */
console.log('------------ Boucle for ------');

for (let i = 0; i < cars.length; i = i + 1) {
    console.log(`le tableau cars contient à l'index ${i} : ${cars[i]}`);
}

console.log('------------ Boucle for in ------');
i = 0;
for (value of cars) {
    console.log(`le tableau cars contient à l'index ${i} : ${value}`);
    i = i + 1;
}

console.log('------------ Boucle for of ------');

for (index in cars) {
    console.log(`le tableau cars contient à l'index ${index} : ${cars[index]}`);
}

/* tant que */
console.log('--------- boucle while ---------');
i = 0;
while (i < cars.length) {
    console.log(`le tableau cars contient à l'index ${i} : ${cars[i]}`);
    i = i + 1;
}

/* faire tant que */
console.log('--------- boucle do -- while ---------');
do {
    if (i >= cars.length) {
        i = 0;
    }
    console.log(`le tableau cars contient à l'index ${i} : ${cars[i]}`);
    i = i + 1;
} while (i < cars.length);

/* méthode objet et tableau pour parcourir un tableau */
/* .map() uniquement pour les tableaux */
console.log('--------- .map() -- uniquement tableaux ---------');
cars.map(function (value, index, tab) {
    console.log(`le tableau ${tab.toString()} contient à l'index ${index} : ${value}`);
    if (value === 'Ford') {
        cars[index] = 'Ford Inc.'
    }
});

const prices = [12.5, 56.5, 125];
console.log(prices);

prices.map(function (value, index, tab) {
    tab[index] = value * 0.9;
});
console.log(prices);

/* .forEach() pour les tableaux ET les objets itérable */
console.log('--------- .forEach() -- uniquement tableaux ---------');
cars.forEach(function (value, index, tab) {
    console.log(`le tableau ${tab.toString()} contient à l'index ${index} : ${value}`);
    if (value === 'Ford Inc.') {
        cars[index] = 'Ford'
    }
});

const prices2 = [12.5, 56.5, 125];
console.log(prices2);

prices2.forEach(function (value, index, tab) {
    tab[index] = value * 0.9;
});
console.log(prices2);

/* On utilisera par défaut .map() si on manipule un tableau pour les performances */
/**
 * es6 .entries()
 * modèle objet 
 * renvoi chaque élément du tableau sous la forme d'un tableau qui contient
 * - en 0 l'index de l'élément, 
 * - en 1 la valeur de l'élément
 */
console.log('---------------- .entries() ------------------');
for (let entry of cars.entries()) {
    console.log(entry);
}
/* .keys() renvoie uniquement les index du tableau */
console.log('---------------- .keys() ------------------');
for (let key of cars.keys()) {
    console.log(key, cars[key]);
}

/* retrouver une ou des valeurs dans un tableau */
/* .find() => retourne la première occurence recherchée dans un tableau */

console.log('--------- .find() ------------');
const arrayNum = [5, 8, 12, 130, 5, 3, 44];
const found = arrayNum.find(function (element) {
    return element > 20;
});
console.log(found);

/* .filternd() => toutes les occurences recherchéesdans un tableau */

console.log('--------- .filter() ------------');
const foundAll = arrayNum.filter(function (element) {
    return element > 20;
});
console.log(foundAll);

/* arroww opérateur */
/*
        
function(){
    // code
}
devient
()=>{
    //code
}

function(response){
    return response.json();
}
devient
response => response.json();

*/
const foundAll2 = arrayNum.filter((element) => element > 20);
console.log(foundAll2);

/* les fonctions */
/* function nomFonction(paramètresSiBesoin){code fonction qui retourne ou non un resultat} */
function addition(a, b){
    return parseFloat(a) + parseFloat(b);
}

const res = addition(38, 4);
console.log(`res : ${res}`);
console.log(addition(38, '4'));

/* des paramètres peuvent avoir une valeur par défaut */
function hello(name = 'World'){
    return `Hello ${name}`;
}

console.log(hello());
console.log(hello('Kitty'));

/* call function ou fonction de rappel ou fonction anonyme */
/*
function(){
    // code
}
ne peuvent pas être utilisée directement dans le code, 
elles font souvent partie de méthode, 
comme .map() qui renvoie à la callbacke valeur, index et tableau
*/

const titi = function(){
    console.log('C\'est cool !'); 
}

titi();

/* 
PAS LA BONNE MÉTHODE 
Il est possible d'écrire une structure qui éxécutera la callback sans passer par un moyen tier : fonction auto-exécutée
forme de base
(
    function(){
        //code
    }
)(
    paramètre(s) a envoyer dans la callback
);
*/

(
    function(name = 'Marty'){
        console.log(`C'est cool ${name}`); 
    }
)();

(
    function(name = 'Marty', age = 45){
        console.log(`C'est cool ${name}, ${age} ans !`); 
    }
)('Nicolas', 12);

/* Manipulation du DOM */
/*
console.log(document.children);
console.log(document.baseURI);
*/

/* 
Attendre que la page soit chargée 

Le navigateur renvoie au moteur qui interprète Javascript l'événement DOMContentLoaded

En surveillant la fenêtre du navigateur sur cet événement, on peut lancer une callback qui contiendra tous les scripts d'interaction avec l'utilisateur sur la page
*/

window.addEventListener('DOMContentLoaded', function(event){
    console.log(event);
    console.log('Le DOM est chargé');
    /* On récupère des objets représentant les éléments de la page, ces objets ont tous les mêmes ttributs et les mêmes méthodes, seulement certains attributs ne sont pas renseignés et certaines méthode ne sont pas applicables car leur renseignement et assignation dépend de la nature de l'élément */
    const boutonSubmit = document.getElementById('boutonSubmit');
    console.log(boutonSubmit.childNodes);
    /* 
    il est possible de récupérer les éléments ou une collection d'élément selon : 
    tagname (le nom de balise, un sélecteur CSS, etc.)
    */

    const pClassClickMe = document.getElementsByClassName('clickMe');
    console.log(pClassClickMe);

    const allPTagName = this.document.getElementsByTagName('p');
    console.log(allPTagName);
    for(data of allPTagName){
        if(data.classList.contains('clickMe')){
            console.log(data);
        }
    }

    const pClassClickMeQ = document.querySelector('p.clickMe.active');
    console.log(pClassClickMeQ);
    
    const allPQ = document.querySelectorAll('p');
    console.log(allPQ);
    allPQ.forEach(function(value, index, tab){
        console.log(value, index, tab);
        value.addEventListener('mouseenter', function(){
            this.style.backgroundColor ='rgba(0,0,0,0.1)';
            this.style.setProperty('font-weight', 'bold');
        });
        value.addEventListener('mouseleave', function(){
            this.style.removeProperty('background-color');
            this.style.fontWeight = 'normal';
        });
    });

    pClassClickMeQ.addEventListener('click', function(){
        this.classList.toggle('alert');
        this.classList.toggle('alert-info');
        console.log(this.innerHTML);
        console.log(this.innerText);
        console.log(this.textContent);
        document.getElementById('innerHTML').textContent = this.innerHTML;
        document.getElementById('textContent').textContent = this.textContent;
        document.getElementById('innerText').textContent = this.innerText;
    });
    
});
//Crée deux div en html avec chacune une liste de courses pour une recette différente, 
let script = document.querySelector("script");
let div1 = document.createElement("div");
let div2 = document.createElement("div");
document.body.prepend(div2, div1);
let titre1 = document.createElement("h3");
titre1.innerHTML = "Liste d'ingrédient Gateau :";
let titre2 = document.createElement("h3");
titre2.innerHTML = "Liste d'ingrédient Curry :";
div1.prepend(titre1);
div2.prepend(titre2);
// Chaque élément de la liste est un input de type checkbox avec un label correspondant;
let input1;
let label1;
let divInterne1;
for (let i = 0; i < 5; i++) {
    divInterne1 = document.createElement("div");
    input1 = document.createElement("input");
    input1.setAttribute("type", "checkbox");
    input1.setAttribute("class", "list1");
    if (i == 0){
        label1 = document.createElement("label");
        label1.innerHTML = "Oeufs";
    } else if (i == 1){
        label1 = document.createElement("label");
        label1.innerHTML = "Farine";
    } else if (i == 2){
        label1 = document.createElement("label");
        label1.innerHTML = "Lait";
    } else if (i == 3){
        label1 = document.createElement("label");
        label1.innerHTML = "Chocolat";
    } else if (i == 4){
        label1 = document.createElement("label");
        label1.innerHTML = "Levure";
    }
    label1.setAttribute("class", "label1");
    divInterne1.appendChild(input1);
    divInterne1.appendChild(label1);
    div1.append(divInterne1);
};

let input2;
let label2;
let divInterne2;
for (let i = 0; i < 5; i++) {
    divInterne2 = document.createElement("div");
    input2 = document.createElement("input");
    input2.setAttribute("type", "checkbox");
    input2.setAttribute("class", "list2");
    if (i == 0){
        label2 = document.createElement("label");
        label2.innerHTML = "Riz";
    } else if (i == 1){
        label2 = document.createElement("label");
        label2.innerHTML = "Patate douce";
    } else if (i == 2){
        label2 = document.createElement("label");
        label2.innerHTML = "Lait de coco";
    } else if (i == 3){
        label2 = document.createElement("label");
        label2.innerHTML = "Epinards";
    } else if (i == 4){
        label2 = document.createElement("label");
        label2.innerHTML = "Pate de curry";
    }
    label2.setAttribute("class", "label2");
    divInterne2.appendChild(input2);
    divInterne2.appendChild(label2);
    div2.appendChild(divInterne2);
};
// cible-les deux divs avec js pour les rendre "display none";
div1.style.display = "none";
div2.style.display = "none";
//Crée deux input de type radio avec chacun un label correspondant à une recette, insère les avant les listes
let radio;
let labRadio;
let divB = document.createElement("div")
divB.style.display= "block";
for (let i = 0; i < 2; i++) {
    radio = document.createElement("input");
    radio.setAttribute("type", "radio");
    radio.setAttribute("name", "check");
    radio.setAttribute("class", "first");
    if(i == 0){
        labRadio = document.createElement("label");
        labRadio.innerHTML = "Recette de Curry";
    } else if (i == 1){
        labRadio = document.createElement("label");
        labRadio.innerHTML = "Recette de Gateau";
    };
    divB.append(radio, labRadio);
    document.body.prepend(divB);
};
//A l'aide d'un eventlistener, affiche la liste correspondante à l'écran (n'oublie pas le checked, les conditions, et les boucles)
radio = document.getElementsByClassName("first");

divB.addEventListener("click", function(){
    if (radio[0].checked){
        div2.style.display = "block";
        div1.style.display = "none";
    } else if (radio[1].checked){
        div1.style.display = "block";
        div2.style.display = "none";
    };
});
//Ajoute un bouton "panier" 
let panier = document.createElement("button");
panier.innerHTML = "Ajouter au panier";
panier.style.margin = "10px";
document.body.insertBefore(panier, script);
//A l'aide d'un écouteur d'événement, affiche dans l'html tous les éléments qui ont été sélectionnés (les boucles et les conditions sont tes amies :])
let divP = document.createElement("div");
document.body.insertBefore(divP, script);
let titre3 = document.createElement("h3");
titre3.innerHTML = "Contenu du panier :"
let p = document.createElement("p");
divP.append(titre3, p);

let input11 = document.getElementsByClassName("list1");
let input21 = document.getElementsByClassName("list2");
let label11 = document.getElementsByClassName("label1");
let label21 = document.getElementsByClassName("label2");

panier.addEventListener("click", function(){
    if(radio[0].checked){
        for (let i = 0; i < input21.length; i++){
            if(input21[i].checked){
                if(!p.innerHTML.includes(label21[i].innerHTML)){
                    p.innerHTML = (`${p.innerHTML + label21[i].innerHTML} `);
                };
            };
        };
    } else if(radio[1].checked){
        for (let i = 0; i < input11.length; i++){
            if(input11[i].checked){
                if(!p.innerHTML.includes(label11[i].innerHTML)){
                    p.innerHTML = (`${p.innerHTML + label11[i].innerHTML} `);
                };
            };
        };
    };
});
//BONUS: ajoute un select et récupères-en la valeur
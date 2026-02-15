//no Ai and yes i know it can be optimized but i dont have the time as of now so sorry prof, e non so perchè l'ho scritto in ing
var cont=0;

function addListElement(){
    var element = document.getElementsByClassName("list-item");
    if (element.length > 0){
        element= element[element.length-1];
        var newId = (Number(element.id)+1);
    }else{
        newId = 1;
    }
    var newLi= document.createElement("li");
    newLi.innerHTML = "item " + newId.toString();
    newLi.classList.add("list-item");
    newLi.id=newId;
    document.getElementById("0").appendChild(newLi);
    lightsOut();
}

function removeListElement(){
    var element = document.getElementsByClassName("list-item");
    element= element[element.length-1];
    element.remove();
}
function lights(){
    var list = document.getElementsByClassName("list-item");
    cont++;
    for(var i=0;i<list.length;i++){
        if((i+cont)%2){
        list[i].classList.toggle("blue");
        }else if(cont>1){
           list[i].classList.toggle("blue");
        }
    }
}

function lightsOut(){
    var list = document.getElementsByClassName("list-item");
    cont=0;
    for(var i=0;i<list.length;i++){
        list[i].classList.remove("blue");
    }
}
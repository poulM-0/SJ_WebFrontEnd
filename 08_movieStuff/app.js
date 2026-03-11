//no Ai, tutta sofferenza umana

//stuff to add/do:
//comments on movies
//button to modify movies data (button -> modal with values-> changed values)
//fix list button css
//export svgs to external files 
//optimize LITERALLY FUCKING EVERYTHING IDIOT

const addbtn = document.getElementById("clickMe");
const backdrop = document.getElementById("backdrop");
const movieAdd = document.getElementById("add-modal");
const btnPsv = document.getElementById("btnCancel");
const btnAdd = document.getElementById("btnAdd");
const btnRgrt = document.getElementById("btnRegret");
const btnDstry = document.getElementById("btdDestroy");
const btnDlt  = document.getElementsByClassName("dltButton");
const movieDlt = document.getElementById("delete-modal");
const titles = document.getElementsByClassName("movie-element");
const mvNodes = document.getElementsByClassName("movie-element-node");
const placeholder = document.getElementById("entry-text");
const orderButton= document.getElementById("orderbtn");
const form = document.querySelector("#form");
var Dcheck=0;

function darkmode(){
    document.body.classList.toggle('dark-mode-body');
    var temp= document.getElementsByTagName('header');
    temp[0].classList.toggle('dark-mode-header');
    addbtn.classList.toggle('dark-mode-btn');
    placeholder.classList.toggle('dark-mode-cards');
    temp=document.getElementById('dark');
    temp.classList.toggle('dark-mode-btn');
    temp=document.getElementsByClassName("movie-element");
    console.log(Dcheck+'a');
    for(i = 0;i<temp.length;i++){
        temp[i].classList.toggle('dark-mode-cards');
    }
    movieAdd.classList.toggle('dark-mode-modals');
    movieDlt.classList.toggle('dark-mode-modals');
    btnDstry.classList.toggle('dark-mode-btn');
    btnAdd.classList.toggle('dark-mode-btn');
    btnPsv.classList.toggle('dark-mode-btnsmll');
    btnRgrt.classList.toggle('dark-mode-btnsmll');
    temp=document.getElementsByClassName('modal__title');
    temp[0].classList.toggle('dark-mode-title');
    if(Dcheck==0){
        Dcheck++;
    }else{Dcheck=0}
}


function goodbye(id){
        movieDlt.classList.add('visible');
        backdrop.classList.add("visible");
        btnDstry.id=id;
}  

function removeFilm(idfilm){
    movieDlt.classList.remove("visible");
    backdrop.classList.remove("visible");

    for(i=0;i<mvNodes.length;i++){
        if(mvNodes[i].id == idfilm){
            mvNodes[i].remove();
        }
    }
    btnDstry.id='btdDestroy';
    if(mvNodes.length==0){
        placeholder.style.setProperty('display','block');
        orderButton.style.setProperty('display','none')
    }
    for(var i = 0;i<titles.length;i++){
        btnDlt[i].id=(i+1);
        mvNodes[i].id=(i+1);
    }
}

(function() {
    document.getElementById('Sort').addEventListener('change', function() {
        OrderThis(this.value);
        ;
    }, false);

})();

function OrderThis(type){
    const arr = [];
    switch(type){
        case "Date" : {
            console.log("palle");
            //metti i varoli degli id dei div in un array
            //.sort() all array
            //cicla l array vedi se elemento array == id del div se si gli mette l order
            for(var i = 0;i<titles.length;i++){
                arr[i]=titles[i].id;
            }
            arr.sort();
            for(var i = 0;i<titles.length;i++){
                for(var j=0;j<titles.length;j++){
                    if(arr[i]==titles[j].id){
                        mvNodes[j].style.setProperty('order',(i+1));
                    }
                }   
            }
            break;
        }
        case "Rlow" : {
            console.log("balls");
            var rt = document.getElementsByClassName('rating');
            for(var i = 0;i<titles.length;i++){
                arr[i]=rt[i].id;
            }
            arr.sort();
            for(var i = 0;i<titles.length;i++){
                for(var j=0;j<titles.length;j++){
                    if(arr[i]==rt[j].id){
                        mvNodes[j].style.setProperty('order',(i+1));
                    }
                }   
            }
            break;
        }
        case "Rhigh" : {
            console.log("las balles");
            console.log("balls");
            var rt = document.getElementsByClassName('rating');
            for(var i = 0;i<titles.length;i++){
                arr[i]=rt[i].id;
            }
            arr.sort();
            arr.reverse();
            for(var i = 0;i<titles.length;i++){
                for(var j=0;j<titles.length;j++){
                    if(arr[i]==rt[j].id){
                        mvNodes[j].style.setProperty('order',(i+1));
                    }
                }   
            }
            break;
        }
    }
};

addbtn.addEventListener( 'click', function(){
    movieAdd.classList.add("visible");
    backdrop.classList.add("visible");
} )

orderButton.addEventListener('click', function(){
    document.getElementById('Sort').classList.toggle('hidden');
})

backdrop.addEventListener('click',function (){
    movieAdd.classList.remove('visible');
    backdrop.classList.remove("visible");
    movieDlt.classList.remove('visible');

})

btnPsv.addEventListener('click', function(){
    movieAdd.classList.remove('visible');
    backdrop.classList.remove("visible");

})
btnRgrt.addEventListener('click', function(){
    movieDlt.classList.remove('visible');
    backdrop.classList.remove("visible");

})

form.addEventListener('submit', function(e){
    e.preventDefault();
    placeholder.style.setProperty('display','none');
    orderButton.style.setProperty('display','block');
    movieAdd.classList.remove('visible');
    backdrop.classList.remove("visible");
    let titleM= document.getElementById("title");
    titleM= titleM.value;
    let imgUrl= document.getElementById("image-url");
    imgUrl= imgUrl.value;
    let rating= document.getElementById("rating");
    rating= rating.value;
    var newLi= document.createElement("li");
    newLi.id=titles.length + 1;
    newLi.classList.add('movie-element-node');
    console.log(rating);
    if(rating >= 4 && rating <= 5){
        newLi.classList.add('good');
    }else if(rating >= 0 && rating <= 2.9){
        newLi.classList.add('bad');
    }
    var n=rating;
    rating= rating+"/5 ";
    for(i=1;i<=n;i++){
        rating = rating + "<svg class='w-6 h-6 text-gray-800 dark:text-white' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='currentColor' viewBox='0 0 23 23'>"+
        "<path d='M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z'/>"+
        "</svg>";
        if((n-1) < i && i<n){
            if(n<(i+0.5)){
                rating = rating + "<svg class='w-6 h-6 text-gray-800 dark:text-white' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='5 0 23 23'>"+
                "<path stroke='currentColor' stroke-width='2' d='m12.25 20.825 4.247-2.436a1 1 0 0 0 .503-.867V4.03c0-.405-2.062 3.38-2.8 4.747a1 1 0 0 1-.807.523l-4.87.367c-.903.068-1.258 1.208-.55 1.776l3.576 2.878a1 1 0 0 1 .343 1.025l-1.11 4.366c-.217.856.701 1.553 1.468 1.113Z'/>"+
                "</svg>";
            }else{
                rating = rating + "<svg class='w-6 h-6 text-gray-800 dark:text-white' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='currentColor' viewBox='0 0 23 23'>"+
                "<path fill-rule='evenodd' d='M13 4.024v-.005c0-.053.002-.353-.217-.632a1.013 1.013 0 0 0-1.176-.315c-.192.076-.315.193-.35.225-.052.05-.094.1-.122.134a4.358 4.358 0 0 0-.31.457c-.207.343-.484.84-.773 1.375a168.719 168.719 0 0 0-1.606 3.074h-.002l-4.599.367c-1.775.14-2.495 2.339-1.143 3.488L6.17 15.14l-1.06 4.406c-.412 1.72 1.472 3.078 2.992 2.157l3.94-2.388c.592-.359.958-.996.958-1.692v-13.6Zm-2.002 0v.025-.025Z' clip-rule='evenodd'/>"+
                "</svg>";
            }
        }
    }
    newLi.innerHTML =
    "<div class='movie-element'>"
    +"<img src='"+imgUrl+"' class='movie-element__image' alt='error: skill issue detected'>"
        +"<div class='movie-element__info'>"
        +"<h2>"+titleM+"</h2>"
        +"<p class='rating' id='"+n+"'>"+rating+"</p>"
        +"</div>"
        +"<div class='small-btn-div'>"
            +"<button id='0' class='dltButton' onclick='goodbye(this.id)'><img src='assets/trash-icon.png' class='icon' alt='error'></button>"
    +"</div>";
    
    document.getElementById("movie-list").appendChild(newLi);
    if(Dcheck==1){
        var temp=newLi.firstElementChild;
        temp.classList.toggle('dark-mode-cards');
    }
    var d = new Date();
    titles[titles.length-1].id= d.getTime();
    for(var i = 0;i<titles.length;i++){
        btnDlt[i].id=(i+1);
        mvNodes[i].id=(i+1);
    }
    
    
})
//no Ai
const addbtn = document.getElementById("clickMe");
const backdrop = document.getElementById("backdrop");
const movieAdd = document.getElementById("add-modal");
const btnPsv = document.getElementById("btnCancel");
const btnAdd = document.getElementById("btnAdd");
const btnRgrt = document.getElementById("btnRegret");
const btnDstry = document.getElementById("btdDestroy");
const btnDlt  = document.querySelector("#dltButton");
const movieDlt = document.getElementById("delete-modal");


document.querySelector('body').addEventListener('click', function(event){
    if (event.target.id == 'dltButton') {
        movieDlt.classList.add('visible');
        backdrop.classList.add("visible");  }
})      
addbtn.addEventListener( 'click', function(){
    movieAdd.classList.add("visible");
    backdrop.classList.add("visible");
} )

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
//btnDstry.addEventListener('click', function(event){
  //  event.target.remove(this.parentElement);
//})


btnAdd.addEventListener('click', function(){
    movieAdd.classList.remove('visible');
    backdrop.classList.remove("visible");
    let titleM= document.getElementById("title");
    titleM= titleM.value;
    let imgUrl= document.getElementById("image-url");
    imgUrl= imgUrl.value;
    let rating= document.getElementById("rating");
    rating= rating.value;
    var newLi= document.createElement("il");
    newLi.innerHTML =
    "<div class='movie-element' id='movie'>"
    +"<img src='"+imgUrl+"' class='movie-element__image' alt='Italian Trulli'>"
        +"<div class='movie-element__info'>"
        +"<h2>"+titleM+"</h2>"
        +"<p>"+rating+"</p>"
        +"</div>"
        +"<div>"
            +"<button id='dltButton'>delete</button>"
    +"</div>";
    document.getElementById("movie-list").appendChild(newLi);

})




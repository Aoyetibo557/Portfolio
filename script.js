window.addEventListener('scroll', function(){
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

function toggleMenu(){
    var menuToggle = document.querySelector('.toggle');
    var menu = document.querySelector('.menu');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');

}
function showHiddenProject(){
    var projDiv = document.getElementById("hidden__projects");
    projDiv.classList.remove("_hidden__projects"); 

    // Add the content class to the div 

    projDiv.classList.add("content");


    // Replace View More with Show less
    document.getElementById("_viewMore_btn").innerHTML = "Show Less";

    if(projDiv.addEventListener("click")){
        projDiv.classList.add("_hidden__projects"); 
    }
}
// haut de page
mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.documentElement.scrollTop = 0; 
}
// clavier
var i=0,text;
text="Actuellement étudiant en premiére année cycle d'ingénieur à l'école supérieure des technologies industrielles avancées située à Bidart je suis passionée par la musique et la pratique de plusieurs instruments musicaux (piano saxophone violon).";
function typing(){
    if(i<text.length){
      document.getElementById("intro1").innerHTML +=text.charAt(i);
      i++;
      setTimeout(typing,40);
}
}
typing();


// function cakechange(){
//     document.getElementById('pastry')
//     .src="../Images/Totoko.Animation.Cake.png";
// }
     
// function muffinchange(){
//     document.getElementById('pastry')
//     .src="../Images/Totoko.Animation.Muffin.png";
// }

function cakechange() {
    var element = document.getElementById('pastry');
    element.classList.remove("muffin");
    element.classList.add("cake");

    document.getElementById('totoko')
     .src="../Images/Totoko.Animation.Chefsigh.png";

     setTimeout(function (){
          document.getElementById('totoko')
          .src="../Images/Totoko.Animation.Chefbase.png";
     }, 3000);
}


function muffinchange() {
    var element = document.getElementById('pastry');
    element.classList.remove("cake");
    element.classList.add("muffin");

    document.getElementById('totoko')
     .src="../Images/Totoko.Animation.Chefchin.png";

     setTimeout(function (){
        document.getElementById('totoko')
        .src="../Images/Totoko.Animation.Chefbase.png";
    }, 3000);
}




document.getElementById("buttoncake").addEventListener("click", function() {
    var animationTarget = document.querySelector("pastry");
    animationTarget.classList.add("ovendough");
  });




function cakemove(){

}

function muffinmove(){

}

  //html onclick pour le bouton peut etre utile.
  //il faut une fonction pour le mouvement des patisseries.
  //
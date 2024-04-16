function cakechange() {
    var element = document.getElementById('pastry');
    element.classList.remove("muffin");
    element.classList.add("cake");

    document.getElementById('totoko')
     .src="../Images/Images_animation/Totoko.Animation.Chefsigh.png";

     setTimeout(function (){
          document.getElementById('totoko')
          .src="../Images/Images_animation/Totoko.Animation.Chefbase.png";
     }, 3000);
}

function muffinchange() {
    var element = document.getElementById('pastry');
    element.classList.remove("cake");
    element.classList.add("muffin");

    document.getElementById('totoko')
     .src="../Images/Images_animation/Totoko.Animation.Chefchin.png";

     setTimeout(function (){
        document.getElementById('totoko')
        .src="../Images/Images_animation/Totoko.Animation.Chefbase.png";
    }, 3000);
}

document.getElementById("buttoncake").addEventListener("click", function(){
    var animationTarget = document.querySelector("pastry");
    animationTarget.classList.add("ovendough");
  });

  document.addEventListener('DOMContentLoaded', function() {
    var hamburger = document.querySelector('.hamburger');
    var navUL = document.querySelector('nav ul');

    hamburger.addEventListener('click', function() {
        navUL.classList.toggle('nav-active');
    });
});

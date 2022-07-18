// Get the modal
var modal01 = document.getElementById("myModal01");
var modal02 = document.getElementById("myModal02");
var modal03 = document.getElementById("myModal03");
var modal04 = document.getElementById("myModal04");
var modal05 = document.getElementById("myModal05");
var modal06 = document.getElementById("myModal06");

// Get the button that opens the modal
var btn01 = document.getElementById("myBtn01");
var btn02 = document.getElementById("myBtn02");
var btn03 = document.getElementById("myBtn03");
var btn04 = document.getElementById("myBtn04");
var btn05 = document.getElementById("myBtn05");
var btn06 = document.getElementById("myBtn06");

// Get the <span> element that closes the modal
var span01 = document.getElementsByClassName("close")[0];
var span02 = document.getElementsByClassName("close")[1];
var span03 = document.getElementsByClassName("close")[2];
var span04 = document.getElementsByClassName("close")[3];
var span05 = document.getElementsByClassName("close")[4];
var span06 = document.getElementsByClassName("close")[5];

// When the user clicks on the button, open the modal
btn01.onclick = function() {
  modal01.style.display = "block";
}
btn02.onclick = function() {
    modal02.style.display = "block";
  }
  btn03.onclick = function() {
    modal03.style.display = "block";
  }

  btn04.onclick = function() {
    modal04.style.display = "block";
  }

  btn05.onclick = function() {
    modal05.style.display = "block";
  }

  btn06.onclick = function() {
    modal06.style.display = "block";
  }
  

// When the user clicks on <span> (x), close the modal
span01.onclick = function() {
  modal01.style.display = "none";
}
span02.onclick = function() {
    modal02.style.display = "none";
  }
  span03.onclick = function() {
    modal03.style.display = "none";
  }
  span04.onclick = function() {
    modal04.style.display = "none";
  }
  span05.onclick = function() {
    modal05.style.display = "none";
  }
  span06.onclick = function() {
    modal06.style.display = "none";
  }
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal01) {
    modal01.style.display = "none";
  }

}










//SLIDER cast


//JS for carousel
$('.responsive').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
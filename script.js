const x = document.querySelector('.btnoo');

x.addEventListener('click', function() {
    window.scrollTo(0, 0);
})


/********************* Section 3 **************************/


$(document).ready(function() {
    $('.animate').click(function() {
      $('.box').toggleClass('animated');
      return false;
    });
   });


/********************* Section 4 **************************/


let a = document.querySelector('.four'); 

let b = document.querySelectorAll('.progress-bar span');

window.onscroll = function() {
    if (window.scrollY >= a.offsetTop - 400) {
        console.log('reach section 3');
        b.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    }
};


/********************* Section 10 **************************/


function toggleText() {
    var z = document.getElementById("pragrapgh");
    if (z.style.display === "none") {
      z.style.display = "block";
    } else {
      z.style.display = "none";
    }
  }



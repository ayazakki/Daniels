var typed = new Typed('#typing', {
  strings: ['devloper','designer','larry daniels'],
  typeSpeed: 90,
  loop: true,
  backSpeed:50,
  backDelay: 1100,
  
});

/* const navbar = document.getElementById("navbar");
const aboutSection = document.getElementById("about");
window.addEventListener("scroll", function () {
  const aboutSectionTop = aboutSection.getBoundingClientRect().top + window.scrollY;
  if (window.scrollY >= aboutSectionTop - navbar.offsetHeight) {
    navbar.style.display = "block";
    navbar.classList.add("scrolled");
  } else if (window.scrollY > 0) {
    navbar.style.display = "none";
  } else {
    navbar.style.display = "block";
    navbar.classList.remove("scrolled");
  }
}); */

// Using jquery
const navbar=$("#navbar")
const navbarHeight=$("#navbar").outerHeight();
$(window).on("scroll",function(){
  let fromTop=$(window).scrollTop()
  let aboutOffset=$("#about").offset().top
  console.log($(window).scrollTop());
  if(fromTop> aboutOffset-navbarHeight){
    navbar.css({
      "display":"block"
    })
    navbar.addClass("scrolled")
  }else if(fromTop>0){
    navbar.css({
      "display":"none"
    })
  }else{
    navbar.css({
      "display":"block"
    })
    navbar.removeClass("scrolled")
  }
})
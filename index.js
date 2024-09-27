let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};



let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if (top >= offset && top < offset + height) {
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id +']').classList.add('active');
            });
        };
   });

   let header = document.querySelector('header');
   header.classList.toggle('sticky', window.scrollY > 100);

   menuIcon.classList.remove('bx-x');
   navbar.classList.remove('active');

};


ScrollReveal({
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading',{origin: 'top'});
ScrollReveal().reveal('.home-img, .skills, .portfolio-box, .contact form',{origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img',{origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content',{origin: 'right'});
// Initialize ScrollReveal

ScrollReveal().reveal('.left-container', {
    origin: 'top',
    distance: '50px',
    duration: 1000,
    delay: 200,
    easing: 'ease-in-out',
    reset: false
  });

  ScrollReveal().reveal('.right-container', {
    origin: 'top',
    distance: '50px',
    duration: 1000,
    delay: 400,
    easing: 'ease-in-out',
    reset: false
  });



  ScrollReveal().reveal('.container', {
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    easing: 'ease-in-out',
    interval: 200,
    //reset: true
  });

  // Reveal the entire skills-container
ScrollReveal().reveal('.skills-container', {
    origin: 'bottom',
    distance: '100px',
    duration: 1200,
    easing: 'ease-in-out',
    //reset: true
  });

  // Reveal each skill in the skills-container
ScrollReveal().reveal('.skill', {
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    easing: 'ease-in-out',
    interval: 200,
    //reset: true
  });

  





  
  

  





const typed = new Typed('.multiple-text', {
    strings: ['Software Engineer', 'Data Science Engineer'],
    typeSpeed: 90,
    backSpeed: 50,
    loop: true,
    showCursor: true,
    cursorChar: '|',
    smartBackspace: true,
    startDelay: 1000,
});



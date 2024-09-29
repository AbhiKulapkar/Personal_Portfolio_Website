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

  ScrollReveal().reveal('.left-container', {
    origin: 'left',
    distance: '100px',
    duration: 1000,
    //reset: true,
    opacity: 0,
    easing: 'ease-in-out',
    interval: 200
  });

  ScrollReveal().reveal('.right-container', {
    origin: 'right',
    distance: '100px',
    duration: 1000,
    //reset: true,
    opacity: 0,
    easing: 'ease-in-out',
    interval: 200
  });

  document.addEventListener('DOMContentLoaded', () => {
    const containers = document.querySelectorAll('.container');

    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('show');
          observer.unobserve(entry.target); // Stop observing if you don't want the animation to repeat
        }
      });
    }, observerOptions);

    containers.forEach(container => {
      observer.observe(container);
    });
  });
  

  ScrollReveal().reveal('.Contact h2', {
    origin: 'top', // Animation direction (top, bottom, left, right)
    distance: '50px', // How far the element moves
    duration: 1000, // Animation duration (in ms)
    delay: 200, // Delay before animation starts (in ms)
    //reset: true // Elements will reanimate every time they come into view
  });


  ScrollReveal().reveal('.Contact form .input-box input', {
    origin: 'left',
    distance: '50px',
    duration: 1000,
    delay: 300,
    //reset: true,
    interval: 200 // Stagger the animation for multiple elements
  });

  ScrollReveal().reveal('.Contact form textarea', {
    origin: 'right',
    distance: '50px',
    duration: 1000,
    delay: 400,
    //reset: true
  });

  ScrollReveal().reveal('.Contact form .btn', {
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    delay: 500,
    //reset: true
  });


  
  
  (function(){
    emailjs.init({
      publicKey: "vOlLwoy6ARmPSoaYy",
    });
 })();

 document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Collect form data
  const formData = {
    from_name: document.querySelector('input[name="from_name"]').value,
    from_email: document.querySelector('input[name="from_email"]').value,
    from_mobile: document.querySelector('input[name="from_mobile"]').value,
    email_subject: document.querySelector('input[name="email_subject"]').value,
    message: document.querySelector('textarea[name="message"]').value
  };

  // Send the user's message
  emailjs.send('service_1slqhns', 'template_rw58gq4', formData) // Your service ID and user message template ID
    .then(function(response) {
      // Send a thank-you email to the user
      const thankYouData = {
        user_name: formData.from_name,
        to_email: formData.from_email // Use the user's email here
      };

      // Send thank-you email using the same service ID and the thank-you template ID
      emailjs.send('service_1slqhns', 'template_12c5wba', thankYouData) // Using your thank-you template ID
        .then(function() {
          // Display success message using SweetAlert
          Swal.fire({
            icon: 'success',
            title: 'Message Sent!',
            text: 'Your message has been successfully sent! Thanks for getting in touch. Please keep an eye out for more details in your email.',
            confirmButtonText: 'OK'
          });
        })
        .catch(function(error) {
          console.error('Failed to send the thank-you email:', error);
        });

    }, function(error) {
      // Log the error for debugging
      console.error('Failed to send the email:', error);

      // Display error message using SweetAlert
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Failed to send the message. Please try again later.',
        confirmButtonText: 'OK'
      });
    });
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



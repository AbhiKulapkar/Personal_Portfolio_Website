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




document.addEventListener('DOMContentLoaded', function() {
    // Hide the success message on page load
    document.getElementById('status-message').style.display = 'none';

    // Handle the form submission
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission and page reload

        // Send email using EmailJS
        emailjs.sendForm('service_1slqhns', 'template_rw58gq4', this)
            .then(function(response) {
                console.log('Message sent to you:', response.status, response.text);

                // After sending the first email, send the thank-you email to the user
                const userName = document.querySelector('[name="from_name"]').value;
                const userEmail = document.querySelector('[name="from_email"]').value; // User's email

                emailjs.send('service_1slqhns', 'template_12c5wba', {
                    to_name: userName,
                    to_email: userEmail
                }).then(function(response) {
                    console.log('Thank You email sent to user!', response.status, response.text);

                    // Show success message
                    document.getElementById('status-message').style.display = 'block';

                    // Optionally, you can clear the form after submission
                    document.getElementById('contact-form').reset();

                }, function(error) {
                    console.log('Failed to send thank you email...', error);
                });

            }, function(error) {
                console.log('Failed to send message...', error);
                alert('Failed to send message, please try again later.');
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



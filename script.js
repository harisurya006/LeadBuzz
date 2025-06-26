document.addEventListener('DOMContentLoaded', function() {
    // Navigation functionality
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links and sections
            navLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active-section'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Show corresponding section
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).classList.add('active-section');
            
            // Smooth scroll to section
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    // Set home as active by default
    document.querySelector('.nav-link').click();
    
    // Add image functionality
    const addImageBtn = document.getElementById('add-image-btn');
    const imageUpload = document.getElementById('image-upload');
    const galleryContainer = document.querySelector('.gallery-container');
    
    if (addImageBtn && imageUpload && galleryContainer) {
        addImageBtn.addEventListener('click', function() {
            imageUpload.click();
        });
        
        imageUpload.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    const img = document.createElement('img');
                    img.src = event.target.result;
                    img.alt = "Uploaded Image";
                    img.style.width = "30%";
                    img.style.marginBottom = "1rem";
                    img.style.borderRadius = "5px";
                    img.style.boxShadow = "0 3px 10px rgba(0, 0, 0, 0.2)";
                    galleryContainer.appendChild(img);
                };
                reader.readAsDataURL(file);
            }
        });
    }
    
    // CTA button functionality
    const ctaButton = document.getElementById('cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            document.querySelector('a[href="#contact"]').click();
        });
    }
    
    // Contact form functionality
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;
            
            // Create contact object
            const contact = {
                name,
                email,
                phone,
                message,
                timestamp: new Date().toISOString()
            };
            
            // Save to local storage
            let contacts = JSON.parse(localStorage.getItem('leadbuzzContacts')) || [];
            contacts.push(contact);
            localStorage.setItem('leadbuzzContacts', JSON.stringify(contacts));
            
            // Show confirmation and reset form
            contactForm.reset();
            contactForm.style.display = 'none';
            document.getElementById('confirmation-message').style.display = 'block';
            
            // Hide confirmation after 5 seconds
            setTimeout(() => {
                document.getElementById('confirmation-message').style.display = 'none';
                contactForm.style.display = 'block';
            }, 5000);
        });
    }
    
    // Handle page refresh to maintain current section
    window.addEventListener('load', function() {
        const hash = window.location.hash;
        if (hash) {
            const targetLink = document.querySelector(a[href="${hash}"]);
            if (targetLink) {
                targetLink.click();
            }
        }
    });
});
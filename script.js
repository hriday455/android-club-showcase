// ==========================================
// Android Club Showcase - Simple JavaScript
// Light, clean, and easy-to-understand code
// ==========================================

// 1. Mobile Navigation Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Close mobile menu when any navigation link is clicked
  const links = navLinks.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
}

// 2. Project Category Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons and add to the clicked one
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const selectedCategory = button.getAttribute('data-category');

    // Show or hide project cards based on category
    projectCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      if (selectedCategory === 'all' || cardCategory === selectedCategory) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// 3. Simple FAQ Accordion Toggle
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    const faqItem = question.parentElement;
    
    // Toggle active state on clicked item
    faqItem.classList.toggle('active');

    // Update plus/minus icon
    const icon = question.querySelector('.faq-icon');
    if (faqItem.classList.contains('active')) {
      icon.textContent = '−';
    } else {
      icon.textContent = '+';
    }
  });
});

// 4. Recruitment / Contact Form Submission
const joinForm = document.getElementById('join-form');
const formMessage = document.getElementById('form-message');

if (joinForm) {
  joinForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Stop page reload

    const name = document.getElementById('name').value;
    const domain = document.getElementById('domain').value;

    // Show friendly success confirmation
    if (formMessage) {
      formMessage.innerHTML = `🎉 Thank you, <strong>${name}</strong>! Your application for <strong>${domain}</strong> has been received. We will email you shortly!`;
      formMessage.style.display = 'block';
      formMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    // Reset the form inputs
    joinForm.reset();
  });
}

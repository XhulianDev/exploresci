const openModal = (id) => {
  const modal = document.getElementById(id);
  if (modal) modal.showModal();
};

const closeModal = (id) => {
  const modal = document.getElementById(id);
  if (modal) modal.close();
};

const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const successMsg = document.createElement('p');
    successMsg.textContent = 'Message sent successfully!';
    successMsg.style.color = '#b50000';
    
    contactForm.appendChild(successMsg);
    
    setTimeout(() => { 
      successMsg.remove(); 
      contactForm.reset();
      closeModal('popup-contact'); 
    }, 3000);
  });
}

const categories = ['physics', 'history', 'geography', 'zoology', 'astronomy'];

categories.forEach(category => {
  const button = document.getElementById(`learn-${category}`);
  if (button) {
    button.addEventListener('click', () => {
      window.location.href = `${category}/${category}.html`;
    });
  }
});
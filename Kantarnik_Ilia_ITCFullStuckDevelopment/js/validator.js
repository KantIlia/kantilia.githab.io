document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.querySelector('.submit');
    const form = document.querySelector('form');
  
    submitButton.disabled = true;
    submitButton.classList.add('submit-disabled');
  
    form.addEventListener('input', function() {
      const nameInput = document.getElementById('name');
      const phoneInput = document.getElementById('phone');
      const emailInput = document.getElementById('email');
      const dateInput = document.getElementById('date');
      const qtyInput = document.getElementById('qty');
      const abtypeSelect = document.getElementById('abtype');
      const commentsInput = document.getElementById('comments');
      const numberCodeInput = document.getElementById('number-code');
  
      const isFormValid =
        nameInput.value.trim() !== '' &&
        phoneInput.value.trim() !== '' &&
        emailInput.value.trim() !== '' &&
        dateInput.value.trim() !== '' &&
        qtyInput.value.trim() !== '' &&
        abtypeSelect.value !== '' &&
        commentsInput.value.trim() !== '' &&
        numberCodeInput.value.trim() !== '';
  
      submitButton.disabled = !isFormValid;
  
      if (isFormValid) {
        submitButton.classList.remove('submit-disabled');
      } else {
        submitButton.classList.add('submit-disabled');
      }
    });
  });
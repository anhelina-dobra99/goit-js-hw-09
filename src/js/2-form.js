let formData = { email: "", message: "" };

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageTextarea = form.querySelector('textarea[name="message"]');

window.addEventListener('load', () => {
  const savedData = localStorage.getItem('feedback-form-state');
  
  if (savedData) {
    const { email, message } = JSON.parse(savedData);
    formData.email = email || "";
    formData.message = message || "";
    
    emailInput.value = formData.email;
    messageTextarea.value = formData.message;
  } else {
    emailInput.value = '';
    messageTextarea.value = '';

  }
});

form.addEventListener('input', event => {
    const { name, value } = event.target;
    if (name === 'email') {
    formData.email = value;
  } else if (name === 'message') {
    formData.message = value;
    }
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', event => {
    event.preventDefault();
    
  if (formData.email.trim() === "" || formData.message.trim() === "") {
    alert("Fill please all fields");
  } else {
    console.log("Form Data:", formData);
    localStorage.removeItem('feedback-form-state');
    formData.email = "";
    formData.message = "";
    emailInput.value = "";
    messageTextarea.value = "";
  }
});
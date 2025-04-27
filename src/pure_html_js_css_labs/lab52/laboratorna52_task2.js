const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;

let formData = {
    email: '',
    message: '',
};

// Завантаження з локального сховища
const savedData = localStorage.getItem('feedback-form-state');
if (savedData) {
    try {
        const parsedData = JSON.parse(savedData);
        formData = {
            email: parsedData.email?.trim() || '',
            message: parsedData.message?.trim() || '',
        };
        emailInput.value = formData.email;
        messageInput.value = formData.message;
    } catch (e) {
        console.error('Error parsing saved form data', e);
    }
}

// Відстеження input
form.addEventListener('input', (event) => {
    const { name, value } = event.target;
    formData[name] = value.trim();
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

// Сабміт форми
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const isEmailFilled = formData.email.trim() !== '';
    const isMessageFilled = formData.message.trim() !== '';

    if (!isEmailFilled || !isMessageFilled) {
        alert('Fill please all fields');
        return;
    }

    console.log(formData);

    // Очищення
    localStorage.removeItem('feedback-form-state');
    formData = { email: '', message: '' };
    form.reset();
});

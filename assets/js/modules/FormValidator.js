class FormValidator {
    constructor(form) {
        this.form = form;
        this.fields = this.form.querySelectorAll('[required]');
        this.submitButton = this.form.querySelector('button[type="submit"]');
        this.init();
    }

    init() {
        this.fields.forEach(field => {
            field.addEventListener('input', () => this.validateField(field));
        });

        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            if (this.validateForm()) {
                // Lógica de envio do formulário (ex: fetch para uma API)
                console.log('Formulário válido. Enviando...');
                alert('Mensagem enviada com sucesso!');
                this.form.reset();
                this.submitButton.disabled = true;
            }
        });
    }

    validateForm() {
        let isValid = true;
        this.fields.forEach(field => {
            if (!this.validateField(field)) {
                isValid = false;
            }
        });
        return isValid;
    }

    validateField(field) {
        let isValid = false;
        const errorElement = field.nextElementSibling;

        if (field.value.trim() === '') {
            this.showError(field, errorElement, 'Este campo é obrigatório.');
        } else if (field.type === 'email' && !this.isValidEmail(field.value)) {
            this.showError(field, errorElement, 'Por favor, insira um email válido.');
        } else {
            this.clearError(field, errorElement);
            isValid = true;
        }

        this.checkFormValidity();
        return isValid;
    }

    isValidEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    showError(field, errorElement, message) {
        field.classList.add('invalid');
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }

    clearError(field, errorElement) {
        field.classList.remove('invalid');
        errorElement.textContent = '';
        errorElement.style.display = 'none';
    }

    checkFormValidity() {
        const allValid = [...this.fields].every(field => !field.classList.contains('invalid') && field.value.trim() !== '');
        this.submitButton.disabled = !allValid;
    }
}

const initFormValidator = () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        new FormValidator(contactForm);
    }
};

export { initFormValidator };
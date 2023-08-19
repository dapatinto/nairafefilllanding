function bindPasswordReveal() {
    const passwordInputs = document.querySelectorAll('input[type="password"]');
    
    passwordInputs.forEach(input => {
        const nextSibling = input.nextElementSibling;
        
        nextSibling.addEventListener('mousedown', function() {
            input.type = 'text';
        });
        
        nextSibling.addEventListener('touchstart', function() {
            input.type = 'text';
        });
        
        nextSibling.addEventListener('mouseup', function() {
            input.type = 'password';
        });
        
        nextSibling.addEventListener('touchend', function() {
            input.type = 'password';
        });
    });
}

function showErrorAlert() {
    const errorAlerts = document.querySelectorAll('.alert-form-error:not(.d-block)');
    
    errorAlerts.forEach(alert => {
        alert.classList.remove('d-none');
        alert.classList.add('d-block');
    });
}

function hideErrorAlert() {
    const errorAlerts = document.querySelectorAll('.alert-form-error');
    
    errorAlerts.forEach(alert => {
        alert.classList.remove('d-block');
        alert.classList.add('d-none');
    });
}

function bindInputFocusListener() {
    const formControls = document.querySelectorAll('form .form-control');
    
    formControls.forEach(control => {
        control.addEventListener('focus', function() {
            const formGroup = this.closest('.form-group');
            formGroup.classList.add('focused');
        });
        
        control.addEventListener('blur', function() {
            const formGroup = this.closest('.form-group');
            formGroup.classList.remove('focused');
        });
    });
}

function bindInputErrorHandler() {
    const formControls = document.querySelectorAll('form .form-control');
    
    formControls.forEach(control => {
        control.addEventListener('invalid', function(e) {
            showErrorAlert();
            const formGroup = this.closest('.form-group');
            formGroup.classList.add('has-error');
        });
        
        control.addEventListener('change', function(e) {
            const formGroup = this.closest('.form-group');
            
            if (this.validity.valid) {
                formGroup.classList.add('is-valid');
            }
            
            if (this.validity.invalid) {
                showErrorAlert();
                formGroup.classList.add('has-error');
            }
        });
        
        control.addEventListener('keyup', function() {
            const formGroup = this.closest('.form-group');
            formGroup.classList.remove('has-error');
        });
    });
}

window.addEventListener('load', function() {
    bindPasswordReveal();
    bindInputFocusListener();
    bindInputErrorHandler();
});

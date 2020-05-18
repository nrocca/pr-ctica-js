export default class Form_Validation {

    constructor() {
        (function() { 
            'use strict';
            window.addEventListener('load', function() {
                var forms = document.getElementsByClassName('needs-validation');
                var validation = Array.prototype.filter.call(forms, function(form) {
                    form.addEventListener('input', function(event) {
                        if (form.checkValidity() === false) {
                            event.preventDefault();
                            event.stopPropagation();
                        }
                        form.classList.add('was-validated');
                    }, false);
                });
            }, false);
        })();
    }
    

    // Crear métodos para validar aqui.
    // Mirar documentación de Bootstrap si es necesario:
    // https://getbootstrap.com/docs/4.0/components/forms/#validation
    
}
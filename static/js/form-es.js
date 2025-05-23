document.addEventListener('DOMContentLoaded', function() {
    // Form steps configuration
    const formSteps = [
        {
            id: 'step-1',
            title: '¿Qué volumen de desfibriladores desea gestionar?',
            type: 'radio',
            name: 'defibrillator-count',
            options: [
                { value: 'less-than-200', label: 'Menos de 200' },
                { value: '200-to-900', label: 'Entre 200 y 900' },
                { value: 'more-than-900', label: 'Más de 900' }
            ]
        },
        {
            id: 'step-2',
            title: '¡Perfecto! ¿Y para qué volumen de clientes?',
            type: 'radio',
            name: 'client-count',
            options: [
                { value: 'less-than-20', label: 'Menos de 20' },
                { value: '20-to-90', label: 'Entre 20 y 90' },
                { value: 'more-than-90', label: 'Más de 90' }
            ]
        },
        {
            id: 'step-3',
            title: 'Seleccione los principales fabricantes de los modelos que distribuye.',
            type: 'checkbox',
            name: 'manufacturers',
            options: [
                { value: 'zoll', label: 'Zoll' },
                { value: 'cardiac-science', label: 'Cardiac Science' },
                { value: 'philips', label: 'Philips' },
                { value: 'mindray', label: 'Mindray' },
                { value: 'schiller', label: 'Schiller' },
                { value: 'nihon-khoden', label: 'Nihon Khoden' },
                { value: 'bexen-cardio', label: 'Bexen Cardio' },
                { value: 'defibtech', label: 'Defibtech' },
                { value: 'heartsine', label: 'HeartSine' },
                { value: 'physio-control', label: 'Physio-Control' },
                { value: 'primedic', label: 'Primedic' },
                { value: 'medtronic', label: 'Medtronic' },
                { value: 'other', label: 'Otro' }
            ]
        },
        {
            id: 'step-4',
            title: '¡Genial! ¿Cuántos técnicos usarán el sistema de mantenimiento?',
            type: 'radio',
            name: 'technician-count',
            options: [
                { value: 'single', label: 'Solo uno' },
                { value: '2-to-9', label: 'Entre 2 y 9' },
                { value: 'more-than-9', label: 'Más de 9' }
            ]
        },
        {
            id: 'step-5',
            title: 'Introduzca un email para la cuenta de administración y facturación.',
            type: 'input',
            inputType: 'email',
            name: 'email',
            placeholder: 'Ej: su@email.com',
            validation: {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            }
        },
        {
            id: 'step-6',
            title: 'Introduzca la denominación comercial de su empresa.',
            type: 'input',
            inputType: 'text',
            name: 'company-name',
            placeholder: 'Ej: SuEmpresa',
            validation: {
                required: true,
                minLength: 2
            }
        },
        {
            id: 'step-7',
            title: '¡Encantado de conocerle! Presente brevemente su empresa y sus actividades (mín. 10 caracteres).',
            type: 'textarea',
            name: 'company-description',
            placeholder: 'Ej: Distribución, instalación y mantenimiento de desfibriladores',
            validation: {
                required: true,
                minLength: 10
            }
        },
        {
            id: 'step-8',
            title: 'Está listo para empezar.',
            type: 'final',
            content: `
                <div class="final-step-content">
                    
                    <div class="subscription-summary">
                        <h4 class="selectedplanBIG">Suscríbase al plan Mosaic.</h4>
                        <div class="price"><span id="subscription-price">199€</span> <span class="per-month">/mes (+IVA)</span></div>
                    </div>
                    
                    <div class="form-group">
                        <input type="text" id="partner-code" name="partner-code" placeholder="Código de Socio (Opcional)">
                    </div>
                    
                    <div class="form-group terms-checkbox">
                        <div class="toggle-container">
                            <input type="checkbox" id="terms-checkbox" name="terms-accepted" class="toggle-checkbox" required>
                            <span class="toggle-slider"></span>
                        </div>
                        <label for="terms-checkbox">
                            He leído y acepto las <a class="mimizzzr" href="/conditions">Condiciones Generales del Servicio</a> y la <a class="mimizzzr" href="/confidentialite">Política de Privacidad</a>.
                        </label>
                    </div>
                </div>
            `
        }
    ];
    
    let currentStep = 0;
    const formContainer = document.querySelector('.form-steps');
    
    // Initialize the form
    initializeForm();
    
    function initializeForm() {
        // Create steps dynamically
        formSteps.forEach((step, index) => {
            if (index > 0) { // Skip step 1 as it's already in HTML
                const stepElement = createStepElement(step, index);
                formContainer.appendChild(stepElement);
                
                if (index !== currentStep) {
                    stepElement.classList.add('hidden');
                }
            }
        });
        
        // Add event listeners for next/back buttons
        const allSteps = formContainer.querySelectorAll('.form-step');
        
        allSteps.forEach((step, index) => {
            const nextBtn = step.querySelector('.next-step');
            const backBtn = step.querySelector('.back-step');
            
            if (nextBtn) {
                nextBtn.addEventListener('click', () => {
                    if (validateStep(index)) {
                        goToNextStep(index);
                    }
                });
            }
            
            if (backBtn) {
                backBtn.addEventListener('click', () => {
                    goToPreviousStep(index);
                });
            }
        });
        
        // Add partner code event listener for the final step
        const finalStep = document.getElementById('step-8');
        if (finalStep) {
            const partnerCodeInput = finalStep.querySelector('#partner-code');
            const priceElement = finalStep.querySelector('#subscription-price');
            
            partnerCodeInput.addEventListener('input', function() {
                if (this.value === 'XL849WS772') {
                    priceElement.textContent = '169€';
                    // Update payment button link when code is applied
                    const payButton = finalStep.querySelector('.btn.primary');
                    if (payButton) {
                        payButton.setAttribute('href', 'https://square.link/u/xYUwHTdp');
                    }
                } else {
                    priceElement.textContent = '199€';
                    // Reset payment button link
                    const payButton = finalStep.querySelector('.btn.primary');
                    if (payButton) {
                        payButton.setAttribute('href', 'https://square.link/u/VHyhg0KZ');
                    }
                }
            });
            
            // Add terms checkbox validation
            const termsCheckbox = finalStep.querySelector('#terms-checkbox');
            const toggleContainer = finalStep.querySelector('.toggle-container');
            const toggleSlider = finalStep.querySelector('.toggle-slider');
            const payButton = finalStep.querySelector('.btn.primary');
            
            if (termsCheckbox && payButton) {
                // Make sure the button is disabled by default
                payButton.disabled = true;
                
                // Add listener to the checkbox
                termsCheckbox.addEventListener('change', function() {
                    payButton.disabled = !this.checked;
                });
                
                // Add listener to the toggle container to improve UX
                if (toggleContainer && toggleSlider) {
                    toggleContainer.addEventListener('click', function(e) {
                        // Prevent multiple clicks
                        if (e.target === termsCheckbox) return;
                        
                        // Toggle the checkbox state
                        termsCheckbox.checked = !termsCheckbox.checked;
                        
                        // Manually trigger change event
                        const changeEvent = new Event('change');
                        termsCheckbox.dispatchEvent(changeEvent);
                    });
                }
            }
        }
    }
    
    function createStepElement(stepConfig, index) {
        const stepElement = document.createElement('div');
        stepElement.classList.add('form-step');
        stepElement.setAttribute('id', stepConfig.id);
        
        // Add step title
        const title = document.createElement('h3');
        title.textContent = stepConfig.title;
        title.classList.add('isatitle2');
        stepElement.appendChild(title);
        
        // Add appropriate form elements based on step type
        if (stepConfig.type === 'radio') {
            const radioGroup = document.createElement('div');
            radioGroup.classList.add('radio-group');
            
            stepConfig.options.forEach(option => {
                const label = document.createElement('label');
                label.classList.add('radio-option');
                
                const input = document.createElement('input');
                input.type = 'radio';
                input.name = stepConfig.name;
                input.value = option.value;
                
                // Disable the validation button if no option is selected
                input.addEventListener('change', function() {
                    const nextButton = stepElement.querySelector('.next-step');
                    if (nextButton) {
                        // An option is definitely checked since we're in the change event
                        nextButton.disabled = false;
                    }
                });
                
                const span = document.createElement('span');
                span.textContent = option.label;
                span.classList.add('hujikolk');
                
                label.appendChild(input);
                label.appendChild(span);
                radioGroup.appendChild(label);
            });
            
            stepElement.appendChild(radioGroup);
        } else if (stepConfig.type === 'checkbox') {
            const checkboxGroup = document.createElement('div');
            checkboxGroup.classList.add('checkbox-group');
            
            stepConfig.options.forEach(option => {
                const label = document.createElement('label');
                label.classList.add('checkbox-option');
                
                const input = document.createElement('input');
                input.type = 'checkbox';
                input.name = `${stepConfig.name}[]`;
                input.value = option.value;
                
                // Enable button if at least one checkbox is checked
                input.addEventListener('change', function() {
                    const nextButton = stepElement.querySelector('.next-step');
                    if (nextButton) {
                        const checkedOptions = stepElement.querySelectorAll(`input[name="${stepConfig.name}[]"]:checked`);
                        nextButton.disabled = checkedOptions.length === 0;
                    }
                });
                
                const span = document.createElement('span');
                span.textContent = option.label;
                span.classList.add('hujikolk');
                
                label.appendChild(input);
                label.appendChild(span);
                checkboxGroup.appendChild(label);
            });
            
            stepElement.appendChild(checkboxGroup);
        } else if (stepConfig.type === 'input') {
            const formGroup = document.createElement('div');
            formGroup.classList.add('form-group');
            
            const input = document.createElement('input');
            input.type = stepConfig.inputType;
            input.name = stepConfig.name;
            input.id = stepConfig.name;
            input.placeholder = stepConfig.placeholder || '';
            
            if (stepConfig.validation) {
                if (stepConfig.validation.required) {
                    input.setAttribute('required', 'required');
                }
                if (stepConfig.validation.minLength) {
                    input.setAttribute('minlength', stepConfig.validation.minLength);
                }
                if (stepConfig.validation.pattern) {
                    input.setAttribute('pattern', stepConfig.validation.pattern.source);
                }
                
                // Disable the Validate button by default and enable only if data is valid
                input.addEventListener('input', function() {
                    const nextButton = stepElement.querySelector('.next-step');
                    if (nextButton) {
                        let isValid = true;
                        
                        if (stepConfig.validation.required && !this.value.trim()) {
                            isValid = false;
                        }
                        
                        if (stepConfig.validation.minLength && this.value.length < stepConfig.validation.minLength) {
                            isValid = false;
                        }
                        
                        if (stepConfig.validation.pattern && !stepConfig.validation.pattern.test(this.value)) {
                            isValid = false;
                        }
                        
                        nextButton.disabled = !isValid;
                    }
                });
                
                // Disable button by default during initialization
                setTimeout(() => {
                    const nextButton = stepElement.querySelector('.next-step');
                    if (nextButton && stepConfig.validation.required) {
                        nextButton.disabled = true;
                    }
                }, 0);
            }
            
            formGroup.appendChild(input);
            stepElement.appendChild(formGroup);
        } else if (stepConfig.type === 'textarea') {
            const formGroup = document.createElement('div');
            formGroup.classList.add('form-group');
            
            const textarea = document.createElement('textarea');
            textarea.name = stepConfig.name;
            textarea.id = stepConfig.name;
            textarea.placeholder = stepConfig.placeholder || '';
            textarea.rows = 5;
            
            if (stepConfig.validation) {
                if (stepConfig.validation.required) {
                    textarea.setAttribute('required', 'required');
                }
                if (stepConfig.validation.minLength) {
                    textarea.setAttribute('minlength', stepConfig.validation.minLength);
                }
                
                // Disable the Validate button by default and enable only if data is valid
                textarea.addEventListener('input', function() {
                    const nextButton = stepElement.querySelector('.next-step');
                    if (nextButton) {
                        let isValid = true;
                        
                        if (stepConfig.validation.required && !this.value.trim()) {
                            isValid = false;
                        }
                        
                        if (stepConfig.validation.minLength && this.value.length < stepConfig.validation.minLength) {
                            isValid = false;
                        }
                        
                        nextButton.disabled = !isValid;
                    }
                });
                
                // Disable button by default during initialization
                setTimeout(() => {
                    const nextButton = stepElement.querySelector('.next-step');
                    if (nextButton && stepConfig.validation.required) {
                        nextButton.disabled = true;
                    }
                }, 0);
            }
            
            formGroup.appendChild(textarea);
            stepElement.appendChild(formGroup);
        } else if (stepConfig.type === 'final') {
            // Insert custom HTML content
            stepElement.innerHTML += stepConfig.content;
        }
        
        // Add navigation controls
        const formControls = document.createElement('div');
        formControls.classList.add('form-controls');
        
        if (index > 0) {
            const backButton = document.createElement('button');
            backButton.classList.add('btn', 'secondary', 'back-step');
            backButton.textContent = 'Atrás';
            formControls.appendChild(backButton);
        }
        
        if (index < formSteps.length - 1) {
            const nextButton = document.createElement('button');
            nextButton.classList.add('btn', 'primary', 'next-step');
            nextButton.textContent = 'Siguiente';
            
            // Disable button by default for certain step types that require validation
            if (
                (stepConfig.type === 'radio' || stepConfig.type === 'checkbox') &&
                stepConfig.options && stepConfig.options.length > 0
            ) {
                nextButton.disabled = true;
            }
            
            formControls.appendChild(nextButton);
        } else if (index === formSteps.length - 1) {
            const submitButton = document.createElement('a');
            submitButton.classList.add('btn', 'primary');
            submitButton.textContent = 'Suscribirse';
            submitButton.setAttribute('href', 'https://square.link/u/VHyhg0KZ');
            submitButton.setAttribute('target', '_blank');
            formControls.appendChild(submitButton);
        }
        
        stepElement.appendChild(formControls);
        
        return stepElement;
    }
    
    function validateStep(stepIndex) {
        const stepConfig = formSteps[stepIndex];
        const stepElement = document.getElementById(stepConfig.id);
        
        if (!stepElement) return false;
        
        // Perform validation based on step type
        if (stepConfig.type === 'radio') {
            const selectedOption = stepElement.querySelector(`input[name="${stepConfig.name}"]:checked`);
            return !!selectedOption;
        } else if (stepConfig.type === 'checkbox') {
            const checkedOptions = stepElement.querySelectorAll(`input[name="${stepConfig.name}[]"]:checked`);
            return checkedOptions.length > 0;
        } else if (stepConfig.type === 'input' || stepConfig.type === 'textarea') {
            const input = stepElement.querySelector(`#${stepConfig.name}`);
            
            if (!input) return false;
            
            let isValid = true;
            
            if (stepConfig.validation) {
                if (stepConfig.validation.required && !input.value.trim()) {
                    isValid = false;
                }
                
                if (stepConfig.validation.minLength && input.value.length < stepConfig.validation.minLength) {
                    isValid = false;
                }
                
                if (stepConfig.validation.pattern && !stepConfig.validation.pattern.test(input.value)) {
                    isValid = false;
                }
            }
            
            return isValid;
        } else if (stepConfig.type === 'final') {
            const termsCheckbox = stepElement.querySelector('#terms-checkbox');
            return termsCheckbox ? termsCheckbox.checked : true;
        }
        
        return true;
    }
    
    function goToNextStep(currentIndex) {
        const currentStep = document.getElementById(formSteps[currentIndex].id);
        const nextIndex = currentIndex + 1;
        
        if (nextIndex < formSteps.length) {
            const nextStep = document.getElementById(formSteps[nextIndex].id);
            
            if (currentStep && nextStep) {
                currentStep.classList.add('hidden');
                nextStep.classList.remove('hidden');
            }
        }
    }
    
    function goToPreviousStep(currentIndex) {
        const currentStep = document.getElementById(formSteps[currentIndex].id);
        const prevIndex = currentIndex - 1;
        
        if (prevIndex >= 0) {
            const prevStep = document.getElementById(formSteps[prevIndex].id);
            
            if (currentStep && prevStep) {
                currentStep.classList.add('hidden');
                prevStep.classList.remove('hidden');
            }
        }
    }
});
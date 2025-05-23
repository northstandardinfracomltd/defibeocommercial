document.addEventListener('DOMContentLoaded', function() {
    // Form steps configuration
    const formSteps = [
        {
            id: 'step-1',
            title: 'Combien de défibrillateurs opérez-vous?',
            type: 'radio',
            name: 'defibrillator-count',
            options: [
                { value: 'less-than-200', label: 'Moins de 200' },
                { value: '200-to-900', label: 'Entre 200 à 900' },
                { value: 'more-than-900', label: 'Plus de 900' }
            ]
        },
        {
            id: 'step-2',
            title: 'Parfait! Et pour quel volume de clients?',
            type: 'radio',
            name: 'client-count',
            options: [
                { value: 'less-than-20', label: 'Moins de 20' },
                { value: '20-to-90', label: 'Entre 20 et 90' },
                { value: 'more-than-90', label: 'Plus de 90' }
            ]
        },
        {
            id: 'step-3',
            title: 'Sélectionnez les principaux fabricants des modèles que vous distribuez.',
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
                { value: 'other', label: 'Autre' }
            ]
        },
        {
            id: 'step-4',
            title: 'Super! Combien de techniciens vont utiliser le système de maintenance?',
            type: 'radio',
            name: 'technician-count',
            options: [
                { value: 'single', label: 'Un seul' },
                { value: '2-to-9', label: 'Entre 2 à 9' },
                { value: 'more-than-9', label: 'Plus de 9' }
            ]
        },
        {
            id: 'step-5',
            title: 'Entrez un email pour le compte administration et la facturation.',
            type: 'input',
            inputType: 'email',
            name: 'email',
            placeholder: 'Ex: votre@email.com',
            validation: {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            }
        },
        {
            id: 'step-6',
            title: 'Entrez la dénomination commerciale de votre entreprise.',
            type: 'input',
            inputType: 'text',
            name: 'company-name',
            placeholder: 'Ex: VotreEntreprise',
            validation: {
                required: true,
                minLength: 2
            }
        },
        {
            id: 'step-7',
            title: 'Enchanté! Présentez-nous en bref votre entreprise et vos activités (min 10 lettres).',
            type: 'textarea',
            name: 'company-description',
            placeholder: 'Ex: Distribution, installation et maintenance de défibrillateurs',
            validation: {
                required: true,
                minLength: 10
            }
        },
        {
            id: 'step-8',
            title: 'Vous êtes prêt(e) à commencer.',
            type: 'final',
            content: `
                <div class="final-step-content">
                    
                    <div class="subscription-summary">
                        <h4 class="selectedplanBIG">S'abonner au plan Mosaic.</h4>
                        <div class="price"><span id="subscription-price">199€</span> <span class="per-month">/mois (+TVA)</span></div>
                    </div>
                    
                    <div class="form-group">
                        <input type="text" id="partner-code" name="partner-code" placeholder="Code Partenaire (Optionnel)">
                    </div>
                    
                    <div class="form-group terms-checkbox">
                        <div class="toggle-container">
                            <input type="checkbox" id="terms-checkbox" name="terms-accepted" class="toggle-checkbox" required>
                            <span class="toggle-slider"></span>
                        </div>
                        <label for="terms-checkbox">
                            J'ai lu et j'accepte les <a class="mimizzzr" href="/conditions">Conditions Générales des Services</a> et la <a class="mimizzzr" href="/confidentialite">Politique de Confidentialité</a>.
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
                // S'assurer que le bouton est désactivé par défaut
                payButton.disabled = true;
                
                // Ajouter un écouteur sur la case à cocher
                termsCheckbox.addEventListener('change', function() {
                    payButton.disabled = !this.checked;
                });
                
                // Ajouter un écouteur sur le conteneur du toggle pour améliorer l'UX
                if (toggleContainer && toggleSlider) {
                    toggleContainer.addEventListener('click', function(e) {
                        // Empêcher les clics multiples
                        if (e.target === termsCheckbox) return;
                        
                        // Basculer l'état de la case à cocher
                        termsCheckbox.checked = !termsCheckbox.checked;
                        
                        // Déclencher manuellement l'événement change
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
                
                // Désactiver le bouton de validation si aucune option n'est sélectionnée
                input.addEventListener('change', function() {
                    const nextButton = stepElement.querySelector('.next-step');
                    if (nextButton) {
                        // On est sûr qu'une option est cochée puisque nous sommes dans l'event change
                        nextButton.disabled = false;
                    }
                });
                
                const span = document.createElement('span');
                span.textContent = option.label;
                
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
                
                // Activer le bouton si au moins une case est cochée
                input.addEventListener('change', function() {
                    const nextButton = stepElement.querySelector('.next-step');
                    if (nextButton) {
                        const checkedOptions = stepElement.querySelectorAll(`input[name="${stepConfig.name}[]"]:checked`);
                        nextButton.disabled = checkedOptions.length === 0;
                    }
                });
                
                const span = document.createElement('span');
                span.textContent = option.label;
                
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
                
                // Désactiver le bouton Valider par défaut et l'activer seulement si les données sont valides
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
                
                // Désactiver le bouton par défaut lors de l'initialisation
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
                
                // Désactiver le bouton Valider par défaut et l'activer seulement si les données sont valides
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
                
                // Désactiver le bouton par défaut lors de l'initialisation
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
            // For the final step with subscription details
            stepElement.innerHTML += stepConfig.content;
        }
        
        // Add navigation buttons
        const formControls = document.createElement('div');
        formControls.classList.add('form-controls');
        
        if (index > 0) { // Don't add back button to first step
            const backButton = document.createElement('button');
            backButton.classList.add('btn', 'secondary', 'back-step');
            backButton.textContent = 'Retour';
            formControls.appendChild(backButton);
        }
        
        if (index < formSteps.length - 1) { // Add next button for all except last step
            const nextButton = document.createElement('button');
            nextButton.classList.add('btn', 'primary', 'next-step');
            nextButton.textContent = 'Valider';
            // Désactiver le bouton de validation par défaut (pour étapes avec radio buttons)
            if (stepConfig.type === 'radio') {
                nextButton.disabled = true;
            }
            formControls.appendChild(nextButton);
        } else { // Add payment button for last step
            const payButton = document.createElement('a');
            payButton.classList.add('btn', 'primary');
            payButton.textContent = 'Souscrire';
            payButton.href = 'https://square.link/u/VHyhg0KZ'; // Placeholder for Stripe link
            payButton.disabled = true; // Disabled until terms are accepted
            formControls.appendChild(payButton);
        }
        
        stepElement.appendChild(formControls);
        
        return stepElement;
    }
    
    function validateStep(stepIndex) {
        const stepConfig = formSteps[stepIndex];
        const stepElement = document.getElementById(stepConfig.id);
        
        // For radio buttons, check if one option is selected
        if (stepConfig.type === 'radio') {
            const selectedRadio = stepElement.querySelector(`input[name="${stepConfig.name}"]:checked`);
            if (!selectedRadio) {
                alert('Veuillez sélectionner une option pour continuer.');
                return false;
            }
        }
        
        // For checkboxes, allow multiple selection (optional for now)
        if (stepConfig.type === 'checkbox') {
            // At least one checkbox should be selected
            const selectedCheckboxes = stepElement.querySelectorAll(`input[name="${stepConfig.name}[]"]:checked`);
            if (selectedCheckboxes.length === 0) {
                alert('Veuillez sélectionner au moins une option pour continuer.');
                return false;
            }
        }
        
        // For input fields, check if value is provided
        if (stepConfig.type === 'input') {
            const input = stepElement.querySelector(`input[name="${stepConfig.name}"]`);
            
            if (stepConfig.validation) {
                if (stepConfig.validation.required && !input.value.trim()) {
                    alert('Ce champ est obligatoire.');
                    return false;
                }
                
                if (stepConfig.validation.minLength && input.value.length < stepConfig.validation.minLength) {
                    alert(`Ce champ doit contenir au moins ${stepConfig.validation.minLength} caractères.`);
                    return false;
                }
                
                if (stepConfig.validation.pattern && !stepConfig.validation.pattern.test(input.value)) {
                    alert('Format invalide. Veuillez vérifier votre saisie.');
                    return false;
                }
            }
        }
        
        // For textarea fields, check if value is provided
        if (stepConfig.type === 'textarea') {
            const textarea = stepElement.querySelector(`textarea[name="${stepConfig.name}"]`);
            
            if (stepConfig.validation) {
                if (stepConfig.validation.required && !textarea.value.trim()) {
                    alert('Ce champ est obligatoire.');
                    return false;
                }
                
                if (stepConfig.validation.minLength && textarea.value.length < stepConfig.validation.minLength) {
                    alert(`Ce champ doit contenir au moins ${stepConfig.validation.minLength} caractères.`);
                    return false;
                }
            }
        }
        
        // For the final step, check if terms are accepted
        if (stepConfig.type === 'final') {
            const termsCheckbox = stepElement.querySelector('#terms-checkbox');
            if (!termsCheckbox.checked) {
                alert('Vous devez accepter les conditions générales pour continuer.');
                return false;
            }
        }
        
        return true;
    }
    
    function goToNextStep(currentIndex) {
        const currentStepElement = document.getElementById(formSteps[currentIndex].id);
        const nextStepElement = document.getElementById(formSteps[currentIndex + 1].id);
        
        currentStepElement.classList.add('hidden');
        nextStepElement.classList.remove('hidden');
        
        currentStep = currentIndex + 1;
        
        // Do not scroll, just instant switch
        // nextStepElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    function goToPreviousStep(currentIndex) {
        const currentStepElement = document.getElementById(formSteps[currentIndex].id);
        const prevStepElement = document.getElementById(formSteps[currentIndex - 1].id);
        
        currentStepElement.classList.add('hidden');
        prevStepElement.classList.remove('hidden');
        
        currentStep = currentIndex - 1;
        
        // Do not scroll, just instant switch
        // prevStepElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
});

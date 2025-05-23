// JavaScript for the new sections

// Attendre que le DOM soit complètement chargé avant d'exécuter le code
window.addEventListener('load', function() {
    console.log('Fenêtre entièrement chargée');
    
    // Obtenir les références aux éléments nécessaires
    const toggleFeaturesBtn = document.querySelector('#toggle-features-btn');
    const hiddenFeaturesGrid = document.querySelector('#features-hidden');
    
    console.log('Bouton toggle:', toggleFeaturesBtn);
    console.log('Grille cachée:', hiddenFeaturesGrid);
    
    // Vérifier si les deux éléments existent
    if (toggleFeaturesBtn && hiddenFeaturesGrid) {
        console.log('Éléments trouvés, ajout du gestionnaire d\'événements');
        
        // Ajouter l'écouteur d'événements sur le bouton
        toggleFeaturesBtn.addEventListener('click', function() {
            console.log('Bouton cliqué!');
            
            // Vérifier l'état actuel de la visibilité en utilisant getComputedStyle
            const isHidden = window.getComputedStyle(hiddenFeaturesGrid).display === 'none';
            console.log('Est actuellement caché?', isHidden);
            
            // Basculer la visibilité
            if (isHidden) {
                hiddenFeaturesGrid.style.display = 'grid';
                toggleFeaturesBtn.textContent = 'Afficher moins';
                console.log('Maintenant visible - Changé en "Afficher moins"');
            } else {
                hiddenFeaturesGrid.style.display = 'none';
                toggleFeaturesBtn.textContent = 'Montrer plus';
                console.log('Maintenant caché - Changé en "Montrer plus"');
            }
        });
    }
    
    // FAQ Accordion
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    if (accordionItems.length > 0) {
        accordionItems.forEach(item => {
            const header = item.querySelector('.accordion-header');
            
            header.addEventListener('click', function() {
                // Close all other accordion items
                accordionItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Toggle current item
                item.classList.toggle('active');
            });
        });
    }
});
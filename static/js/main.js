document.addEventListener('DOMContentLoaded', function() {
    // Show/Hide more text functionality
    const showMoreBtn = document.querySelector('.show-more-btn');
    const extendedDescription = document.querySelector('.description-extended');
    
    showMoreBtn.addEventListener('click', function() {
        extendedDescription.classList.toggle('hidden');
        showMoreBtn.textContent = extendedDescription.classList.contains('hidden') ? 'Voir Plus' : 'Voir Moins';
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.getElementById('site-header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Create Account button functionality
    const createAccountBtn = document.getElementById('create-account-btn');
    const registrationForm = document.getElementById('registration-form');
    
    createAccountBtn.addEventListener('click', function() {
        const heroSection = document.getElementById('hero');
        const headerHeight = document.getElementById('site-header').offsetHeight;
        const targetPosition = heroSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
        
        // Add a slight delay before focusing on the form to ensure scroll is complete
        setTimeout(() => {
            registrationForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 500);
    });
    
    // Defibrillator Search Functionality
    const searchInput = document.getElementById('defibrillator-search');
    const defibrillatorTable = document.getElementById('defibrillator-list');
    const tableRows = defibrillatorTable.querySelectorAll('tbody tr');
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        
        tableRows.forEach(row => {
            const manufacturer = row.cells[0].textContent.toLowerCase();
            const models = row.cells[1].textContent.toLowerCase();
            
            if (manufacturer.includes(searchTerm) || models.includes(searchTerm)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    });
    
    // Sticky header shadow effect on scroll
    window.addEventListener('scroll', function() {
        const header = document.getElementById('site-header');
        
        if (window.scrollY > 10) {
            header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.05)';
        }
    });
});

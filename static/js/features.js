document.addEventListener('DOMContentLoaded', function() {
    // Feature showcase functionality
    const featureTags = document.querySelectorAll('.tag');
    // const featureTitle = document.getElementById('feature-title'); - élément non présent dans le HTML
    const featureDescription = document.getElementById('feature-description');
    const featureImageContainer = document.getElementById('feature-image-container');
    
    // Define feature content
    const features = {
        'statistics': {
            title: 'Statistiques',
            description: 'Analysez les performances de votre entreprise avec des tableaux de bord intuitifs et des rapports détaillés. Visualisez les tendances, identifiez les opportunités d\'amélioration et prenez des décisions éclairées basées sur des données précises et en temps réel.',
            svg: `

            `
        },
        'defibrillators': {
            title: 'Défibrillateurs',
            description: 'Gérez l\'ensemble de votre parc de défibrillateurs avec une facilité sans précédent. Suivez les emplacements, surveillez les statuts, planifiez les maintenances et assurez la conformité de tous vos appareils depuis une interface unique et intuitive.',
            svg: `
<img src="https://cdn.glitch.global/bc7c2627-5dd9-4ad8-9dbe-07e5a31cd361/IDENTITY%20EDIXMATIC%20BLACK.svg?v=1743951473305" alt="EdixMatic Logo">
            `
        },
        'clients': {
            title: 'Clients',
            description: 'Centralisez toutes les informations relatives à vos clients dans un CRM intégré. Gérez facilement leurs coordonnées, visualisez leur parc de défibrillateurs, suivez leur historique de maintenance et générez des rapports personnalisés pour améliorer votre relation client.',
            svg: `
                <svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg" class="feature-svg">
                    <circle cx="100" cy="50" r="20" fill="#2c7be5" />
                    <path d="M100 70 L100 90 M80 80 L120 80" stroke="#2c7be5" stroke-width="4" />
                    <rect x="70" y="90" width="60" height="40" rx="5" fill="#f0f0f0" stroke="#ccc" />
                    <circle cx="60" cy="70" r="15" fill="#95aac9" />
                    <path d="M60 85 L60 95 M45 90 L75 90" stroke="#95aac9" stroke-width="3" />
                    <circle cx="140" cy="70" r="15" fill="#95aac9" />
                    <path d="M140 85 L140 95 M125 90 L155 90" stroke="#95aac9" stroke-width="3" />
                </svg>
            `
        },
        'maintenance': {
            title: 'Maintenances',
            description: 'Planifiez, suivez et documentez les opérations de maintenance préventive et corrective. Des rappels automatisés, des workflows personnalisables et des rapports détaillés vous aident à garantir que tous vos défibrillateurs sont toujours opérationnels et conformes aux normes.',
            svg: `
                <svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg" class="feature-svg">
                    <rect x="40" y="30" width="120" height="90" rx="5" fill="#f0f0f0" stroke="#ccc" />
                    <circle cx="100" cy="75" r="30" fill="none" stroke="#2c7be5" stroke-width="3" />
                    <path d="M100 55 L100 75 L115 85" stroke="#2c7be5" stroke-width="3" stroke-linecap="round" />
                    <path d="M70 35 L85 50 M115 50 L130 35 M70 115 L85 100 M115 100 L130 115" stroke="#333" stroke-width="2" />
                    <path d="M55 45 L65 55 M135 45 L145 55 M55 105 L65 95 M135 105 L145 95" stroke="#333" stroke-width="2" />
                </svg>
            `
        },
        'tickets': {
            title: 'Tickets',
            description: 'Gérez efficacement les demandes d\'intervention avec notre système de tickets intégré. Attribuez des tâches, définissez des priorités, suivez l\'état d\'avancement et communiquez directement avec vos techniciens pour une résolution rapide des problèmes.',
            svg: `
                <svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg" class="feature-svg">
                    <rect x="40" y="30" width="120" height="90" rx="5" fill="#f0f0f0" stroke="#ccc" />
                    <rect x="50" y="40" width="100" height="20" rx="3" fill="#e0e0e0" />
                    <rect x="50" y="70" width="100" height="10" rx="2" fill="#e0e0e0" />
                    <rect x="50" y="90" width="60" height="10" rx="2" fill="#e0e0e0" />
                    <circle cx="140" cy="95" r="10" fill="#2c7be5" />
                    <path d="M135 95 L140 100 L145 90" stroke="white" stroke-width="2" fill="none" />
                </svg>
            `
        },
        'inventory': {
            title: 'Inventaire',
            description: 'Gardez une trace précise de tous vos équipements, pièces détachées et consommables. Gérez les niveaux de stock, configurez des alertes de réapprovisionnement et assurez-vous que vos techniciens disposent toujours du matériel nécessaire pour leurs interventions.',
            svg: `
                <svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg" class="feature-svg">
                    <rect x="40" y="30" width="40" height="30" fill="#2c7be5" />
                    <rect x="40" y="65" width="40" height="30" fill="#2c7be5" />
                    <rect x="40" y="100" width="40" height="30" fill="#2c7be5" />
                    <rect x="85" y="30" width="40" height="30" fill="#95aac9" />
                    <rect x="85" y="65" width="40" height="30" fill="#95aac9" />
                    <rect x="85" y="100" width="40" height="30" fill="#95aac9" />
                    <rect x="130" y="30" width="40" height="30" fill="#e0e0e0" />
                    <rect x="130" y="65" width="40" height="30" fill="#e0e0e0" />
                    <rect x="130" y="100" width="40" height="30" fill="#e0e0e0" />
                </svg>
            `
        },
        'technicians': {
            title: 'Techniciens',
            description: 'Optimisez les plannings de vos techniciens, attribuez des tâches en fonction des compétences et de la proximité géographique, et suivez leur activité en temps réel. Améliorez la productivité et réduisez les temps de déplacement pour une meilleure efficacité opérationnelle.',
            svg: `
                <svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg" class="feature-svg">
                    <circle cx="70" cy="50" r="15" fill="#2c7be5" />
                    <path d="M70 65 L70 100" stroke="#2c7be5" stroke-width="3" />
                    <path d="M70 70 L50 85 M70 70 L90 85" stroke="#2c7be5" stroke-width="3" />
                    <path d="M70 100 L55 120 M70 100 L85 120" stroke="#2c7be5" stroke-width="3" />
                    <rect x="100" y="40" width="60" height="40" rx="5" fill="#f0f0f0" stroke="#ccc" />
                    <line x1="110" y1="50" x2="150" y2="50" stroke="#333" stroke-width="2" />
                    <line x1="110" y1="60" x2="140" y2="60" stroke="#333" stroke-width="2" />
                    <line x1="110" y1="70" x2="130" y2="70" stroke="#333" stroke-width="2" />
                    <path d="M95 60 L105 60" stroke="#333" stroke-width="2" stroke-dasharray="2 2" />
                </svg>
            `
        },
        'agreements': {
            title: 'Accords',
            description: 'Gérez tous vos contrats de maintenance et accords de niveau de service (SLA) en un seul endroit. Suivez les échéances, les engagements et les conditions spécifiques pour chaque client, assurant ainsi la transparence et le respect de vos obligations contractuelles.',
            svg: `
                <svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg" class="feature-svg">
                    <rect x="50" y="40" width="100" height="80" fill="#f0f0f0" stroke="#ccc" stroke-width="2" />
                    <rect x="60" y="50" width="80" height="10" rx="2" fill="#e0e0e0" />
                    <rect x="60" y="70" width="80" height="10" rx="2" fill="#e0e0e0" />
                    <rect x="60" y="90" width="80" height="10" rx="2" fill="#e0e0e0" />
                    <path d="M140 110 C135 105, 130 110, 125 105 S120 110, 115 105 S110 110, 105 105" stroke="#2c7be5" stroke-width="2" fill="none" />
                    <circle cx="145" cy="110" r="5" fill="#2c7be5" />
                </svg>
            `
        },
        'archives': {
            title: 'Archivés',
            description: 'Conservez un historique complet de toutes vos opérations, interventions et documents importants. Notre système d\'archivage sécurisé vous permet de retrouver facilement les informations historiques et de maintenir une traçabilité complète pour les audits et contrôles réglementaires.',
            svg: `
                <svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg" class="feature-svg">
                    <rect x="50" y="40" width="100" height="20" rx="5" fill="#95aac9" />
                    <rect x="50" y="65" width="100" height="20" rx="5" fill="#2c7be5" />
                    <rect x="50" y="90" width="100" height="20" rx="5" fill="#e0e0e0" />
                    <path d="M60 50 L80 50 M90 50 L110 50" stroke="white" stroke-width="2" />
                    <path d="M60 75 L80 75 M90 75 L110 75" stroke="white" stroke-width="2" />
                    <path d="M60 100 L80 100 M90 100 L110 100" stroke="#333" stroke-width="2" />
                </svg>
            `
        },
        'accounting': {
            title: 'Remontées Comptables',
            description: 'Simplifiez votre gestion financière avec nos outils de comptabilité intégrés. Générez automatiquement des factures, suivez les paiements, analysez la rentabilité par client ou par type d\'intervention, et exportez vos données vers votre logiciel de comptabilité.',
            svg: `
                <svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg" class="feature-svg">
                    <rect x="40" y="40" width="120" height="80" rx="5" fill="#f0f0f0" stroke="#ccc" />
                    <text x="70" y="65" font-size="12" fill="#333">€</text>
                    <text x="90" y="65" font-size="12" fill="#333">$</text>
                    <text x="110" y="65" font-size="12" fill="#333">£</text>
                    <text x="130" y="65" font-size="12" fill="#333">¥</text>
                    <rect x="60" y="80" width="80" height="20" rx="3" fill="#2c7be5" />
                    <path d="M70 90 L75 95 L85 85" stroke="white" stroke-width="2" fill="none" />
                    <path d="M95 90 L100 95 L110 85" stroke="white" stroke-width="2" fill="none" />
                </svg>
            `
        },
        'compliance': {
            title: 'Conformité',
            description: 'Assurez-vous que tous vos défibrillateurs respectent les normes et réglementations en vigueur. Notre système surveille automatiquement les échéances de maintenance, les dates de péremption des consommables et vous alerte en cas de non-conformité potentielle.',
            svg: `
                <svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg" class="feature-svg">
                    <circle cx="100" cy="75" r="40" fill="none" stroke="#2c7be5" stroke-width="3" />
                    <path d="M100 45 L100 75 L120 90" stroke="#2c7be5" stroke-width="3" stroke-linecap="round" />
                    <path d="M80 60 L95 75 L80 90" stroke="#00d97e" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" />
                </svg>
            `
        },
        'security': {
            title: 'Sécurité',
            description: 'Protégez vos données sensibles avec notre infrastructure hautement sécurisée. Contrôles d\'accès granulaires, authentification à deux facteurs, chiffrement des données et journalisation des activités garantissent la confidentialité et l\'intégrité de vos informations.',
            svg: `
                <svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg" class="feature-svg">
                    <path d="M100 40 L130 55 L130 90 L100 110 L70 90 L70 55 Z" fill="#f0f0f0" stroke="#2c7be5" stroke-width="3" />
                    <circle cx="100" cy="75" r="15" fill="#2c7be5" />
                    <rect x="95" y="65" width="10" height="20" rx="2" fill="#f0f0f0" />
                    <path d="M100 65 L100 75 L105 75" stroke="#f0f0f0" stroke-width="2" fill="none" />
                </svg>
            `
        },
        'storage': {
            title: 'Stockage',
            description: 'Stockez et organisez tous vos documents et fichiers importants dans notre solution cloud sécurisée. Accédez facilement aux manuels techniques, certificats, rapports d\'intervention et autres documents essentiels, où que vous soyez et depuis n\'importe quel appareil.',
            svg: `
                <svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg" class="feature-svg">
                    <path d="M60 70 C60 55, 140 55, 140 70 L140 100 C140 115, 60 115, 60 100 Z" fill="#f0f0f0" stroke="#ccc" stroke-width="2" />
                    <path d="M60 70 C60 85, 140 85, 140 70" stroke="#ccc" stroke-width="2" fill="none" />
                    <path d="M80 50 L80 70 M120 50 L120 70" stroke="#2c7be5" stroke-width="2" />
                    <path d="M80 50 C80 40, 120 40, 120 50" stroke="#2c7be5" stroke-width="2" fill="none" />
                    <ellipse cx="100" cy="95" rx="15" ry="5" fill="#2c7be5" />
                </svg>
            `
        }
    };

    // Set default active feature
    let activeFeature = 'statistics';
    updateFeatureContent(activeFeature);
    
    // Add click event to each tag
    featureTags.forEach(tag => {
        tag.addEventListener('click', function() {
            // Remove active class from all tags
            featureTags.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tag
            this.classList.add('active');
            
            // Update content based on selected feature
            const featureId = this.getAttribute('data-feature');
            activeFeature = featureId;
            updateFeatureContent(featureId);
        });
    });
    
    // Function to update feature content
    function updateFeatureContent(featureId) {
        const feature = features[featureId];
        
        if (feature) {
            // Update text content
            // featureTitle.textContent = feature.title; - élément non présent dans le HTML
            featureDescription.textContent = feature.description;
            
            // Update SVG image
            featureImageContainer.innerHTML = feature.svg;
            
            // Update active tag
            featureTags.forEach(tag => {
                if (tag.getAttribute('data-feature') === featureId) {
                    tag.classList.add('active');
                } else {
                    tag.classList.remove('active');
                }
            });
        }
    }
});

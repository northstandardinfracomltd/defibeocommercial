// Simple toggle script
function toggleMore() {
    var moreSection = document.getElementById('more-features');
    var btn = document.getElementById('toggle-btn');
    
    if (moreSection.style.display === 'none') {
        moreSection.style.display = 'block';
        btn.innerText = 'Afficher moins';
    } else {
        moreSection.style.display = 'none';
        btn.innerText = 'Montrer plus';
    }
}
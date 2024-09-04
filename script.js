
const sidebar = document.querySelector('aside');
const toggleSidebarButton = document.createElement('button');

toggleSidebarButton.textContent = '☰';
toggleSidebarButton.className = 'toggle-sidebar';
document.querySelector('header').prepend(toggleSidebarButton);

toggleSidebarButton.addEventListener('click', () => {
    sidebar.classList.toggle('hidden');
    document.querySelector('main').classList.toggle('expanded');
});


const searchButton = document.querySelector('.search-bar button');
const searchInput = document.querySelector('.search-bar input');
const videoCards = document.querySelectorAll('.video-card');

searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.toLowerCase();
    
    videoCards.forEach(card => {
        const title = card.querySelector('.video-info h3').textContent.toLowerCase();
        if (title.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});


searchInput.addEventListener('input', () => {
    if (searchInput.value === '') {
        videoCards.forEach(card => {
            card.style.display = 'block';
        });
    }
});

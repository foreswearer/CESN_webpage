// script.js
document.addEventListener('DOMContentLoaded', () => {

    loadPartial('partials/header.html', 'header-placeholder')
        .then(() => {
            const menuToggle = document.getElementById('menu-toggle');
            menuToggle.addEventListener('click', () => {
                const sidebar = document.getElementById('sidebar');
                sidebar.classList.toggle('open');
                document.getElementById('content-wrapper').classList.toggle('sidebar-open');
            });
        })
        .catch(err => console.error("Error loading header:", err));

    loadPartial('partials/sidebar.html', 'sidebar-placeholder')
        .catch(err => console.error("Error loading sidebar:", err));

    loadPartial('partials/footer.html', 'footer-placeholder')
        .catch(err => console.error("Error loading footer:", err));
});


/**
 * Fetch an HTML partial and insert it into a container by ID.
 */
function loadPartial(url, containerId) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(html => {
            document.getElementById(containerId).innerHTML = html;
        });
}

export default class Router {
    constructor(routes, targetId = 'app') {
        this.routes = routes;
        this.app = document.getElementById(targetId);
        this.init();
    }

    init() {
        window.addEventListener('hashchange', () => this.handleRoute());
        this.handleRoute(); // Handle initial load
    }

    async handleRoute() {
        let hash = window.location.hash.slice(1) || '/';
        if (hash === '') hash = '/';

        const route = this.routes[hash] || {
            render: async () => '<h1>404 - Page Not Found</h1><p>The requested route was not found in the application.</p>'
        };

        // Update active link in navbar (if exists)
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${hash}` || (hash === '/' && link.getAttribute('href') === '#/')) {
                link.classList.add('active');
            }
        });

        this.app.innerHTML = await route.render();
        if (route.afterRender) await route.afterRender();
    }
}

// Import pages
import Home from './pages/Home.js';
import Downloads from './pages/Downloads.js';
import Hardware from './pages/Hardware.js';
import Software from './pages/Software.js';
import Networking from './pages/Networking.js';
import Navbar from './components/Navbar.js';

// Define Routes
const routes = {
    '/': Home,
    '/downloads': Downloads,
    '/hardware': Hardware,
    '/software': Software,
    '/networking': Networking
};

// Initialize Router and Layout
document.addEventListener('DOMContentLoaded', () => {
    // Inject Layout Shell (Navbar + Footer)
    const app = document.getElementById('app');

    const layout = `
        ${Navbar.render()}
        <main id="main-content" class="main-container">
            <!-- Page Content -->
        </main>
        <footer>
            <div class="glass-card" style="display:inline-block; padding: 1rem 2rem;">
                <p>MIBE: Information Systems for Managers &copy; 2026</p>
                <p style="font-size: 0.8rem; margin-top: 0.5rem; opacity: 0.7;">Powered by Modern Web Standards</p>
            </div>
        </footer>
    `;

    // Override app container
    app.innerHTML = layout;

    // Theme Switcher Logic
    const themes = [null, 'light', 'warm']; // null is default (dark)
    let currentTheme = localStorage.getItem('theme');

    // Apply saved theme
    if (currentTheme) {
        document.body.dataset.theme = currentTheme;
    }

    const themeToggleBtn = document.getElementById('theme-toggle');
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const current = document.body.dataset.theme || null;
            const currentIndex = themes.indexOf(current);
            const nextIndex = (currentIndex + 1) % themes.length;
            const nextTheme = themes[nextIndex];

            if (nextTheme) {
                document.body.dataset.theme = nextTheme;
                localStorage.setItem('theme', nextTheme);
            } else {
                delete document.body.dataset.theme;
                localStorage.removeItem('theme');
            }
        });
    }

    // Re-instantiate Router but targeted at #main-content
    new Router(routes, 'main-content');
});

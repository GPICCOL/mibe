export default {
    render: () => {
        return `
        <nav class="glass-nav">
            <div class="navbar-container">
                <a href="#/" class="nav-brand">
                    <i class="fa fa-university"></i> MIBE <span style="font-weight: 300;">ISM</span>
                </a>
                <div class="nav-links">
                    <a href="#/" class="nav-link">Home</a>
                    <a href="#/downloads" class="nav-link">Downloads</a>
                    <a href="#/schedule" class="nav-link">Slides</a>
                    <button id="theme-toggle" class="nav-link" style="background: none; border: none; cursor: pointer; padding: 0; font: inherit;">
                        <i class="fa fa-adjust"></i> Theme
                    </button>
                </div>
            </div>
        </nav>
        `;
    }
}

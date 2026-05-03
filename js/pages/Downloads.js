export default {
    render: async () => {
        return `
        <section class="hero slide-in">
            <h1>Handouts & Materials</h1>
            <p>Access minicases, case studies, and other documents supporting our activities in class.</p>
        </section>

        <section class="main-container slide-in">
            <div class="modules-grid">
                
                <!-- Module 1 -->
                <div class="glass-card module-content">
                    <h3 class="module-title">Module 1 - Introduction</h3>
                    <ul>
                        <li>
                            <span>Chapter 1: Minicase</span>
                            <a href="handouts/ch1minicase.pdf" target="_blank">Facing Termination? <i class="fa fa-file-pdf"></i></a>
                        </li>
                    </ul>
                </div>

                <!-- Module 2 -->
                <div class="glass-card module-content">
                    <h3 class="module-title">Module 2 - Foundations</h3>
                    <ul>
                        <li>
                            <span>Chapter 2: Minicase</span>
                            <a href="handouts/ch2minicase.pdf" target="_blank">Parallel reality at Delta Airlines <i class="fa fa-file-pdf"></i></a>
                        </li>
                        <li>
                            <span>Chapter 2: Case Study</span>
                            <a href="handouts/ch2case.pdf" target="_blank">Troubleshooting Information Systems at the Royal Hotel <i class="fa fa-file-pdf"></i></a>
                        </li>
                         <li>
                            <span>Chapter 3: Minicase</span>
                            <a href="handouts/ch3minicase.pdf" target="_blank">Integration at BigPharma, Inc. <i class="fa fa-file-pdf"></i></a>
                        </li>
                    </ul>

                    <h4 style="color: var(--text-secondary); font-size: 0.9rem; margin-top: 1rem; margin-bottom: 0.5rem; text-transform: uppercase;">Interactive Tools</h4>
                    <ul>
                         <li><a href="https://viliusle.github.io/miniPaint/" target="_blank">Image Editing Software</a></li>
                         <li><a href="https://logic.ly/demo/" target="_blank">Logic.ly Circuit Drawing</a></li>
                         <li><a href="http://www.w3schools.com/html/" target="_blank">HTML Canvas</a></li>
                         <li><a href="http://www.w3schools.com/html/" target="_blank">JavaScript Canvas</a></li>
                         <li><a href="http://web.mit.edu/mprat/Public/web/Terminus/Web/main.html" target="_blank">Terminus Game</a></li>
                         <li><a href="http://www.speedtest.net/" target="_blank">Ookla Speedtest</a></li>
                         <li><a href="http://domaintoipconverter.com/" target="_blank">Domain to IP Converter</a></li>
                    </ul>
                </div>

                <!-- Module 3 -->
                <div class="glass-card module-content">
                    <h3 class="module-title">Module 3 - The Changing Competitive Environment</h3>
                    <h4 style="color: var(--text-secondary); font-size: 0.9rem; margin-top: 1rem; margin-bottom: 0.5rem; text-transform: uppercase;">GenAI - Resources</h4>
                    <ul>
                        <li>
                            <span>Case Study</span>
                            <a href="https://dds.cct.lsu.edu/wwwgp/mibe/cases/nivarta.pdf" target="_blank">Nivarta <i class="fa fa-file-pdf"></i></a>
                        </li>
                    </ul>

                    <ul>
                        <li>
                            <span>Chapter 4: Minicase</span>
                            <a href="https://dds.cct.lsu.edu/wwwgp/mibe/cases/Ch4-minicase.pdf" target="_blank">Facebook's Billion-Dollar Bet<i class="fa fa-file-pdf"></i></a>
                        </li>
                        <li>
                            <span>Minicase</span>
                            <a href="handouts/britannica_mini.pdf" target="_blank">Encyclopedia Britannica <i class="fa fa-file-pdf"></i></a>
                        </li>
                        <li>
                            <span>Case Study</span>
                            <a href="https://dds.cct.lsu.edu/wwwgp/mibe/cases/Ch4-fullcase.pdf" target="_blank">Online Education: No Revolution? <i class="fa fa-file-pdf"></i></a>
                        </li>
                    </ul>
                </div>

                <!-- Module 4 -->
                <div class="glass-card module-content">
                    <h3 class="module-title">Module 4 - Information Systems Planning and Added Value</h3>
                    <ul>
                        <li>
                            <span>Reading</span>
                            <a href="handouts/fp_digital business.pdf" target="_blank">Value Creation with Information Systems and Digital Technology <i class="fa fa-file-pdf"></i></a>
                        </li>
                    </ul>
                </div>

                <!-- Module 5 -->
                <div class="glass-card module-content">
                    <h3 class="module-title">Module 5 - Creation and Appropriation of Value</h3>
                    <ul>
                        <li>
                            <span>Case Study</span>
                            <a href="handouts/smalls_sliders_standalone.pdf" target="_blank">Small Sliders: The Composable Restaurant Franchise <i class="fa fa-file-pdf"></i></a>
                        </li>
                        <li>
                            <span>Exercise</span>
                            <a href="handouts/cslc.pdf" target="_blank">Customer Service Life Cycle <i class="fa fa-file-pdf"></i></a>
                        </li>
                        <li>
                            <span>Minicase</span>
                            <a href="handouts/ch7av1.pdf" target="_blank">Added Value at Al Dente <i class="fa fa-file-pdf"></i></a>
                        </li>
                        <li>
                            <span>Article</span>
                            <a href="handouts/ch9_it_doesnt matter_brief.pdf" target="_blank">IT Doesn't Matter (brief) <i class="fa fa-file-pdf"></i></a>
                        </li>
                    </ul>
                </div>

                <!-- Module 6 -->
                <div class="glass-card module-content">
                    <h3 class="module-title">Module 6 - Funding and Building Information Systems</h3>
                    <ul>
                        <li>
                            <span>Lego Game</span>
                            <a href="handouts/lego_requirements.pdf" target="_blank">Requirements Document <i class="fa fa-file-pdf"></i></a>
                        </li>
                    </ul>
                </div>

            </div>
        </section>
        `;
    }
}

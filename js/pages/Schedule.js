export default {
    render: async () => {
        return `
        <section class="hero slide-in">
            <h1>Schedule & Slides</h1>
            <p>Here you can find the course schedule and you can dowload the slides for the chapters already completed</p>
        </section>
        <section class="main-container slide-in">
            <div class="modules-grid">
                    <!-- Course Slides Card -->
                    <div class="glass-card">
                        <h3 style="color: var(--color-primary); margin-bottom: 1.5rem; border-bottom: 2px solid var(--glass-border); padding-bottom: 0.5rem;">Course Slides</h3>
                        <ul style="list-style: none; padding: 0;">
                            ${(() => {
                const baseUrl = "https://dds.cct.lsu.edu/wwwgp/mibe/slides/";
                const slides = [
                    { title: "Chapter 1", file: "01_trends.pdf" },
                    { title: "Chapter 2", file: "02_definitions.pdf" },
                    { title: "Hardware", file: "03_hardware.pdf" },
                    { title: "Software", file: "04_software.pdf" },
                    { title: "Networking", file: null },
                    { title: "Chapter 3", file: null },
                    { title: "Chapter 4", file: null },
                    { title: "Chapter 5", file: null },
                    { title: "Chapter 6", file: null },
                    { title: "Chapter 7", file: null },
                    { title: "Chapter 8", file: null },
                    { title: "Chapter 9", file: null },
                    { title: "Chapter 10", file: null },
                    { title: "Chapter 11", file: null },
                    { title: "Chapter 12", file: null },
                    { title: "Chapter 13", file: null }
                ];

                return slides.map(slide => `
                                    <li style="margin-bottom: 0.8rem; padding-bottom: 0.8rem; border-bottom: 1px solid rgba(255,255,255,0.05);">
                                        ${slide.file
                        ? `<a href="${baseUrl}${slide.file}" target="_blank" style="color: var(--text-primary); text-decoration: none; transition: color 0.3s;" onmouseover="this.style.color='var(--primary-color)'" onmouseout="this.style.color='var(--text-primary)'">${slide.title}: Download <i class="fa fa-download" style="font-size: 0.8em; margin-left: 5px;"></i></a>`
                        : `<span style="opacity: 0.5; cursor: not-allowed;">${slide.title}: Download</span>`
                    }
                                    </li>
                                `).join('');
            })()}
                        </ul>
                    </div>

                    <!-- Course Schedule Card -->
                    <div class="glass-card">
                        <h3 style="color: var(--color-primary); margin-bottom: 1.5rem; border-bottom: 2px solid var(--glass-border); padding-bottom: 0.5rem;">Class Schedule</h3>
                        <ul style="list-style: none; padding: 0;">
                            <!-- <li style="margin-bottom: 1.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid rgba(255,255,255,0.1);">
                                <h3 style="color: var(--color-primary); margin-bottom: 0.5rem;">Week of February 16</h3>
                                <p>Class held by Prof. Piccoli</p>
                            </li>
                            <li style="margin-bottom: 1.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid rgba(255,255,255,0.1);">
                                <h3 style="color: var(--color-primary); margin-bottom: 0.5rem;">Week of February 23</h3>
                                <p>Class held by Prof. Piccoli</p>
                            </li> -->
                            <li style="margin-bottom: 1.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid rgba(255,255,255,0.1);">
                                <h3 style="color: var(--color-primary); margin-bottom: 0.5rem;">Week of March 9</h3>
                                <p>Class held by Prof. Piccoli</p>
                            </li>
                            <li style="margin-bottom: 1.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid rgba(255,255,255,0.1);">
                                <h3 style="color: var(--color-primary); margin-bottom: 0.5rem;">Week of March 16</h3>
                                <p>Class held by Prof. Piccoli</p>
                            </li>
                            <li style="margin-bottom: 1.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid rgba(255,255,255,0.1);">
                                <h3 style="color: var(--color-primary); margin-bottom: 0.5rem;">Week of March 30</h3>
                                <p>Class held by Prof. Pigni</p>
                            </li>
                            <li style="margin-bottom: 1.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid rgba(255,255,255,0.1);">
                                <h3 style="color: var(--color-primary); margin-bottom: 0.5rem;">Week of April 20</h3>
                                <p>Class held by Prof. Pigni</p>
                            </li>
                            <li style="margin-bottom: 1.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid rgba(255,255,255,0.1);">
                                <h3 style="color: var(--color-primary); margin-bottom: 0.5rem;">Week of May 4</h3>
                                <p>Class held by Prof. Piccoli</p>
                            </li>
                            <li style="margin-bottom: 1.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid rgba(255,255,255,0.1);">
                                <h3 style="color: var(--color-primary); margin-bottom: 0.5rem;">Week of May 11</h3>
                                <p>Class held by Prof. Piccoli</p>
                            </li>
                            <li>
                                <h3 style="color: var(--color-primary); margin-bottom: 0.5rem;">Week of May 18</h3>
                                <p>Class held by Prof. Piccoli</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        `;
    },
    afterRender: async () => {
        // Any DOM manipulation after render
    }
}

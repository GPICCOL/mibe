export default {
    render: async () => {
        return `
        <!-- Hero / Introduction -->
        <section class="hero slide-in">
            <h1>Introduction</h1>
            <div class="glass-card" style="max-width: 800px; margin: 0 auto; text-align: left;">
                <p class="mb-4">
                    We will use this site as the full repository of course materials. We will also use <a href="https://mibeunipv.slack.com/" target="_blank" class="text-teal">Slack</a> for communication during and after the course.
                </p>
                
                <h3 class="module-title">Book and Learning Materials</h3>
                <p class="mb-4">
                    The book is available for purchase directly from the publisher in both electronic and paper format. There are two versions, one <a href="https://redshelf.com/app/ecom/book/1897819/information-systems-for-managers-in-the-digital-age-with-cases-edition-50-1897819-9781943153831-gabriele-piccoli-and-federico-pigni" target="_blank" class="text-teal">with full cases</a> and one <a href="https://redshelf.com/app/ecom/book/1903741/information-systems-for-managers-in-the-digital-age-without-cases-edition-50-1903741-9781943153855-gabriele-piccoli-and-federico-pigni" target="_blank" class="text-teal">without</a>.
                </p>
                <p>
                    We will also have three required readings on hardware, software and networking foundational concepts:
                </p>
                <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 1rem; position: relative; z-index: 2001;">
                    <a href="#/hardware" onclick="window.location.hash='/hardware'" class="glass-btn"><i class="fa fa-microchip"></i> Hardware</a>
                    <a href="#/software" onclick="window.location.hash='/software'" class="glass-btn"><i class="fa fa-code"></i> Software</a>
                    <a href="#/networking" onclick="window.location.hash='/networking'" class="glass-btn"><i class="fa fa-network-wired"></i> Networking</a>
                </div>
            </div>
        </section>

        <!-- Modules Grid -->
        <section class="main-container">
            <h2 class="hero-subtitle">Course Modules</h2>
            <div class="modules-grid">
                
                <!-- Module 1 -->
                <div class="glass-card module-content">
                    <h3 class="module-title">Module 1: Introduction</h3>
                    <p class="mb-4">While brief, this module serves as an important introduction to the course and its relevance to you as a future manager.</p>
                    
                    <h4 style="color: var(--text-secondary); font-size: 0.9rem; margin-top: 1rem; margin-bottom: 0.5rem; text-transform: uppercase;">Introduction - Resources</h4>
                    <ul>
                        <li><a href="https://a16z.com/2011/08/20/why-software-is-eating-the-world/" target="_blank">Why Software Is Eating the World</a></li>
                        <li><a href="https://a16z.com/2016/07/10/software-programs-the-world/" target="_blank">Software Programs the World</a></li>
                        <li><a href="handouts/andreessen2022.pdf" target="_blank">Find the smartest technologist...</a></li>
                        <li><a href="https://www.ben-evans.com/presentations" target="_blank">The Great Unbundling</a></li>
                    </ul>

                    <h4 style="color: var(--text-secondary); font-size: 0.9rem; margin-top: 1rem; margin-bottom: 0.5rem; text-transform: uppercase;">Chapter 1 - Resources</h4>
                    <ul>
                        <li><a href="https://hbr.org/2021/01/in-the-digital-economy-your-software-is-your-competitive-advantage" target="_blank">Your Software Is Your Competitive Advantage</a></li>
                        <li><a href="handouts/mckinsey-software-company.pdf" target="_blank">Every company is a software company</a></li>
                        <li><a href="handouts/dixon2017.pdf" target="_blank">How Aristotle Created the Computer</a></li>
                    </ul>
                </div>
                <!-- New Module Card -->
                <div class="glass-card module-content">
                    <h3 class="module-title">Module 2: Foundations</h3>
                       <p class="mb-4">
                       This module covers foundations of Information Systems and Organizational Systems concepts.
                       </p>
                        <h4 style="color: var(--text-secondary); font-size: 0.9rem; margin-top: 1rem; margin-bottom: 0.5rem; text-transform: uppercase;">
                           Hardware - Resources
                        </h4>
                          <ul>
                          <li>
                            <a href="#/hardware" target="_blank">Hardware</a>
                          </li>
                           <li>
                            <a href="https://dds.cct.lsu.edu/wwwgp/loop.jpg" target="_blank">Looping Images</a>
                          </li> 
                           <li>
                            <a href="https://viliusle.github.io/miniPaint/" target="_blank">Image Editing Software</a>
                          </li>
                           <li>
                            <a href="https://logic.ly/demo/" target="_blank">Logic.ly circuit drawing canvas</a>
                          </li>
                          </ul>
    
                        <h4 style="color: var(--text-secondary); font-size: 0.9rem; margin-top: 1rem; margin-bottom: 0.5rem; text-transform: uppercase;">
                           Software - Resources
                        </h4>
                        <ul>
                          <li>
                            <a href="#/software" target="_blank">Software</a>
                          </li>
                          <li>
                             <a href="https://www.oreilly.com/radar/the-end-of-programming-as-we-know-it/" target="_blank">The End of Programming as We Know It</a>
                          </li>
                           <li>
                            <a href="http://www.w3schools.com/html/" target="_blank">HTML canvas</a>
                          </li>
                           <li>
                            <a href="http://www.w3schools.com/html/" target="_blank">JavaScript canvas</a>
                          </li>
                          </ul>
                        <h4 style="color: var(--text-secondary); font-size: 0.9rem; margin-top: 1rem; margin-bottom: 0.5rem; text-transform: uppercase;">
                           Networking - Resources
                        </h4>
                        <ul>
                          <li>
                            <a href="#/networking" target="_blank">networking</a>
                          </li>
                           <li>
                            <a href="http://web.mit.edu/mprat/Public/web/Terminus/Web/main.html" target="_blank">Terminus game</a>
                          </li>
                          </ul>
                    </div>

                <!-- Placeholders for future modules can be added here -->
                <!-- 
                <div class="glass-card module-content" style="opacity: 0.5;">
                    <h3 class="module-title">Module 2: Foundations</h3>
                    <p>Coming Soon...</p>
                </div>
                -->

            </div>
        </section>
        `;
    },
    afterRender: async () => {
        // Any DOM manipulation after render
    }
}

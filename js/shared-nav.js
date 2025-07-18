// Shared navigation content
function getNavigationHTML(currentPage = '') {
    return `
        <div id="site-menu">
            <nav>
                <ul>
                    <li ${currentPage === 'home' ? 'class="current-menu-item"' : ''}><a href="index.html">Home</a></li>
                    <li ${currentPage === 'about' ? 'class="current-menu-item"' : ''}><a href="about.html">About</a></li>
                    <li ${currentPage === 'work' || currentPage === 'archive' ? 'class="current-menu-item"' : ''}><a href="work-categories.html">Work</a></li>
                    <li ${currentPage === 'contact' ? 'class="current-menu-item"' : ''}><a href="contact.html">Contact</a></li>
                </ul>
            </nav>
        </div>
        <div class="resume-button">
            <a href="resume.pdf" target="_blank" rel="noopener" class="btn btn-resume">Resume</a>
        </div>
    `;
}

// Function to ensure consistent header structure and navigation alignment
function injectNavigation(currentPage = '') {
    // Inject immediately if DOM is already ready, otherwise wait
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            performNavigation(currentPage);
        });
    } else {
        performNavigation(currentPage);
    }
}

function performNavigation(currentPage) {
    // Find the site-title div (this should be consistent across all pages)
    const siteTitle = document.querySelector('.site-title');
    if (!siteTitle) {
        console.error('Could not find .site-title element for navigation injection');
        return;
    }
    
    // Get the parent container (.inner)
    const innerContainer = siteTitle.parentNode;
    const headerContainer = innerContainer.parentNode; // .container
    
    // Remove any existing navigation
    const existingNav = innerContainer.querySelector('#site-menu');
    if (existingNav) {
        existingNav.remove();
    }
    
    // Detect content container type and adjust header accordingly
    const mainContent = document.querySelector('#content');
    const contentContainer = mainContent ? mainContent.querySelector('.container') : null;
    
    if (contentContainer) {
        // Make header container match content container classes
        const contentClasses = contentContainer.className;
        
        // If content has container-boxes or container-masonry, ensure header alignment
        if (contentClasses.includes('container-boxes') || contentClasses.includes('container-masonry')) {
            // These containers have different widths, so we standardize
            headerContainer.style.maxWidth = contentContainer.style.maxWidth || 'none';
            headerContainer.style.width = contentContainer.style.width || 'auto';
        }
        
        console.log(`Header aligned with content container: ${contentClasses}`);
    }
    
    // Insert the navigation right after the site-title div
    siteTitle.insertAdjacentHTML('afterend', getNavigationHTML(currentPage));
    
    // Apply consistent styling to ensure positioning
    const newNav = innerContainer.querySelector('#site-menu');
    if (newNav) {
        newNav.style.margin = '0';
        newNav.style.padding = '0';
        // Ensure it's visible immediately
        newNav.style.visibility = 'visible';
        newNav.style.opacity = '1';
    }
    
    console.log(`Navigation injected for ${currentPage} page with reduced flicker`);
}

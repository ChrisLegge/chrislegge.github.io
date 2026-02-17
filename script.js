// Theme Management
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Initialize theme (default to dark)
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    html.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function updateThemeIcon(theme) {
    const icon = document.querySelector('.theme-icon');
    icon.textContent = theme === 'light' ? '🌙' : '☀️';
}

themeToggle?.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

// Initialize theme on load
initTheme();

// Populate About Section (Home Page)
function populateAbout() {
    const nameEl = document.getElementById('name');
    const subtitleEl = document.getElementById('subtitle');
    const descriptionEl = document.getElementById('description');
    const githubLink = document.getElementById('githubLink');
    const linkedinLink = document.getElementById('linkedinLink');
    const itchLink = document.getElementById('itchLink');
    const cvButton = document.getElementById('cvButton');
    const cvLink = document.getElementById('cv-link');

    if (nameEl) nameEl.textContent = portfolioData.about.name;
    if (subtitleEl) subtitleEl.textContent = portfolioData.about.title;
    if (descriptionEl) descriptionEl.textContent = portfolioData.about.description;
    if (githubLink) githubLink.href = portfolioData.about.github;
    if (linkedinLink) linkedinLink.href = portfolioData.about.linkedin;
    if (itchLink) itchLink.href = portfolioData.about.itch;
    if (cvButton) cvButton.href = portfolioData.about.cv;
    if (cvLink) cvLink.href = portfolioData.about.cv;
}

// Populate Image Collage
function populateCollage() {
    const collage = document.getElementById('imageCollage');
    if (!collage) return;

    portfolioData.collageImages.forEach((image, index) => {
        const img = document.createElement('img');
        img.src = image;
        img.alt = `Collage image ${index + 1}`;
        img.className = 'collage-image';
        img.style.animationDelay = `${index * 0.1}s`;
        collage.appendChild(img);
    });
}

// Create Experience Card
function createExperienceCard(exp) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <img src="${exp.logo}" alt="${exp.company}" class="card-logo">
        <h3 class="card-title">${exp.title}</h3>
        <p class="card-company">${exp.company}</p>
        <p class="card-dates">${exp.dates}</p>
        <p class="card-summary">${exp.summary}</p>
    `;
    return card;
}

// Create Project Card
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <div class="card-image-container">
            <img src="${project.image}" alt="${project.title}" class="card-image">
        </div>
        <h3 class="card-title">${project.title}</h3>
        <p class="card-dates">${project.dates}</p>
        <p class="card-summary">${project.summary}</p>
    `;
    return card;
}

// Create Competition Card
function createCompetitionCard(comp) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <div class="card-image-container">
            <img src="${comp.image}" alt="${comp.title}" class="card-image">
        </div>
        <h3 class="card-title">${comp.title}</h3>
        <p class="card-dates">${comp.dates}</p>
        <p class="card-summary">${comp.summary}</p>
    `;
    return card;
}

// Populate Home Page Grids (first 3 items)
function populateHomeGrids() {
    const experienceGrid = document.getElementById('experienceGrid');
    const projectsGrid = document.getElementById('projectsGrid');
    const competitionsGrid = document.getElementById('competitionsGrid');

    if (experienceGrid) {
        portfolioData.experience.slice(0, 3).forEach((exp, index) => {
            const card = createExperienceCard(exp);
            card.style.animationDelay = `${index * 0.1}s`;
            experienceGrid.appendChild(card);
        });
    }

    if (projectsGrid) {
        portfolioData.projects.slice(0, 3).forEach((project, index) => {
            const card = createProjectCard(project);
            card.style.animationDelay = `${index * 0.1}s`;
            projectsGrid.appendChild(card);
        });
    }

    if (competitionsGrid) {
        portfolioData.competitions.slice(0, 3).forEach((comp, index) => {
            const card = createCompetitionCard(comp);
            card.style.animationDelay = `${index * 0.1}s`;
            competitionsGrid.appendChild(card);
        });
    }
}

// Populate Education Section
function populateEducation() {
    const educationGrid = document.getElementById('educationGrid');
    if (!educationGrid) return;

    portfolioData.education.forEach(edu => {
        const item = document.createElement('div');
        item.className = 'education-item';
        item.innerHTML = `
            <img src="${edu.logo}" alt="${edu.institution}" class="education-logo">
            <div class="education-info">
                <h3>${edu.institution}</h3>
                <p>${edu.degree}</p>
            </div>
            <span class="education-dates">${edu.dates}</span>
        `;
        educationGrid.appendChild(item);
    });
}

// Create Detail Item (for full pages)
function createDetailItem(item, type) {
    const detailItem = document.createElement('div');
    detailItem.className = 'detail-item';

    // Format details text (replace \n• with proper bullet points)
    const formattedDetails = item.details ? item.details.replace(/\n•/g, '<br>•') : '';

    if (type === 'experience') {
        detailItem.innerHTML = `
            <img src="${item.logo}" alt="${item.company}" class="detail-logo">
            <div class="detail-content">
                <div class="detail-header">
                    <h3 class="detail-title">${item.title}</h3>
                    <span class="detail-dates">${item.dates}</span>
                </div>
                <p class="detail-company">${item.company}</p>
                <p class="detail-summary">${item.summary}</p>
                ${item.details ? `
                    <div class="detail-description" style="display: none;">
                        <p>${formattedDetails}</p>
                    </div>
                    <button class="read-more-btn">Read More</button>
                ` : ''}
            </div>
        `;
    } else {
        detailItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}" class="detail-image">
            <div class="detail-content">
                <div class="detail-header">
                    <h3 class="detail-title">${item.title}</h3>
                    <span class="detail-dates">${item.dates}</span>
                </div>
                <p class="detail-summary">${item.summary}</p>
                ${item.details ? `
                    <div class="detail-description" style="display: none;">
                        <p>${formattedDetails}</p>
                    </div>
                    <button class="read-more-btn">Read More</button>
                ` : ''}
            </div>
        `;
    }

    // Add click event for Read More button
    if (item.details) {
        const readMoreBtn = detailItem.querySelector('.read-more-btn');
        const detailDescription = detailItem.querySelector('.detail-description');

        readMoreBtn.addEventListener('click', () => {
            const isExpanded = detailDescription.style.display !== 'none';

            if (isExpanded) {
                detailDescription.style.display = 'none';
                readMoreBtn.textContent = 'Read More';
            } else {
                detailDescription.style.display = 'block';
                readMoreBtn.textContent = 'Read Less';
            }
        });
    }

    return detailItem;
}

// Populate Detail Pages
function populateDetailPage() {
    const experienceList = document.getElementById('experienceList');
    const projectsList = document.getElementById('projectsList');
    const competitionsList = document.getElementById('competitionsList');

    if (experienceList) {
        portfolioData.experience.forEach((exp, index) => {
            const item = createDetailItem(exp, 'experience');
            item.style.animationDelay = `${index * 0.1}s`;
            experienceList.appendChild(item);
        });
    }

    if (projectsList) {
        portfolioData.projects.forEach((project, index) => {
            const item = createDetailItem(project, 'project');
            item.style.animationDelay = `${index * 0.1}s`;
            projectsList.appendChild(item);
        });
    }

    if (competitionsList) {
        portfolioData.competitions.forEach((comp, index) => {
            const item = createDetailItem(comp, 'competition');
            item.style.animationDelay = `${index * 0.1}s`;
            competitionsList.appendChild(item);
        });
    }
}

// Scroll Animation Observer
function initScrollAnimations() {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        },
        {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        }
    );

    // Observe all cards and detail items
    document.querySelectorAll('.card, .detail-item').forEach(el => {
        observer.observe(el);
    });
}

// Smooth Scroll for Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Initialize Everything on Page Load
document.addEventListener('DOMContentLoaded', () => {
    // Populate content
    populateAbout();
    populateCollage();
    populateHomeGrids();
    populateEducation();
    populateDetailPage();

    // Initialize animations
    setTimeout(() => {
        initScrollAnimations();
    }, 100);

    // Add CV link to nav
    const cvNavLink = document.getElementById('cv-link');
    if (cvNavLink) {
        cvNavLink.href = portfolioData.about.cv;
    }
});

// Add subtle parallax effect to collage images
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const collageImages = document.querySelectorAll('.collage-image');

    collageImages.forEach((img, index) => {
        const speed = 0.05 * (index + 1);
        img.style.transform = `translateY(${scrolled * speed}px) scale(1)`;
    });
});

// Hover effect enhancement for cards
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.card:hover');

    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        card.style.transform = `translateY(-4px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
});

document.addEventListener('mouseout', (e) => {
    if (e.target.classList.contains('card')) {
        e.target.style.transform = '';
    }
});

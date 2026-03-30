// Theme Management
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

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

initTheme();

// ─── Populate About Section ───────────────────────────────────────────────────
function populateAbout() {
    const nameEl       = document.getElementById('name');
    const subtitleEl   = document.getElementById('subtitle');
    const descriptionEl = document.getElementById('description');
    const githubLink   = document.getElementById('githubLink');
    const linkedinLink = document.getElementById('linkedinLink');
    const itchLink     = document.getElementById('itchLink');
    const cvButton     = document.getElementById('cvButton');
    const cvLink       = document.getElementById('cv-link');

    if (nameEl)        nameEl.textContent        = portfolioData.about.name;
    if (subtitleEl)    subtitleEl.textContent     = portfolioData.about.title;
    if (descriptionEl) descriptionEl.textContent  = portfolioData.about.description;
    if (githubLink)    githubLink.href            = portfolioData.about.github;
    if (linkedinLink)  linkedinLink.href          = portfolioData.about.linkedin;
    if (itchLink)      itchLink.href              = portfolioData.about.itch;
    if (cvButton)      cvButton.href              = portfolioData.about.cv;
    if (cvLink)        cvLink.href                = portfolioData.about.cv;
}

// ─── Populate Image Collage ───────────────────────────────────────────────────
function populateCollage() {
    const collage = document.getElementById('imageCollage');
    if (!collage) return;

    portfolioData.collageImages.forEach((image, index) => {
        const img = document.createElement('img');
        img.src   = image;
        img.alt   = `Collage image ${index + 1}`;
        img.className = 'collage-image';
        img.style.animationDelay = `${index * 0.1}s`;
        collage.appendChild(img);
    });
}

// ─── Media helper (image or video element for cards) ─────────────────────────
function makeCardMedia(item) {
    if (item.video) {
        return `<div class="card-image-container card-video-wrapper" data-video-src="${item.video}">
            <video src="${item.video}" class="card-image" autoplay muted loop playsinline></video>
            <div class="play-overlay">
                <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
                    <circle cx="26" cy="26" r="25" fill="rgba(0,0,0,0.55)" stroke="white" stroke-width="1.5"/>
                    <polygon points="21,17 38,26 21,35" fill="white"/>
                </svg>
            </div>
        </div>`;
    }
    if (item.image) {
        return `<div class="card-image-container">
            <img src="${item.image}" alt="${item.title}" class="card-image">
        </div>`;
    }
    return '';
}

function makeDetailMedia(item) {
    if (item.video) {
        return `<video src="${item.video}" class="detail-image" controls muted></video>`;
    }
    if (item.image) {
        return `<img src="${item.image}" alt="${item.title}" class="detail-image">`;
    }
    return '';
}

// ─── Build href for home-page card "Read More" buttons ───────────────────────
function getReadMoreHref(item, detailPage, index) {
    if (item.fullPage && item.pageUrl) return item.pageUrl;
    return `${detailPage}?expand=${index}`;
}

// ─── Home Page Card Creators ──────────────────────────────────────────────────
function createExperienceCard(exp, index) {
    const card = document.createElement('div');
    card.className = 'card';
    const href = getReadMoreHref(exp, 'experience.html', index);
    card.innerHTML = `
        <img src="${exp.logo}" alt="${exp.company}" class="card-logo">
        <h3 class="card-title">${exp.title}</h3>
        <p class="card-company">${exp.company}</p>
        <p class="card-dates">${exp.dates}</p>
        <p class="card-summary">${exp.summary}</p>
        <a href="${href}" class="card-read-more">Read More</a>
    `;
    return card;
}

function createProjectCard(project, index) {
    const card = document.createElement('div');
    card.className = 'card';
    const href = getReadMoreHref(project, 'projects.html', index);
    card.innerHTML = `
        ${makeCardMedia(project)}
        <h3 class="card-title">${project.title}</h3>
        <p class="card-dates">${project.dates}</p>
        <p class="card-summary">${project.summary}</p>
        <a href="${href}" class="card-read-more">Read More</a>
    `;
    return card;
}

function createCompetitionCard(comp, index) {
    const card = document.createElement('div');
    card.className = 'card';
    const href = getReadMoreHref(comp, 'competitions.html', index);
    card.innerHTML = `
        ${makeCardMedia(comp)}
        <h3 class="card-title">${comp.title}</h3>
        <p class="card-dates">${comp.dates}</p>
        <p class="card-summary">${comp.summary}</p>
        <a href="${href}" class="card-read-more">Read More</a>
    `;
    return card;
}

// ─── Populate Home Page Grids (first 3 items) ────────────────────────────────
function populateHomeGrids() {
    const experienceGrid   = document.getElementById('experienceGrid');
    const projectsGrid     = document.getElementById('projectsGrid');
    const competitionsGrid = document.getElementById('competitionsGrid');

    if (experienceGrid) {
        portfolioData.experience.slice(0, 3).forEach((exp, index) => {
            const card = createExperienceCard(exp, index);
            card.style.animationDelay = `${index * 0.1}s`;
            experienceGrid.appendChild(card);
        });
    }
    if (projectsGrid) {
        portfolioData.projects.slice(0, 3).forEach((project, index) => {
            const card = createProjectCard(project, index);
            card.style.animationDelay = `${index * 0.1}s`;
            projectsGrid.appendChild(card);
        });
    }
    if (competitionsGrid) {
        portfolioData.competitions.slice(0, 3).forEach((comp, index) => {
            const card = createCompetitionCard(comp, index);
            card.style.animationDelay = `${index * 0.1}s`;
            competitionsGrid.appendChild(card);
        });
    }
}

// ─── Populate Education Section ───────────────────────────────────────────────
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

// ─── Populate Contact Section ─────────────────────────────────────────────────
function populateContact() {
    const contactGrid = document.getElementById('contactGrid');
    if (!contactGrid) return;

    const githubSvg = `<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>`;
    const linkedinSvg = `<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`;
    const emailSvg = `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,4 12,13 22,4"/></svg>`;

    const contacts = [
        { href: portfolioData.about.github,                        label: 'GitHub',   sub: 'View my code',       icon: githubSvg },
        { href: portfolioData.about.linkedin,                      label: 'LinkedIn', sub: 'Connect with me',    icon: linkedinSvg },
        { href: portfolioData.about.email ? `mailto:${portfolioData.about.email}` : null,
                                                                   label: 'Email',    sub: portfolioData.about.email || '', icon: emailSvg },
    ];

    contacts.forEach(c => {
        if (!c.href) return;
        const a = document.createElement('a');
        a.href = c.href;
        a.className = 'contact-card';
        if (!c.href.startsWith('mailto:')) a.target = '_blank';
        a.innerHTML = `
            <div class="contact-card-icon">${c.icon}</div>
            <div class="contact-card-text">
                <span class="contact-card-label">${c.label}</span>
                <span class="contact-card-sub">${c.sub}</span>
            </div>
        `;
        contactGrid.appendChild(a);
    });
}

// ─── Populate Interests Page ──────────────────────────────────────────────────
function populateInterests() {
    const list = document.getElementById('interestsList');
    if (!list || !portfolioData.interests || !portfolioData.interests.length) return;

    portfolioData.interests.forEach((interest, index) => {
        if (index > 0) {
            const hr = document.createElement('hr');
            hr.className = 'interest-divider';
            list.appendChild(hr);
        }

        const item = document.createElement('div');
        item.className = 'interest-item';
        item.innerHTML = `
            <img src="${interest.image}" alt="${interest.title}" class="interest-image">
            <div class="interest-content">
                <h3 class="interest-title">${interest.title}</h3>
                <p class="interest-summary">${interest.summary}</p>
                ${interest.tags ? `
                    <div class="interest-tags">
                        ${interest.tags.map(t => `<span class="interest-tag">${t}</span>`).join('')}
                    </div>` : ''}
            </div>
        `;
        list.appendChild(item);
    });
}

// ─── Populate Skills Page ─────────────────────────────────────────────────────
function populateSkills() {
    const grid = document.getElementById('skillsGrid');
    if (!grid || !portfolioData.skills || !portfolioData.skills.length) return;

    portfolioData.skills.forEach(category => {
        const card = document.createElement('div');
        card.className = 'skill-category-card';
        card.innerHTML = `
            ${category.image ? `<img src="${category.image}" alt="${category.category}" class="skill-category-image">` : ''}
            <h3 class="skill-category-title">${category.category}</h3>
            ${category.description ? `<p class="skill-category-desc">${category.description}</p>` : ''}
            <div class="skill-items">
                ${(category.items || []).map(it => `
                    <div class="skill-item">
                        <span class="skill-name">${it.name}</span>
                    </div>`).join('')}
            </div>
        `;
        grid.appendChild(card);
    });
}

// ─── Populate Gallery Page ────────────────────────────────────────────────────
function populateGallery() {
    const masonry = document.getElementById('galleryMasonry');
    if (!masonry || !portfolioData.gallery || !portfolioData.gallery.length) return;

    portfolioData.gallery.forEach((entry, index) => {
        const src     = typeof entry === 'string' ? entry : entry.src;
        const alt     = typeof entry === 'object' && entry.alt     ? entry.alt     : `Gallery image ${index + 1}`;
        const caption = typeof entry === 'object' && entry.caption ? entry.caption : null;

        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.innerHTML = `
            <img src="${src}" alt="${alt}" class="gallery-img" loading="lazy">
            ${caption ? `<p class="gallery-caption">${caption}</p>` : ''}
        `;
        masonry.appendChild(item);
    });
}

// ─── Create Detail Item (experience / projects / competitions pages) ──────────
function createDetailItem(item, type) {
    const detailItem = document.createElement('div');
    detailItem.className = 'detail-item';

    const formattedDetails = item.details ? item.details.replace(/\n•/g, '<br>•') : '';

    let actionButton = '';
    if (item.fullPage && item.pageUrl) {
        actionButton = `<a href="${item.pageUrl}" class="read-more-btn">Read More</a>`;
    } else if (item.details) {
        actionButton = `
            <div class="detail-description" style="display: none;">
                <p>${formattedDetails}</p>
            </div>
            <button class="read-more-btn">Read More</button>
        `;
    }

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
                ${actionButton}
            </div>
        `;
    } else {
        detailItem.innerHTML = `
            ${makeDetailMedia(item)}
            <div class="detail-content">
                <div class="detail-header">
                    <h3 class="detail-title">${item.title}</h3>
                    <span class="detail-dates">${item.dates}</span>
                </div>
                <p class="detail-summary">${item.summary}</p>
                ${actionButton}
            </div>
        `;
    }

    if (!item.fullPage && item.details) {
        const btn  = detailItem.querySelector('button.read-more-btn');
        const desc = detailItem.querySelector('.detail-description');
        btn.addEventListener('click', () => {
            const open = desc.style.display !== 'none';
            desc.style.display = open ? 'none' : 'block';
            btn.textContent    = open ? 'Read More' : 'Read Less';
        });
    }

    return detailItem;
}

// ─── Populate Detail Pages ────────────────────────────────────────────────────
function populateDetailPage() {
    const experienceList  = document.getElementById('experienceList');
    const projectsList    = document.getElementById('projectsList');
    const competitionsList = document.getElementById('competitionsList');

    if (experienceList) {
        portfolioData.experience.forEach(exp => {
            experienceList.appendChild(createDetailItem(exp, 'experience'));
        });
    }
    if (projectsList) {
        portfolioData.projects.forEach(project => {
            projectsList.appendChild(createDetailItem(project, 'project'));
        });
    }
    if (competitionsList) {
        portfolioData.competitions.forEach(comp => {
            competitionsList.appendChild(createDetailItem(comp, 'competition'));
        });
    }
}

// ─── Auto-expand item via ?expand=INDEX URL param ─────────────────────────────
function handleExpandParam() {
    const params = new URLSearchParams(window.location.search);
    const expandIndex = params.get('expand');
    if (expandIndex === null) return;

    const index = parseInt(expandIndex);
    if (isNaN(index)) return;

    const listEl = document.getElementById('experienceList') ||
                   document.getElementById('projectsList')   ||
                   document.getElementById('competitionsList');
    if (!listEl) return;

    const targetItem = listEl.querySelectorAll('.detail-item')[index];
    if (!targetItem) return;

    targetItem.classList.add('animate');

    const btn  = targetItem.querySelector('button.read-more-btn');
    const desc = targetItem.querySelector('.detail-description');
    if (btn && desc) {
        desc.style.display = 'block';
        btn.textContent    = 'Read Less';
    }

    setTimeout(() => {
        const navbar = document.querySelector('.navbar');
        const navbarHeight = navbar ? navbar.offsetHeight : 0;
        const top = targetItem.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 16;
        window.scrollTo({ top, behavior: 'smooth' });
    }, 150);
}

// ─── Scroll Animation Observer ────────────────────────────────────────────────
function initScrollAnimations() {
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('animate');
            });
        },
        { threshold: 0.05, rootMargin: '0px 0px 0px 0px' }
    );

    document.querySelectorAll('.card, .detail-item, .entry-section, .interest-item, .skill-category-card').forEach(el => {
        observer.observe(el);
    });
}

// ─── Sidebar Scroll Navigation (home page only) ───────────────────────────────
function initSidebarNav() {
    const dots = document.querySelectorAll('.sidebar-dot');
    if (!dots.length) return;

    const sections = document.querySelectorAll('section[id]');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                dots.forEach(d => d.classList.remove('active'));
                const active = document.querySelector(`.sidebar-dot[href="#${entry.target.id}"]`);
                if (active) active.classList.add('active');
            }
        });
    }, { threshold: 0.3, rootMargin: '-15% 0px -15% 0px' });

    sections.forEach(s => observer.observe(s));

    dots.forEach(dot => {
        dot.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(dot.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
}

// ─── Smooth Scroll for anchor links ──────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// ─── Init on DOMContentLoaded ─────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    populateAbout();
    populateCollage();
    populateHomeGrids();
    populateEducation();
    populateDetailPage();
    populateContact();
    populateInterests();
    populateSkills();
    populateGallery();
    handleExpandParam();

    initBurgerMenu();
    initVideoLightbox();

    setTimeout(() => {
        initScrollAnimations();
        initSidebarNav();
    }, 100);

    const cvNavLink = document.getElementById('cv-link');
    if (cvNavLink) cvNavLink.href = portfolioData.about.cv;
});

// ─── Burger Menu ─────────────────────────────────────────────────────────────
function initBurgerMenu() {
    const burger     = document.getElementById('burgerBtn');
    const navContent = document.getElementById('navContent');
    if (!burger || !navContent) return;

    burger.addEventListener('click', () => {
        burger.classList.toggle('open');
        navContent.classList.toggle('open');
    });

    // Close when a nav link is clicked
    navContent.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            burger.classList.remove('open');
            navContent.classList.remove('open');
        });
    });

    // Close when clicking outside the navbar
    document.addEventListener('click', e => {
        if (!e.target.closest('.navbar')) {
            burger.classList.remove('open');
            navContent.classList.remove('open');
        }
    });
}

// ─── Video Lightbox ───────────────────────────────────────────────────────────
function initVideoLightbox() {
    const lb = document.createElement('div');
    lb.className = 'video-lightbox';
    lb.innerHTML = `
        <div class="video-lightbox-inner">
            <button class="video-lightbox-close" aria-label="Close">✕</button>
            <video controls></video>
        </div>
    `;
    document.body.appendChild(lb);

    const lbVideo = lb.querySelector('video');
    const closeBtn = lb.querySelector('.video-lightbox-close');

    function openLightbox(src) {
        lbVideo.src = src;
        lbVideo.play();
        lb.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lb.classList.remove('open');
        lbVideo.pause();
        lbVideo.src = '';
        document.body.style.overflow = '';
    }

    closeBtn.addEventListener('click', closeLightbox);
    lb.addEventListener('click', e => { if (e.target === lb) closeLightbox(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

    document.addEventListener('click', e => {
        const wrapper = e.target.closest('.card-video-wrapper');
        if (wrapper && wrapper.dataset.videoSrc) {
            openLightbox(wrapper.dataset.videoSrc);
        }
    });
}

// ─── Parallax for collage images (reduced on mobile) ─────────────────────────
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const isMobile = window.innerWidth <= 768;
    document.querySelectorAll('.collage-image').forEach((img, index) => {
        const speed = isMobile ? 0.008 * (index + 1) : 0.05 * (index + 1);
        img.style.transform = `translateY(${scrolled * speed}px) scale(1)`;
    });
});

// ─── 3D tilt hover effect for cards ──────────────────────────────────────────
document.addEventListener('mousemove', e => {
    document.querySelectorAll('.card:hover').forEach(card => {
        const rect    = card.getBoundingClientRect();
        const x       = e.clientX - rect.left;
        const y       = e.clientY - rect.top;
        const rotateX = (y - rect.height / 2) / 20;
        const rotateY = (rect.width  / 2 - x) / 20;
        card.style.transform = `translateY(-4px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
});

document.addEventListener('mouseout', e => {
    if (e.target.classList.contains('card')) e.target.style.transform = '';
});

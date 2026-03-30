# Portfolio Website

A modern, minimalist portfolio website for a Computer & Electrical Engineering student.

## Features

- 🌓 Dark/Light mode toggle (defaults to dark mode)
- 📱 Fully responsive design
- ✨ Subtle animations and transitions
- 🎨 Modern, clean aesthetic
- 📝 Easy content management through `data.js`

## Quick Start

1. Open `index.html` in your web browser to view the website
2. Edit `data.js` to add your personal information, projects, experience, and competitions
3. Add your images to the appropriate folders in the `images` directory

## How to Add New Content

All content is managed through the `data.js` file. Simply edit this file to update your portfolio.

### Adding Experience

```javascript
experience: [
    {
        title: "Your Job Title",
        company: "Company Name",
        logo: "images/logos/company-logo.png",
        dates: "Start Date - End Date",
        summary: "Brief 1-2 sentence description of your role."
    },
    // Add more entries here
]
```

### Adding Projects

```javascript
projects: [
    {
        title: "Project Name",
        image: "images/projects/project-image.jpg",
        dates: "Project Date Range",
        summary: "Brief 1-2 sentence description of the project."
    },
    // Add more entries here
]
```

### Adding Competitions

```javascript
competitions: [
    {
        title: "Competition Name",
        image: "images/competitions/competition-image.jpg",
        dates: "Competition Date",
        summary: "Achievement and brief description."
    },
    // Add more entries here
]
```

## Folder Structure

```
Website/
├── index.html              # Home page
├── experience.html         # All experience page
├── projects.html          # All projects page
├── competitions.html      # All competitions page
├── styles.css            # All styling
├── script.js             # All functionality
├── data.js               # Content data (EDIT THIS!)
├── README.md             # This file
└── images/
    ├── collage/          # About section collage images
    ├── logos/            # Company/organization logos
    ├── projects/         # Project images
    ├── competitions/     # Competition images
    └── education/        # Education institution logos
```

## Customization Tips

1. **Update Personal Info**: Edit the `about` section in `data.js`
2. **Change Theme Colors**: Modify CSS variables in `styles.css` (lines 2-11 for dark mode, 13-22 for light mode)
3. **Add Your CV**: Place your CV PDF in the website folder and update the path in `data.js`
4. **Social Links**: Update GitHub and LinkedIn URLs in `data.js`

## Image Recommendations

- **Collage Images**: 800x600px, JPG or PNG
- **Company Logos**: 200x200px, PNG with transparent background
- **Project/Competition Images**: 1200x800px, JPG
- **Education Logos**: 200x200px, PNG with transparent background

## Browser Support

Works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## Tips

- The first 3 items in each category (experience, projects, competitions) will appear on the home page
- All items appear on their respective detail pages
- Items are displayed in the order they appear in `data.js`
- The website uses local storage to remember theme preference

Enjoy your new portfolio website!

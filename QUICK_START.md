# Quick Start Guide

## Step 1: Add Your Information

Open `data.js` and replace the placeholder text with your information:

```javascript
about: {
    name: "Your Name",              // Replace with your name
    title: "Computer & Electrical Engineering Student",
    description: "Brief description...",  // Write about yourself
    github: "https://github.com/yourusername",     // Your GitHub URL
    linkedin: "https://linkedin.com/in/yourusername", // Your LinkedIn URL
    cv: "path/to/your-cv.pdf"      // Path to your CV file
}
```

## Step 2: Add Your Images

Place your images in the correct folders:

- `images/collage/` - Personal photos for the about section (4 images recommended)
- `images/logos/` - Company/organization logos for experience section
- `images/projects/` - Project screenshots or photos
- `images/competitions/` - Competition photos or certificates
- `images/education/` - University and school logos

Then update the paths in `data.js`:

```javascript
collageImages: [
    "images/collage/photo1.jpg",
    "images/collage/photo2.jpg",
    "images/collage/photo3.jpg",
    "images/collage/photo4.jpg"
]
```

## Step 3: Add Your Experience

In `data.js`, add your work experience:

```javascript
experience: [
    {
        title: "Software Engineering Intern",
        company: "Tech Company",
        logo: "images/logos/tech-company.png",
        dates: "Jun 2025 - Aug 2025",
        summary: "Developed features and fixed bugs in production."
    }
]
```

**To add more:** Just copy the block and paste it below, separated by a comma!

## Step 4: Add Projects

```javascript
projects: [
    {
        title: "My Awesome Project",
        image: "images/projects/project1.jpg",
        dates: "Jan 2025 - Feb 2025",
        summary: "Built something cool with Arduino and Python."
    }
]
```

## Step 5: Add Competitions

```javascript
competitions: [
    {
        title: "Hackathon 2025",
        image: "images/competitions/hackathon.jpg",
        dates: "Mar 2025",
        summary: "1st Place - Built an innovative IoT solution."
    }
]
```

## Step 6: Update Education

```javascript
education: [
    {
        institution: "Your University",
        degree: "Bachelor of Engineering - Computer & Electrical",
        logo: "images/education/university-logo.png",
        dates: "2023 - 2027"
    },
    {
        institution: "Your High School",
        degree: "A-Levels",
        logo: "images/education/school-logo.png",
        dates: "2016 - 2023"
    }
]
```

## Step 7: Open Your Website

Simply double-click `index.html` or open it in your web browser!

## Tips

- The website shows the **first 3 items** from each category on the home page
- Click "View All" links to see complete lists on separate pages
- Use the ☀️/🌙 button in the top right to toggle between light and dark mode
- The website automatically saves your theme preference

## Need Help?

Check the full `README.md` for more detailed instructions!

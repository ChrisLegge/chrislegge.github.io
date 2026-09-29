// Easy-to-edit data file for your portfolio
// Simply add new entries to the arrays below to update your website

const portfolioData = {
    // About section
    about: {
        name: "Chris Legge",
        title: "Computer & Electronic Engineering Student",
        // Rotating phrases typed out under the name on the home page
        roles: [
            "Computer & Electronic Engineering Student",
            "RTL & Digital Design",
            "FPGA Development in Verilog",
            "Embedded Systems in C",
            "Two Apps on the App Store"
        ],
        description: "MEng Computer and Electronic Engineering student at Loughborough University, focused on digital hardware. I write Verilog for FPGAs, program microcontrollers in C and solder together the circuits they run on. My FPGA driven LED map helped our team become one of 36 international Grand Finalists in the Engineers Without Borders Design Challenge, and I have designed and shipped two apps of my own on the App Store.",
        availability: "Looking for a 2027 industrial placement in hardware engineering",
        github: "https://github.com/ChrisLegge",
        linkedin: "https://www.linkedin.com/in/chris-legge/",
        itch: "https://gingerbuiscuit71.itch.io",
        cv: "CVs/cv_21_9_26.pdf",
        email: "chrislegge151@outlook.com",
        // Used for the "Years of making things" hero stat
        codingSince: 2021
    },

    // Image collage (right side of about section)
    collageImages: [
        "images/gallery/photo1.jpg",
        "images/gallery/photo2.jpg",
        "images/gallery/photo3.jpg",
        "images/gallery/photo4.jpg"
    ],

    // Experience entries
    // Optional fields per entry:
    //   fullPage: true          → "Read More" links to a dedicated page instead of expanding inline
    //   pageUrl: "entries/my-entry.html"  → path to that page (required when fullPage: true)
    //   tags: ["..."]           → small chips shown on the card / detail item
    experience: [
        {
            title: "Technical Theatre Operator",
            company: "Trinity School Drama Department",
            logo: "images/logos/company3.png",
            dates: "October 2018 to July 2025",
            summary: "Seven years backstage on 3 shows a year, including 4 musicals. I ran sound design and operation for 5 years and spent a further year running projections.",
            tags: ["Sound Engineering", "QLab", "Live Events"],
            fullPage: true,
            pageUrl: "entries/technical-theatre.html"
        },
        {
            title: "Engineering Course",
            company: "InvestIN, UCL",
            logo: "images/logos/company2.png",
            dates: "August 2024",
            summary: "A two week engineering course at UCL where I met professional engineers, worked through lots of different engineering sectors and won the final design competition.",
            tags: ["Teamwork", "Robotics", "Pitching"],
            details: "Over the two weeks we covered mechanical, electrical, civil, aeronautical, biomedical, materials, automotive and environmental engineering, and talked a lot with the engineers there about the economic and environmental impact of what they build. In one team task we designed and built a small robot that drove around on its own and avoided obstacles. The biggest task was to come up with a solution to a real world problem and pitch it to the whole group. Our idea was an app and subscription that lets you try out new hobbies and learn new skills, and it won the final competition."
        },
        {
            title: "Website Designer",
            company: "Freelance",
            logo: "images/logos/company1.png",
            dates: "June 2025 to July 2025",
            summary: "I designed and built a working multi page website for a client using HTML, CSS and JavaScript, with a responsive navigation bar so it works on phones as well as desktops.",
            tags: ["HTML", "CSS", "JavaScript", "Client Work"],
            details: "I used HTML to structure the content, CSS to style it and JavaScript to add interactivity. The navigation bar collapses on smaller screens so the site is easy to use on a phone. As it was for a real client, I also had to manage the project myself and keep checking in with them to make sure the site did what they actually wanted."
        },
        {
            title: "Hockey Coach",
            company: "Spencer Lynx Hockey Club",
            logo: "images/logos/company4.png",
            dates: "September 2023 to July 2025",
            summary: "I coached hockey every week for 9 to 11 year olds at a charity hockey club, teaching the basics and getting them to enjoy the sport.",
            tags: ["Coaching", "Leadership", "Volunteering"],
            details: "I helped lead the weekly training sessions, which focused on dribbling, passing, shooting and playing as a team. I planned activities for the children, organised the other coaches during sessions and made sure everyone stayed safe and engaged. I also umpired matches during the season so the children could play competitive games."
        },
        {
            title: "Activity Instructor",
            company: "Activ Camps",
            logo: "images/logos/company6.png",
            dates: "April 2024 to December 2024",
            summary: "I worked in a team of instructors running activities for 4 to 17 year olds, keeping them engaged, making sure they enjoyed it and keeping them safe.",
            tags: ["Leadership", "Safeguarding", "Organisation"],
            details: "Activities ranged from sports and team building games to arts and crafts and outdoor adventures. I was responsible for organising my groups and keeping every child safe, and I planned sessions with the other instructors so there was something for every age group. Dealing with behaviour issues calmly while keeping a big group moving taught me a lot about leading people."
        },
        {
            title: "Video Editor",
            company: "Freelance",
            logo: "images/logos/company5.png",
            dates: "June 2022 to August 2022",
            summary: "I designed and edited a 2 hour montage video for a 20th wedding anniversary, from sorting the raw footage through to the finished film.",
            tags: ["DaVinci Resolve", "Filmora", "Client Work"],
            details: "I went through all the raw footage, picked out the best clips and cut them together into a story, then added music, transitions and effects in Filmora and DaVinci Resolve. I worked closely with the client throughout so the final video was what they had in mind."
        }
        // Add more experience entries here
    ],

    // Projects
    // Optional fields: fullPage, pageUrl (see Experience comment above)
    //   category: used for the filter chips on the projects page
    //   tags: small chips shown on the card / detail item
    projects: [
        {
            title: "Predictive Bus Routing",
            image: "images/projects/project3.jpg",
            dates: "March 2026",
            category: "Hardware",
            tags: ["Verilog", "DE1-SoC FPGA", "WS2812B", "UART", "Grand Finalist"],
            summary: "A 156 LED map of the Ladywood bus network, driven by my own Verilog on a DE1-SoC FPGA. I owned all of the hardware for our Engineers Without Borders entry, which made the grand finals as one of the top 36 teams.",
            fullPage: true,
            pageUrl: "entries/bus-routing.html"
        },
        {
            title: "Digital Logic Games in Minecraft",
            image: "images/projects/project6.jpg",
            dates: "April 2024 to Present",
            category: "Digital Logic",
            tags: ["Boolean Logic", "RAM", "ROM", "Counters", "Decoders"],
            summary: "Tic Tac Toe, Connect 4 and Pong built from nothing but logic gates. No mods and no command blocks, just an architecture of memory, counters and decoders that I designed myself and reused across all three games.",
            fullPage: true,
            pageUrl: "entries/tic-tac-toe.html"
        },
        {
            title: "Datum",
            image: "images/projects/datum.png",
            dates: "July 2026 to Present",
            category: "Software",
            tags: ["Swift", "SwiftUI", "SwiftData", "PencilKit", "App Store"],
            summary: "An engineering notebook for iPad that I built on my own in Swift. It keeps sketches, schematics, STL models, parts and budgets for a build all in one place. Live on the App Store.",
            fullPage: true,
            pageUrl: "entries/datum.html"
        },
        {
            title: "Lightsaber",
            image: "images/projects/project1.jpg",
            dates: "June 2025",
            category: "Hardware",
            tags: ["Arduino", "C", "WS2812B", "Soldering", "Workshop"],
            summary: "A fully working combat lightsaber. I machined the handle on workshop tools, built the blade from 188 addressable LEDs and soldered everything to an Arduino running animations I wrote in C.",
            fullPage: true,
            pageUrl: "entries/lightsaber.html"
        },
        {
            title: "Beerometer",
            image: "images/projects/beerometer.png",
            dates: "August 2026",
            category: "Software",
            tags: ["Swift", "SwiftUI", "CloudKit", "WidgetKit", "watchOS"],
            summary: "A tap to log drink tracker for iPhone and Apple Watch, built on my own and now live on the App Store. It has an interactive widget, a Watch app, Siri shortcuts, Live Activities and a friend leaderboard that needs no accounts.",
            fullPage: true,
            pageUrl: "entries/beerometer.html"
        },
        {
            title: "Data Collection Terminal",
            image: "images/projects/project4.jpg",
            dates: "October 2025",
            category: "Hardware",
            tags: ["C", "Arduino", "ESP32", "Sensors", "IoT"],
            summary: "An Arduino system I coded in C that reads a set of sensors, shows the readings on a live display and passes them to an ESP32, which sends them to a website so you can check the data from anywhere.",
            details: "This was a group project at university. The Arduino reads temperature, humidity and light sensors and updates a display next to the unit, which changes colour when a reading goes out of range so you can see there is a problem without looking at the numbers. The readings are passed over to an ESP32, which sends them to a website we built so the data can be read in real time from anywhere. I designed the system and wrote the C code running on the Arduino."
        },
        {
            title: "Vaultly",
            image: "images/projects/vaultly.jpg",
            dates: "February 2026 to Present",
            category: "Software",
            tags: ["FastAPI", "Next.js", "React Native", "Docker", "CI/CD"],
            summary: "A full stack document vault that I built and self host on a home server with automated deployment. It has a Python API, a web app and iOS and Android apps, and it is currently in beta at getvaultly.uk.",
            fullPage: true,
            pageUrl: "entries/vaultly.html"
        },
        {
            title: "Automated Christmas Lights",
            image: "images/projects/project5.jpg",
            dates: "December 2024",
            category: "Hardware",
            tags: ["Arduino", "RTC Module", "Electronics"],
            summary: "I rewired three battery powered sets of Christmas lights to run off USB and used an Arduino with a real time clock module to switch them on and off at set times.",
            details: "All three sets were wired back to one Arduino so they switch together, with the clock module keeping track of the time. Running them from USB meant no more buying batteries."
        }
        // Add more projects here
    ],

    // Early projects (shown in a collapsed section at the bottom of projects.html)
    earlyProjects: [
        {
            title: "Wave II",
            image: "images/projects/project14.jpg",
            dates: "September 2023 to January 2024",
            tags: ["Java", "Multiplayer", "Game Design"],
            summary: "A much bigger version of Wave with local multiplayer, an endless mode, a custom mode and a full campaign.",
            details: "The campaign mode has a gun that tracks the mouse at a speed based on how far away it is, which I worked out with trigonometry, plus a boss level, new power ups, a shield upgrade and walls that spawn in. I got friends to playtest it, and their feedback is why I swapped the health bar for lives and added invincibility frames."
        },
        {
            title: "Wave",
            image: "images/projects/project15.jpg",
            dates: "June 2023 to July 2023",
            tags: ["Java", "Bullet Hell"],
            summary: "A bullet hell game in Java where enemies based on the bouncing DVD logo bounce around and chase you.",
            details: "It runs on the same engine I wrote for my tower defence game. There are several enemy types, one of which follows the player, and a shop appears between levels so you can buy upgrades."
        },
        {
            title: "Java Tower Defence",
            image: "images/projects/project13.jpg",
            dates: "March 2023 to April 2023",
            tags: ["Java", "No Engine", "OOP", "Level Editor"],
            summary: "A tower defence game written in Java from scratch, with my own rendering and no game engine.",
            details: "Writing everything myself taught me the basics of Java properly, and the different towers and enemies were my first real use of object oriented programming. It also has a level editor and a save and load system so players can make and share their own levels."
        },
        {
            title: "Flappy Bird",
            image: "images/projects/project10.jpg",
            dates: "April 2022",
            tags: ["Unity", "C#", "Physics"],
            summary: "Flappy Bird in Unity with a twist: you have to shoot a target on each pipe to open it.",
            details: "This one used a lot more of Unity's physics engine and particle system than Breakout did, and I added a parallax background to make it look better."
        },
        {
            title: "Breakout",
            image: "images/projects/project8.jpg",
            dates: "March 2022",
            tags: ["Unity", "C#"],
            summary: "The first of a run of quick games I made while learning Unity.",
            details: "It has 116 breakable blocks, a paddle, a score counter and win and lose conditions."
        },
        {
            title: "Pong",
            image: "images/projects/project11.jpg",
            dates: "January 2022",
            tags: ["Python", "Pygame"],
            summary: "Pong in Python using pygame, with a ball that speeds up as the game goes on.",
            details: "This taught me how a game loop works and how to render objects myself."
        },
        {
            title: "Dangerous Driving",
            image: "images/projects/project9.jpg",
            dates: "March 2021",
            tags: ["Unity", "C#", "Game Jam", "4th Place"],
            summary: "My first game jam entry, which came 4th overall.",
            details: "The theme was Odd One Out. You drive down a three lane road and switch lanes to dodge barriers, but one barrier in each row is the odd one out and can be driven straight through. The speed goes up the longer you survive."
        },
        {
            title: "Biology Quiz",
            image: "images/projects/project12.jpg",
            dates: "January 2021",
            tags: ["Unity", "C#", "UI Design"],
            summary: "A multiple choice quiz on the digestive system, made in Unity for a school project.",
            details: "One of the first things I ever made in Unity, and where I learned how to build a user interface."
        },
        {
            title: "Star Wars Stop Motion Animation",
            video: "images/projects/starWarsAnimation.mp4",
            dates: "August 2024",
            tags: ["Stop Motion", "Video Editing", "Sound Design"],
            summary: "A short Star Wars film made with LEGO minifigures, shot frame by frame and edited with sound effects and music.",
            details: "I storyboarded it, took hundreds of photos moving the figures a tiny bit each time, then edited it all together with sound effects, music and transitions."
        }
    ],

    // Competitions
    // Optional fields: fullPage, pageUrl, tags (see comments above)
    competitions: [
        {
            title: "Engineers Without Borders Design Challenge",
            image: "images/competitions/ewb.jpg",
            dates: "November 2025 to June 2026",
            tags: ["Verilog", "FPGA", "XGBoost", "Grand Finalist"],
            summary: "Grand Finalist, top 36 in an international competition. Our team built a system to reroute buses around Ladywood in Birmingham based on predicted demand, and I built all of the hardware.",
            fullPage: true,
            pageUrl: "entries/bus-routing.html"
        },
        {
            title: "IMC Prosperity 4",
            image: "images/competitions/comp2.jpg",
            dates: "April 2026 to May 2026",
            tags: ["Python", "Algorithms", "Top 3% Worldwide"],
            summary: "Ranked 700th of around 18,900 teams worldwide (top 3%) in a global algorithmic trading competition, competing as a two person team.",
            details: "Each round added new products and new market conditions, and we had a few days to work out what was going on in the data, write a strategy in Python and submit it. We built market making, statistical arbitrage and mean reversion strategies, backtesting and tuning them between rounds. It was a good test of working fast under pressure and making decisions from data."
        },
        {
            title: "Kaggle Vesuvius Challenge",
            image: "images/competitions/comp1.jpg",
            dates: "February 2026",
            tags: ["PyTorch", "Deep Learning", "3D CT Data"],
            summary: "We designed and trained a machine learning model in PyTorch to digitally unwrap ancient scrolls from 3D CT scans, because the real scrolls are too damaged to ever open.",
            details: "The scrolls were buried by the eruption of Mount Vesuvius and would crumble if anyone tried to unroll them. We built a PyTorch pipeline that processes the 3D CT scan data and tries to pull the text back out. We did not place highly, mostly because we could not train at anything like the scale of the top teams on the hardware we had, but our approach turned out to be similar to what the top scoring models used. For a first year project it was an ambitious one and I learned a lot from it."
        }
        // Add more competitions here
    ],

    // Gallery images (shown on gallery.html in a Pinterest masonry grid)
    gallery: [
        { src: "images/gallery/photo1.jpg", caption: "Sitting in a DeLorean on the UCL summer course" },
        { src: "images/gallery/photo2.jpg", caption: "Scuba diving in Malta" },
        { src: "images/gallery/photo3.jpg", caption: "Loughborough engineering school" },
        { src: "images/gallery/photo4.jpg", caption: "Standing in front of a waterfall in Iceland" }
    ],

    // Interests (shown on interests.html)
    // Each entry: title (required), image (required), summary (required), tags (optional array)
    interests: [
        {
            title: "Mountain Biking",
            image: "images/interests/mountain-biking.jpg",
            summary: "I tackle technical trails and long distance routes such as the London to Brighton.",
            tags: ["Endurance", "Off Road"]
        },
        {
            title: "Magic",
            image: "images/interests/magic.jpg",
            summary: "I practise close up magic, which has built up my presentation, confidence and how I engage with an audience.",
            tags: ["Performance", "Sleight of Hand"]
        },
        {
            title: "Hiking & Camping",
            image: "images/interests/camping.jpg",
            summary: "I enjoy multi day hiking and camping trips, which have built my planning, navigation and self sufficiency. I have completed my Bronze, Silver and Gold Duke of Edinburgh award.",
            tags: ["DofE Gold", "Navigation", "Expeditions"]
        },
        {
            title: "Scuba Diving",
            image: "images/interests/scuba-diving.jpg",
            summary: "I am a certified scuba diver and have dived in varied conditions across several countries.",
            tags: ["PADI", "Travel"]
        },
        {
            title: "Hockey",
            image: "images/interests/hockey.jpg",
            summary: "I play hockey every week, where communication, teamwork and thinking tactically all matter.",
            tags: ["Teamwork", "Weekly"]
        },
        {
            title: "Guitar",
            image: "images/interests/guitar.jpg",
            summary: "I play guitar in my spare time and keep improving by teaching myself and practising regularly.",
            tags: ["Music", "Self Taught"]
        },
        {
            title: "Logic Puzzles",
            image: "images/interests/puzzles.jpg",
            summary: "I regularly solve logic puzzles like Sudoku and the LinkedIn daily puzzles to keep my problem solving sharp.",
            tags: ["Logic", "Daily Habit"]
        },
        {
            title: "Stop Motion & Video",
            image: "images/interests/stop-motion.jpg",
            summary: "I have made several stop motion films with LEGO and plasticine, from storyboard to final edit, and I edit video in DaVinci Resolve, Final Cut and Blender.",
            tags: ["Filmmaking", "LEGO", "Editing"]
        }
    ],

    // Professional Skills (shown on skills.html)
    // Each entry: category (required), description (optional), image (optional),
    //             items: array of { name } objects
    skills: [
        {
            category: "Digital Design & FPGA",
            description: "Writing RTL and getting it running on real hardware.",
            items: [
                { name: "Verilog" },
                { name: "SystemVerilog" },
                { name: "Quartus Prime" },
                { name: "Intel Cyclone V (DE1-SoC)" },
                { name: "Finite State Machines" },
                { name: "Boolean Logic Design" }
            ]
        },
        {
            category: "Embedded Systems",
            description: "Programming microcontrollers and getting boards to talk to each other.",
            items: [
                { name: "C" },
                { name: "C++" },
                { name: "Arduino" },
                { name: "ESP32" },
                { name: "Raspberry Pi" },
                { name: "UART" },
                { name: "WS2812B LEDs" }
            ]
        },
        {
            category: "Electronics & Workshop",
            description: "Designing, simulating and physically building circuits and enclosures.",
            items: [
                { name: "Soldering" },
                { name: "NI Multisim" },
                { name: "RS DesignSpark" },
                { name: "FEMM" },
                { name: "SolidWorks" },
                { name: "Lathe & Laser Cutter" }
            ]
        },
        {
            category: "Software",
            description: "Languages and frameworks from my apps, tools and competition work.",
            items: [
                { name: "Swift & SwiftUI" },
                { name: "Python" },
                { name: "C#" },
                { name: "Java" },
                { name: "JavaScript" },
                { name: "HTML & CSS" },
                { name: "FastAPI" },
                { name: "Docker" },
                { name: "Git & GitHub" }
            ]
        },
        {
            category: "Machine Learning & Data",
            description: "Libraries from competitions and the EWB project.",
            items: [
                { name: "PyTorch" },
                { name: "XGBoost" },
                { name: "NumPy" },
                { name: "SciPy" }
            ]
        }
    ],

    // Education
    education: [
        {
            institution: "Loughborough University",
            degree: "MEng Computer & Electronic Engineering. First year: First Class",
            logo: "images/education/university.png",
            dates: "2025 to 2030"
        },
        {
            institution: "Trinity School Croydon",
            degree: "A Levels: Computer Science, Design & Technology, Maths",
            logo: "images/education/school.png",
            dates: "2018 to 2025"
        }
    ]
};

// Easy-to-edit data file for your portfolio
// Simply add new entries to the arrays below to update your website

const portfolioData = {
    // About section
    about: {
        name: "Chris Legge",
        title: "Computer & Electronic Engineering Student",
        description: "MEng Computer and Electronic Engineering student at Loughborough University, with hands-on experience in FPGA development, embedded systems design, and machine learning. Grand Finalist in a national engineering design challenge and top 3% globally in an international algorithmic trading competition.",
        github: "https://github.com/ChrisLegge",
        linkedin: "https://www.linkedin.com/in/chris-legge/",
        itch: "https://gingerbuiscuit71.itch.io",
        cv: "CVs/cv_4_6_26.pdf",
        email: "chrislegge151@outlook.com"
    },

    // Image collage (right side of about section)
    collageImages: [
        "images/collage/collage1.jpg",
        "images/collage/collage2.jpg",
        "images/collage/collage3.jpg",
        "images/collage/collage4.jpg"
    ],

    // Experience entries
    // Optional fields per entry:
    //   fullPage: true          → "Read More" links to a dedicated page instead of expanding inline
    //   pageUrl: "entries/my-entry.html"  → path to that page (required when fullPage: true)
    experience: [
        {
            title: "Freelance Website Developer",
            company: " ",
            logo: "images/logos/company1.png",
            dates: "June 2025 - July 2025",
            summary: "I worked as a freelance website developer, building a fully functional multi-page website using HTML, CSS and JavaScript for a client.",
            details: "The project had several pages and a responsive navigation bar so that the website could be used on both desktop and mobile devices. I used HTML to structure all the content and CSS to style the pages and make it visually appealing. I added interactivity using JavaScript to improve the user experience. It was a great opportunity to apply my web development skills and create a functional website for a real client. I also learned how to manage a project and communicate effectively with the client to ensure their needs were met."
        },
        {
            title: "Engineering Work Experience",
            company: "InvestIn",
            logo: "images/logos/company2.png",
            dates: "August 2024",
            summary: "I spent 2 weeks on an engineering work experience programme with InvestIn at UCL, exploring multiple engineering disciplines and working on team design projects.",
            details: "During the programme, I had the opportunity to explore various engineering disciplines including:\n      • Mechanical Engineering\n      • Electrical Engineering\n      • Civil Engineering\n      • Aeronautical Engineering\n      • Biomedical Engineering\n      • Materials Engineering\n      • Automotive Engineering\n      • Environmental Engineering\nI worked on a team project where we designed and built a small robot to automatically move and avoid obstacles. There was also a large team task where we had to design and develop a solution to a real-world problem and then pitch this to the whole group. Our solution — an app and subscription that allowed you to try and learn new skills and gain new hobbies — won the competition. This experience allowed me to apply my engineering knowledge in a practical setting, collaborate with others, and develop my problem-solving skills."
        },
        {
            title: "Technical Theatre Operator",
            company: "Trinity School Drama Department",
            logo: "images/logos/company3.png",
            dates: "October 2018 - July 2025",
            summary: "Several years of experience as a technical theatre operator for school productions. I have operated sound, projections, and stage equipment for various performances.",
            fullPage: true,
            pageUrl: "entries/technical-theatre.html"
        },
        {
            title: "Hockey Coach",
            company: "Spencer Lynx Hockey Club",
            logo: "images/logos/company4.png",
            dates: "September 2023 - July 2025",
            summary: "I worked as a volunteer hockey coach for a charity hockey club, coaching children aged 9–11 to teach them the basics and to encourage them to enjoy the sport.",
            details: "My volunteer role as a hockey coach for Spencer Lynx Hockey Club involved coaching children aged 9–11 to develop their hockey skills and foster a love for the sport. I helped lead weekly training sessions focused on fundamental skills such as dribbling, passing, shooting, and teamwork. I organised several activities for the children, managing other coaches and ensuring safety and engagement throughout. I also umpired several matches during the season so that the children could play competitive games. Through this experience I developed strong communication and leadership skills, as well as the ability to motivate and inspire young athletes."
        },
        {
            title: "Freelance Video Editor",
            company: "",
            logo: "images/logos/company5.png",
            dates: "June 2022 - August 2022",
            summary: "I worked as a freelance video editor over the summer of 2022, editing a 2-hour anniversary montage video from raw footage through to final delivery.",
            details: "During the summer of 2022, I worked as a freelance video editor for an anniversary video project. I used Filmora and DaVinci Resolve to edit the footage and create a memorable video. My responsibilities included reviewing and organising the raw footage, selecting the best clips, and editing them together to create a cohesive story. I added music, transitions, and effects to enhance the visual appeal throughout. I collaborated closely with the client to understand their vision and ensure the final product met their expectations, developing my skills in professional editing software and client communication."
        },
        {
            title: "Activity Instructor",
            company: "Activ Camps",
            logo: "images/logos/company6.png",
            dates: "April 2024 - December 2024",
            summary: "I worked for Activ Camps as an activity instructor, running activities for children and managing group safety and engagement.",
            details: "My time working as an activity instructor for Activ Camps involved running a variety of activities for children attending the camp. I was responsible for organising groups and ensuring the safety of children during all activities, which included sports, arts and crafts, team-building exercises, and outdoor adventures. I collaborated with other instructors to plan and execute engaging sessions that catered to different interests and age groups. My role also involved managing behavioural issues and ensuring all children had a positive and enjoyable experience. This experience developed strong leadership, communication, and organisational skills in a dynamic, fast-paced environment."
        }
        // Add more experience entries here
    ],

    // Projects
    // Optional fields: fullPage, pageUrl (see Experience comment above)
    projects: [
        {
            title: "Vaultly",
            image: "images/projects/vaultly.jpg",
            dates: "January 2026 - Present",
            summary: "A full-stack SaaS document vault built solo from concept to live product — Python (FastAPI) API, Next.js web app, and React Native iOS/Android apps, self-hosted on a home server with automated CI/CD. Live at getvaultly.uk.",
            fullPage: true,
            pageUrl: "entries/vaultly.html"
        },
        {
            title: "Lightsaber",
            image: "images/projects/project1.jpg",
            dates: "February 2025 - March 2025",
            summary: "I designed and built a custom lightsaber using an Arduino, creating custom lighting patterns and animations.",
            fullPage: true,
            pageUrl: "entries/lightsaber.html"
        },
        {
            title: "Tic Tac Toe in Minecraft",
            image: "images/projects/project2.jpg",
            dates: "January 2024 - April 2024",
            summary: "I built a fully functional Tic Tac Toe game in Minecraft using only redstone, operating on boolean logic.",
            fullPage: true,
            pageUrl: "entries/tic-tac-toe.html"
        },
        {
            title: "Bus Rerouting System",
            image: "images/projects/project3.jpg",
            dates: "December 2025 - March 2026",
            summary: "As part of a team project for the Engineers Without Borders UK challenge, we designed a bus rerouting system using machine learning prediction and an FPGA board to display results.",
            fullPage: true,
            pageUrl: "entries/bus-routing.html"
        },
        {
            title: "Smart Home Monitoring System",
            image: "images/projects/project4.jpg",
            dates: "October 2025",
            summary: "As part of a group university project, I designed and built a smart home monitoring system prototype that collects real-time sensor data and uploads it to a custom web dashboard.",
            details: "The smart home monitoring system prototype collects real-time data from various sensors placed around the home, including temperature, humidity, and light sensors. The data is collected using microcontrollers and uploaded to a custom website where it is displayed in an easy-to-understand format. The system allows users to monitor their home environment remotely and via physical displays that change colour when a reading is out of range. The project involved hardware integration, software development for data collection and processing, and web development for the user interface."
        },
        {
            title: "Automated Christmas Lights",
            image: "images/projects/project5.jpg",
            dates: "December 2024",
            summary: "I used an Arduino and a clock module to adapt three battery-powered Christmas light sets to turn on and off at specific times, running off USB power.",
            details: "I took three battery-powered Christmas light sets and adapted them to turn on and off at specific times of the day using an Arduino and a real-time clock module. The Arduino was programmed to control the timing, and all three sets were wired together so they could be controlled simultaneously from one board. Switching to USB power removed the need for batteries, saving money on replacements. This project applied my skills in embedded systems programming and hardware integration to create a practical and automated solution."
        },
        {
            title: "Star Wars Stop Motion Animation",
            video: "images/projects/starWarsAnimation.mp4",
            dates: "August 2024",
            summary: "A short Star Wars stop-motion animation created using LEGO minifigures, filmed frame-by-frame and edited with sound design and music.",
            details: "I created a short Star Wars stop-motion animation using LEGO minifigures and sets. The process involved planning a storyboard, carefully positioning each figure frame-by-frame, and capturing hundreds of individual photos to create the illusion of movement. I then edited the footage in post-production, adding sound effects, music, and transitions to produce a complete short film. The project combined my interests in LEGO, filmmaking, and the Star Wars universe, and gave me hands-on experience with the stop-motion technique and the patience and precision it requires."
        },
        {
            title: "Connect 4 in Minecraft",
            image: "images/projects/project6.jpg",
            dates: "November 2023 - December 2023",
            summary: "I built a fully functional Connect 4 game in Minecraft using redstone and boolean logic, playable by two players who alternate turns.",
            details: "My version of Connect 4 uses a trickle-down RAM system so that a signal sent to the top of a column trickles down until it reaches either the bottom or an occupied bit of RAM, then locks into place. I used ROM to store the piece shapes and display each piece in the correct position, using 'X' and 'O' symbols since colour options are not available without mods. This project was my first large-scale redstone build and taught me most of my knowledge about digital logic, reinforcing my understanding of boolean algebra."
        },
        {
            title: "Pong in Minecraft",
            image: "images/projects/project7.jpg",
            dates: "October 2025 - Present",
            summary: "I am currently building a fully functional Pong game in Minecraft using redstone and boolean logic, played by two players controlling paddles.",
            details: "My version of Pong in Minecraft uses redstone components and boolean logic throughout. The paddles are implemented using boolean counters that stop at 0 and 61, with the 6-bit value decoded to determine the paddle position. The ball will use two counters for x and y position, inverting on collision with walls or paddles. The game is designed for two players with separate controls. This project has continued to develop my knowledge of digital logic and redstone engineering."
        },
        {
            title: "Breakout",
            image: "images/projects/project8.jpg",
            dates: "March 2022",
            summary: "I built a game of Breakout in Unity using C#.",
            details: "As I was getting started with Unity, I challenged myself to make several games in a short period of time. Breakout was the first. Using Unity and C# I created a fully functional version with 116 breakable blocks, a player-controlled paddle, and a simple score counter. Win and lose conditions trigger if the player breaks all the blocks or loses the ball. This project improved my skills in game development and C# programming and gave me a fun project to share with others."
        },
        {
            title: "Dangerous Driving",
            image: "images/projects/project9.jpg",
            dates: "March 2021",
            summary: "A game I made in my first game jam, where I placed 4th in the overall rankings.",
            details: "The theme was 'Odd One Out'. I created a game where you drive a car along a three-lane road and switch lanes to avoid barriers — there is always one incorrect barrier that can be driven through, since it is the odd one out. Inspired by Subway Surfers, the game uses left and right arrow keys to switch lanes. Speed increases the longer you play, and your score increases while you are alive. Made in Unity using C#, this was my first game jam and I learned a lot about time management and game design under pressure. I was very pleased to place 4th overall."
        },
        {
            title: "Flappy Bird",
            image: "images/projects/project10.jpg",
            dates: "April 2022",
            summary: "I built a version of Flappy Bird in Unity using C#, with a twist where you have to shoot a target to open the pipes.",
            details: "After making Breakout I wanted to recreate another classic game. I chose Flappy Bird since it is well-known and straightforward to reproduce. I added a twist where the player must shoot a target on the pipes to open them, increasing the challenge. This version made much more use of Unity's physics engine and particle system, and I also implemented a parallax background to improve the visual appeal. This project further developed my game development and C# skills."
        },
        {
            title: "Pong",
            image: "images/projects/project11.jpg",
            dates: "January 2022",
            summary: "I recreated Pong in Python using the pygame library.",
            details: "To learn about backend coding I recreated the classic game of Pong in Python using the pygame library. The game features two paddles, a simple scoring system, win and lose conditions, and a ball that increases in speed as the game progresses. This project developed my Python programming skills and introduced me to the pygame library, object rendering, and game loop fundamentals."
        },
        {
            title: "Biology Quiz",
            image: "images/projects/project12.jpg",
            dates: "January 2021",
            summary: "I created a simple biology quiz in Unity as part of a school project to learn about the digestive system.",
            details: "This project was a biology quiz created in Unity as part of a school project. The quiz covered the organs of the digestive system and their functions using multiple-choice questions across several categories. It helped me learn about user interface design in Unity and how to implement simple quiz mechanics. It was one of the first games I made and was a valuable early learning experience in game development."
        },
        {
            title: "Java Tower Defence",
            image: "images/projects/project13.jpg",
            dates: "March 2023 - April 2023",
            summary: "I made a simple tower defence game in Java from scratch, writing all backend code and rendering without a game engine.",
            details: "After learning C# and Python I wanted to expand into Java. I chose a tower defence game as a project with room to grow. I created all the backend code and rendering from scratch, which gave me a thorough understanding of Java fundamentals. The game featured different towers and enemies — my first real look at object-oriented programming — along with a custom level editor and save and load system so players could create and share levels. This was a great first Java project and helped me develop programming skills in a new language."
        },
        {
            title: "Wave II",
            image: "images/projects/project14.jpg",
            dates: "September 2023 - January 2024",
            summary: "An updated version of the original Wave project, with local multiplayer, more complex enemy paths, and several different game modes.",
            details: "Building on the original Wave, I added significant upgrades: an endless mode with increasing difficulty, local multiplayer, and a custom mode where the player selects their enemies. The most ambitious addition was a campaign mode with a gun that tracks mouse movement at a speed proportional to distance — implemented using trigonometry. This mode also included a boss level, new power-ups, a shield upgrade, and spawning walls. The game was shared with friends for playtesting, which led to switching from a health bar to a lives-based system and adding invincibility frames to make the game more enjoyable and replayable."
        },
        {
            title: "Wave",
            image: "images/projects/project15.jpg",
            dates: "June 2023 - July 2023",
            summary: "My second Java project — a bullet-hell style game where enemies inspired by the bouncing DVD logo chase and surround the player.",
            details: "My original version of Wave used the same backend as my tower defence game, both written in Java. On top of this I wrote entirely new code to create enemies inspired by the bouncing DVD logo — they bounce around the screen and the player must avoid them. Several enemy types were included, one of which follows the player. After some time a level ends and a shop appears where the player can buy upgrades before the next level. This project developed my programming skills further and introduced more complex game mechanics."
        }
        // Add more projects here
    ],

    // Competitions
    // Optional fields: fullPage, pageUrl (see Experience comment above)
    competitions: [
        {
            title: "IMC Prosperity 4",
            image: "images/competitions/comp2.jpg",
            dates: "April 2026 - May 2026",
            summary: "Competed as a two-person team in IMC Prosperity 4, a global algorithmic trading competition with approximately 18,900 teams. We finished ranked 700th globally — top 3% worldwide.",
            details: "IMC Prosperity 4 is a global algorithmic trading competition run by IMC Trading, one of the world's leading market-making firms. Competing as a two-person team against approximately 18,900 teams from universities and organisations worldwide, we designed and refined trading algorithms across multiple competitive rounds. Each round introduced new trading products and market conditions, requiring us to quickly analyse market microstructure, identify profitable strategies, and implement them under time pressure. We focused on market-making, statistical arbitrage, and mean-reversion strategies, continuously backtesting and optimising between rounds. We finished ranked 700th globally — placing in the top 3% of all teams worldwide."
        },
        {
            title: "Engineers Without Borders UK Design Challenge",
            image: "images/competitions/ewb.jpg",
            dates: "November 2025 - June 2026",
            summary: "Selected as a Grand Finalist in the Engineers Without Borders UK Design Challenge — one of 36 teams from across the UK invited to the national grand finals on 19 June 2026.",
            details: "Our team entered the Engineers Without Borders UK Design Challenge, which tasks student teams with engineering solutions to real-world humanitarian problems. We designed a machine learning system to address urban transport inefficiency: an XGBoost demand prediction model to forecast bus stop foot traffic, combined with a CVRP-based routing optimiser to dynamically re-route buses and reduce city-wide waiting times. I also programmed a DE1-SoC FPGA board in Verilog to display live bus locations on a custom map interface. From hundreds of entries across the UK, we were selected as one of just 36 finalists to present at the national grand finals."
        },
        {
            title: "Kaggle Vesuvius Challenge",
            image: "images/competitions/comp1.jpg",
            dates: "February 2026",
            summary: "I participated in the Kaggle Vesuvius Challenge, building a PyTorch deep learning pipeline to digitally unwrap ancient scrolls from 3D CT scan data.",
            details: "The Kaggle Vesuvius Challenge focuses on developing machine learning models to digitally unwrap ancient scrolls damaged by the eruption of Mount Vesuvius — scrolls that cannot be physically opened without risking further damage and permanent loss of their contents. We developed a PyTorch-based pipeline to process 3D CT scan data of the scrolls, applying image processing and deep learning techniques to reconstruct text and imagery. While we did not place highly in the final rankings, the strategy we developed was sound and was reflected in approaches used by top-scoring models. Hardware limitations meant we could not train at the same scale as well-resourced competitors. For a first-year university project it was an ambitious undertaking and a valuable experience."
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
    interests: [
        {
            title: "Mountain Biking",
            image: "images/interests/mountain-biking.jpg",
            summary: "I tackle technical trails and long-distance routes such as the London to Brighton."
        },
        {
            title: "Magic",
            image: "images/interests/magic.jpg",
            summary: "I practise close-up magic, developing strong presentation, confidence, and audience engagement skills."
        },
        {
            title: "Camping",
            image: "images/interests/camping.jpg",
            summary: "I enjoy multi-day hiking and camping trips, strengthening my planning, navigation, and self-sufficiency skills. I have completed my Bronze, Silver, and Gold Duke of Edinburgh award."
        },
        {
            title: "Scuba Diving",
            image: "images/interests/scuba-diving.jpg",
            summary: "I am a certified scuba diver with experience diving in varied conditions across several countries."
        },
        {
            title: "Hockey",
            image: "images/interests/hockey.jpg",
            summary: "I play hockey every week, contributing to team performance through communication, teamwork, and strategic thinking."
        },
        {
            title: "Guitar",
            image: "images/interests/guitar.jpg",
            summary: "I play guitar in my spare time, continually improving through self-directed learning and regular practice."
        },
        {
            title: "Logic Puzzles",
            image: "images/interests/puzzles.jpg",
            summary: "I regularly solve logic puzzles such as Sudoku to sharpen my problem-solving and analytical thinking."
        },
        {
            title: "Stop Motion Animation",
            image: "images/interests/stop-motion.jpg",
            summary: "I have made several stop-motion animations using both LEGO and plasticine — from storyboard through to final edited film."
        }
    ],

    // Professional Skills (shown on skills.html)
    skills: [
        {
            category: "Programming",
            items: [
                { name: "C#" },
                { name: "C" },
                { name: "C++" },
                { name: "Python" },
                { name: "Java" },
                { name: "JavaScript" },
                { name: "HTML" },
                { name: "CSS" },
                { name: "Verilog" },
                { name: "Git / GitHub" }
            ]
        },
        {
            category: "ML / Data",
            items: [
                { name: "PyTorch" },
                { name: "XGBoost" },
                { name: "NumPy" },
                { name: "SciPy" }
            ]
        },
        {
            category: "Video Editing",
            items: [
                { name: "DaVinci Resolve" },
                { name: "Final Cut Pro" },
                { name: "Filmora" },
                { name: "Blender (3D VFX)" }
            ]
        },
        {
            category: "Engineering",
            items: [
                { name: "Arduino" },
                { name: "DE1-SoC FPGA" },
                { name: "SolidWorks" },
                { name: "NI Multisim" },
                { name: "FEMM" },
                { name: "RS DesignSpark" }
            ]
        },
        {
            category: "Professional Applications",
            items: [
                { name: "Word" },
                { name: "PowerPoint" },
                { name: "Excel" },
                { name: "Outlook" },
                { name: "OneNote" }
            ]
        }
    ],

    // Education
    education: [
        {
            institution: "Loughborough University",
            degree: "Masters of Engineering - Computer & Electronic Engineering",
            logo: "images/education/university.png",
            dates: "2025 - 2030"
        },
        {
            institution: "Trinity School Croydon",
            degree: "A-Levels - Computer Science, Maths, Design & Technology",
            logo: "images/education/school.png",
            dates: "2018 - 2025"
        }
    ]
};

// Easy-to-edit data file for your portfolio
// Simply add new entries to the arrays below to update your website

const portfolioData = {
    // About section
    about: {
        name: "Chris Legge",
        title: "Computer & Electronic Engineering Student",
        description: "I am a passionate engineering student with a strong interest in computer systems, embedded hardware, and software development. I enjoy working on projects that combine both hardware and software to create innovative solutions.",
        github: "https://github.com/ChrisLegge",
        linkedin: "https://www.linkedin.com/in/chris-legge/",
        itch: "https://gingerbuiscuit71.itch.io",
        cv: "CVs/CV 8-1-26.pdf"
    },

    // Image collage (right side of about section)
    collageImages: [
        "images/collage/collage1.jpg",
        "images/collage/collage2.jpg",
        "images/collage/collage3.jpg",
        "images/collage/collage4.jpg"
    ],

    // Experience entries
    experience: [
        {
            title: "Freelance Website Developer",
            company: " ",
            logo: "images/logos/company1.png",
            dates: "June 2025 - August 2025",
            summary: "I spent 2 months working as a freelance website developer for KeVII PoI . I built the website using HTML, CSS and JavaScript.",
            details: "The project had several pages and a responsive naviagation bar so that the website could be used on both desktop and mobile devices. I used HTML to structure all the content and CSS to style the pages and make it visually appealing. I added interactivity using JavaScript to improve the user experience. It was a great opportunity to apply my web development skills and create a functional website for a real client. I also learned how to manage a project and communicate effectively with the client to ensure their needs were met."
        },
        {
            title: "Engineering Summer Course",
            company: "InvestIn",
            logo: "images/logos/company2.png",
            dates: "August 2024",
            summary: "I spent 2 weeks on an engineering summer course with InvestIn. I learned about the different engineering disciplines and got to work on a project with a team of other students.",
            details: "During the course, I had the opportunity to explore various engineering disciplines including:\n      • Mechanical Engineering\n      • Electrical Engineering\n      • Civil Engineering\n       • Aeronautical Engineering\n        • Biomedical Engineering\n      • Materials Engineering\n       • Automotive Engineering\n      • Environmental Engineering\nI worked on a team project where we designed and built a small robot to automatically move and avoid obstacles. There was also a large team task where we had to design and develop a solution to a real world problem and then pitch this to the whole group, our solution, which was an app and subscription that allowed you to try and learn new skills and gain new hobbies won the competition. This experience allowed me to apply my engineering knowledge in a practical setting, collaborate with others, and develop my problem-solving skills. I also gained insights into the different career paths available in engineering and the skills required for each discipline."
        },
        {
            title: "Technical Theatre Operator",
            company: "Trinity School Drama Department",
            logo: "images/logos/company3.png",
            dates: "October 2018 - July 2025",
            summary: "Several years of experience as a technical theatre operator for school productions. I have operated sound, projections, and stage equipment for various performances.",
            details: "I have been involved in the technical aspects of school productions for several years, gaining experience in operating sound systems, designing the sound for shows, managing projections, and handling stage equipment. My responsibilities have included setting up and testing audio equipment, managing over 30 radio mics incuding several changes during the interval and mid act, coordinating with the production team to ensure smooth transitions during performances, and troubleshooting any technical issues that arise. This role has allowed me to develop strong problem-solving skills, attention to detail, and the ability to work under pressure during live events. It has also given me a deeper appreciation for the behind-the-scenes work that goes into creating successful theatrical productions."
        },
        {
            title: "Hockey Coach",
            company: "Spencer Lynx Hockey Club",
            logo: "images/logos/company4.png",
            dates: "September 2023 - July 2025",
            summary: "I worked as a voulanteer hockey coach for a charity hockey club. I coached children aged 9-11 to teach them the basics and to encourage them to enjoy the sport.",
            details: "My voulunteer role as a hockey coach for Spencer Lynx Hockey Club involved coaching children aged 9-11 to develop their hockey skills and foster a love for the sport. I helped leadweekly training sessions that focused on fundamental skills such as dribbling, passing, shooting, and teamwork. I also organized several activities for the children, having to run them while managing other coaches and the children to ensure safety and engagement. I umpired several matches during the season so that the children could play several games and enjoy the sport more. Through this experience, I developed strong communication and leadership skills, as well as the ability to motivate and inspire young athletes. It was rewarding to see the children improve their skills and gain confidence on the field while having fun playing hockey."
        },
        {
            title: "Freelance Video Editor",
            company: "",
            logo: "images/logos/company5.png",
            dates: "June 2022 - August 2022",
            summary: "I spent the summer of 2022 working as a freelance video editor to make a video for my neighbour's wedding. I used Filmora and Da Vinci Resolve to edit the video and create a memorable video that was played at the wedding.",
            details: "During the summer of 2022, I worked as a freelance video editor for a wedding video project. I used Filmora and Da Vinci Resolve to edit the footage and create a memorable video that was played on loop at the wedding. My responsibilities included reviewing and organizing the raw footage, selecting the best clips, and editing them together to create a cohesive story. I added music, transitions, and effects to enhance the visual appeal of the video. There were seveal sections that were vital that my editing skills were used, including in the use of custom transitions and effects, and when I had to sync the audio and video. I collaborated closely with the clients to understand their vision and ensure that the final product met their expectations. This experience allowed me to develop my video editing skills, learn how to use professional editing software, and gain experience in working with clients to deliver a high-quality product."
        },
        {
            title: "Activity Instructor",
            company: "Activ Camps",
            logo: "images/logos/company6.png",
            dates: "April 2024 - December 2024",
            summary: "I worked for Activ Camps as an activity instructor. I ran the many different activities that were on offer to the children at the camp. I helped organise the groups and was incharge of the safety of the children during the activities.",
            details: "My time working as an activity instructor for Activ Camps involved running a variety of activities for children attending the camp. I was responsible for organizing groups of children and ensuring their safety during the activities. The activities I led included sports, arts and crafts, team-building exercises, and outdoor adventures. I collaborated with other instructors to plan and execute engaging activities that catered to different interests and age groups. My role also involved managing any behavioral issues that arose and ensuring that all children had a positive and enjoyable experience at the camp. This experience allowed me to develop strong leadership, communication, and organizational skills while working in a dynamic and fast-paced environment."
        }
        // Add more experience entries here
    ],

    // Projects
    projects: [
        {
            title: "Lightsaber",
            image: "images/projects/project1.jpg",
            dates: "February 2025 - March 2025",
            summary: "I designed and built a custom lightsaber using an arduino and created custom lighting patterns and animations.",
            details: "Using an Arduino microcontroller and LED strips I created custom lighting patterns and animations. The project involved programming the Arduino to control the LED behavior, including color changes, pulsing effects, and synchronized animations. I also created a custom handle design using lathe work and laser cutting techniques. The blade was made up of hundreds of LEDs which where on 2 LED strips that I placed back to back and soldered together and onto the arduino. The lightsaber was fully functional and featured realistic lighting effects that I coded custom animations for. This project allowed me to develop skills in embedded systems programming, hardware integration, and creative design."
        },
        {
            title: "Tic Tac Toe in Minecraft",
            image: "images/projects/project2.jpg",
            dates: "January 2024 - April 2024",
            summary: "I create a tic tac toe game in Minecraft using only redstone, the game is fully functional and used boolean logic to operate.",
            details: "I built a fully functional Tic Tac Toe game in Minecraft using only redstone components. The game was designed to be played by two players, with each player alternating turns, and alternating the shape 'X' and 'O' that were stored in a ROM. The game logic was implemented using boolean logic and redstone circuits, including AND, OR, and NOT gates. The project required careful planning and design to ensure that the game was both functional and visually appealing within the constraints of Minecraft's redstone system. I used several digital electronics techniques such as multiplexers, encoders and decoders to manage the game state and determine the winner and keep score on the side of the board. This project allowed me to apply my knowledge of digital logic design and problem-solving skills in a creative and interactive way."
        },
        {
            title: "Bus rerouting",
            image: "images/projects/project3.jpg",
            dates: "December 2025 - March 2026",
            summary: "As part of a team project for the engineers without borders UK challange we designed a bus rerouting system to help reduce traffic congestion using prediction modelling and custom PCBs to show our results.",
            details: "This projects uses a machine learning model to predict traffic flow and where people are going to be at different times of the day. This information is then used to reroute buses to avoid traffic congestion and reduce travel times for passengers. The project involved collecting and analyzing traffic data, developing a predictive model using machine learning techniques, and implementing a system to dynamically reroute buses based on real-time traffic conditions similar to the way that network sitches re-route packages. The goal of the project was to improve the efficiency of public transportation and reduce the environmental impact of traffic congestion. The project was run on a simulation so we could see the results of our system and I created a custom PCB so that we could see all the busses on a map in real time, this map could be placed at bus stops to help passengers see when the next bus is coming and where it is going. This project allowed me to apply my skills in data analysis, machine learning, and software development to address a real-world problem in transportation."
        },
        {
            title: "Smart home monitoring system",
            image: "images/projects/project4.jpg",
            dates: "October 2025",
            summary: "As part of a group project for my university course I designed and built a smart home monitoring system prototype that collects and displays real time data and uploads it to a custom website.",
            details: "The smart home monitoring system prototype I designed and built collects real-time data from various sensors placed around the home, such as temperature, humidity and light sensors. The data is collected using microcontrollers and then uploaded to a custom website where it can be displayed in an easy-to-understand format. The system allows users to monitor their home's environment remotely and in person from the physical displays that would change colour if something was wrong. The project involved hardware integration, software development for data collection and processing, and web development for the user interface. This project allowed me to apply my skills in embedded systems, IoT, and web development to create a functional prototype of a smart home monitoring system."
        },
        {
            title: "Automated Christmas lights",
            image: "images/projects/project5.jpg",
            dates: "December 2024",
            summary: "I used an arduino and a clock module to adapt 3 premade battery powered Christmas light sets to turn on and off at specific times and run off USB power.",
            details: "I took 3 battery powered Christmas light sets and adapted them to turn on and off at specific times of the day using an arduino and a clock module. The arduino was programmed to turn the lights on and off at specific times of the day, and the clock module was used to keep track of time. The lights were then connected to a USB power source so that they could be powered without needing batteries, this saved money as batteries no longer needed to be repaced. I also connected all the lights together so that they could be controlled from one arduino and all the lights would turn on and off at the same time. This project allowed me to apply my skills in embedded systems programming and hardware integration to create a functional and automated Christmas light display."
        },
        {
            title: "Connect 4 in Minecraft",
            image: "images/projects/project6.jpg",
            dates: "November 2023 - December 2023",
            summary: "I built a fully funcitonal Connect 4 game in Minecraft using redstone, the game uses boolean logic to operate and is played by two players who alternate turns dropping their pieces into the board.",
            details: "My version of connect 4 uses a trickle down RAM sysem so that I can send a signal to the top of the column and the signal will trickle down until it reaches either the bottom or 1 bit of RAM that is already occupied, then it will lock into place and use the ROM that stores the piece shapes to show the piece in the correct place, I used 'X' and 'O' pieces since colour options are not available witout mods or resource packs. This project was my first large scale redstone project and taught me most of my knowledge about digital logic and helped implement my knowledge of boolean algebra that I had learned at school."
        },
        {
            title: "Pong in Minecraft",
            image: "images/projects/project7.jpg",
            dates: "October 2025 - Present",
            summary: "I am currently building a fully functional Pong game in Minecraft using redstone. The game will use boolean logic to operate and will be played by two players who control their paddles to hit the ball back and forth.",
            details: "My version of Pong in Minecraft uses a combination of redstone components and boolean logic to create a fully functional game. The game features two paddles that players control to hit a ball back and forth, they have been created by simple boolean counters that stop at 0 and 61, the 6 bit boolean number is then placed into a decoder to get the position of the paddle. The ball is the next thing that I need to add too the game and will work in a simiar way, only using 2 counters, one for the x position and one for the y position, these would then be inverted on collision with the walls or paddles. The game is played by two players who have seperate controls for the paddles. This project has allowed me to apply my knowledge of digital logic and redstone engineering to create a complex and interactive game in Minecraft."
        },
        {
            title: "Breakout",
            image: "images/projects/project8.jpg",
            dates: "March 2022",
            summary: "I built a game of breakout in Unity using C#",
            details: "As I was just starting unity I challanged myself to make several games in a short period of time, breakout was the first of these games. Using unity and C# I created a fully fuctional version of breakout with 116 breakable blocks, a paddle that the player can control to bounce the ball. There was a simple score that counted the number of blocks left. There was a win and lose condition if the player broke all the block of if they lost the ball. This project improved my skills in game development and C# programming, and allowed me to create a fun project that I could share with others."
        },
        {
            title: "Dangerous Driving",
            image: "images/projects/project9.jpg",
            dates: "March 2021",
            summary: "This was a game that I made in my first game jam, where I positioned 4th in the overall rankings.",
            details: "The theme was 'Odd one out' I created a game where you drive a car along a 3 lane road and have to switch lanes to avoid the barriers, there is always an incorrect barrier that you can drive through, since it was the 'odd one out'. The game was based off of subway surfers and used the same control scheme of using the left and right arrow keys to switch lanes. The car moved faster the longer you played and the score went up as long as you were alive. The game was made in unity and I used C# for the code. As this was my first game jam I learnt a lot about time management and game design in a short period of time. Overall I was really happy with the game and it was a great experience to participate in a game jam and create a game from start to finish in just 48 hours, I am pleased with my place of 4th in the overall rankings."
        },
        {
            title: "Flappy Bird",
            image: "images/projects/project10.jpg",
            dates: "April 2022",
            summary: "I built a game of flappy bird in unity using C#, my version of the game had a twist where you had to shoot a target to make the pipes open.",
            details: "As I was just starting unity I challanged myself to make several games in a short period of time, breakout was the second of these games. After making breakout successfully I wanted to re-create another classic game, I chose flappy bird since it is a popular game that is easy to reproduce. I thought that the original version of the game was a little easy so I added a twist where you had to shoot a target on the pipes so that they would open, this increased the challange for the player and for me, since I was coding this in the game. This project used alot more of the unity physics engine and paricle system to make a paralax backgroud and make the game more visually appealing. This project further improved my skills in game development and C# programming."
        },
        {
            title: "Pong",
            image: "images/projects/project11.jpg",
            dates: "January 2022",
            summary: "I re-created pong in python using the pygame library.",
            details: "To learn about backend coding I decided to re-create the classic game of pong in python using the pygame library. The game features two paddles that players control to hit a ball back and forth, with a simple scoring system that keeps track of points. The game includes win and lose conditions, and the ball's speed increases as the game progresses to add an extra level of challenge. This project allowed me to develop my skills in Python programming and gain experience with the pygame library and allowed me to learn about backend programming and object rendering, while also creating a fun and interactive game."
        },
        {
            title: "Biology Quiz",
            image: "images/projects/project12.jpg",
            dates: "January 2021",
            summary: "I created a simple biology quiz in unity as part of a school project to learn about the digestive system.",
            details: "This project was a simple biology quiz created in unity as part of a school project. The quiz covered basic information about the digestive system, including the organs involved and their functions. The quiz was simple multiple choice questions and had several different categories for each of the different sections of the digestive system. The project helped me learn about user interface design in unity and how to implement simple quiz mechanics. It was a simple game, but one of the first that I had made and was a great learning experience for me as I was just starting out with game development. It also allowed me to apply my knowledge of the digestive system in a creative way and share it with others."
        },
        {
            title: "Java Tower Defence",
            image: "images/projects/project13.jpg",
            dates: "March 2023 - April 2023",
            summary: "I made a simple tower defence game in java from scratch creating all the backend code and rendering without the use of any game engine.",
            details: "After learning the basics of C# and python I wanted to expand my knowlegde of different programming languages and try to make a game in java. I decided that a tower defence game would be easy to make and would allow for expantion later on if I wished to continue with the project. I created all the backend code and rendering from scratch for an added challange. The game featured different types of towers and enemies, which was my first real look into object orientated programming. The game had a custom level editor and a save and load system so that players could create and share thier own levels with others. It was a great first project with java and allowed me to develop my programming skills in a new language."
        },
        {
            title: "Wave II",
            image: "images/projects/project14.jpg",
            dates: "September 2023 - January 2024",
            summary: "An updated version of the original wave project, this version had local multiplayer, more complex enemy paths and several different game modes.",
            details: "Since I was happy with the original version of wave I wanted to make some massive upgrades, I added an endless mode where the player would survive as long as possible with the difficulty increasing the longer you played, I added local multiplayer so several people could play at once. There was a custom mode which was added where the player could select which enemies they would like in the level and they had to survive for as long as they could. Finally I added a campaign mode, this had the most ambitious changes as it included a gun that followed the mouse movement, with varying speed control based off how far away the mouse was. Using complex triginometry to get it to work, there was a boss level, new power ups and a shield upgrade, along with walls that would spawn in to increase the difficulty. This project was also shared among friends so that I could recieve feedback and improve the game to change the system to life based rather than health bar focused and to add invincibility frames to the game to be more generous to the player and make the game more fun. Overall this project was a great way to expand on the original wave project and add several new features and mechanics to make the game more enjoyable and replayable."
        },
        {
            title: "Wave",
            image: "images/projects/project15.jpg",
            dates: "June 2023 - July 2023",
            summary: "My second java project focused on creating a different style of game, which would be a bullet hell style game.",
            details: "My original version of wave used the same backend as my towe defence game as they were both written in java. Ontop of this backend I wrote entirely different code to create enemies inspired by the bouncing DVD logo where they enemies would bounce around the screen and the player would have to avoid them. There were several types of enemies, including one which would follow you around the screen, after some time the level would end and a shop would appear where you could buy upgrades and start the next level. This project further developed my programming skills and allowed me to introduce more complex game mechanics."
        }
        // Add more projects here
    ],

    // Competitions
    competitions: [
        {
            title: "Kaggle Vesuvius Challenge",
            image: "images/competitions/comp1.jpg",
            dates: "February 2026",
            summary: "Currently in progress. I am participating in the Kaggle Vesuvius challange, which involved making a machine learning model to digitally unwrap ancient scrolls that have been damaged by the eruption of Mount Vesuvius.",
            details: "The Kaggle Vesuvius Challenge is a competition that focuses on developing machine learning models to digitally unwrap ancient scrolls that have been damaged by the eruption of Mount Vesuvius and can not be unwrapped physically because the scolls could be damaged further and the informarion lost forever. The goal of the challenge is to create a model that can accurately reconstruct the text and images on the scrolls, which are often charred and difficult to read. This involves using techniques such as image processing, natural language processing, and deep learning to decipher the contents of the scrolls. The competition provides an opportunity for us to apply machine learning skills to a real-world problem and contribute to the preservation of ancient history."
        },
        {
            title: "IMC Prosperity 4",
            image: "images/competitions/comp2.jpg",
            dates: "April 2026",
            summary: "I am going to be participating in the IMC prosperity 4 challange in April 2026",
            details: "I am going to be participating in the IMC prosperity 4 challange in April 2026, more information about the challange will be added here after the challange has started."
        }
        // Add more competitions here
    ],

    // Education
    education: [
        {
            institution: "Loughborough University",
            degree: "Masters of Engineering - Computer & Electrical Engineering",
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

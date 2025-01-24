import { Project } from '../types/ProjectType';

export const projects: Project[] = [
  {
    id: 1,
    title: "Soul Swap",
    description: "Developed a game based on the “Role Reversal” theme for a game development competion in a team of 2 while also learning and debugging a new language under time pressure.",
    image: '/portfolio-website/assets/project1.jpg',//'../assets/images/project1.jpg',
    technologies: ["C#", "Unity game engine", "Git/GitHub"],
    githubUrl: "https://github.com/Bryan-GP/GMTKGameJam2023_SoulSwap",
    liveUrl: "https://project1.demo",
    details: `
      <h2><b>GMTK 2023 Game Jam</b></h2>
      <p>•	Collaborated in a team of two, dividing tasks into logic and animation, and managing work via GitHub.</p>
      <p>•	Showcased time management by efficiently organizing tasks to meet the competition deadline.</p>
      <p> --- </p>
      <h3><i>Technical Details:</i></h3>
      <ul>
        <li>- Used C# to program the logic in the game.</li>
        <li>- Integrated A* Pathfinding Algorithm.</li>
        <li>- Used Git to track changes and share work.</li>
      </ul>
    `
  },{
    id: 2,
    title: "'Survival' Game",
    description: "A planned out documented “rounds” based game on a local network using Flask as an API server that responded to an Axios client's requests.",
    image: '/portfolio-website/assets/project2.jpg',
    technologies: ["JavaScript", "HTML", "Axios API", "Pyhton","SQLite"], //change
    githubUrl: "https://github.com/Bryan-GP/A-Level-Project-Survival", 
    liveUrl: "https://project1.demo", //change
    details: `
      <h2><b>Survival Game -- A-Level Computer Science Project</b></h2>
      <p>• Designed and developed a network-based multiplayer game using Flask as an API server.</p>
      <p>• Implemented client-server communication, enabling seamless interactions between players.</p>
      <p>• Managed project milestones using an agile development approach, ensuring efficient task allocation and progress tracking.</p>
      <p> --- </p>
      <h3><i>Technical Details:</i></h3>
      <ul>
        <li>- Developed the API backend using Python (Flask) to handle client requests.</li>
        <li>- Utilized Axios for asynchronous client-server communication.</li>
        <li>- Designed a structured SQLite database for storing game data and player states.</li>
        <li>- Built the front-end using HTML, CSS, and JavaScript for an interactive user experience.</li>
      </ul>
    `
  },{
    id: 3,
    title: "Horse Racing Simulator", //change next 2 attr
    description: "Developed a horse racing simulation with real-time statistics using Java, applying OOP principles and probability-based race outcomes while collaborating on GitHub.",
    image: '/portfolio-website/assets/project3.jpg',//'../assets/images/project1.jpg',
    technologies: ["Java", "JavaSwing", "Git/GitHub"], //change
    githubUrl: "https://github.com/Bryan-GP/HorseRaceSimulator", //change
    liveUrl: "https://project1.demo", //change
    details: `
      <h2><b>Horse Racing Simulator -- Object-Oriented Programming Project</b></h2>
      <p>• Developed a graphical horse racing simulation that dynamically adjusts race conditions and displays real-time statistics.</p>
      <p>• Applied object-oriented programming principles to structure the game efficiently and ensure scalability.</p>
      <p>• Used GitHub for version control and collaboration, tracking progress throughout development.</p>
      <p> --- </p>
      <h3><i>Technical Details:</i></h3>
      <ul>
        <li>- Programmed the game logic using Java, implementing OOP concepts like inheritance and polymorphism.</li>
        <li>- Built an interactive GUI using Java Swing to visualize race progress and display statistics.</li>
        <li>- Integrated real-time probability calculations to simulate race outcomes dynamically.</li>
        <li>- Managed codebase with Git, ensuring proper version control and smooth workflow.</li>
      </ul>
    `
  }
]; 
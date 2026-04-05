import maison from "../assets/images/MaisonBezalel.png";
import chicagoNews from "../assets/images/chicagoNews.png";
import parksSparks from "../assets/images/parksSparks.png";
import helpingHands from "../assets/images/helpingHands.png";
import communiteeGolf from "../assets/images/communiteeGolf.png";
import newCastle from "../assets/images/newCastle.png";
import ouinvest from "../assets/images/ouinvest.png";
import ouinvestGallery1 from "../assets/images/OuinvestGallery1.png";
import ouinvestGallery2 from "../assets/images/OuinvestGallery2.png";

export const galleryData = [
  {
    image: maison,
    name: "Maison Bezalel (Work Contract)",
    link: "https://www.maisonbezalel.com/",
    description:
      "Maison Bezalel offers specialized advisory across distinct real estate sectors, ensuring every client receives focused expertise and exceptional service.\n\nMy role was to design and develop a new website for the real estate agent. I used Figma to design the wireframes and assets. I developed with HTML, CSS and JS, while connecting the site to HubSpot to manage content and allow the users to message or meet the agent",
    gallery: [""],
  },
  {
    image: ouinvest,
    name: "OUInvest (Site in Development)",
    link: "https://ouinvest.ai/",
    description:
      "From AI-powered insights to community support, OUInvest is building the ultimate platform for modern investors who want to grow their wealth with purpose.\n\nMy role was to design the UI/UX of the Website and its Dashboard. I collaborated with the founder, UX team, and dev team to ensure the brand, design and features were reflective of the start-up's vision for its users.\n\n*The current app is in development, where I was part of the starting MVP team and passed down my designs and ideas for OUInvest to use in the future.*",
    gallery: [ouinvestGallery1, ouinvestGallery2],
  },
  {
    image: newCastle,
    name: "NewCastle Homeloans (CMS Intern)",
    link: "https://www.newcastle.loans/",
    github: "",
    description: `Managed body and image content to proactively update website information by monitoring the HubSpot dashboard.

Optimized content quality and performance to increase visibility through better-targeted content by researching and analyzing keywords using Google Analytics and Ubersuggest.

Restored and organized over 1,000 assets to enhance content management efficiency and accessibility by managing content, folders, links, and blogs with HubSpot.
      `,
    gallery: [""],
  },
  {
    image: communiteeGolf,
    name: `Communitee Golf (Externship)`,
    link: "https://github.com/tripleten-externships/communitee-golf-1",
    github: "https://github.com/tripleten-externships/communitee-golf-1",
    description: `A Google Chrome Extension that allows members to easily communicate.

• Developed a dynamic messaging menu with TypeScript enabling users to filter conversations by location, view sender details, preview messages, and seamlessly transition to direct messaging.

• Integrated Chrome Notifications API to trigger real-time alerts for new messages, enhancing user engagement and responsiveness.

• Implemented secure React route integration, ensuring data protection by restricting access to authenticated users only.
`,
    gallery: [""],
  },
  {
    image: chicagoNews,
    name: "Tidings from Chicago (MVP Concept)",
    link: "https://christiansto.github.io/ChristianSTo-se-final-project/",
    github: "https://github.com/ChristianSTo/ChristianSTo-se_final_project",
    description: `A Chicago news website where users can search and save articles from third party API, NewsApi.

• Built a search interface using React.js, CSS, and HTML, enabling users to efficiently search.
      
• Integrated NewsApi with the site, allowing users to pull live news data from multiple sources.
      
• Deployed the project on GitHub Pages, providing users with easy access to the live website.
`,
    gallery: [""],
  },
  {
    image: helpingHands,
    name: "Project Helping Hands (Code Jam)",
    link: "https://christiansto.github.io/CTo-November-Code-Jam-2024/",
    github: "https://github.com/ChristianSTo/CTo-November-Code-Jam-2024",
    description: `Connects individuals and families with essential resources through local partnerships.

• Taught teammates React.js, Git branches, branch merging to magnify collaboration, productivity and communication.
            
• Developed dynamic and responsive user interfaces with React.js, Vite, HTML, CSS, and Node.js, improving the site's interactivity and load speed for a smoother user experience.
            
• Presented and demonstrated the project to a live audience, winning the audience award. 
`,
    gallery: [""],
  },
  {
    image: parksSparks,
    name: "Parks Sparks (Code Jam)",
    link: "https://rpinkha.github.io/June-Code-Jam-2024/",
    github: "https://github.com/RPinkha/June-Code-Jam-2024",
    description: `Park Sparks provides the optimal route to the most popular national parks, providing travelers with the shortest and most efficient pathway for their summer adventure. 

Using advanced algorithms for geospatial analysis, data visualizations, and a user-friendly webpage, we ensure that you reach your destination quickly.`,
    gallery: [""],
  },
];

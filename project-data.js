window.PROJECTS = {
  "dh-alliance": {
    title: "DH Alliance",
    team: "solo project",
    duration: "6 months",
    tools: "figma, figjam, photoshop, illustrator",
    summary: "A platform for discovering digital humanities projects, job opportunities, and tools for students and early-career researchers",
    hero: { type: "video", ratio: 4 / 3, src: "https://player.vimeo.com/video/1109030775?app_id=122963&autoplay=1&muted=1&loop=1&autopause=0&playsinline=1" },
    links: [
      { label: "figma", url: "https://www.figma.com/design/Dw80Ci9GIi59GxCRqtmXXu/Untitled" },
      { label: "behance", url: "https://www.behance.net/radosavlevich" }
    ],
    sections: {
      overview: {
        text: "Digital humanities projects are hard to find. Students can't find opportunities, researchers struggle to connect with technical specialists, and communities are scattered across different platforms.",
        media: { type: "video", ratio: 8 / 5, src: "https://player.vimeo.com/video/1214242925?app_id=122963&autoplay=1&muted=1&loop=1&autopause=0&playsinline=1" }
      },
      problem: {
        text: "Students and early-career researchers have no single place to discover projects, tools, communities, and relevant opportunities.",
        media: { type: "image", src: "assets/project/dh-hero.png" }
      },
      solution: {
        text: "A structured discovery platform connects people, projects, jobs, and tools through clear navigation and a scalable information architecture.",
        media: { type: "image", src: "assets/project/dh-screen.png" }
      }
    },
    metrics: [
      { value: "46", label: "Research Participants", text: "Conducted surveys, in-depth interviews, and UX testing to better understand user needs, workflows, and pain points" },
      { value: "15+", label: "unique screens", text: "Designed 15 interface screens from scratch based on the developed information architecture, with detailed consideration of navigation, structure, and interaction logic" }
    ],
    screens: [
      { title: "#1 home", text: "The homepage was designed to provide quick access to the alliance’s key projects while also introducing users to industry events and recent news.", image: "assets/project/dh-screen.png" },
      { title: "#2 discovery", text: "The discovery view helps users navigate projects and opportunities through clear categories and filters.", image: "assets/project-dh-1.png" },
      { title: "#3 projects", text: "Project pages organize essential information and make collaboration opportunities easier to understand.", image: "assets/project-dh-2.png" },
      { title: "#4 resources", text: "The resources area brings together practical tools for students and researchers in one structured space.", image: "assets/project/dh-screen.png" }
    ]
  },
  "b2b-dashboard": {
    title: "B2B Dashboard",
    team: "solo project",
    duration: "6 months",
    tools: "figma, figjam, photoshop",
    summary: "A data-heavy product designed to make complex operational information easier to understand and act on.",
    hero: { type: "image", src: "assets/project-b2b-1.png" },
    links: [{ label: "figma", url: "https://www.figma.com/design/Dw80Ci9GIi59GxCRqtmXXu/Untitled" }],
    sections: {
      overview: { text: "A complex B2B workspace redesigned around clarity, prioritization, and fast access to essential data.", media: { type: "image", src: "assets/project-b2b-1.png" } },
      problem: { text: "Users had to navigate dense information and fragmented workflows to complete routine tasks.", media: { type: "image", src: "assets/project-b2b-2.png" } },
      solution: { text: "A modular dashboard makes information scannable and turns the most important actions into clear next steps.", media: { type: "image", src: "assets/project-b2b-2.png" } }
    },
    metrics: [
      { value: "20+", label: "User Interviews", text: "Mapped daily workflows and identified the decisions that matter most to users." },
      { value: "12", label: "core screens", text: "Created a reusable interface system for the product’s key operational scenarios." }
    ],
    screens: [
      { title: "#1 dashboard", text: "The dashboard brings key metrics, alerts, and priority actions into one focused workspace.", image: "assets/project-b2b-2.png" },
      { title: "#2 reports", text: "Reports turn complex operational data into a structure that is easier to scan and compare.", image: "assets/project-b2b-1.png" }
    ]
  }
};

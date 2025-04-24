interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  image?: string;
}

interface ProjectsData {
  github: Project[];
  personal: Project[];
  academic: Project[];
}

export const projectsData: ProjectsData = {
  github: [
    {
      title: "Hotel Management System",
      description: "Hotel Management System with responsive design, room booking, availability checking, and user-friendly interface.",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/chandanverma03/hotel_management",
    },
    // {
    //   title: "Portfolio Template",
    //   description: "A customizable portfolio template for developers with dark/light mode, project showcase, and contact form.",
    //   technologies: ["React", "TailwindCSS", "Framer Motion"],
    //   githubUrl: "https://github.com/username/portfolio-template",
    //   demoUrl: "https://portfolio-template-demo.com"
    // }
  ],
  personal: [
    {
      title: "Movie Ticket Booking System",
      description: "A console-based system for selecting movies, viewing showtimes, and booking tickets efficiently.",
      technologies: ["C++"],
      image: "/Public/movie_ticket_booking_system.png",
    }
  ],
  academic: [
    {
      title: "Grocery Store Website",
      description: "Developed a dynamic website with user authentication, data management, and an interactive, responsive interface for seamless experience.",
      technologies: ["React", "PHP", "MySQL"]
    },
    {
      title: "Travel and Tour Website",
      description: "A travel and tour website that provides information about various travel destinations and booking options.",
      technologies: ["HTML", "CSS", "JavaScript","PHP","MySQL"]
    }
  ]
};
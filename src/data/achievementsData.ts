interface Achievement {
  title: string;
  description: string;
  issuer: string;
  date: string;
  type: 'certification' | 'competition' | 'award';
  url?: string;
}

export const achievementsData: Achievement[] = [
  {
    title: "Social Networks",
    description: "Completed a course on social networks, covering graph theory, algorithms, and applications in social media.",
    issuer: "NEPTL Swayam",
    date: "Oct 2024",
    type: "certification",
    url: "https://onlinecourses.nptel.ac.in/noc24_cs120/course"
  },
  {
    title: "Data Structures and Algorithms-Self Paced",
    description: "Completed GeeksforGeeks DSA Self-Paced course, gaining strong foundation in data structures, algorithms, and problem-solving skills.",
    issuer: "GFG",
    date: "August 2024",
    type: "certification",
    url: "/Public/GFG dsa self placed.pdf"
  },
  {
    title: "HTML, CSS, and JavaScript for Web Developers",
    description: "Completed a comprehensive course on web development fundamentals, including HTML, CSS, and JavaScript.",
    issuer: "Coursera (Johns Hopkins University)",
    date: "May 2024",
    type: "certification",
    url: "https://www.coursera.org/account/accomplishments/verify/E8B2LVHRR3VM"
  },
  {
    title: "Server side JavaScript with NodeJS",
    description: "Completed a course on server-side JavaScript programming using Node.js, covering Express.js and RESTful APIs.",
    issuer: "Coursera (University of California, Davis)",
    date: "March 2024",
    type: "certification",
    url: "https://www.coursera.org/account/accomplishments/verify/DNSRV6PL7Z9G"
  },
  {
    title: "Programming in C++: A hands-on Introduction",
    description: "Completed a hands-on course on C++ programming, focusing on object-oriented programming and data structures.",
    issuer: "Coursera",
    date: "March 2024",
    type: "certification",
    url: "https://www.coursera.org/account/accomplishments/specialization/5YAL954P6XT2"
  }
];
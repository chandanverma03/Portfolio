interface CompetitivePlatform {
  name: string;
  logo: string;
  url: string;
  description: string;
  problemsSolved: number;
  rating?: number;
}

export const competitiveData: CompetitivePlatform[] = [
  {
    name: "LeetCode",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
    url: "https://leetcode.com/username/",
    description: "Solved algorithmic challenges across easy, medium, and hard difficulty levels.",
    problemsSolved: 248,
    rating: 561625
  },
  {
    name: "GeeksforGeeks",
    logo: "https://media.geeksforgeeks.org/gfg-gg-logo.svg",
    url: "https://www.geeksforgeeks.org/user/chandan_v03/",
    description: "Participated in coding contests and contributed to the platform's knowledge base.",
    problemsSolved: 191,
    rating: 4750
  },
  {
    name: "HackerRank",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/HackerRank_Icon-1000px.png/240px-HackerRank_Icon-1000px.png",
    url: "https://www.hackerrank.com/profile/chandan000vrma",
    description: "Achieved 5-star rating in multiple domains including Problem Solving, Java, and SQL.",
    problemsSolved: 156
  }
];
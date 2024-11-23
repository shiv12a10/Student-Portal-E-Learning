export const featuredCourses = [
  {
    id: 1,
    title: "Introduction to React",
    description: "Learn the basics of React development",
    instructor: "John Doe",
    duration: "6 weeks",
    level: "Beginner",
    thumbnail: "https://via.placeholder.com/300x200/1a1a1a/00ff00?text=React+Course",
    modules: [
      {
        id: 1,
        title: "Getting Started with React",
        videos: [
          {
            id: 1,
            title: "Introduction to React",
            duration: "10:30",
            videoUrl: "https://www.youtube.com/embed/QFaFIcGhPoM",
            description: "Learn the basics of React and why it's important"
          },
          {
            id: 2,
            title: "Setting Up Your Development Environment",
            duration: "15:45",
            videoUrl: "https://www.youtube.com/embed/Law7wfdg_ls",
            description: "Set up your local development environment for React"
          }
        ]
      },
      {
        id: 2,
        title: "React Components",
        videos: [
          {
            id: 3,
            title: "Understanding Components",
            duration: "12:20",
            videoUrl: "https://www.youtube.com/embed/Ke90Tje7VS0",
            description: "Deep dive into React components"
          },
          {
            id: 4,
            title: "Props and State",
            duration: "18:15",
            videoUrl: "https://www.youtube.com/embed/4ORZ1GmjaMc",
            description: "Learn about props and state management"
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Advanced JavaScript",
    description: "Master JavaScript programming",
    instructor: "Jane Smith",
    duration: "8 weeks",
    level: "Advanced",
    thumbnail: "https://via.placeholder.com/300x200/1a1a1a/00ff00?text=JavaScript+Course",
    modules: [
      {
        id: 3,
        title: "Modern JavaScript Features",
        videos: [
          {
            id: 5,
            title: "ES6+ Features",
            duration: "20:15",
            videoUrl: "https://www.youtube.com/embed/NCwa_xi0Uuc",
            description: "Learn modern JavaScript features and syntax"
          },
          {
            id: 6,
            title: "Async Programming",
            duration: "25:30",
            videoUrl: "https://www.youtube.com/embed/PoRJizFvM7s",
            description: "Understanding async/await and Promises"
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Python for Data Science",
    description: "Learn Python programming for data analysis",
    instructor: "Mike Johnson",
    duration: "10 weeks",
    level: "Intermediate",
    thumbnail: "https://via.placeholder.com/300x200/1a1a1a/00ff00?text=Python+Course",
    modules: [
      {
        id: 4,
        title: "Python Basics",
        videos: [
          {
            id: 7,
            title: "Introduction to Python",
            duration: "15:20",
            videoUrl: "https://www.youtube.com/embed/rfscVS0vtbw",
            description: "Getting started with Python programming"
          },
          {
            id: 8,
            title: "Data Types and Variables",
            duration: "18:45",
            videoUrl: "https://www.youtube.com/embed/khKv-8q7YmY",
            description: "Understanding Python data types and variables"
          }
        ]
      },
      {
        id: 5,
        title: "Data Analysis with Pandas",
        videos: [
          {
            id: 9,
            title: "Introduction to Pandas",
            duration: "22:30",
            videoUrl: "https://www.youtube.com/embed/vmEHCJofslg",
            description: "Learn the basics of Pandas library"
          }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Web Security Fundamentals",
    description: "Learn essential web security concepts",
    instructor: "Sarah Wilson",
    duration: "6 weeks",
    level: "Intermediate",
    thumbnail: "https://via.placeholder.com/300x200/1a1a1a/00ff00?text=Security+Course",
    modules: [
      {
        id: 6,
        title: "Basic Security Concepts",
        videos: [
          {
            id: 10,
            title: "Introduction to Web Security",
            duration: "16:45",
            videoUrl: "https://www.youtube.com/embed/1hr0cM6WcB4",
            description: "Understanding basic web security principles"
          }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Mobile App Development",
    description: "Build mobile apps with React Native",
    instructor: "Alex Brown",
    duration: "12 weeks",
    level: "Intermediate",
    thumbnail: "https://via.placeholder.com/300x200/1a1a1a/00ff00?text=Mobile+Dev",
    modules: [
      {
        id: 7,
        title: "Getting Started with React Native",
        videos: [
          {
            id: 11,
            title: "React Native Basics",
            duration: "19:30",
            videoUrl: "https://www.youtube.com/embed/0-S5a0eXPoc",
            description: "Introduction to React Native development"
          }
        ]
      }
    ]
  }
];

export const allCourses = [
  ...featuredCourses,
  {
    id: 6,
    title: "UI/UX Design Principles",
    description: "Master the art of user interface design",
    instructor: "Emma Davis",
    duration: "8 weeks",
    level: "Beginner",
    thumbnail: "https://via.placeholder.com/300x200/1a1a1a/00ff00?text=UI+Design",
    modules: [
      {
        id: 8,
        title: "Design Fundamentals",
        videos: [
          {
            id: 12,
            title: "Introduction to UI/UX",
            duration: "14:20",
            videoUrl: "https://www.youtube.com/embed/c9Wg6Cb_YlU",
            description: "Learn the basics of UI/UX design"
          }
        ]
      }
    ]
  }
];

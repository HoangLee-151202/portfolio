import { Cassandra } from "@/public/assets/icons/Cassandra";
import { Chinese } from "@/public/assets/icons/Chinese";
import { CircularConnection } from "@/public/assets/icons/CircularConnection";
import { DataDisplay } from "@/public/assets/icons/DataDisplay";
import { Docker } from "@/public/assets/icons/Docker";
import { Elasticsearch } from "@/public/assets/icons/Elasticsearch";
import { English } from "@/public/assets/icons/English";
import { Facebook } from "@/public/assets/icons/Facebook";
import { Fastapi } from "@/public/assets/icons/Fastapi";
import { Flutter } from "@/public/assets/icons/Flutter";
import { Github } from "@/public/assets/icons/Github";
import { GithubIcon } from "@/public/assets/icons/GithubIcon";
import { Gitlab } from "@/public/assets/icons/Gitlab";
import { Grafana } from "@/public/assets/icons/Grafana";
import { Instruction } from "@/public/assets/icons/Instruction";
import { IntellijIdea } from "@/public/assets/icons/IntellijIdea";
import { Jira } from "@/public/assets/icons/Jira";
import { Kubernetes } from "@/public/assets/icons/Kubernetes";
import { Linkedin } from "@/public/assets/icons/Linkedin";
import { Mail } from "@/public/assets/icons/Mail";
import { Mysql } from "@/public/assets/icons/Mysql";
import { Nextjs } from "@/public/assets/icons/Nextjs";
import { Nodejs } from "@/public/assets/icons/Nodejs";
import { Postgresql } from "@/public/assets/icons/Postgresql";
import { Prometheus } from "@/public/assets/icons/Prometheus";
import { React } from "@/public/assets/icons/React";
import { Redis } from "@/public/assets/icons/Redis";
import { Spring } from "@/public/assets/icons/Spring";
import { Tailwindcss } from "@/public/assets/icons/Tailwindcss";
import { Typescript } from "@/public/assets/icons/Typescript";
import { Vietnamese } from "@/public/assets/icons/Vietnamese";
import { VisualStudioCode } from "@/public/assets/icons/VisualStudioCode";
import { Vue } from "@/public/assets/icons/Vue";
import { Webstorm } from "@/public/assets/icons/Webstorm";

const ContactsData = [
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/le.huy.hoang.519427/",
  },
  {
    name: "Linkedin",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/ho%C3%A0ng-l%C3%AA-92929326a/",
  },
  {
    name: "Github",
    icon: GithubIcon,
    href: "https://github.com/HoangLee-151202",
  },
  {
    name: "Gmail",
    icon: Mail,
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=hoang151202@gmail.com",
  },
];

export const PersonalInfoData = {
  name: "Le Huy Hoang",
  role: "FullStack Developer",
  contacts: ContactsData,
  hero: {
    content1:
      "I build modern, elegant, and high-performance web applications — combining strong engineering, clean architecture, and high-quality UI to create experiences that truly scale.",
    content2:
      "With 3+ years in full-stack development, I specialize in crafting reliable, responsive, and scalable digital products for businesses and global clients.",
  },
  about: {
    content1: "I'm a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.",
    content2: "Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.",
    whatIDo: [
      {
        title: "Web Development",
        description: "I design and build modern, responsive web applications using React, Next.js, Vue, and Node.js. My focus is on creating seamless user experiences with clean code, optimized performance, and scalable architecture.",
        icon: Instruction,
      },
      {
        title: "FullStack Solutions",
        description: "From front-end interfaces to back-end APIs, I develop end-to-end web solutions that are secure, maintainable, and high-performing. I integrate databases, authentication, and cloud deployment to deliver production-ready systems.",
        icon: DataDisplay,
      },
      {
        title: "Freelance & Collaboration",
        description: "I work with startups, agencies, and clients worldwide to deliver digital products that make an impact. My approach combines technical precision with clear communication and on-time delivery.",
        icon: CircularConnection,
      }
    ],
    whatIDone: [
      {
        name: "Year Experience",
        value: "3+",
      },
      {
        name: "Project Done",
        value: "12+",
      },
      {
        name: "Good Review",
        value: "40%",
      },
      {
        name: "Followers",
        value: "1.2k",
      },
    ],
    futureGoals: ["Senior FullStack Developer", "Team Leadership", "Large-Scale Systems"]
  }, 
  resume: {
    content: "I’m a full-stack web developer with over 3 years of hands-on experience building and maintaining web applications using React, Next.js, Vue, and Node.js.",
    contacts: [
      {
        name: "Phone",
        icon: "📞",
        href: "tel:+84762348815",
        value: "+84762348815"
      },
      {
        name: "Mail",
        icon: "📧",
        href: "mailto:hoang151202@gmail.com",
        value: "hoang151202@gmail.com"
      },
      {
        name: "Address",
        icon: "📌",
        href: "https://maps.app.goo.gl/oiLq151ehoVxV36T6",
        value: "Cau Giay - Ha Noi"
      }
    ],
    tags: [
      {
        icon: "🧱",
        tag: "Web / Mobile Development",
      },
      {
        icon: "🔒",
        tag: "Performance Optimization",
      },
      {
        icon: "🗃️",
        tag: "Database & Data Management",
      },
      {
        icon: "🎨",
        tag: "UI/UX Implementation",
      },
      {
        icon: "🧠",
        tag: "Architecture & Scalability",
      },
      {
        icon: "☁️",
        tag: "System Deployment & DevOps",
      },
    ],
    experience: [
      {
        company: "BloomGoo Company",
        role: "FullStack Developer",
        time: "2024-2025",
        outstands: [
          "Developed full-stack web applications using React, Next.js, Node.js, and PostgreSQL.",
          "Built reusable components and optimized UI for performance and accessibility.",
          "Deployed applications to Vercel and AWS, monitored performance using Sentry and LogRocket."
        ]
      },
      {
        company: "BloomGoo Company",
        role: "FullStack Developer",
        time: "2024-2025",
        outstands: [
          "Developed full-stack web applications using React, Next.js, Node.js, and PostgreSQL.",
          "Built reusable components and optimized UI for performance and accessibility.",
          "Deployed applications to Vercel and AWS, monitored performance using Sentry and LogRocket."
        ]
      },
      {
        company: "VCCorp Corporation",
        role: "Frontend Developer",
        time: "2024-2025",
        outstands: [
          "Built reusable components and modular design systems.",
          "Integrated RESTful APIs and handled state management (Redux / Zustand).",
          "Participated in code review and performance optimization across the team."
        ]
      }
    ], 
    skills: [
      {
        name: "Techs",
        outstands:  [
          {
            name: "React",
            icon: React,
          },
          {
            name: "Node.js",
            icon: Nodejs,
          },
          {
            name: "PostgreSQL",
            icon: Postgresql,
          },
        ]
      },
      {
        name: "Tools",
        outstands: [
          {
            name: "Webstorm",
            icon: Webstorm,
          },
          {
            name: "GitLab",
            icon: Gitlab,
          },
          {
            name: "Jira",
            icon: Jira,
          },
        ]
      },
      {
        name: "Languages",
        outstands: [
          {
            name: 'English',
            icon: English
        },
        {
            name: 'Chinese',
            icon: Chinese
        },
        {
            name: 'Vietnamese',
            icon: Vietnamese
        }    
        ]
      }
    ]
  },
  skills: {
    types: [
      {
        name: "Frontend",
        skills: [
          {
            name: "React",
            icon: React,
          },
          {
            name: "Next.js",
            icon: Nextjs,
          },
          {
            name: "Vue.js",
            icon: Vue,
          },
          {
              name: "Tailwind CSS",
              icon: Tailwindcss,
            },
            {
              name: "TypeScript",
              icon: Typescript,
            },
        ]
      },
      {
        name: "Backend",
        skills: [
          {
            name: "Node.js",
            icon: Nodejs,
          },
          {
            name: "Spring Boot",
            icon: Spring,
          },
          {
            name: "FastAPI",
            icon: Fastapi,
          },
        ]
      },
      {
        name: "Mobile",
        skills: [
          {
            name: "Flutter",
            icon: Flutter,
          },
          {
              name: "React Native",
              icon: React,
            },
        ]
      },
      {
        name: "DB & Storage",
        skills: [
          {
            name: "PostgreSQL",
            icon: Postgresql,
          },
          {
              name: "MySQL",
              icon: Mysql,
            },
            {
              name: "Redis",
              icon: Redis,
            },
            {
              name: "Elasticsearch",
              icon: Elasticsearch,
            },
            {
              name: "Cassandra",
              icon: Cassandra,
            },
        ]
      },
      {
        name: "DevOps & Cloud",
        skills: [
          {
            name: "Kubernetes",
            icon: Kubernetes,
          },
          {
              name: "Docker",
              icon: Docker,
            },
            {
              name: "Prometheus",
              icon: Prometheus,
            },
            {
              name: "Grafana",
              icon: Grafana,
            },
            {
              name: "GitLab",
              icon: Gitlab,
            },
        ]
      },
      {
        name: "Tools & Workflow",
        skills: [
          {
            name: "Visual Studio Code",
            icon: VisualStudioCode,
          },
          {
              name: "IntelliJ IDEA",
              icon: IntellijIdea,
            },
            {
              name: "Webstorm",
              icon: Webstorm,
            },
            {
              name: "Jira",
              icon: Jira,
            },
            {
              name: "GitHub Actions",
              icon: Github,
            },
        ]
      }
    ],
    projectsOutstanding: [
      {
      name: "CHUOICANHO",
      img: "/assets/images/project.png",
      type: "Website",
      techs: [
        {
          name: "React",
          icon: React,
        },
        {
          name: "Spring Boot",
          icon: Spring,
        },
        {
          name: "PostgreSQL",
          icon: Postgresql,
        },
      ],
    },
    {
      name: "CHUOICANHO",
      img: "/assets/images/project.png",
      type: "Website",
      techs: [
        {
          name: "React",
          icon: React,
        },
        {
          name: "Spring Boot",
          icon: Spring,
        },
        {
          name: "PostgreSQL",
          icon: Postgresql,
        },
      ],
    },
    {
      name: "CHUOICANHO",
      img: "/assets/images/project.png",
      type: "Website",
      techs: [
        {
          name: "React",
          icon: React,
        },
        {
          name: "Spring Boot",
          icon: Spring,
        },
        {
          name: "PostgreSQL",
          icon: Postgresql,
        },
      ],
    },
    {
      name: "CHUOICANHO",
      img: "/assets/images/project.png",
      type: "Website",
      techs: [
        {
          name: "React",
          icon: React,
        },
        {
          name: "Spring Boot",
          icon: Spring,
        },
        {
          name: "PostgreSQL",
          icon: Postgresql,
        },
      ],
    },
    {
      name: "CHUOICANHO",
      img: "/assets/images/project.png",
      type: "Website",
      techs: [
        {
          name: "React",
          icon: React,
        },
        {
          name: "Spring Boot",
          icon: Spring,
        },
        {
          name: "PostgreSQL",
          icon: Postgresql,
        },
      ],
    },
    {
      name: "CHUOICANHO",
      img: "/assets/images/project.png",
      type: "Website",
      techs: [
        {
          name: "React",
          icon: React,
        },
        {
          name: "Spring Boot",
          icon: Spring,
        },
        {
          name: "PostgreSQL",
          icon: Postgresql,
        },
      ],
    },
   ],
   projects: [
    {
    name: "CHUOICANHO",
    img: "/assets/images/project.png",
    type: "Website",
    techs: [
      {
        name: "React",
        icon: React,
      },
      {
        name: "Spring Boot",
        icon: Spring,
      },
      {
        name: "PostgreSQL",
        icon: Postgresql,
      },
    ],
  },
  {
    name: "CHUOICANHO",
    img: "/assets/images/project.png",
    type: "Website",
    techs: [
      {
        name: "React",
        icon: React,
      },
      {
        name: "Spring Boot",
        icon: Spring,
      },
      {
        name: "PostgreSQL",
        icon: Postgresql,
      },
    ],
  },
  {
    name: "CHUOICANHO",
    img: "/assets/images/project.png",
    type: "Website",
    techs: [
      {
        name: "React",
        icon: React,
      },
      {
        name: "Spring Boot",
        icon: Spring,
      },
      {
        name: "PostgreSQL",
        icon: Postgresql,
      },
    ],
  },
  {
    name: "CHUOICANHO",
    img: "/assets/images/project.png",
    type: "Website",
    techs: [
      {
        name: "React",
        icon: React,
      },
      {
        name: "Spring Boot",
        icon: Spring,
      },
      {
        name: "PostgreSQL",
        icon: Postgresql,
      },
    ],
  },{
    name: "CHUOICANHO",
    img: "/assets/images/project.png",
    type: "Website",
    techs: [
      {
        name: "React",
        icon: React,
      },
      {
        name: "Spring Boot",
        icon: Spring,
      },
      {
        name: "PostgreSQL",
        icon: Postgresql,
      },
    ],
  },{
    name: "CHUOICANHO",
    img: "/assets/images/project.png",
    type: "Website",
    techs: [
      {
        name: "React",
        icon: React,
      },
      {
        name: "Spring Boot",
        icon: Spring,
      },
      {
        name: "PostgreSQL",
        icon: Postgresql,
      },
    ],
  },{
    name: "CHUOICANHO",
    img: "/assets/images/project.png",
    type: "Website",
    techs: [
      {
        name: "React",
        icon: React,
      },
      {
        name: "Spring Boot",
        icon: Spring,
      },
      {
        name: "PostgreSQL",
        icon: Postgresql,
      },
    ],
  },
  {
    name: "CHUOICANHO",
    img: "/assets/images/project.png",
    type: "Website",
    techs: [
      {
        name: "React",
        icon: React,
      },
      {
        name: "Spring Boot",
        icon: Spring,
      },
      {
        name: "PostgreSQL",
        icon: Postgresql,
      },
    ],
  },{
    name: "CHUOICANHO",
    img: "/assets/images/project.png",
    type: "Website",
    techs: [
      {
        name: "React",
        icon: React,
      },
      {
        name: "Spring Boot",
        icon: Spring,
      },
      {
        name: "PostgreSQL",
        icon: Postgresql,
      },
    ],
  },
  {
    name: "CHUOICANHO",
    img: "/assets/images/project.png",
    type: "Website",
    techs: [
      {
        name: "React",
        icon: React,
      },
      {
        name: "Spring Boot",
        icon: Spring,
      },
      {
        name: "PostgreSQL",
        icon: Postgresql,
      },
    ],
  },
  {
    name: "CHUOICANHO",
    img: "/assets/images/project.png",
    type: "Website",
    techs: [
      {
        name: "React",
        icon: React,
      },
      {
        name: "Spring Boot",
        icon: Spring,
      },
      {
        name: "PostgreSQL",
        icon: Postgresql,
      },
    ],
  },
  {
    name: "CHUOICANHO",
    img: "/assets/images/project.png",
    type: "Website",
    techs: [
      {
        name: "React",
        icon: React,
      },
      {
        name: "Spring Boot",
        icon: Spring,
      },
      {
        name: "PostgreSQL",
        icon: Postgresql,
      },
    ],
  },
 ],
  }
};

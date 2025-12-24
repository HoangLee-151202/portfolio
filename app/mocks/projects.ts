import { Nextjs } from "@/public/assets/icons/Nextjs";
import { React } from "@/public/assets/icons/React";

export const projectData = {
    name: "CHUOICANHO",
    shortDescription: "Real Estate Management System",
    description: "The project is a modern web platform with a focus on performance, stability and user experience. The system is built with a flexible architecture, easy to expand and suitable for large-scale growth.",
    responsibilities: [
        "Built front-end and back-end features for seamless user experience.",
        "Developed and integrated secure, scalable REST/GraphQL APIs.",
        "Implemented clean architecture for flexibility and long-term scalability",
        "Optimized performance across front-end, back-end, and database layers.",
        "Set up CI/CD pipelines and essential monitoring tools."
        ],
        techStack: [
            {
                name: "Frontend", 
                techs: [{
                    name: "React",
                    icon: React,
                  },
                  {
                    name: "Next.js",
                    icon: Nextjs,
                  },]
            },
            {
                name: "Backend", 
                techs: [{
                    name: "React",
                    icon: React,
                  },
                  {
                    name: "Next.js",
                    icon: Nextjs,
                  },]
            },
            {
                name: "Database", 
                techs: [{
                    name: "React",
                    icon: React,
                  },
                  {
                    name: "Next.js",
                    icon: Nextjs,
                  },]
            },
            {
                name: "DevOps", 
                techs: [{
                    name: "React",
                    icon: React,
                  },
                  {
                    name: "Next.js",
                    icon: Nextjs,
                  },]
            },
            {
                name: "Tools", 
                techs: [{
                    name: "React",
                    icon: React,
                  },
                  {
                    name: "Next.js",
                    icon: Nextjs,
                  },]
            },
            {
                name: "Integrations", 
                techs: [{
                    name: "React",
                    icon: React,
                  },
                  {
                    name: "Next.js",
                    icon: Nextjs,
                  },]
            }
        ],
        overview: [
            {
                title: "Problem",
                description: "Users have difficulty managing rental rooms, leading to ineffective management and limited business capabilities.",
            },
            {
                title: "Target Users",
                description: "Business users need a simple, fast and reliable tool to manage rental properties in real time.",
            },
            {
                title: "Project Goal",
                description: "Build modern web solutions to manage rental properties, optimize performance, enhance user experience and ensure long-term scalability.",
            },
            {
                title: "Expected Outcome",
                description: "The project provides a stable, easy-to-use system that significantly improves rental room management time, while creating a foundation ready for future feature and scale expansion.",
            }
        ],
    features: [
    {
        name: "Authentication",
        description: "Allows users to securely register, log in, and manage their account.",
        keyCapabilities: ["JWT-based authentication", "Role-based access", "Prisma + PostgreSQL for data handling", "Rate limiting for security"]
    },
    {
        name: "Dashboard",
        description: "usiness users need a simple, fast and reliable tool to manage rental properties in real time.",
        keyCapabilities: ["JWT-based authentication", "Role-based access", "Prisma + PostgreSQL for data handling", "Rate limiting for security"]
    },
    {
        name: "Real-time updates (WebSocket)",
        description: "Build modern web solutions to manage rental properties, optimize performance, enhance user experience and ensure long-term scalability.",
        keyCapabilities: ["JWT-based authentication", "Role-based access", "Prisma + PostgreSQL for data handling", "Rate limiting for security"]
    },
    {
        name: "System monitoring",
        description: "The project provides a stable, easy-to-use system that significantly improves rental room management time, while creating a foundation ready for future feature and scale expansion.",
        keyCapabilities: ["JWT-based authentication", "Role-based access", "Prisma + PostgreSQL for data handling", "Rate limiting for security"]
    }
    ],
    challengesSolutions: [{
        title: "System performance drops sharply as data increases",
        description: "As the number of records and concurrent users increases, the system begins to experience problems such as slow API response, long UI rendering times, and database overload. This directly affects the user experience and stability of the project.",
        tags: [
            {
                label: "FrontEnd",
                color: 'bg-sky-700'
            },
            {
                label: "UI/UX",
                color: 'bg-violet-700'
            }
        ],
        solutions:[
            "Add caching layer (Redis) for high-frequency APIs to reduce DB load.",
            "Optimize queries using indexing, table sharding, and connection pooling.",
            "Leverage server-side rendering (Next.js) + incremental static regeneration for pages with content that changes little.",
            "Code-splitting and lazy-loading UI to reduce initial load on front-end"
        ] 
    },
    {
        title: "User account authentication",
        description: "Business users need a simple, fast and reliable tool to manage rental properties in real time.",
        tags: [
            {
                label: "BackEnd",
                color: 'bg-violet-700'
            },
            {
                label: "Authentication",
                color: 'bg-red-700'
            }
        ],
        solutions:[
            "Add caching layer (Redis) for high-frequency APIs to reduce DB load.",
            "Optimize queries using indexing, table sharding, and connection pooling.",
            "Leverage server-side rendering (Next.js) + incremental static regeneration for pages with content that changes little.",
            "Code-splitting and lazy-loading UI to reduce initial load on front-end"
        ] 
    },
    {
        title: "System performance drops sharply as data increases",
        description: "As the number of records and concurrent users increases, the system begins to experience problems such as slow API response, long UI rendering times, and database overload. This directly affects the user experience and stability of the project.",
        tags: [
            {
                label: "FrontEnd",
                color: 'bg-sky-700'
            },
            {
                label: "UI/UX",
                color: 'bg-violet-700'
            }
        ],
        solutions:[
            "Add caching layer (Redis) for high-frequency APIs to reduce DB load.",
            "Optimize queries using indexing, table sharding, and connection pooling.",
            "Leverage server-side rendering (Next.js) + incremental static regeneration for pages with content that changes little.",
            "Code-splitting and lazy-loading UI to reduce initial load on front-end"
        ] 
    },
    {
        title: "System performance drops sharply as data increases",
        description: "As the number of records and concurrent users increases, the system begins to experience problems such as slow API response, long UI rendering times, and database overload. This directly affects the user experience and stability of the project.",
        tags: [
            {
                label: "FrontEnd",
                color: 'bg-sky-700'
            },
            {
                label: "UI/UX",
                color: 'bg-violet-700'
            }
        ],
        solutions:[
            "Add caching layer (Redis) for high-frequency APIs to reduce DB load.",
            "Optimize queries using indexing, table sharding, and connection pooling.",
            "Leverage server-side rendering (Next.js) + incremental static regeneration for pages with content that changes little.",
            "Code-splitting and lazy-loading UI to reduce initial load on front-end"
        ] 
    }]
}
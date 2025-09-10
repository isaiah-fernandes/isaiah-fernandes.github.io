// js/data.js

// Personal and site-wide data
const siteData = {
    name: "Isaiah Fernandes",
    jobTitle: "Mechanical Engineer",
    exp: "",
    taglines: [
        "I build...",
        "I design...",
        "I innovate...",
        "I solve problems...",
        "I optimize...",
        "I enhance...",
        "I improve...",
        "I plan...",
        "I collaborate...",
        "I reimagine...",
        "I upgrade...",
        "I engineer..."
    ],
    about: [
        "HOWDY!",
        
        "I'm Isaiah and I'm your guy if you want to get stuff done.",

        "I’m someone who’s curious, creative, and always learning or exploring something new. With a passion for optimizing things, I’m always down to learn and try new things. This space is where I share a bit of what I do, what I have done, what I'm working on, and things that inspire me. Feel free to poke around!",

        "I’m just a person trying to make sense of the world through engineering: by building, experimenting, and occasionally breaking things. This site is a mix of experiments, projects, and thoughts. I enjoy taking on projects, solving problems, and picking up new things all while I figure out how stuff works. I the kind of guy who would figure things out as we go about the project. ",

        "I believe engineering is a means to an end. My goal is the end. So I guess, whatever it takes to get the job done. I also believe in hard work and always catching up with technology with ever-ongoing learning to get there.",

        "I love tackling challenges, whether it’s with code, machines, or with duct tape. I mess around with ideas, trying to turn them into reality. Chasing projects that start with “what if…” that somehow turn into projects that keep me up at 2am. I built this site to document my journey, share things about me, and maybe connect with folks who get excited about the same stuff.",

        "Also Did I mention I'm an Aggie Engineer!"
    ],
    socialLinks: {
        github: "https://github.com/isaiah-fernandes",
        linkedin: "https://www.linkedin.com/in/fernandes-isaiah/",
        email: "mailto:isaiahfernandes0777@gmail.com"
    }
};


const experiences = [
    {
        type: "experience-company",
        link: "https://resolvetech.com/",
        period: "June 2025 - Present",
        title: "Resolve Tech Solutions",
        roles: [
            {
                title: "AI Machine Learning Engineer",
                period: "June 2025 - Present",
                description: [
                    "Collaborated with RTS to design and deploy AI solutions, applying machine learning to engineering challenges. Developed projects that integrated predictive analytics and automation into operational workflows, streamlining processes. Bridged engineering and AI by creating data-driven solutions, enabling innovation and technical advancement across disciplines."
                ],
            },
            // {
            //     title: "Software Engineer",
            //     period: "Jan 2024 - Apr 2025",
            //     description: [
            //         "Working on Performance Models Productization team which handles external releases to various partners.",
            //         "Optimizing AWS infrastructure using various tools.",
            //     ]
            // },
        ],
        tags: [
            "✨ Project leading",
            "✨ Project Collaboration",
            "✨ Software Development Engineering",
            "AWS Services",
            "AWS-Bedrock",
            "AWS-Lambda",
            "AWS-databases",
            "Python"
        ]
    },
    // {
    //     type: "experience-company",
    //     link: "https://barnettenterprisegroup.com/",
    //     period: "May 2025 - June 2025",
    //     title: "Barnett Enterprise Group",
    //     roles: [
    //         {
    //             title: "Data Engineer",
    //             period: "May 2025 - June 2025",
    //             description: [

    //             ]
    //         }
    //     ],
    //     tags: [

    //     ]
    // },
    {
        type: "experience-company",
        link: "https://engineering.tamu.edu/mtde/index.html",
        period: "Nov 2024 - May 2025",
        title: "Texas A&M University - MTDE",
        roles: [
            {
                title: "Subsea Processing Engineering Analyst",
                period: "Nov 2024 - May 2025",
                description:[
                    "Collaborated with Texas A&M Engineering faculty and research teams on subsea processing, boosting, flow assurance, and production operations. Executed controlled experiments, computational simulations, and quantitative data analysis using engineering-specific methodologies. Performed technical reviews to assess current research gaps and support proposal development. Analyzed data, compiled results into technical reports, documentation, and manuscripts. Contributed to problem-solving and milestone achievement through validated findings, optimized project outcomes, and driving innovations in subsea engineering."
        ]}
        ],
        tags: [
                "✨ Project leading", 
                "✨ Project Collaboration", 
                "✨ Subsea Engineering", 
                "✨ Pipeline Engineering",  
                "✨ Flow Assurance", 
                "✨ R&D",
                "OLGA", 
                "Orca Flex", 
                "ANSYS", 
                "Fusion 360",
        ]
    },
    {
        type: "experience-company",
        link: "",
        period: "Aug 2020 - May 2021",
        title: "Madgear Motorsports",
        roles: [
            {
                title: "Co-Head of Sponsorship",
                period: "Aug 2020 - May 2021",
                description: [
                    "Collaborated on designing, fabricating, and testing an off-road vehicle for the SAE BAJA competition. Applying SolidWorks for 3D modeling and ANSYS for stress, strain, and durability analysis of critical components. Executed in-house fabrication through welding, cutting, and machining of the frame, suspension, and drivetrain. Conducted rigorous performance, endurance, and reliability testing. Managed fundraising, sponsorships, and industry relations to secure financial and material support. Oversaw budgeting, logistics, and documentation, ensuring smooth operations, adherence to timelines, and effective team coordination to achieve competition objectives.",
                ]
            }
        ],
        tags: [
                "✨ Project Management",
                "✨ Marketing Head",
                "✨ Sponsorship lead",
                "✨ Automotive engineering",
                "✨ Design and Fabrication",
                "✨CAD/CAM/CAE",
                "SOLIDWORKS",
                "Ansys",
                "Fusion 360"
        ]
    },
    {
        type: "experience-company",
        link: "",
        period: "Aug 2019 - May 2020",
        title: "DBIT Event (Colosseum)",
        roles: [
            {
                title: "Co-Head of Informal Events",
                period: "Aug 2019 - May 2020",
                description: [
                    "Directed end-to-end event operations by integrating project management and supply chain methodologies. Coordinated 30 team members across multiple functions, managing timelines, budgets, and resource allocation with tools like Gantt charts, and executed cost/resource allocation. Oversaw procurement, vendor negotiations, and logistics for transportation, storage, and on-site deployment of infrastructure and technical equipment. Implemented risk assessment frameworks, contingency planning, and progress tracking to ensure deadlines and budgets were met. Documented planning, execution, and post-event reporting to optimize operational efficiency and future operations." ,
                ]
            }
        ],
        tags: [
            "✨ Project Management",
            "✨ Project Engineering",
        ]
    }
];

// Project data
const projects = [
    {
        type: "project",
        link:
            "https://cbre-miq-ui-rts-resolvetech.com/",
        period: "July 2025 - Sept 2025",
        title: "Financial Data Reporting Automation",
        description:
            "Developed AI agents to generate, verify, compile data, increase accuracy, eliminating review, and automated fiscal quarters data workflows.",
        tags: [
            "✨ Machine Learning",
            "✨ Agentic AI",
            "✨ Project leading",
            "Python",
            "AWS",
        ]
    },
    {
        type: "project",
        link:
            "https://cbre-rts.com/dashboard",
        period: "June 2025 - Aug 2025",
        title: "Financial Executive Chatbot",
        description:
            "Built an AI-driven chatbot enabling executives to query financial insights across multiple structured categories across their entire database.",
        tags: [
            "✨ Machine Learning",
            "✨ Agentic AI",
            "Python",
            "AWS",
        ]
    },
    {
        type: "project",
        link: "",
        period: "Aug 2023 - Dec 2023",
        title: "Petroleum Project Evaluation",
        description:
            "Determining reserves, forecasted production, and modeled cash flows to evaluate project profitability and guide investment decisions effectively",
        tags: ["✨ Reserves Evaluation", "✨ Production Forecasting", "✨ Cash Flow Modeling" , "✨ ell Economic", "✨ Economic Indicators","Excel"]
    },
    {
        type: "project",
        link:
            "",
        period: "Jan 2023 - May 2023",
        title: "Design of a Pipeline",
        description:
            "Design of a offshore pipeline mechanically as per API 1111",
        tags: ["✨ Wall Thickness Design", "✨ Stress & Buckling Analysis" ,"✨ Thermal & Expansion Design" ,"✨ Material Selection", "Orca Flex"]
    },
    {
        type: "project",
        link:
            "",
        period: "Aug 2022 - Dec 2022",
        title: "Kyle offshore field development",
        description:
            "Prefeed Feed project on a potential Oil and Gas Endeavor.",
        tags: [
            "✨ Pre-FEED", "✨ Design", "✨ Project Planning", "✨ Project Scheduling",
		    "Excel",		
        ]
    },
    {
        type: "project",
        link:
            "",
        period: "Jan 2023 - May 2023",
        title: "Flow Assurance",
        description:
            "Design of a pipeline to combat hydrates and asphaltenes during shut ins and blow downs.",
        tags: [
            "✨ Hydrates Mitigation", "✨ Simulation Engineering", "✨ Pipeline Engineering",
            "OLGA", 
        ]
    },
    {
        type: "project",
        link:
            "",
        period: "Aug 2020 - May 2021",
        title: "Mechanical Robo",
        description:
            "Design and Fabrication of a robot to assist with solar panels peak functionality.",
        tags: [
            "✨ Mechanical Design", "✨ CAD/CAM/CAE", "✨ Simulation Engineering",
            "Fusion 360", "Solidworks", "Ansys-Mechanical", "Ansys-Fluent"
        ]
    },
    {
        type: "project",
        link:
            "",
        period: "Jan 2019 - May 2019",
        title: "Design of a Visco Meter",
        description:
            "Design and Fabrication of a viscometer to measure the viscous index of various liquids.",
        tags: [
            "✨ Design", "✨ Fabrication", "✨ Construction",
        ]
    }
];

const certifications = [
    {
        type: "certificate",
        link:
            "",
        period: "Aug 2022 - May 2024",
        title: "Texas A&M University - College Station",
        description:
            "Engineering Project Management Certification",
        tags: [
            "Project Implementation",
            "Petroleum Project Evaluation and Management", 
            "Engineering Economy,",
            "Project Management for Engineers",
        ]
    },
    {
        type: "certificate",
        link:
            "",
        period: "2025 - Ongoing",
        title: "Project Management Institute - PMI",
        description:
            "Certified Associate in Project Management [CAPM]",
        tags: [

        ]
    },
    {
        type: "certificate",
        link:
            "",
        period: "2020-2021",
        title: "Official Autodesk Certified",
        description:
            "CAD/CAM/CAE for Mechanical Engineering",
        tags: [
                
        ]
    }
]

const awards = [
    {
        type: "award",
        link:
            "https://doi.org/10.4043/35905-MS",
        period: "May 2024 - May 2025",
        title: "Publication: OnePetro OTC-35905-MS",
        description:
            "Application of a Multiphase Flow Simulator for Production Optimization of Tiebacks Using Subsea Multiphase Pumping: To Evaluate the production optimization of tiebacks using multiphase pumps and to analyze the added production of oil beyond the natural production.",
        tags: [
            "✨ Lead Author", "✨ Presenter", "✨ Research & Development", "✨ Simulation Engineering", 
            "OLGA", "MS-Excel",
        ]
    },    
    {
        type: "award",
        link:
            "",
        period: "Dec 2020",
        title: "Achievement: Developing Engineering Innovations",
        description:
            "Achieved 2nd place in a Smart City Innovation Competition organized by the Entrepreneurship Development & Engineering Department for the design and implementation of a Porthole Detection and Automated Filling System.",
        tags: [
            "✨ ertificate of Merit", "✨ Ranked #2", "✨ Entrepreneurship Engineering", 
            "MS-Excel", "MS-Projects",
        ]
    }
]

const skills = [
    {
        name: "Mechanical Design",
        level: 8.5,
        subSkills: [
            { name: "Fusion 360", level: 9 },
            { name: "DS-Solidworks 2019", level: 7.5 },
            { name: "DS-Solidworks 2020", level: 7 }
        ]
    },
    {
        name: "Simulation Engineering",
        level: 7.5,
        subSkills: [
            { name: "ANSYS Mechanical", level: 7.5 },
            { name: "ANSYS Fluent/CFX", level: 6.5 }
        ]
    },
    {
        name: "Project Engineering",
        level: 8,
        subSkills: [
            { name: "MS-Projects", level: 8 }
        ]
    },
    {
        name: "Oil & Gas",
        level: 7.5,
        subSkills: [
            { name: "OLGA", level: 7.5 },
            { name: "Orca Flex", level: 8 }
        ]
    },
    {
        name: "AWS",
        level: 7.5,
        subSkills: [
            { name: "Lambda", level: 6.5 },
            { name: "Bedrock", level: 7 },
            { name: "S3", level: 7 },
            { name: "EC2", level: 6 },
            { name: "RDS", level: 6.5 }
        ]
    },
    {
        name: "Languages",
        level: 7.5,
        subSkills: [
            { name: "Python", level: 7 },
            { name: "C/C++", level: 6.5 },
            { name: "Java", level: 5 }
        ]
    },
];

// New Timeline Data (for Timeline feature)
const timelineData = [
    {
        title: "BEng",
        period: "Aug 2017 - May 2021",
        info: "Studied Mechanical Engineering at Mumbai University.",
        year: "2017"
    },
    {
        title: "1st project leading experience",
        period: "August 2019 - May 2020",
        info: "Got my first project leading exposure as a junior level project manager.",
        year: "2019"
    },
    {
        title: "1st mechanical Job",
        period: "August 2020 - May 2021",
        info: "Worked on building a car as well as figuring out ways to sponsor it.",
        year: "2020"
    },
    {
        title: "MEng",
        period: "August 2022 - May 2024",
        info: "Went to school to gain my Master's at Texas A&M University.",
        year: "2022"
    },
    {
        title: "Analytics Engineering",
        period: "Nov 2024 - May 2025",
        info: "Research and Development into optimizing oil and gas processes.",
        year: "2024"
    },
    {
        title: "Data Engineering",
        period: "May 2025 - June 2025",
        info: "Focusing on making small buisnesses more profitable.",
        year: "2024"
    },
    {
        title: "ML Engineering",
        period: "June 2025 - Sept 2025",
        info: "Optimizing engineering processes by in-cooperating AI.",
        year: "2024"
    }
];

/// Education data
const educations = [
    {
        type: "education",
        link:
            "https://tamu.edu",
        period: "Aug 2022 - May 2024",
        title: "Texas A&M University - College Station",
        description:
            "Master of Engineering with a specialization in Subsea oil and Gas Engineering.",
        tags: [
            "Subsea Eng Fundamentals", "Oil and Gas Hardware", "Umbilical Control Systems", "Flowline Design", "Riser Design", "Pipeline Design", "Flow Assurance and Operability", "Production Operations", "Offshore Construction and Installations",
        ]
    },
    {
        type: "education",
        link:
            "https://mum.digitaluniversity.ac/",
        period: "Aug 2017 - May 2021",
        title: "Mumbai University",
        description:
            "Bachelor of Engineering - Mechanical Engineering.",
        tags: [
            "Mechanics", "CAD/CAM/CAE", "Thermodynamics", "Fluid Mechanics", "Machine Design", "Power Engineering", "Finite Element Analysis", "Internal Combustion Engines", "HVAC", "Heat Transfer", "Dynamic of Machinery", "Kinematics of Machinery", "Material Engineering", "Pumps & Compressors",	
        ]
    },
]
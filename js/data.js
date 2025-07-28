// js/data.js

// Personal and site-wide data
const siteData = {
    name: "Isaiah Fernandes",
    jobTitle: "Mechanical Engineer",
    exp: "Experienced in Subsea | Data | Pipeline Engineering",
    sp: "Specializing in Oil and Gas",
    taglines: [
        "I build.",
        "I design.",
        "I innovate.",
        "I solve problems."
    ],
    about: [
        "Howdy! I'm Isaiah, a guy who gets the job done.",

        "Coming from a background of Mechanical Engineer. My experience spans oil and gas processing, multiphase boosting, field operations, and pipeline engineering backed by research that will contribute to improving oil production rates by up to 20%. As published, my work—centered around my specialization in process optimization and efficiency improvement—focuses on enhancing oil and gas production.",

        "I have worked across project design, simulation, execution (Pre-FEED & FEED) particularly in upstream and midstream environments. I bring hands-on knowledge of engineering software (CFD, FEA and AutoCAD) and a proven ability to support both detailed engineering and field execution.",

        "Worked on AWS service platforms for machine learning and data engineering for process optimization and computing. I have experience deploying AI solutions, in cooperating machine learning technologies to meet engineering problem statements like predictive maintenance and anomaly detection.",

        "Let us connect if you are looking for a go-getter engineer passionate about delivering technically reliable, cost-effective solutions for the oil and gas industry.",

        "Also Did I mention I'm an Aggie Engineer!"
    ],
    socialLinks: {
        github: "https://github.com/isaiah-fernandes",
        linkedin: "https://www.linkedin.com/in/fernandes-isaiah/",
        email: "mailto:isaiahfernandes0777@gmail.com"
    }
};

// Experience data
const experiences = [
    {
        type: "experience",
        link: "hhttps://resolvetech.com/",
        period: "June 2025 - Present",
        title: "AI ML Engineer at RTS",
        description:
            "Collaborated with RTS to develop and deploy AI solutions, in cooperating Machine Learning to address engineering problems.  " +
            "Applying machine learning models to real-world databases, streamlining, and optimizing system operational workflows.  " +
            "Designed projects integrating AI into engineering tasks, enabling predictive analytics, automation in systems. " +
            "Bridging the gap between engineering disciplines and AI, developing technical solutions through innovative data-driven approaches. .",
        
        tags: [
            "✨ AWS",
            "✨ AWS Bedrock",
            "✨ AWS Lambda",
            "✨ Python",
            "✨ AWS Sagamaker",
            "✨ AWS RDS"
        ]
    },
    {
        type: "experience",
        link: "https://barnettenterprisegroup.com/",
        period: "May 2025 - June 2025",
        title: "Data Engineer at Barnett Enterprise Group",
        description:
            "Worked on automating AWS pipeline, by managing AMIs updates, " +
            "EC2 instances, and EBS Volumes. Accomplished automation of " +
            "complex manually repetitive tasks using a variety of tools " +
            "and improved overall operational efficiency.",
        tags: [
            "✨ AWS",
            "✨ Python",
            "✨ Boto3",
            "Terraform",
            "Packer",
            "Pytest"
        ]
    },
    {
        type: "experience",
        link: "https://engineering.tamu.edu/mtde/index.html",
        period: "Nov 2024 - May 2025",
        title: "Subsea Processing Engineering Analyst at Texas A&M ",
        description:
            "ALead research initiatives to advance subsea processing, boosting, flowline operability, and production operations through experiments and simulations " +
            "Using engineering-specific tools and methodologies for research and reports.   " +
            "Collaborated with teams to draft research proposals, technical reports, ensuring data collection and interpretation to publish findings while conducting literature reviews to align objectives with innovative solutions.   " ,
        tags: [
            "✨ OLGA",
            "✨ Orca Flex",
            "✨ ANSYS",
            "✨ Fusion 360",
        ]
    },
    {
        type: "experience",
        link: "",
        period: "Aug 2020 - May 2021",
        title: "Co-Head of Sponsorship - Madgear Motorsports ",
        description:
            "Collaborated in designing, fabricating, and testing an off-road vehicle for SAE BAJA INDIA using SOLIDWORKS and ANSYS. " +
            "Optimizing reliability and performance like 10% weight reduction done through in-house fabrication and testing.   " +
            "Secured financial funding and material support by fundraising and sponsorships by building relationships with industries. " +
            "Oversaw finance, ensuring smooth team operations and adherence to timelines while fostering industry partnerships. ",
        tags: [
            "✨ DS - SOLIDWORKS  ",
            "✨ Ansys",
            "✨ Fusion 360",
        ]
    },
    {
        type: "experience",
        link: "",
        period: "JAug 2019 - May 2020",
        title: "Co-Head of Informal Events - DBIT Event (Colosseum)",
        description:
            "Led strategic planning, resource management, and coordinating teams, overseeing procurement, logistics, and approvals while managing a team of 30 across multiple groups using Gantt charts to track progress, allocate budgets, and meet deadlines.  " +
            "Synchronized cross-departmental efforts, resolved real-time issues, and handled negotiations for deliverables.   " +
            "Conducted risk assessments, contingency planning, to ensure client satisfaction and drive process improvements based on feedback analysis.  " ,
        tags: [
            "✨ MS - Projects",
        ]
    },
    {
//        type: "experience",
//        link: "https://www.vsp.com/",
//        period: "Aug 2017 - May 2019",
//        title: "Teaching Assistant at Sac State",
//        description:
//            "Helped, guided, and graded students' assignments and answered " +
//            "questions during online discussions.",
//        tags: [
//            "✨ Advanced Computer 3D Graphics",
//        ]
    }
];

// Project data
const projects = [
    {
        type: "project",
        link:
            "https://github.com/ajinkyamalhotra/Steam-Game-Recommendation/",
        period: "Mar 2023 - May 2023",
        title: "Steam Game Recommendation",
        description:
            "Developed a video game recommendation engine utilizing " +
            "Content-Based Filtering and VBPR algorithms. Successfully " +
            "deployed the recommendation system which enhanced user " +
            "engagement and satisfaction by streamlining the discovery " +
            "process for games tailored to individual tastes.",
        tags: [
            "AWS Lambda",
            "Heroku",
            "Python",
            "HTML/CSS",
            "Bootstrap",
            "Git"
        ]
    },
    {
        type: "project",
        link: "https://github.com/ajinkyamalhotra/Chess-Master",
        period: "Feb 2023 - Apr 2023",
        title: "Chess Master",
        description:
            "Designed a human vs CPU chess-like game and created a " +
            "computer player, using Minimax algorithm. CPU player is " +
            "optimized through Alpha-Beta pruning, Depth Limited Search, " +
            "and Iterative Deepening Search.",
        tags: ["✨ Java", "Minimax", "DLS", "IDS"]
    },
    {
        type: "project",
        link:
            "https://github.com/ajinkyamalhotra/Network-Optimization-using-" +
            "Shortest-Path",
        period: "Nov 2022",
        title: "Network Optimization",
        description:
            "Designed a sparse (30000 total edges) and dense (5000000 total " +
            "edges) random graph generator. Implemented Dijkstras without " +
            "heap, with heap and Kruskals algorithm for performance " +
            "comparison.",
        tags: ["✨ Java", "Dijkstras", "Heap", "Kruskals"]
    },
    {
        type: "project",
        link:
            "https://github.com/ajinkyamalhotra/Firearm-Classification",
        period: "Oct 2019 - Dec 2019",
        title: "Firearm Classification",
        description:
            "Designed a Neural Network (NN) using TFLearn to classify " +
            "different types of firearms. Achieved 85% accurate results for " +
            "1000 epochs using the Alex NET architecture.",
        tags: ["✨ Python", "CNN", "TensorFlow", "TFLearn"]
    },
    {
        type: "project",
        link:
            "https://github.com/ajinkyamalhotra/GpuProgrammingCuda/blob/" +
            "master/TiledMatrixMultiplicationKernel.cu",
        period: "May 2018",
        title: "2D Tiled Image Convolution",
        description:
            "Implemented a tiled image convolution CUDA kernel which " +
            "utilizes shared memory and constant memory. Input data is " +
            "loaded/titled from global memory to shared memory, to reduce " +
            "the number of reads. Constant memory is the fastest memory in a " +
            "GPU grid and is used to store the constant mask data.",
        tags: ["✨ CUDA", "C", "Parallel GPU Programming"]
    },
    {
        type: "project",
        link:
            "https://github.com/ajinkyamalhotra/GpuProgrammingCuda/blob/" +
            "master/HistogramKernel.cu",
        period: "Apr 2018",
        title: "Histogram",
        description:
            "Implemented an efficient Histogram algorithm using " +
            "privatization technique for an input array of Integers. " +
            "4096 Histogram bins use unsigned 32-bit counters that are " +
            "saturated at 127.",
        tags: ["✨ CUDA", "C", "Parallel GPU Programming"]
    },
    {
        type: "project",
        link:
            "https://github.com/ajinkyamalhotra",
        period: "Mar 2017 - Jul 2017 ",
        title: "Attendance Tracker",
        description:
            "Created an application by using Google Sheets API to record " +
            "attendance on Google docs spreadsheet. Developed a portal for " +
            "students to register their attendance and for professors to " +
            "keep track of attendance.",
        tags: ["✨ Java", "Google Sheets API", "HTML/CSS", "JavaScript"]
    }
];

const skills = [
    {
        name: "AWS",
        level: 8.5,
        subSkills: [
            { name: "Lambda", level: 9 },
            { name: "API Gateway", level: 9 },
            { name: "SNS", level: 9 },
            { name: "SQS", level: 9 },
            { name: "IAM", level: 9 },
            { name: "EC2", level: 9 },
            { name: "S3", level: 9 },
            { name: "EBS", level: 8 },
            { name: "EFS", level: 8 },
            { name: "Spot Fleets", level: 8 },
            { name: "ASG", level: 8 },
            { name: "CloudFormation", level: 8 },
            { name: "DynamoDB", level: 8 },
            { name: "Terraform", level: 7 },
            { name: "Packer", level: 7 },
            { name: "RDS", level: 7 },
            { name: "Connect", level: 6 },
            { name: "Pinpoint", level: 6 },
        ]
    },
    {
        name: "Software Engineering",
        level: 8,
        subSkills: [
            { name: "Algorithms & Data Structures", level: 8 },
            { name: "Object Oriented Programming", level: 8 },
            { name: "APIs", level: 8 },
            { name: "Scrum", level: 8 },
            { name: "CI/CD", level: 8 },
            { name: "Test Automation", level: 7 },
            { name: "Security", level: 7 },
            { name: "Software Development Life Cycle (SDLC)", level: 7 }
        ]
    },
    {
        name: "Operating Systems",
        level: 8,
        subSkills: [
            { name: "Windows", level: 8 },
            { name: "Linux/Unix", level: 9 },
            { name: "MacOS", level: 8 }
        ]
    },
    {
        name: "IDEs",
        level: 7.5,
        subSkills: [
            { name: "Eclipse", level: 7.5 },
            { name: "IntelliJ", level: 8.5 },
            { name: "Visual Studio", level: 9 },
            { name: "MySQL Workbench", level: 7 }
        ]
    },
    {
        name: "Coding Languages",
        level: 7.5,
        subSkills: [
            { name: "Python", level: 8 },
            { name: "Java", level: 9 },
            { name: "JavaScript", level: 8 },
            { name: "Groovy", level: 9 },
            { name: "Bash", level: 8 },
            { name: "SQL", level: 8 },
            { name: "C/C++", level: 4.5 },
        ]
    },
    {
        name: "Tools",
        level: 7.5,
        subSkills: [
            { name: "Git", level: 8 },
            { name: "Jira", level: 8 },
            { name: "Confluence", level: 8 },
            { name: "Jenkins", level: 8 },
            { name: "Splunk", level: 7 },
        ]
    },
    {
        name: "Machine Learning",
        level: 5,
        subSkills: [
            { name: "TensorFlow", level: 5 },
            { name: "TFLearn", level: 5 },
            { name: "CNN (Convolutional Neural Networks)", level: 5 }
        ]
    },
];

// New Timeline Data (for Timeline feature)
const timelineData = [
    {
        title: "Bachelor's of Science in Computer Science",
        period: "Jan 2015 - May 2019",
        info: "Studied Computer Science at California State University.",
        year: "2015"
    },
    {
        title: "1st SDE Internship",
        period: "June 2018 - May 2019",
        info: "Got my first internship opporunity at VSP Vision Care.",
        year: "2018"
    },
    {
        title: "1st SDE Job",
        period: "August 2019 - May 2020",
        info: "Started my professional journey as a SDE at Esurance.",
        year: "2019"
    },
    {
        title: "Cloud Support Engineer at AWS",
        period: "May 2020 - June 2022",
        info: "Transitioned to AWS, where I took on advanced cloud/engineering challenges.",
        year: "2020"
    },
    {
        title: "Master's Degree in Computer Science",
        period: "August 2022 - December 2023",
        info: "Went back to school to gain my Master's in Computer Science at Texas A&M University.",
        year: "2022"
    },
    {
        title: "SDE Internship @ ARM",
        period: "May 2023 - August 2023",
        info: "While pursuing my masters degree, I interned at ARM as a SDE.",
        year: "2023"
    },
    {
        title: "SDE @ ARM",
        period: "Jan 2024 - Present",
        info: "Working as a Software Engineer at ARM, focusing on high-impact projects.",
        year: "2024"
    }
];

// Education data
const educations = [
    {
        type: "education",
        link:
            "https://tamu.edu",
        period: "Aug 2022 - Dec 2023",
        title: "Master's in Computer Science",
        description:
            "Studied Computer Science at Texas A&M University - College Station",
        tags: []
    },
    {
        type: "education",
        link:
            "https://csus.edu",
        period: "Jan 2015 - May 2019",
        title: "Bachelor's of Science in Computer Science",
        description:
            "Studied Computer Science at California State University - Sacramento",
        tags: []
    },
]
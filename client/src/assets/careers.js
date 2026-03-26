export const careerList = [
    {
        "_id": "career_web_dev",
        "title": "Web Developer",
        "description": "Build modern websites and web applications using frontend and backend technologies.",
        "difficulty": "Beginner to Advanced",
        "estimatedDuration": "6-12 months",
        "totalModules": 4,
        "thumbnail": "https://example.com/images/web-dev.jpg",
        "tags": ["HTML", "CSS", "JavaScript", "React", "Node.js"]
    },
    {
        "_id": "career_ui_ux",
        "title": "UI/UX Designer",
        "description": "Design beautiful and user-friendly interfaces for apps and websites.",
        "difficulty": "Beginner to Intermediate",
        "estimatedDuration": "4-8 months",
        "totalModules": 3,
        "thumbnail": "https://example.com/images/uiux.jpg",
        "tags": ["Figma", "Design Thinking", "Wireframing"]
    },
    {
        "_id": "career_data_analyst",
        "title": "Data Analyst",
        "description": "Analyze data and generate insights using tools like Excel, SQL, and Python.",
        "difficulty": "Intermediate",
        "estimatedDuration": "6-10 months",
        "totalModules": 4,
        "thumbnail": "https://example.com/images/data.jpg",
        "tags": ["Excel", "SQL", "Python", "Power BI"]
    },
    {
        "_id": "career_hr_manager",
        "title": "HR Management",
        "description": "Manage Human Resources professionally.",
        "difficulty": "Intermediate",
        "estimatedDuration": "3-4 months",
        "totalModules": 4,
        "thumbnail": "https://example.com/images/data.jpg",
        "tags": ["Excel", "SQL", "Python", "Power BI"]
    }
]

export const careerDetail = {
    "_id": "career_web_dev",
    "title": "Web Developer",
    "description": "Become a full-stack web developer by mastering frontend and backend technologies.",
    "difficulty": "Beginner to Advanced",
    "estimatedDuration": "6-12 months",
    "skillsYouWillGain": [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Node.js",
        "MongoDB"
    ],
    "modules": [
        {
            "_id": "module_frontend_basics",
            "title": "Frontend Basics",
            "description": "Learn the fundamentals of web development.",
            "duration": "4 weeks",
            "isLocked": false,
            "steps": [
                {
                    "_id": "step_html",
                    "title": "Learn HTML",
                    "type": "learning",
                    "duration": "2 days",
                    "resources": [
                        {
                            "title": "HTML Crash Course",
                            "type": "video",
                            "url": "https://youtube.com/example"
                        }
                    ]
                },
                {
                    "_id": "step_css",
                    "title": "Learn CSS",
                    "type": "learning",
                    "duration": "3 days",
                    "resources": [
                        {
                            "title": "CSS Tutorial",
                            "type": "article",
                            "url": "https://example.com/css"
                        }
                    ]
                },
                {
                    "_id": "step_project1",
                    "title": "Build Landing Page",
                    "type": "project",
                    "duration": "3 days",
                    "resources": []
                }
            ],
            "certificateAvailable": true
        },
        {
            "_id": "module_react",
            "title": "React Development",
            "description": "Learn React and build modern web apps.",
            "duration": "5 weeks",
            "isLocked": true,
            "steps": [
                {
                    "_id": "step_js",
                    "title": "JavaScript Basics",
                    "type": "learning",
                    "duration": "4 days",
                    "resources": []
                },
                {
                    "_id": "step_react_intro",
                    "title": "React Introduction",
                    "type": "learning",
                    "duration": "3 days",
                    "resources": []
                },
                {
                    "_id": "step_react_project",
                    "title": "Build React App",
                    "type": "project",
                    "duration": "5 days",
                    "resources": []
                }
            ],
            "certificateAvailable": true
        },
        {
            "_id": "module_backend",
            "title": "Backend Development",
            "description": "Learn Node.js and build APIs.",
            "duration": "5 weeks",
            "isLocked": true,
            "steps": [
                {
                    "_id": "step_node",
                    "title": "Node.js Basics",
                    "type": "learning",
                    "duration": "3 days",
                    "resources": []
                },
                {
                    "_id": "step_express",
                    "title": "Express.js APIs",
                    "type": "practice",
                    "duration": "4 days",
                    "resources": []
                },
                {
                    "_id": "step_api_project",
                    "title": "Build REST API",
                    "type": "project",
                    "duration": "5 days",
                    "resources": []
                }
            ],
            "certificateAvailable": true
        }
    ]
}

export const careerProgress = {
    "userId": "69c3fcf7e40f95ef1329f5e2",
    "careerId": "career_web_dev",
    "completedModules": ["module_frontend_basics"],
    "completedSteps": ["step_html", "step_css"],
    "skippedModules": [],
    "certificates": [
        {
            "moduleId": "module_frontend_basics",
            "earnedAt": "2026-03-26T10:00:00Z"
        }
    ]
}
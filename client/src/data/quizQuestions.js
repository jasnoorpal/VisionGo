export const quizQuestions = [
    {
        id: 1,
        question: "How do you prefer to solve problems?",
        description: "Think about your natural approach when facing challenges",
        options: [
            { value: "creative", label: "🎨 Creative & Artistic", description: "I love designing, visualizing, and creating beautiful things" },
            { value: "logical", label: "🔍 Logical & Analytical", description: "I enjoy analyzing data, finding patterns, and solving puzzles" },
            { value: "practical", label: "🛠️ Hands-on & Practical", description: "I like building things, fixing issues, and seeing immediate results" },
            { value: "strategic", label: "🎯 Strategic & Big Picture", description: "I think about systems, long-term impacts, and overall architecture" }
        ],
        scores: {
            creative: { web_dev: 3, mobile_dev: 3, data_sci: 1, ai_eng: 1, cyber_sec: 1 },
            logical: { web_dev: 1, mobile_dev: 1, data_sci: 3, ai_eng: 3, cyber_sec: 2 },
            practical: { web_dev: 2, mobile_dev: 3, data_sci: 1, ai_eng: 1, cyber_sec: 3 },
            strategic: { web_dev: 1, mobile_dev: 1, data_sci: 2, ai_eng: 3, cyber_sec: 2 }
        }
    },
    {
        id: 2,
        question: "What excites you most in a career?",
        description: "Choose what motivates you to wake up and work",
        options: [
            { value: "building", label: "🏗️ Building things people use", description: "Creating products that make a difference in users' lives" },
            { value: "data", label: "📊 Finding patterns in data", description: "Discovering insights and making data-driven decisions" },
            { value: "security", label: "🔒 Breaking & protecting systems", description: "Finding vulnerabilities and securing digital assets" },
            { value: "intelligence", label: "🧠 Creating intelligent systems", description: "Building AI that learns and adapts" }
        ],
        scores: {
            building: { web_dev: 3, mobile_dev: 3, data_sci: 1, ai_eng: 1, cyber_sec: 1 },
            data: { web_dev: 1, mobile_dev: 1, data_sci: 3, ai_eng: 2, cyber_sec: 1 },
            security: { web_dev: 1, mobile_dev: 1, data_sci: 1, ai_eng: 1, cyber_sec: 3 },
            intelligence: { web_dev: 1, mobile_dev: 1, data_sci: 2, ai_eng: 3, cyber_sec: 1 }
        }
    },
    {
        id: 3,
        question: "What's your comfort level with mathematics?",
        description: "Be honest - this helps match you with suitable careers",
        options: [
            { value: "basic", label: "📐 Basic Math", description: "Arithmetic, basic algebra - I'm comfortable with everyday math" },
            { value: "intermediate", label: "📈 Intermediate", description: "Statistics, basic calculus - I can work with data" },
            { value: "advanced", label: "🧮 Advanced", description: "Linear algebra, calculus - I enjoy complex mathematical concepts" }
        ],
        scores: {
            basic: { web_dev: 3, mobile_dev: 3, data_sci: 1, ai_eng: 1, cyber_sec: 2 },
            intermediate: { web_dev: 2, mobile_dev: 2, data_sci: 3, ai_eng: 2, cyber_sec: 3 },
            advanced: { web_dev: 1, mobile_dev: 1, data_sci: 2, ai_eng: 3, cyber_sec: 1 }
        }
    },
    {
        id: 4,
        question: "What's your ideal work environment?",
        description: "Consider where you do your best work",
        options: [
            { value: "independent", label: "💻 Independent", description: "I prefer working alone and managing my own schedule" },
            { value: "collaborative", label: "👥 Collaborative", description: "I thrive in team environments with frequent interaction" },
            { value: "hybrid", label: "🔄 Hybrid", description: "I enjoy a mix of solo work and team collaboration" }
        ],
        scores: {
            independent: { web_dev: 2, mobile_dev: 2, data_sci: 2, ai_eng: 2, cyber_sec: 2 },
            collaborative: { web_dev: 3, mobile_dev: 3, data_sci: 2, ai_eng: 2, cyber_sec: 2 },
            hybrid: { web_dev: 3, mobile_dev: 3, data_sci: 3, ai_eng: 3, cyber_sec: 3 }
        }
    },
    {
        id: 5,
        question: "What's your primary career goal?",
        description: "What matters most to you in your professional life?",
        options: [
            { value: "fast_job", label: "⚡ Fast job market entry", description: "I want to start working as soon as possible" },
            { value: "salary", label: "💰 High salary ceiling", description: "Earning potential is my top priority" },
            { value: "security", label: "🛡️ Job security", description: "Stable, in-demand career with longevity" },
            { value: "balance", label: "⚖️ Work-life balance", description: "Flexibility and personal time matter most" }
        ],
        scores: {
            fast_job: { web_dev: 3, mobile_dev: 3, data_sci: 1, ai_eng: 1, cyber_sec: 2 },
            salary: { web_dev: 2, mobile_dev: 2, data_sci: 3, ai_eng: 3, cyber_sec: 2 },
            security: { web_dev: 2, mobile_dev: 2, data_sci: 2, ai_eng: 2, cyber_sec: 3 },
            balance: { web_dev: 3, mobile_dev: 3, data_sci: 2, ai_eng: 1, cyber_sec: 2 }
        }
    },
    {
        id: 6,
        question: "What type of projects do you enjoy most?",
        description: "Think about past projects or things you've built for fun",
        options: [
            { value: "websites", label: "🌐 Websites & Apps", description: "Creating user interfaces and interactive experiences" },
            { value: "dashboards", label: "📊 Data Dashboards", description: "Visualizing data and building analytics tools" },
            { value: "security_tools", label: "🔐 Security Systems", description: "Building protection mechanisms and testing security" },
            { value: "ai_models", label: "🤖 AI Models", description: "Training machine learning models and AI systems" }
        ],
        scores: {
            websites: { web_dev: 3, mobile_dev: 3, data_sci: 1, ai_eng: 1, cyber_sec: 1 },
            dashboards: { web_dev: 2, mobile_dev: 1, data_sci: 3, ai_eng: 1, cyber_sec: 1 },
            security_tools: { web_dev: 1, mobile_dev: 1, data_sci: 1, ai_eng: 1, cyber_sec: 3 },
            ai_models: { web_dev: 1, mobile_dev: 1, data_sci: 2, ai_eng: 3, cyber_sec: 1 }
        }
    },
    {
        id: 7,
        question: "How much coding experience do you have?",
        description: "This helps us recommend appropriate difficulty levels",
        options: [
            { value: "none", label: "🌟 None", description: "I'm completely new to programming" },
            { value: "beginner", label: "📘 Beginner", description: "I know basic HTML/CSS or have tried some tutorials" },
            { value: "intermediate", label: "💪 Intermediate", description: "I can build simple applications independently" },
            { value: "advanced", label: "🚀 Advanced", description: "I'm comfortable with complex systems and multiple languages" }
        ],
        scores: {
            none: { web_dev: 3, mobile_dev: 2, data_sci: 1, ai_eng: 1, cyber_sec: 1 },
            beginner: { web_dev: 3, mobile_dev: 3, data_sci: 2, ai_eng: 1, cyber_sec: 2 },
            intermediate: { web_dev: 2, mobile_dev: 3, data_sci: 2, ai_eng: 2, cyber_sec: 2 },
            advanced: { web_dev: 2, mobile_dev: 2, data_sci: 3, ai_eng: 3, cyber_sec: 3 }
        }
    },
    {
        id: 8,
        question: "What's your preferred learning style?",
        description: "How do you learn best?",
        options: [
            { value: "video", label: "🎥 Video Tutorials", description: "I learn by watching and following along" },
            { value: "hands_on", label: "💻 Hands-on Coding", description: "I learn by doing and building projects" },
            { value: "reading", label: "📚 Reading & Theory", description: "I prefer documentation and conceptual learning" },
            { value: "mixed", label: "🔄 Mixed Approach", description: "I like combining different learning methods" }
        ],
        scores: {
            video: { web_dev: 2, mobile_dev: 2, data_sci: 2, ai_eng: 2, cyber_sec: 2 },
            hands_on: { web_dev: 3, mobile_dev: 3, data_sci: 2, ai_eng: 2, cyber_sec: 3 },
            reading: { web_dev: 1, mobile_dev: 1, data_sci: 3, ai_eng: 3, cyber_sec: 2 },
            mixed: { web_dev: 2, mobile_dev: 2, data_sci: 2, ai_eng: 2, cyber_sec: 2 }
        }
    }
];

export const careerInfo = {
    web_dev: {
        id: "career_web_dev",
        title: "Web Developer",
        icon: "🌐",
        color: "from-blue-500 to-cyan-500",
        description: "Build beautiful, responsive websites and web applications that millions of people use every day.",
        pros: [
            "High demand with many job opportunities",
            "Remote work friendly",
            "Creative and visually rewarding",
            "Fast learning curve for beginners",
            "Large community support"
        ],
        cons: [
            "Fast-changing technology landscape",
            "Can be competitive at entry level",
            "Requires continuous learning",
            "Sometimes tight deadlines"
        ],
        salary_range: "$60,000 - $130,000",
        time_to_complete: "3-6 months",
        job_growth: "+23% (much faster than average)"
    },
    mobile_dev: {
        id: "career_mobile_dev",
        title: "Mobile App Developer",
        icon: "📱",
        color: "from-green-500 to-teal-500",
        description: "Create innovative mobile applications for iOS and Android that reach billions of users worldwide.",
        pros: [
            "Huge market with billions of users",
            "Opportunity to build products people use daily",
            "Great freelance opportunities",
            "Can work independently",
            "High earning potential"
        ],
        cons: [
            "Need to learn platform-specific guidelines",
            "App store approval process can be tedious",
            "Multiple device sizes to support",
            "Frequent OS updates"
        ],
        salary_range: "$65,000 - $140,000",
        time_to_complete: "4-7 months",
        job_growth: "+22% (much faster than average)"
    },
    data_sci: {
        id: "career_data_sci",
        title: "Data Scientist",
        icon: "📊",
        color: "from-purple-500 to-pink-500",
        description: "Extract insights from data, build predictive models, and help organizations make data-driven decisions.",
        pros: [
            "High salary potential",
            "Work on interesting problems",
            "Critical role in modern companies",
            "Strong job security",
            "Opportunity to work in various industries"
        ],
        cons: [
            "Requires strong math and statistics background",
            "Can be challenging to break into",
            "Often requires advanced degree",
            "Data cleaning can be tedious"
        ],
        salary_range: "$80,000 - $160,000",
        time_to_complete: "6-12 months",
        job_growth: "+36% (much faster than average)"
    },
    ai_eng: {
        id: "career_ai_eng",
        title: "AI Engineer",
        icon: "🤖",
        color: "from-red-500 to-orange-500",
        description: "Build cutting-edge artificial intelligence systems, train neural networks, and create the future of technology.",
        pros: [
            "Cutting-edge technology",
            "Highest salary potential",
            "Work on fascinating problems",
            "Future-proof career",
            "Research opportunities"
        ],
        cons: [
            "Steep learning curve",
            "Requires advanced math",
            "Fast-moving field",
            "Often requires advanced degree",
            "Computational resources can be expensive"
        ],
        salary_range: "$100,000 - $200,000+",
        time_to_complete: "8-14 months",
        job_growth: "+40% (much faster than average)"
    },
    cyber_sec: {
        id: "career_cyber_sec",
        title: "Cybersecurity Specialist",
        icon: "🔒",
        color: "from-red-500 to-red-700",
        description: "Protect organizations from cyber threats, conduct security audits, and ensure data privacy and compliance.",
        pros: [
            "Critical role with job security",
            "High demand across all industries",
            "Never get bored (always evolving)",
            "Good salary potential",
            "Opportunity to be an ethical hacker"
        ],
        cons: [
            "High stress during incidents",
            "On-call may be required",
            "Constant learning to keep up",
            "Paperwork and compliance tasks"
        ],
        salary_range: "$70,000 - $150,000",
        time_to_complete: "5-9 months",
        job_growth: "+32% (much faster than average)"
    }
};
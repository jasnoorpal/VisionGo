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

export const careerDetails = [{
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
                            "url": "https://www.youtube.com/watch?v=4dprtEzunIk"
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
                            "type": "video",
                            "url": "https://www.youtube.com/watch?v=K1naz9wBwKU"
                        }
                    ]
                },
                {
                    "_id": "step_project1",
                    "title": "Build Landing Page",
                    "type": "project",
                    "duration": "3 days",
                    "resources": [{
                        "type": "code",
                        "html": `<header class="hero">
                                                <h1>Grow faster with VisionGo</h1>
                                                <p class="subhead">Launch pages in minutes. No code required.</p>
                                                <a class="btn btn-primary" href="#pricing">Start Free Trial</a>
                                            </header>
                                            <main>
                                                <section class="features">
                                                    <article>
                                                        <h2>Easy editing</h2>
                                                        <p>Update pages quickly with reusable blocks.</p>
                                                    </article>
                                                    <article>
                                                        <h2>Fast by default</h2>
                                                        <p>Responsive and accessible out of the box.</p>
                                                    </article>
                                                    <article>
                                                        <h2>SEO friendly</h2>
                                                        <p>Clean HTML and helpful meta tags.</p>
                                                    </article>
                                                </section>
                                                <section class="testimonials" aria-label="Trusted by">
                                                    <ul class="logos">
                                                        <a href="https://www.freeiconspng.com/img/1682">Clipart Person Icon Cliparts</a>
                                                        <li><img src="https://www.freeiconspng.com/img/1682" alt="Alpha"></li>
                                                        <li><img src="https://www.freeiconspng.com/img/1682" alt="Bravo"></li>
                                                        <li><img src="https://www.freeiconspng.com/img/1682" alt="Charlie"></li>
                                                    </ul>
                                                </section>
                                                <section id="pricing" class="pricing">
                                                    <article class="plan">
                                                        <h3>Starter</h3>
                                                        <p class="price">$9/mo</p>
                                                        <ul><li>Basic features</li><li>Email support</li></ul>
                                                        <a class="btn btn-primary" href="#">Choose Starter</a>
                                                    </article>
                                                    <article class="plan featured">
                                                        <h3>Pro</h3>
                                                        <p class="price">$29/mo</p>
                                                        <ul><li>All features</li><li>Priority support</li></ul>
                                                        <a class="btn btn-primary" href="#">Start Pro</a>
                                                    </article>
                                                </section>
                                                <section class="faq" aria-label="Frequently asked questions">
                                                    <details>
                                                        <summary>Can I cancel anytime?</summary>
                                                        <p>Yes, you can cancel with one click in settings.</p>
                                                    </details>
                                                    <details>
                                                        <summary>Do you offer student discounts?</summary>
                                                        <p>We offer 30% off for students. Contact support.</p>
                                                    </details>
                                                </section>

                                            </main>
                                            <footer class="site-footer"></footer>`,
                        "css": `body {
  font-family: "Inter", "Segoe UI", system-ui, -apple-system, "Helvetica Neue", Arial, sans-serif;
  color: #0f172a;
  background: #f8fafc;
  margin: 0;
}
h1, h2, h3 { 
  line-height: 1.2;
  margin: 0 0 .75em;
}
p { 
  font-size: 1.125rem;
  line-height: 1.7;
  margin: 0 0 1.5em;
}
a {
  color: #2563eb;
  text-decoration: none;
}
a:hover { text-decoration: underline; }
h1 { font-size: clamp(2.5rem, 5vw, 3.5rem); }
h2 { font-size: 2rem; }
header.hero, main, footer.site-footer, section { padding: 16px; }

/*  Hero section */
.hero {
  text-align: center;
  padding: 80px 24px;
  background: #f1f8f5;
  color: #0f172a;
}
.hero .subhead {
  color: #475569;
  font-size: 1.125rem;
  margin: 12px 0 24px;
}
.btn {
  display: inline-block;
  padding: 12px 18px;
  border-radius: 999px;
}
.btn-primary {
  background: #0f766e;
  color: #fff;
}


/*  Features Section */
.features {
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  padding: 40px 20px;
}
.features article {
  background: #fff;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 1px 0 rgba(15, 23, 42, .06);
  border: 1px solid #e2e8f0;
}


/*  Testimonials section */
.logos {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
}
.logos img {
  height: 28px;
  opacity: .8;
}

/*  Pricing section */
.pricing {
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  padding: 40px 20px;
}
.plan {
  background: #fff;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 1px 0 rgba(15, 23, 42, .06);
  border: 1px solid #e2e8f0;
  text-align: center;
}
.plan .price {
  font-size: 2rem;
  margin: 8px 0 16px;
}
.plan.featured {
  outline: 2px solid #0f766e;
}

@media (min-width: 960px) {
  .hero {padding:100px 20px}
  .features, .pricing {gap:32px}
}`
                    }]
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
}]

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
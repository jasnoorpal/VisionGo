export const careerDetails = [
    {
        _id: "career_web_dev",
        title: "Web Developer",
        description: "Learn to build modern, responsive websites and web applications using HTML, CSS, JavaScript, and React. Master frontend development and become a full-stack web developer.",
        difficulty: "Beginner to Intermediate",
        estimatedDuration: "12 weeks",
        skillsYouWillGain: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "React.js",
            "Responsive Design",
            "Git",
            "REST APIs",
            "Node.js Basics"
        ],
        thumbnail: "https://img.freepik.com/free-photo/website-development-links-seo-webinar-cyberspace-concept_53876-120953.jpg",
        modules: [
            {
                _id: "module_web_1",
                title: "HTML & CSS Fundamentals",
                description: "Learn the building blocks of the web. Master HTML structure and CSS styling to create beautiful, responsive websites.",
                duration: "2 weeks",
                isLocked: false,
                certificateAvailable: false,
                steps: [
                    {
                        _id: "step_web_1_1",
                        title: "Introduction to HTML",
                        type: "learning",
                        duration: "30 min",
                        resources: [
                            {
                                title: "HTML Basics Video",
                                type: "video",
                                url: "https://www.youtube.com/watch?v=pQN-pnXPaVg",
                                html: null,
                                css: null
                            }
                        ]
                    },
                    {
                        _id: "step_web_1_2",
                        title: "HTML Tags and Structure",
                        type: "learning",
                        duration: "45 min",
                        resources: [
                            {
                                title: "HTML Structure Tutorial",
                                type: "video",
                                url: "https://www.youtube.com/watch?v=UB1O30fR-EE",
                                html: null,
                                css: null
                            }
                        ]
                    },
                    {
                        _id: "step_web_1_3",
                        title: "Introduction to CSS",
                        type: "learning",
                        duration: "45 min",
                        resources: [
                            {
                                title: "CSS Basics",
                                type: "video",
                                url: "https://www.youtube.com/watch?v=yfoY53QXEnI",
                                html: null,
                                css: null
                            }
                        ]
                    },
                    {
                        _id: "step_web_1_4",
                        title: "CSS Selectors and Properties",
                        type: "practice",
                        duration: "60 min",
                        resources: [
                            {
                                title: "CSS Styling Practice",
                                type: "code",
                                url: null,
                                html: `
                    <div class="container">
                      <h1>My First Styled Page</h1>
                      <p>This is a paragraph that will be styled with CSS.</p>
                      <button class="btn">Click Me</button>
                    </div>
                  `,
                                css: `
                    body {
                      font-family: Arial, sans-serif;
                      margin: 0;
                      padding: 20px;
                      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                      min-height: 100vh;
                      display: flex;
                      justify-content: center;
                      align-items: center;
                    }
                    .container {
                      background: white;
                      padding: 40px;
                      border-radius: 20px;
                      box-shadow: 0 10px 40px rgba(0,0,0,0.1);
                      text-align: center;
                      max-width: 500px;
                    }
                    h1 {
                      color: #333;
                      margin-bottom: 20px;
                    }
                    p {
                      color: #666;
                      line-height: 1.6;
                      margin-bottom: 30px;
                    }
                    .btn {
                      background: #667eea;
                      color: white;
                      border: none;
                      padding: 12px 30px;
                      border-radius: 25px;
                      cursor: pointer;
                      font-size: 16px;
                      transition: transform 0.2s;
                    }
                    .btn:hover {
                      transform: translateY(-2px);
                    }
                  `
                            }
                        ]
                    },
                    {
                        _id: "step_web_1_5",
                        title: "Build Your First Web Page",
                        type: "project",
                        duration: "90 min",
                        resources: [
                            {
                                title: "Project: Personal Bio Page",
                                type: "code",
                                url: null,
                                html: `
                    <div class="profile-card">
                      <div class="avatar">👨‍💻</div>
                      <h2>Your Name</h2>
                      <p class="title">Web Developer in Training</p>
                      <p>Passionate about building amazing web experiences. Currently learning HTML and CSS!</p>
                      <div class="skills">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>JavaScript</span>
                      </div>
                    </div>
                  `,
                                css: `
                    body {
                      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                      min-height: 100vh;
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      margin: 0;
                      padding: 20px;
                    }
                    .profile-card {
                      background: white;
                      border-radius: 20px;
                      padding: 40px;
                      text-align: center;
                      max-width: 400px;
                      box-shadow: 0 20px 60px rgba(0,0,0,0.2);
                      animation: fadeIn 0.5s ease-out;
                    }
                    .avatar {
                      font-size: 80px;
                      margin-bottom: 20px;
                    }
                    h2 {
                      color: #333;
                      margin: 10px 0;
                    }
                    .title {
                      color: #667eea;
                      font-weight: bold;
                      margin: 10px 0;
                    }
                    .skills {
                      margin-top: 20px;
                      display: flex;
                      gap: 10px;
                      justify-content: center;
                      flex-wrap: wrap;
                    }
                    .skills span {
                      background: #f0f0f0;
                      padding: 5px 15px;
                      border-radius: 20px;
                      font-size: 14px;
                      color: #666;
                    }
                    @keyframes fadeIn {
                      from {
                        opacity: 0;
                        transform: translateY(20px);
                      }
                      to {
                        opacity: 1;
                        transform: translateY(0);
                      }
                    }
                  `
                            }
                        ]
                    }
                ]
            },
            {
                _id: "module_web_2",
                title: "JavaScript Fundamentals",
                description: "Learn the programming language of the web. Add interactivity and dynamic behavior to your websites.",
                duration: "3 weeks",
                isLocked: true,
                certificateAvailable: false,
                steps: [
                    {
                        _id: "step_web_2_1",
                        title: "Introduction to JavaScript",
                        type: "learning",
                        duration: "45 min",
                        resources: [
                            {
                                title: "JavaScript Basics",
                                type: "video",
                                url: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
                                html: null,
                                css: null
                            }
                        ]
                    },
                    {
                        _id: "step_web_2_2",
                        title: "Variables and Data Types",
                        type: "learning",
                        duration: "45 min",
                        resources: [
                            {
                                title: "JavaScript Variables",
                                type: "video",
                                url: "https://www.youtube.com/watch?v=Z4QTuTObVeY",
                                html: null,
                                css: null
                            }
                        ]
                    },
                    {
                        _id: "step_web_2_3",
                        title: "Functions and Events",
                        type: "practice",
                        duration: "60 min",
                        resources: [
                            {
                                title: "Interactive Button",
                                type: "code",
                                url: null,
                                html: `
                    <div class="counter-app">
                      <h1>Interactive Counter</h1>
                      <div class="counter-display" id="counter">0</div>
                      <div class="button-group">
                        <button class="btn" id="decrement">-</button>
                        <button class="btn" id="increment">+</button>
                        <button class="btn" id="reset">Reset</button>
                      </div>
                      <p class="message" id="message"></p>
                    </div>
                    <script>
                      let count = 0;
                      const counterDisplay = document.getElementById('counter');
                      const messageDisplay = document.getElementById('message');
                      
                      function updateDisplay() {
                        counterDisplay.textContent = count;
                        if (count > 0) {
                          messageDisplay.textContent = '🎉 Positive number!';
                        } else if (count < 0) {
                          messageDisplay.textContent = '📉 Negative number';
                        } else {
                          messageDisplay.textContent = 'Zero is a good start!';
                        }
                      }
                      
                      document.getElementById('increment').onclick = () => {
                        count++;
                        updateDisplay();
                      };
                      
                      document.getElementById('decrement').onclick = () => {
                        count--;
                        updateDisplay();
                      };
                      
                      document.getElementById('reset').onclick = () => {
                        count = 0;
                        updateDisplay();
                      };
                      
                      updateDisplay();
                    </script>
                  `,
                                css: `
                    body {
                      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                      min-height: 100vh;
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      margin: 0;
                    }
                    .counter-app {
                      background: white;
                      padding: 40px;
                      border-radius: 20px;
                      text-align: center;
                      box-shadow: 0 10px 40px rgba(0,0,0,0.1);
                    }
                    .counter-display {
                      font-size: 60px;
                      font-weight: bold;
                      margin: 30px 0;
                      color: #667eea;
                    }
                    .button-group {
                      display: flex;
                      gap: 15px;
                      justify-content: center;
                      margin-bottom: 20px;
                    }
                    .btn {
                      background: #667eea;
                      color: white;
                      border: none;
                      padding: 12px 25px;
                      border-radius: 10px;
                      cursor: pointer;
                      font-size: 18px;
                      transition: all 0.2s;
                    }
                    .btn:hover {
                      transform: scale(1.05);
                      background: #5a67d8;
                    }
                    .message {
                      color: #666;
                      margin-top: 20px;
                      font-size: 14px;
                    }
                  `
                            }
                        ]
                    }
                ]
            },
            {
                _id: "module_web_3",
                title: "React.js Mastery",
                description: "Build modern single-page applications with React, the most popular frontend library.",
                duration: "4 weeks",
                isLocked: true,
                certificateAvailable: true,
                steps: [
                    {
                        _id: "step_web_3_1",
                        title: "React Components and Props",
                        type: "learning",
                        duration: "60 min",
                        resources: [
                            {
                                title: "React Components",
                                type: "video",
                                url: "https://www.youtube.com/watch?v=Tn6-PIqc4UM",
                                html: null,
                                css: null
                            }
                        ]
                    },
                    {
                        _id: "step_web_3_2",
                        title: "State and Hooks",
                        type: "learning",
                        duration: "75 min",
                        resources: [
                            {
                                title: "React Hooks Tutorial",
                                type: "video",
                                url: "https://www.youtube.com/watch?v=TNhaISOUy6Q",
                                html: null,
                                css: null
                            }
                        ]
                    },
                    {
                        _id: "step_web_3_3",
                        title: "Build a Todo App",
                        type: "project",
                        duration: "120 min",
                        resources: [
                            {
                                title: "Todo App Project",
                                type: "code",
                                url: null,
                                html: `
                    <div id="root"></div>
                    <script>
                      // Simplified React-like todo app
                      let todos = [];
                      
                      function renderTodoApp() {
                        const app = document.getElementById('root');
                        app.innerHTML = \`
                          <div class="todo-container">
                            <h1>📝 Todo List</h1>
                            <div class="input-group">
                              <input type="text" id="todoInput" placeholder="Add a new task..." />
                              <button id="addTodo">Add</button>
                            </div>
                            <div class="todo-list">
                              \${todos.map((todo, index) => \`
                                <div class="todo-item \${todo.completed ? 'completed' : ''}">
                                  <input type="checkbox" \${todo.completed ? 'checked' : ''} data-index="\${index}" class="todo-checkbox" />
                                  <span>\${todo.text}</span>
                                  <button data-index="\${index}" class="delete-btn">Delete</button>
                                </div>
                              \`).join('')}
                            </div>
                            <div class="stats">
                              <p>\${todos.filter(t => t.completed).length} / \${todos.length} tasks completed</p>
                            </div>
                          </div>
                        \`;
                        
                        // Add event listeners
                        document.getElementById('addTodo')?.addEventListener('click', addTodo);
                        document.querySelectorAll('.todo-checkbox').forEach(checkbox => {
                          checkbox.addEventListener('change', (e) => toggleTodo(parseInt(e.target.dataset.index)));
                        });
                        document.querySelectorAll('.delete-btn').forEach(btn => {
                          btn.addEventListener('click', (e) => deleteTodo(parseInt(e.target.dataset.index)));
                        });
                      }
                      
                      function addTodo() {
                        const input = document.getElementById('todoInput');
                        const text = input.value.trim();
                        if (text) {
                          todos.push({ text, completed: false });
                          input.value = '';
                          renderTodoApp();
                        }
                      }
                      
                      function toggleTodo(index) {
                        todos[index].completed = !todos[index].completed;
                        renderTodoApp();
                      }
                      
                      function deleteTodo(index) {
                        todos.splice(index, 1);
                        renderTodoApp();
                      }
                      
                      renderTodoApp();
                    </script>
                  `,
                                css: `
                    body {
                      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                      min-height: 100vh;
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      margin: 0;
                      padding: 20px;
                    }
                    .todo-container {
                      background: white;
                      border-radius: 20px;
                      padding: 30px;
                      max-width: 500px;
                      width: 100%;
                      box-shadow: 0 20px 60px rgba(0,0,0,0.2);
                    }
                    h1 {
                      text-align: center;
                      color: #333;
                      margin-bottom: 30px;
                    }
                    .input-group {
                      display: flex;
                      gap: 10px;
                      margin-bottom: 20px;
                    }
                    input[type="text"] {
                      flex: 1;
                      padding: 12px;
                      border: 2px solid #e0e0e0;
                      border-radius: 10px;
                      font-size: 16px;
                      transition: border-color 0.2s;
                    }
                    input[type="text"]:focus {
                      outline: none;
                      border-color: #667eea;
                    }
                    button {
                      background: #667eea;
                      color: white;
                      border: none;
                      padding: 12px 20px;
                      border-radius: 10px;
                      cursor: pointer;
                      font-weight: bold;
                      transition: all 0.2s;
                    }
                    button:hover {
                      background: #5a67d8;
                      transform: translateY(-2px);
                    }
                    .todo-item {
                      display: flex;
                      align-items: center;
                      gap: 10px;
                      padding: 12px;
                      background: #f8f9fa;
                      margin-bottom: 10px;
                      border-radius: 10px;
                      transition: all 0.2s;
                    }
                    .todo-item:hover {
                      background: #e9ecef;
                    }
                    .todo-item.completed span {
                      text-decoration: line-through;
                      color: #999;
                    }
                    .todo-item span {
                      flex: 1;
                    }
                    .delete-btn {
                      background: #dc3545;
                      padding: 5px 15px;
                      font-size: 14px;
                    }
                    .delete-btn:hover {
                      background: #c82333;
                    }
                    .stats {
                      text-align: center;
                      margin-top: 20px;
                      padding-top: 20px;
                      border-top: 2px solid #e0e0e0;
                      color: #666;
                      font-weight: bold;
                    }
                  `
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        _id: "career_data_sci",
        title: "Data Scientist",
        description: "Master data analysis, machine learning, and statistical modeling to extract insights from data and drive business decisions.",
        difficulty: "Intermediate to Advanced",
        estimatedDuration: "16 weeks",
        skillsYouWillGain: [
            "Python",
            "Pandas",
            "NumPy",
            "Machine Learning",
            "Data Visualization",
            "Statistics",
            "SQL",
            "TensorFlow"
        ],
        thumbnail: "https://www.unsw.edu.au/content/dam/images/unsw-wide/general/stock/2024-05-getty-images/GettyImages-1479759169.cropimg.width=700.crop=square.jpg",
        modules: [
            {
                _id: "module_data_1",
                title: "Python for Data Science",
                description: "Learn Python programming fundamentals and essential libraries for data manipulation and analysis.",
                duration: "3 weeks",
                isLocked: false,
                certificateAvailable: false,
                steps: [
                    {
                        _id: "step_data_1_1",
                        title: "Python Basics",
                        type: "learning",
                        duration: "60 min",
                        resources: [
                            {
                                title: "Python Tutorial",
                                type: "video",
                                url: "https://www.youtube.com/watch?v=rfscVS0vtbw",
                                html: null,
                                css: null
                            }
                        ]
                    },
                    {
                        _id: "step_data_1_2",
                        title: "Introduction to Pandas",
                        type: "learning",
                        duration: "75 min",
                        resources: [
                            {
                                title: "Pandas Tutorial",
                                type: "video",
                                url: "https://www.youtube.com/watch?v=vmEHCJofslg",
                                html: null,
                                css: null
                            }
                        ]
                    },
                    {
                        _id: "step_data_1_3",
                        title: "Data Analysis with Pandas",
                        type: "practice",
                        duration: "90 min",
                        resources: [
                            {
                                title: "Data Analysis Practice",
                                type: "code",
                                url: null,
                                html: `
                    <div class="data-analysis">
                      <h1>📈 Data Analysis Practice</h1>
                      <div class="dataset-preview">
                        <h3>Sample Dataset: Student Grades</h3>
                        <div class="data-table" id="data-table"></div>
                      </div>
                      <div class="analysis-results" id="analysis-results"></div>
                      <button id="analyze" class="analyze-btn">Run Analysis</button>
                    </div>
                    <script>
                      const dataset = [
                        { name: "Alice", math: 85, science: 92, english: 88 },
                        { name: "Bob", math: 78, science: 85, english: 82 },
                        { name: "Charlie", math: 92, science: 88, english: 94 },
                        { name: "Diana", math: 88, science: 90, english: 86 },
                        { name: "Eve", math: 95, science: 94, english: 97 }
                      ];
                      
                      function displayDataset() {
                        const table = document.getElementById('data-table');
                        table.innerHTML = \`
                          <table>
                            <thead>
                              <tr><th>Name</th><th>Math</th><th>Science</th><th>English</th></tr>
                            </thead>
                            <tbody>
                              \${dataset.map(student => \`
                                <tr>
                                  <td>\${student.name}</td>
                                  <td>\${student.math}</td>
                                  <td>\${student.science}</td>
                                  <td>\${student.english}</td>
                                </tr>
                              \`).join('')}
                            </tbody>
                          </table>
                        \`;
                      }
                      
                      function analyzeData() {
                        const mathScores = dataset.map(s => s.math);
                        const scienceScores = dataset.map(s => s.science);
                        const englishScores = dataset.map(s => s.english);
                        
                        const avg = arr => arr.reduce((a,b) => a + b, 0) / arr.length;
                        const max = arr => Math.max(...arr);
                        const min = arr => Math.min(...arr);
                        
                        const results = document.getElementById('analysis-results');
                        results.innerHTML = \`
                          <div class="results-card">
                            <h3>📊 Analysis Results</h3>
                            <div class="stat-grid">
                              <div class="stat">
                                <strong>📐 Math</strong>
                                <p>Average: \${avg(mathScores).toFixed(1)}</p>
                                <p>Max: \${max(mathScores)}</p>
                                <p>Min: \${min(mathScores)}</p>
                              </div>
                              <div class="stat">
                                <strong>🔬 Science</strong>
                                <p>Average: \${avg(scienceScores).toFixed(1)}</p>
                                <p>Max: \${max(scienceScores)}</p>
                                <p>Min: \${min(scienceScores)}</p>
                              </div>
                              <div class="stat">
                                <strong>📖 English</strong>
                                <p>Average: \${avg(englishScores).toFixed(1)}</p>
                                <p>Max: \${max(englishScores)}</p>
                                <p>Min: \${min(englishScores)}</p>
                              </div>
                            </div>
                            <div class="insight">
                              💡 Insight: The class average is \${(avg(mathScores) + avg(scienceScores) + avg(englishScores)) / 3 .toFixed(1)}%
                            </div>
                          </div>
                        \`;
                      }
                      
                      displayDataset();
                      document.getElementById('analyze').addEventListener('click', analyzeData);
                    </script>
                  `,
                                css: `
                    body {
                      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                      min-height: 100vh;
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      margin: 0;
                      padding: 20px;
                    }
                    .data-analysis {
                      background: white;
                      border-radius: 20px;
                      padding: 30px;
                      max-width: 800px;
                      width: 100%;
                      box-shadow: 0 20px 60px rgba(0,0,0,0.2);
                    }
                    h1 {
                      text-align: center;
                      color: #333;
                    }
                    table {
                      width: 100%;
                      border-collapse: collapse;
                      margin: 20px 0;
                    }
                    th, td {
                      padding: 10px;
                      text-align: left;
                      border-bottom: 1px solid #ddd;
                    }
                    th {
                      background: #667eea;
                      color: white;
                    }
                    .analyze-btn {
                      background: #667eea;
                      color: white;
                      border: none;
                      padding: 12px 30px;
                      border-radius: 10px;
                      cursor: pointer;
                      font-size: 16px;
                      font-weight: bold;
                      margin-top: 20px;
                      width: 100%;
                    }
                    .analyze-btn:hover {
                      background: #5a67d8;
                      transform: translateY(-2px);
                    }
                    .results-card {
                      background: #f8f9fa;
                      border-radius: 10px;
                      padding: 20px;
                      margin-top: 20px;
                    }
                    .stat-grid {
                      display: grid;
                      grid-template-columns: repeat(3, 1fr);
                      gap: 20px;
                      margin: 20px 0;
                    }
                    .stat {
                      background: white;
                      padding: 15px;
                      border-radius: 10px;
                      text-align: center;
                    }
                    .insight {
                      background: #e8f5e9;
                      padding: 15px;
                      border-radius: 10px;
                      text-align: center;
                      font-weight: bold;
                    }
                  `
                            }
                        ]
                    }
                ]
            },
            {
                _id: "module_data_2",
                title: "Machine Learning Fundamentals",
                description: "Understand the core concepts of machine learning and build predictive models.",
                duration: "5 weeks",
                isLocked: true,
                certificateAvailable: true,
                steps: [
                    {
                        _id: "step_data_2_1",
                        title: "Introduction to Machine Learning",
                        type: "learning",
                        duration: "60 min",
                        resources: [
                            {
                                title: "ML Basics",
                                type: "video",
                                url: "https://www.youtube.com/watch?v=Gv9_4yMHFhI",
                                html: null,
                                css: null
                            }
                        ]
                    },
                    {
                        _id: "step_data_2_2",
                        title: "Supervised vs Unsupervised Learning",
                        type: "learning",
                        duration: "45 min",
                        resources: [
                            {
                                title: "ML Types",
                                type: "video",
                                url: "https://www.youtube.com/watch?v=WXuK6gekU1Y",
                                html: null,
                                css: null
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        _id: "career_ai_eng",
        title: "AI Engineer",
        description: "Build intelligent systems and applications using artificial intelligence and deep learning technologies.",
        difficulty: "Advanced",
        estimatedDuration: "20 weeks",
        skillsYouWillGain: [
            "Python",
            "TensorFlow",
            "PyTorch",
            "Neural Networks",
            "Deep Learning",
            "NLP",
            "Computer Vision",
            "LLMs"
        ],
        thumbnail: "https://images.ctfassets.net/gpceq9wt9ej4/1x9p6QBML6rifU1MmM6pSv/ff3e791cfb894dcebf6f6c578acd283f/AI_Square.png",
        modules: [
            {
                _id: "module_ai_1",
                title: "Neural Networks Basics",
                description: "Learn the fundamentals of neural networks and how they form the basis of deep learning.",
                duration: "4 weeks",
                isLocked: false,
                certificateAvailable: false,
                steps: [
                    {
                        _id: "step_ai_1_1",
                        title: "Introduction to Neural Networks",
                        type: "learning",
                        duration: "60 min",
                        resources: [
                            {
                                title: "Neural Networks Explained",
                                type: "video",
                                url: "https://www.youtube.com/watch?v=aircAruvnKk",
                                html: null,
                                css: null
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        _id: "career_cyber_sec",
        title: "Cybersecurity Specialist",
        description: "Protect organizations from digital threats by mastering security protocols, ethical hacking, and risk management. Learn to identify vulnerabilities, prevent attacks, and secure critical infrastructure.",
        difficulty: "Intermediate to Advanced",
        estimatedDuration: "14 weeks",
        skillsYouWillGain: [
            "Network Security",
            "Ethical Hacking",
            "Cryptography",
            "Risk Assessment",
            "Penetration Testing",
            "Security Auditing",
            "Firewall Management",
            "Incident Response"
        ],
        thumbnail: "🔒",
        modules: [
            {
                _id: "module_cyber_1",
                title: "Cybersecurity Fundamentals",
                description: "Learn the core concepts of cybersecurity, including threat landscapes, security principles, and basic defense strategies.",
                duration: "2 weeks",
                isLocked: false,
                certificateAvailable: false,
                steps: [
                    {
                        _id: "step_cyber_1_1",
                        title: "Introduction to Cybersecurity",
                        type: "learning",
                        duration: "45 min",
                        resources: [
                            {
                                title: "Cybersecurity Basics",
                                type: "video",
                                url: "https://www.youtube.com/watch?v=inWWhr5tnEA",
                                html: null,
                                css: null
                            }
                        ]
                    },
                    {
                        _id: "step_cyber_1_2",
                        title: "Common Cyber Threats",
                        type: "learning",
                        duration: "50 min",
                        resources: [
                            {
                                title: "Understanding Cyber Threats",
                                type: "video",
                                url: "https://www.youtube.com/watch?v=5kC0YwZPqco",
                                html: null,
                                css: null
                            }
                        ]
                    },
                    {
                        _id: "step_cyber_1_3",
                        title: "Security Principles (CIA Triad)",
                        type: "learning",
                        duration: "40 min",
                        resources: [
                            {
                                title: "CIA Triad Explained",
                                type: "video",
                                url: "https://www.youtube.com/watch?v=5G0jLqYw5Zw",
                                html: null,
                                css: null
                            }
                        ]
                    },
                    {
                        _id: "step_cyber_1_4",
                        title: "Password Security Lab",
                        type: "practice",
                        duration: "60 min",
                        resources: [
                            {
                                title: "Password Strength Checker",
                                type: "code",
                                url: null,
                                html: `
                  <div class="password-lab">
                    <h1>🔐 Password Strength Checker</h1>
                    <p>Test the strength of your passwords and learn what makes them secure.</p>
                    
                    <div class="input-group">
                      <input type="password" id="password" placeholder="Enter a password to test..." />
                      <button id="checkBtn">Check Strength</button>
                    </div>
                    
                    <div class="strength-meter" id="strengthMeter">
                      <div class="strength-bar" id="strengthBar"></div>
                    </div>
                    
                    <div id="result" class="result"></div>
                    
                    <div class="tips">
                      <h3>💡 Strong Password Tips:</h3>
                      <ul>
                        <li>Use at least 12 characters</li>
                        <li>Include uppercase and lowercase letters</li>
                        <li>Add numbers and special characters</li>
                        <li>Avoid common words or personal info</li>
                        <li>Don't reuse passwords across sites</li>
                      </ul>
                    </div>
                  </div>
                  
                  <script>
                    const passwordInput = document.getElementById('password');
                    const checkBtn = document.getElementById('checkBtn');
                    const strengthBar = document.getElementById('strengthBar');
                    const resultDiv = document.getElementById('result');
                    
                    function checkPasswordStrength(password) {
                      let score = 0;
                      let feedback = [];
                      
                      // Length check
                      if (password.length >= 12) score += 2;
                      else if (password.length >= 8) score += 1;
                      else feedback.push('❌ Password is too short (minimum 8 characters)');
                      
                      // Uppercase check
                      if (/[A-Z]/.test(password)) score += 1;
                      else feedback.push('❌ Add uppercase letters');
                      
                      // Lowercase check
                      if (/[a-z]/.test(password)) score += 1;
                      else feedback.push('❌ Add lowercase letters');
                      
                      // Numbers check
                      if (/[0-9]/.test(password)) score += 1;
                      else feedback.push('❌ Add numbers');
                      
                      // Special characters check
                      if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) score += 2;
                      else feedback.push('❌ Add special characters (!@#$%^&*)');
                      
                      // Common patterns check
                      const commonPatterns = ['password', '123456', 'qwerty', 'admin'];
                      if (commonPatterns.some(pattern => password.toLowerCase().includes(pattern))) {
                        score -= 2;
                        feedback.push('⚠️ Avoid common patterns like "password" or "123456"');
                      }
                      
                      return { score: Math.min(score, 5), feedback };
                    }
                    
                    function updateStrengthMeter(score) {
                      const percentages = {
                        0: '0%',
                        1: '20%',
                        2: '40%',
                        3: '60%',
                        4: '80%',
                        5: '100%'
                      };
                      
                      const colors = {
                        0: '#dc3545',
                        1: '#dc3545',
                        2: '#ffc107',
                        3: '#ffc107',
                        4: '#28a745',
                        5: '#28a745'
                      };
                      
                      const labels = {
                        0: 'Very Weak',
                        1: 'Weak',
                        2: 'Fair',
                        3: 'Good',
                        4: 'Strong',
                        5: 'Very Strong'
                      };
                      
                      strengthBar.style.width = percentages[score];
                      strengthBar.style.backgroundColor = colors[score];
                      resultDiv.innerHTML = \`
                        <div class="strength-label" style="color: \${colors[score]}">
                          <strong>\${labels[score]}</strong>
                        </div>
                        <div class="feedback">
                          \${score < 3 ? '<p class="warning">⚠️ This password is not secure!</p>' : '<p class="success">✓ Good password!</p>'}
                          <ul>
                            \${updateFeedback()}
                          </ul>
                        </div>
                      \`;
                      
                      function updateFeedback() {
                        const { feedback } = checkPasswordStrength(passwordInput.value);
                        if (feedback.length === 0) {
                          return '<li class="success">✓ Excellent! Your password meets all security criteria</li>';
                        }
                        return feedback.map(f => \`<li>\${f}</li>\`).join('');
                      }
                    }
                    
                    checkBtn.addEventListener('click', () => {
                      const password = passwordInput.value;
                      if (!password) {
                        alert('Please enter a password to test');
                        return;
                      }
                      const { score } = checkPasswordStrength(password);
                      updateStrengthMeter(score);
                    });
                  </script>
                `,
                                css: `
                  body {
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    min-height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin: 0;
                    padding: 20px;
                  }
                  .password-lab {
                    background: white;
                    border-radius: 20px;
                    padding: 30px;
                    max-width: 600px;
                    width: 100%;
                    box-shadow: 0 20px 60px rgba(0,0,0,0.2);
                  }
                  h1 {
                    text-align: center;
                    color: #333;
                    margin-bottom: 10px;
                  }
                  .input-group {
                    margin: 30px 0 20px;
                  }
                  input[type="password"] {
                    width: 100%;
                    padding: 12px;
                    border: 2px solid #e0e0e0;
                    border-radius: 10px;
                    font-size: 16px;
                    margin-bottom: 10px;
                  }
                  button {
                    width: 100%;
                    background: #667eea;
                    color: white;
                    border: none;
                    padding: 12px;
                    border-radius: 10px;
                    cursor: pointer;
                    font-weight: bold;
                    transition: all 0.2s;
                  }
                  button:hover {
                    background: #5a67d8;
                    transform: translateY(-2px);
                  }
                  .strength-meter {
                    background: #e0e0e0;
                    height: 10px;
                    border-radius: 5px;
                    overflow: hidden;
                    margin: 20px 0;
                  }
                  .strength-bar {
                    height: 100%;
                    width: 0%;
                    transition: all 0.3s;
                  }
                  .result {
                    margin: 20px 0;
                  }
                  .tips {
                    background: #f8f9fa;
                    padding: 20px;
                    border-radius: 10px;
                    margin-top: 20px;
                  }
                  .tips ul {
                    margin: 10px 0 0 20px;
                  }
                  .tips li {
                    margin: 5px 0;
                    color: #666;
                  }
                  .warning {
                    color: #dc3545;
                    font-weight: bold;
                  }
                  .success {
                    color: #28a745;
                  }
                  .feedback ul {
                    margin-top: 10px;
                    padding-left: 20px;
                  }
                  .feedback li {
                    color: #666;
                    margin: 5px 0;
                  }
                `
                            }
                        ]
                    },
                    {
                        _id: "step_cyber_1_5",
                        title: "Security Best Practices",
                        type: "project",
                        duration: "90 min",
                        resources: [
                            {
                                title: "Security Audit Checklist",
                                type: "code",
                                url: null,
                                html: `
                  <div class="audit-checklist">
                    <h1>🛡️ Personal Security Audit</h1>
                    <p>Complete this security audit to assess and improve your digital security posture.</p>
                    
                    <div class="checklist">
                      <div class="checklist-item">
                        <input type="checkbox" id="item1">
                        <label for="item1">Enable two-factor authentication (2FA) on important accounts</label>
                      </div>
                      
                      <div class="checklist-item">
                        <input type="checkbox" id="item2">
                        <label for="item2">Use a password manager to generate and store unique passwords</label>
                      </div>
                      
                      <div class="checklist-item">
                        <input type="checkbox" id="item3">
                        <label for="item3">Keep software and operating systems updated</label>
                      </div>
                      
                      <div class="checklist-item">
                        <input type="checkbox" id="item4">
                        <label for="item4">Backup important data regularly (3-2-1 rule)</label>
                      </div>
                      
                      <div class="checklist-item">
                        <input type="checkbox" id="item5">
                        <label for="item5">Review app permissions and remove unnecessary access</label>
                      </div>
                      
                      <div class="checklist-item">
                        <input type="checkbox" id="item6">
                        <label for="item6">Use VPN on public Wi-Fi networks</label>
                      </div>
                      
                      <div class="checklist-item">
                        <input type="checkbox" id="item7">
                        <label for="item7">Enable firewall on all devices</label>
                      </div>
                      
                      <div class="checklist-item">
                        <input type="checkbox" id="item8">
                        <label for="item8">Regularly check for data breaches (haveibeenpwned.com)</label>
                      </div>
                    </div>
                    
                    <div class="score-section">
                      <button id="calculateScore">Calculate Security Score</button>
                      <div id="scoreResult" class="score-result"></div>
                    </div>
                  </div>
                  
                  <script>
                    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
                    const calculateBtn = document.getElementById('calculateScore');
                    const scoreResult = document.getElementById('scoreResult');
                    
                    calculateBtn.addEventListener('click', () => {
                      let checkedCount = 0;
                      checkboxes.forEach(cb => {
                        if (cb.checked) checkedCount++;
                      });
                      
                      const percentage = (checkedCount / checkboxes.length) * 100;
                      let grade = '';
                      let advice = '';
                      
                      if (percentage >= 80) {
                        grade = 'Excellent!';
                        advice = 'You have strong security practices. Keep maintaining them!';
                      } else if (percentage >= 60) {
                        grade = 'Good';
                        advice = 'You\'re on the right track. Complete the remaining items for better protection.';
                      } else if (percentage >= 40) {
                        grade = 'Fair';
                        advice = 'Your security needs improvement. Focus on implementing the missing practices.';
                      } else {
                        grade = 'Poor';
                        advice = 'Your digital security is at risk. Please implement all these security measures immediately.';
                      }
                      
                      scoreResult.innerHTML = \`
                        <div class="score-card">
                          <h3>Security Score: \${percentage}%</h3>
                          <p class="grade \${percentage >= 60 ? 'good' : 'bad'}">\${grade}</p>
                          <p>\${advice}</p>
                          <p class="recommendation">🎯 Completed \${checkedCount} out of \${checkboxes.length} security measures</p>
                        </div>
                      \`;
                    });
                  </script>
                `,
                                css: `
                  body {
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    min-height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin: 0;
                    padding: 20px;
                  }
                  .audit-checklist {
                    background: white;
                    border-radius: 20px;
                    padding: 30px;
                    max-width: 650px;
                    width: 100%;
                    box-shadow: 0 20px 60px rgba(0,0,0,0.2);
                  }
                  h1 {
                    text-align: center;
                    color: #333;
                    margin-bottom: 10px;
                  }
                  .checklist {
                    margin: 30px 0;
                  }
                  .checklist-item {
                    margin: 15px 0;
                    display: flex;
                    align-items: center;
                  }
                  .checklist-item input {
                    margin-right: 15px;
                    width: 20px;
                    height: 20px;
                    cursor: pointer;
                  }
                  .checklist-item label {
                    color: #555;
                    cursor: pointer;
                    flex: 1;
                  }
                  .score-section {
                    text-align: center;
                    margin-top: 30px;
                  }
                  button {
                    background: #667eea;
                    color: white;
                    border: none;
                    padding: 12px 30px;
                    border-radius: 10px;
                    cursor: pointer;
                    font-weight: bold;
                    font-size: 16px;
                    transition: all 0.2s;
                  }
                  button:hover {
                    background: #5a67d8;
                    transform: translateY(-2px);
                  }
                  .score-result {
                    margin-top: 20px;
                  }
                  .score-card {
                    background: #f8f9fa;
                    padding: 20px;
                    border-radius: 10px;
                    animation: slideIn 0.3s ease-out;
                  }
                  .grade {
                    font-size: 24px;
                    font-weight: bold;
                    margin: 10px 0;
                  }
                  .good {
                    color: #28a745;
                  }
                  .bad {
                    color: #dc3545;
                  }
                  .recommendation {
                    margin-top: 15px;
                    font-weight: bold;
                    color: #667eea;
                  }
                  @keyframes slideIn {
                    from {
                      opacity: 0;
                      transform: translateY(20px);
                    }
                    to {
                      opacity: 1;
                      transform: translateY(0);
                    }
                  }
                `
                            }
                        ]
                    }
                ]
            },
            {
                _id: "module_cyber_2",
                title: "Network Security",
                description: "Understand how to secure network infrastructure, detect intrusions, and protect data in transit.",
                duration: "3 weeks",
                isLocked: true,
                certificateAvailable: false,
                steps: [
                    {
                        _id: "step_cyber_2_1",
                        title: "Network Fundamentals",
                        type: "learning",
                        duration: "60 min",
                        resources: [
                            {
                                title: "Network Basics",
                                type: "video",
                                url: "https://www.youtube.com/watch?v=qiQR5rTSshw",
                                html: null,
                                css: null
                            }
                        ]
                    },
                    {
                        _id: "step_cyber_2_2",
                        title: "Firewalls and IDS/IPS",
                        type: "learning",
                        duration: "55 min",
                        resources: [
                            {
                                title: "Firewall Protection",
                                type: "video",
                                url: "https://www.youtube.com/watch?v=kDEX1HXybrU",
                                html: null,
                                css: null
                            }
                        ]
                    },
                    {
                        _id: "step_cyber_2_3",
                        title: "Network Scanning Simulation",
                        type: "practice",
                        duration: "75 min",
                        resources: [
                            {
                                title: "Network Security Simulator",
                                type: "code",
                                url: null,
                                html: `
                  <div class="network-simulator">
                    <h1>🌐 Network Security Simulator</h1>
                    <p>Learn how to detect and block suspicious network activity.</p>
                    
                    <div class="network-status">
                      <h3>Network Status: <span id="status" class="secure">🟢 SECURE</span></h3>
                    </div>
                    
                    <div class="traffic-log">
                      <h3>Network Traffic Log:</h3>
                      <div id="log" class="log-container"></div>
                    </div>
                    
                    <div class="controls">
                      <button id="simulateNormal">Simulate Normal Traffic</button>
                      <button id="simulateAttack">Simulate Attack</button>
                      <button id="blockAttacker">Block Attacker</button>
                    </div>
                    
                    <div class="info">
                      <p><strong>Instructions:</strong> Click "Simulate Attack" to see suspicious traffic, then click "Block Attacker" to secure the network.</p>
                    </div>
                  </div>
                  
                  <script>
                    const logContainer = document.getElementById('log');
                    const statusSpan = document.getElementById('status');
                    let isUnderAttack = false;
                    
                    function addLogEntry(message, type = 'info') {
                      const entry = document.createElement('div');
                      entry.className = \`log-entry \${type}\`;
                      const timestamp = new Date().toLocaleTimeString();
                      entry.innerHTML = \`[\${timestamp}] \${message}\`;
                      logContainer.insertBefore(entry, logContainer.firstChild);
                      
                      // Keep only last 10 entries
                      while (logContainer.children.length > 10) {
                        logContainer.removeChild(logContainer.lastChild);
                      }
                    }
                    
                    function updateStatus(secure) {
                      if (secure) {
                        statusSpan.innerHTML = '🟢 SECURE';
                        statusSpan.className = 'secure';
                        isUnderAttack = false;
                      } else {
                        statusSpan.innerHTML = '🔴 UNDER ATTACK';
                        statusSpan.className = 'attack';
                        isUnderAttack = true;
                      }
                    }
                    
                    document.getElementById('simulateNormal').addEventListener('click', () => {
                      if (isUnderAttack) {
                        addLogEntry('⚠️ Cannot simulate normal traffic while under attack!', 'warning');
                        return;
                      }
                      addLogEntry('Normal web browsing traffic detected - Allowed', 'info');
                      addLogEntry('DNS request to google.com - Allowed', 'info');
                      addLogEntry('HTTPS connection to api.example.com - Allowed', 'info');
                    });
                    
                    document.getElementById('simulateAttack').addEventListener('click', () => {
                      if (isUnderAttack) {
                        addLogEntry('⚠️ System is already under attack!', 'warning');
                        return;
                      }
                      updateStatus(false);
                      addLogEntry('🚨 ALERT: Suspicious traffic detected from IP 192.168.1.100', 'attack');
                      addLogEntry('🚨 Multiple failed SSH attempts detected - Possible brute force', 'attack');
                      addLogEntry('🚨 Unusual outbound data transfer detected', 'attack');
                      addLogEntry('⚠️ INTRUSION DETECTION SYSTEM: Potential threat identified', 'attack');
                    });
                    
                    document.getElementById('blockAttacker').addEventListener('click', () => {
                      if (!isUnderAttack) {
                        addLogEntry('ℹ️ No active threats detected', 'info');
                        return;
                      }
                      addLogEntry('✅ Firewall rule added: Blocked IP 192.168.1.100', 'success');
                      addLogEntry('✅ Attacker blocked successfully', 'success');
                      addLogEntry('✅ System returning to normal operations', 'success');
                      updateStatus(true);
                      addLogEntry('🛡️ Network secured! All systems operational', 'success');
                    });
                    
                    // Initial log entries
                    addLogEntry('Network Security Simulator initialized', 'info');
                    addLogEntry('Firewall active - Monitoring traffic', 'info');
                    addLogEntry('IDS running - Ready to detect threats', 'info');
                  </script>
                `,
                                css: `
                  body {
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    min-height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin: 0;
                    padding: 20px;
                  }
                  .network-simulator {
                    background: white;
                    border-radius: 20px;
                    padding: 30px;
                    max-width: 700px;
                    width: 100%;
                    box-shadow: 0 20px 60px rgba(0,0,0,0.2);
                  }
                  h1 {
                    text-align: center;
                    color: #333;
                  }
                  .network-status {
                    background: #f8f9fa;
                    padding: 15px;
                    border-radius: 10px;
                    margin: 20px 0;
                  }
                  .secure {
                    color: #28a745;
                    font-weight: bold;
                  }
                  .attack {
                    color: #dc3545;
                    font-weight: bold;
                    animation: pulse 1s infinite;
                  }
                  .traffic-log {
                    background: #1e1e1e;
                    color: #d4d4d4;
                    padding: 15px;
                    border-radius: 10px;
                    margin: 20px 0;
                    font-family: monospace;
                  }
                  .log-container {
                    height: 200px;
                    overflow-y: auto;
                    font-size: 12px;
                  }
                  .log-entry {
                    padding: 5px;
                    border-bottom: 1px solid #333;
                    margin: 5px 0;
                  }
                  .log-entry.info {
                    color: #4ec9b0;
                  }
                  .log-entry.attack {
                    color: #f48771;
                    font-weight: bold;
                  }
                  .log-entry.warning {
                    color: #dcdcaa;
                  }
                  .log-entry.success {
                    color: #6a9955;
                  }
                  .controls {
                    display: flex;
                    gap: 10px;
                    margin: 20px 0;
                  }
                  button {
                    flex: 1;
                    background: #667eea;
                    color: white;
                    border: none;
                    padding: 12px;
                    border-radius: 10px;
                    cursor: pointer;
                    font-weight: bold;
                    transition: all 0.2s;
                  }
                  button:hover {
                    transform: translateY(-2px);
                  }
                  .info {
                    background: #f8f9fa;
                    padding: 15px;
                    border-radius: 10px;
                    margin-top: 20px;
                  }
                  @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.7; }
                  }
                `
                            }
                        ]
                    }
                ]
            },
            {
                _id: "module_cyber_3",
                title: "Ethical Hacking & Penetration Testing",
                description: "Learn how ethical hackers think and perform authorized security testing to identify vulnerabilities.",
                duration: "4 weeks",
                isLocked: true,
                certificateAvailable: true,
                steps: [
                    {
                        _id: "step_cyber_3_1",
                        title: "Introduction to Ethical Hacking",
                        type: "learning",
                        duration: "60 min",
                        resources: [
                            {
                                title: "Ethical Hacking Basics",
                                type: "video",
                                url: "https://www.youtube.com/watch?v=3Kq1MIfTWCE",
                                html: null,
                                css: null
                            }
                        ]
                    },
                    {
                        _id: "step_cyber_3_2",
                        title: "Vulnerability Assessment",
                        type: "learning",
                        duration: "55 min",
                        resources: [
                            {
                                title: "Finding Vulnerabilities",
                                type: "video",
                                url: "https://www.youtube.com/watch?v=DhYwrBdQy_s",
                                html: null,
                                css: null
                            }
                        ]
                    },
                    {
                        _id: "step_cyber_3_3",
                        title: "Final Project: Security Audit Report",
                        type: "project",
                        duration: "120 min",
                        resources: [
                            {
                                title: "Security Audit Template",
                                type: "code",
                                url: null,
                                html: `
                  <div class="audit-project">
                    <h1>📋 Final Project: Security Audit Report</h1>
                    <p>Create a comprehensive security audit report for a fictional company.</p>
                    
                    <div class="scenario">
                      <h3>Scenario:</h3>
                      <p>You are hired as a security consultant for "TechStart Inc." to audit their security posture. They have provided the following information:</p>
                      <ul>
                        <li>50 employees using company laptops</li>
                        <li>Cloud-based infrastructure (AWS)</li>
                        <li>Customer data including payment information</li>
                        <li>Remote work policy</li>
                        <li>No formal security training program</li>
                      </ul>
                    </div>
                    
                    <div class="audit-template">
                      <h3>Your Security Audit Report:</h3>
                      <textarea id="auditReport" placeholder="Write your security audit report here..."></textarea>
                      <button id="submitReport">Submit Report</button>
                      <div id="feedback" class="feedback"></div>
                    </div>
                    
                    <div class="guidelines">
                      <h4>📝 Report Guidelines:</h4>
                      <ul>
                        <li>Identify at least 5 security risks</li>
                        <li>Rank risks by severity (High/Medium/Low)</li>
                        <li>Provide recommendations for each risk</li>
                        <li>Suggest a security training program</li>
                        <li>Create an incident response plan</li>
                      </ul>
                    </div>
                  </div>
                  
                  <script>
                    const submitBtn = document.getElementById('submitReport');
                    const reportTextarea = document.getElementById('auditReport');
                    const feedbackDiv = document.getElementById('feedback');
                    
                    submitBtn.addEventListener('click', () => {
                      const report = reportTextarea.value.trim();
                      
                      if (report.length < 100) {
                        feedbackDiv.innerHTML = \`
                          <div class="error">
                            <strong>⚠️ Report too short!</strong>
                            <p>Please provide more details in your security audit. Aim for at least 100 characters.</p>
                          </div>
                        \`;
                        return;
                      }
                      
                      // Simple analysis of report content
                      const hasRisks = /risk|vulnerability|threat|danger/i.test(report);
                      const hasRecommendations = /recommend|suggest|should|implement|improve/i.test(report);
                      const hasTraining = /training|education|awareness|workshop/i.test(report);
                      const hasIncident = /incident|response|breach|recovery|disaster/i.test(report);
                      
                      let score = 0;
                      if (hasRisks) score++;
                      if (hasRecommendations) score++;
                      if (hasTraining) score++;
                      if (hasIncident) score++;
                      
                      const percentage = (score / 4) * 100;
                      
                      feedbackDiv.innerHTML = \`
                        <div class="feedback-card">
                          <h3>Report Analysis:</h3>
                          <div class="score-meter">
                            <div class="score-bar" style="width: \${percentage}%"></div>
                          </div>
                          <p class="score-text">Completeness: \${percentage}%</p>
                          \${percentage >= 75 ? 
                            '<p class="success">✅ Excellent work! This is a comprehensive security audit.</p>' :
                            '<p class="warning">⚠️ Good start! Consider adding more details about risks, recommendations, training, and incident response.</p>'
                          }
                          <div class="checklist">
                            <p>\${hasRisks ? '✅' : '❌'} Identified security risks/vulnerabilities</p>
                            <p>\${hasRecommendations ? '✅' : '❌'} Provided recommendations</p>
                            <p>\${hasTraining ? '✅' : '❌'} Included security training program</p>
                            <p>\${hasIncident ? '✅' : '❌'} Created incident response plan</p>
                          </div>
                          <div class="certificate-note">
                            \${percentage >= 75 ? 
                              '<p>🎓 Certificate earned! You have completed the Cybersecurity Specialist career path.</p>' :
                              '<p>📚 Review the guidelines and try again to earn your certificate.</p>'
                            }
                          </div>
                        </div>
                      \`;
                    });
                  </script>
                `,
                                css: `
                  body {
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    min-height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin: 0;
                    padding: 20px;
                  }
                  .audit-project {
                    background: white;
                    border-radius: 20px;
                    padding: 30px;
                    max-width: 800px;
                    width: 100%;
                    box-shadow: 0 20px 60px rgba(0,0,0,0.2);
                  }
                  h1 {
                    text-align: center;
                    color: #333;
                  }
                  .scenario, .guidelines {
                    background: #f8f9fa;
                    padding: 20px;
                    border-radius: 10px;
                    margin: 20px 0;
                  }
                  .scenario ul, .guidelines ul {
                    margin: 10px 0 0 20px;
                  }
                  .scenario li, .guidelines li {
                    margin: 5px 0;
                  }
                  textarea {
                    width: 100%;
                    min-height: 200px;
                    padding: 15px;
                    border: 2px solid #e0e0e0;
                    border-radius: 10px;
                    font-family: monospace;
                    font-size: 14px;
                    margin: 15px 0;
                  }
                  button {
                    background: #667eea;
                    color: white;
                    border: none;
                    padding: 12px 30px;
                    border-radius: 10px;
                    cursor: pointer;
                    font-weight: bold;
                    transition: all 0.2s;
                  }
                  button:hover {
                    background: #5a67d8;
                    transform: translateY(-2px);
                  }
                  .feedback {
                    margin-top: 20px;
                  }
                  .feedback-card {
                    background: #f8f9fa;
                    padding: 20px;
                    border-radius: 10px;
                  }
                  .score-meter {
                    background: #e0e0e0;
                    height: 20px;
                    border-radius: 10px;
                    overflow: hidden;
                    margin: 10px 0;
                  }
                  .score-bar {
                    height: 100%;
                    background: #28a745;
                    transition: width 0.3s;
                  }
                  .success {
                    color: #28a745;
                    font-weight: bold;
                  }
                  .warning {
                    color: #ffc107;
                    font-weight: bold;
                  }
                  .error {
                    color: #dc3545;
                  }
                  .checklist {
                    margin: 15px 0;
                    padding: 10px;
                    background: white;
                    border-radius: 10px;
                  }
                  .certificate-note {
                    text-align: center;
                    margin-top: 20px;
                    padding: 15px;
                    background: #e8f5e9;
                    border-radius: 10px;
                  }
                `
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        _id: "career_mobile_dev",
        title: "Mobile App Developer",
        description: "Build powerful and user-friendly mobile applications for iOS and Android platforms using React Native. Learn to create cross-platform apps that reach millions of users.",
        difficulty: "Intermediate",
        estimatedDuration: "10 weeks",
        skillsYouWillGain: [
            "React Native",
            "JavaScript/TypeScript",
            "Mobile UI/UX Design",
            "State Management",
            "RESTful APIs",
            "Firebase",
            "App Store Deployment",
            "Performance Optimization"
        ],
        thumbnail: "https://pixelplex.io/next/images/mobile-app-development-company/services/mobile-app-dev-1920.jpg",
        modules: [
            {
                _id: "module_mobile_1",
                title: "React Native Fundamentals",
                description: "Get started with React Native and learn the core concepts of mobile app development.",
                duration: "2 weeks",
                isLocked: false,
                certificateAvailable: false,
                steps: [
                    {
                        _id: "step_mobile_1_1",
                        title: "Introduction to React Native",
                        type: "learning",
                        duration: "45 min",
                        resources: [
                            {
                                title: "React Native Basics",
                                type: "video",
                                url: "https://www.youtube.com/watch?v=0-S5a0eXPoc",
                                html: null,
                                css: null
                            }
                        ]
                    },
                    {
                        _id: "step_mobile_1_2",
                        title: "Components and Styling",
                        type: "learning",
                        duration: "50 min",
                        resources: [
                            {
                                title: "React Native Components",
                                type: "video",
                                url: "https://www.youtube.com/watch?v=urjPmM5mXsY",
                                html: null,
                                css: null
                            }
                        ]
                    },
                    {
                        _id: "step_mobile_1_3",
                        title: "Build Your First Mobile App",
                        type: "practice",
                        duration: "90 min",
                        resources: [
                            {
                                title: "Mobile Calculator App",
                                type: "code",
                                url: null,
                                html: `
                  <div class="mobile-calculator">
                    <div class="calculator">
                      <div class="display" id="display">0</div>
                      <div class="buttons">
                        <button class="btn clear" data-value="clear">C</button>
                        <button class="btn operator" data-value="/">÷</button>
                        <button class="btn operator" data-value="*">×</button>
                        <button class="btn operator" data-value="-">-</button>
                        
                        <button class="btn number" data-value="7">7</button>
                        <button class="btn number" data-value="8">8</button>
                        <button class="btn number" data-value="9">9</button>
                        <button class="btn operator" data-value="+">+</button>
                        
                        <button class="btn number" data-value="4">4</button>
                        <button class="btn number" data-value="5">5</button>
                        <button class="btn number" data-value="6">6</button>
                        <button class="btn equals" data-value="=">=</button>
                        
                        <button class="btn number" data-value="1">1</button>
                        <button class="btn number" data-value="2">2</button>
                        <button class="btn number" data-value="3">3</button>
                        <button class="btn number" data-value="0" class="zero">0</button>
                      </div>
                    </div>
                    <div class="mobile-frame">
                      <div class="notch"></div>
                    </div>
                  </div>
                  
                  <script>
                    class MobileCalculator {
                      constructor() {
                        this.display = document.getElementById('display');
                        this.currentValue = '0';
                        this.previousValue = null;
                        this.operation = null;
                        this.waitingForOperand = false;
                        this.init();
                      }
                      
                      init() {
                        document.querySelectorAll('.btn').forEach(btn => {
                          btn.addEventListener('click', () => {
                            const value = btn.dataset.value;
                            if (value === 'clear') {
                              this.clear();
                            } else if (value === '=') {
                              this.calculate();
                            } else if (btn.classList.contains('operator')) {
                              this.handleOperator(value);
                            } else {
                              this.inputNumber(value);
                            }
                            this.updateDisplay();
                          });
                        });
                      }
                      
                      inputNumber(num) {
                        if (this.waitingForOperand) {
                          this.currentValue = num;
                          this.waitingForOperand = false;
                        } else {
                          this.currentValue = this.currentValue === '0' ? num : this.currentValue + num;
                        }
                      }
                      
                      handleOperator(nextOp) {
                        const value = parseFloat(this.currentValue);
                        
                        if (this.previousValue === null) {
                          this.previousValue = value;
                        } else if (this.operation) {
                          const result = this.performCalculation();
                          this.currentValue = String(result);
                          this.previousValue = result;
                        }
                        
                        this.waitingForOperand = true;
                        this.operation = nextOp;
                      }
                      
                      performCalculation() {
                        const prev = this.previousValue;
                        const current = parseFloat(this.currentValue);
                        
                        switch (this.operation) {
                          case '+': return prev + current;
                          case '-': return prev - current;
                          case '*': return prev * current;
                          case '/': return prev / current;
                          default: return current;
                        }
                      }
                      
                      calculate() {
                        if (this.operation && !this.waitingForOperand) {
                          const result = this.performCalculation();
                          this.currentValue = String(result);
                          this.previousValue = null;
                          this.operation = null;
                          this.waitingForOperand = false;
                        }
                      }
                      
                      clear() {
                        this.currentValue = '0';
                        this.previousValue = null;
                        this.operation = null;
                        this.waitingForOperand = false;
                      }
                      
                      updateDisplay() {
                        this.display.textContent = this.currentValue;
                      }
                    }
                    
                    new MobileCalculator();
                  </script>
                `,
                                css: `
                  body {
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    min-height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin: 0;
                    padding: 20px;
                  }
                  .mobile-calculator {
                    position: relative;
                    width: 320px;
                    background: #1c1c1e;
                    border-radius: 40px;
                    padding: 20px;
                    box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
                  }
                  .mobile-frame {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 30px;
                    border-radius: 40px 40px 0 0;
                  }
                  .notch {
                    position: absolute;
                    top: 10px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 150px;
                    height: 25px;
                    background: #1c1c1e;
                    border-radius: 20px;
                  }
                  .calculator {
                    margin-top: 20px;
                  }
                  .display {
                    background: #000;
                    color: #fff;
                    font-size: 64px;
                    padding: 30px 20px;
                    text-align: right;
                    border-radius: 20px;
                    margin-bottom: 20px;
                    font-weight: 300;
                    overflow-x: auto;
                    font-family: 'SF Mono', monospace;
                  }
                  .buttons {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 10px;
                  }
                  .btn {
                    background: #2c2c2e;
                    border: none;
                    color: #fff;
                    font-size: 24px;
                    padding: 20px;
                    border-radius: 60px;
                    cursor: pointer;
                    transition: all 0.2s;
                    font-weight: 500;
                  }
                  .btn:hover {
                    opacity: 0.8;
                    transform: scale(0.98);
                  }
                  .btn.number {
                    background: #2c2c2e;
                  }
                  .btn.operator {
                    background: #ff9f0a;
                  }
                  .btn.clear {
                    background: #ff3b30;
                  }
                  .btn.equals {
                    background: #34c759;
                  }
                  .zero {
                    grid-column: span 2;
                  }
                `
                            }
                        ]
                    }
                ]
            },
            {
                _id: "module_mobile_2",
                title: "Navigation and State Management",
                description: "Master navigation between screens and manage app state effectively.",
                duration: "3 weeks",
                isLocked: true,
                certificateAvailable: false,
                steps: [
                    {
                        _id: "step_mobile_2_1",
                        title: "React Navigation",
                        type: "learning",
                        duration: "55 min",
                        resources: [
                            {
                                title: "Navigation Tutorial",
                                type: "video",
                                url: "https://www.youtube.com/watch?v=Uj5e1bVWJLk",
                                html: null,
                                css: null
                            }
                        ]
                    },
                    {
                        _id: "step_mobile_2_2",
                        title: "State Management with Redux",
                        type: "learning",
                        duration: "60 min",
                        resources: [
                            {
                                title: "Redux Basics",
                                type: "video",
                                url: "https://www.youtube.com/watch?v=poQXNp9ItL4",
                                html: null,
                                css: null
                            }
                        ]
                    },
                    {
                        _id: "step_mobile_2_3",
                        title: "Todo List App with Navigation",
                        type: "project",
                        duration: "100 min",
                        resources: [
                            {
                                title: "Todo List App",
                                type: "code",
                                url: null,
                                html: `
                  <div class="todo-app">
                    <div class="app-header">
                      <h1>📱 My Tasks</h1>
                      <p>Mobile Todo List App</p>
                    </div>
                    
                    <div class="add-task">
                      <input type="text" id="taskInput" placeholder="Add a new task..." />
                      <button id="addBtn">+</button>
                    </div>
                    
                    <div class="filters">
                      <button class="filter-btn active" data-filter="all">All</button>
                      <button class="filter-btn" data-filter="active">Active</button>
                      <button class="filter-btn" data-filter="completed">Completed</button>
                    </div>
                    
                    <div id="taskList" class="task-list"></div>
                    
                    <div class="stats">
                      <span id="taskCount">0 tasks</span>
                      <button id="clearCompleted">Clear Completed</button>
                    </div>
                  </div>
                  
                  <script>
                    let tasks = [];
                    let currentFilter = 'all';
                    
                    function loadTasks() {
                      const saved = localStorage.getItem('mobile_tasks');
                      if (saved) {
                        tasks = JSON.parse(saved);
                      }
                      renderTasks();
                    }
                    
                    function saveTasks() {
                      localStorage.setItem('mobile_tasks', JSON.stringify(tasks));
                    }
                    
                    function addTask() {
                      const input = document.getElementById('taskInput');
                      const text = input.value.trim();
                      if (text) {
                        tasks.push({
                          id: Date.now(),
                          text: text,
                          completed: false,
                          createdAt: new Date().toISOString()
                        });
                        input.value = '';
                        saveTasks();
                        renderTasks();
                      }
                    }
                    
                    function toggleTask(id) {
                      const task = tasks.find(t => t.id === id);
                      if (task) {
                        task.completed = !task.completed;
                        saveTasks();
                        renderTasks();
                      }
                    }
                    
                    function deleteTask(id) {
                      tasks = tasks.filter(t => t.id !== id);
                      saveTasks();
                      renderTasks();
                    }
                    
                    function clearCompleted() {
                      tasks = tasks.filter(t => !t.completed);
                      saveTasks();
                      renderTasks();
                    }
                    
                    function getFilteredTasks() {
                      if (currentFilter === 'active') {
                        return tasks.filter(t => !t.completed);
                      } else if (currentFilter === 'completed') {
                        return tasks.filter(t => t.completed);
                      }
                      return tasks;
                    }
                    
                    function renderTasks() {
                      const filteredTasks = getFilteredTasks();
                      const taskList = document.getElementById('taskList');
                      const taskCount = document.getElementById('taskCount');
                      
                      if (filteredTasks.length === 0) {
                        taskList.innerHTML = '<div class="empty-state">✨ No tasks yet. Add your first task!</div>';
                      } else {
                        taskList.innerHTML = filteredTasks.map(task => \`
                          <div class="task-item \${task.completed ? 'completed' : ''}">
                            <input type="checkbox" \${task.completed ? 'checked' : ''} onchange="toggleTask(\${task.id})" />
                            <span class="task-text">\${escapeHtml(task.text)}</span>
                            <button class="delete-btn" onclick="deleteTask(\${task.id})">🗑️</button>
                          </div>
                        \`).join('');
                      }
                      
                      const activeCount = tasks.filter(t => !t.completed).length;
                      taskCount.textContent = \`\${activeCount} task\${activeCount !== 1 ? 's' : ''} remaining\`;
                      
                      // Update filter buttons
                      document.querySelectorAll('.filter-btn').forEach(btn => {
                        if (btn.dataset.filter === currentFilter) {
                          btn.classList.add('active');
                        } else {
                          btn.classList.remove('active');
                        }
                      });
                    }
                    
                    function escapeHtml(text) {
                      const div = document.createElement('div');
                      div.textContent = text;
                      return div.innerHTML;
                    }
                    
                    document.getElementById('addBtn').addEventListener('click', addTask);
                    document.getElementById('taskInput').addEventListener('keypress', (e) => {
                      if (e.key === 'Enter') addTask();
                    });
                    document.getElementById('clearCompleted').addEventListener('click', clearCompleted);
                    
                    document.querySelectorAll('.filter-btn').forEach(btn => {
                      btn.addEventListener('click', () => {
                        currentFilter = btn.dataset.filter;
                        renderTasks();
                      });
                    });
                    
                    loadTasks();
                  </script>
                `,
                                css: `
                  body {
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    min-height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin: 0;
                    padding: 20px;
                  }
                  .todo-app {
                    background: white;
                    border-radius: 20px;
                    max-width: 500px;
                    width: 100%;
                    overflow: hidden;
                    box-shadow: 0 20px 60px rgba(0,0,0,0.2);
                  }
                  .app-header {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    padding: 30px;
                    text-align: center;
                  }
                  .app-header h1 {
                    margin: 0;
                    font-size: 28px;
                  }
                  .app-header p {
                    margin: 5px 0 0;
                    opacity: 0.9;
                  }
                  .add-task {
                    padding: 20px;
                    display: flex;
                    gap: 10px;
                    border-bottom: 1px solid #e0e0e0;
                  }
                  .add-task input {
                    flex: 1;
                    padding: 12px;
                    border: 2px solid #e0e0e0;
                    border-radius: 10px;
                    font-size: 16px;
                  }
                  .add-task button {
                    background: #667eea;
                    color: white;
                    border: none;
                    width: 50px;
                    border-radius: 10px;
                    font-size: 24px;
                    cursor: pointer;
                    transition: all 0.2s;
                  }
                  .add-task button:hover {
                    background: #5a67d8;
                    transform: scale(1.05);
                  }
                  .filters {
                    display: flex;
                    padding: 15px;
                    gap: 10px;
                    border-bottom: 1px solid #e0e0e0;
                  }
                  .filter-btn {
                    flex: 1;
                    padding: 8px;
                    border: none;
                    background: #f0f0f0;
                    border-radius: 20px;
                    cursor: pointer;
                    transition: all 0.2s;
                  }
                  .filter-btn.active {
                    background: #667eea;
                    color: white;
                  }
                  .task-list {
                    max-height: 400px;
                    overflow-y: auto;
                  }
                  .task-item {
                    display: flex;
                    align-items: center;
                    padding: 15px 20px;
                    border-bottom: 1px solid #f0f0f0;
                    transition: background 0.2s;
                  }
                  .task-item:hover {
                    background: #f8f9fa;
                  }
                  .task-item.completed .task-text {
                    text-decoration: line-through;
                    color: #999;
                  }
                  .task-item input {
                    margin-right: 15px;
                    width: 20px;
                    height: 20px;
                    cursor: pointer;
                  }
                  .task-text {
                    flex: 1;
                    font-size: 16px;
                  }
                  .delete-btn {
                    background: none;
                    border: none;
                    font-size: 20px;
                    cursor: pointer;
                    opacity: 0.5;
                    transition: opacity 0.2s;
                  }
                  .delete-btn:hover {
                    opacity: 1;
                  }
                  .empty-state {
                    text-align: center;
                    padding: 40px;
                    color: #999;
                  }
                  .stats {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 15px 20px;
                    border-top: 1px solid #e0e0e0;
                    background: #f8f9fa;
                  }
                  .stats button {
                    background: #ff3b30;
                    color: white;
                    border: none;
                    padding: 8px 15px;
                    border-radius: 20px;
                    cursor: pointer;
                    font-size: 12px;
                  }
                  .stats button:hover {
                    background: #dc3545;
                  }
                `
                            }
                        ]
                    }
                ]
            },
            {
                _id: "module_mobile_3",
                title: "API Integration & Deployment",
                description: "Connect your app to backend services and publish to app stores.",
                duration: "3 weeks",
                isLocked: true,
                certificateAvailable: true,
                steps: [
                    {
                        _id: "step_mobile_3_1",
                        title: "REST API Integration",
                        type: "learning",
                        duration: "60 min",
                        resources: [
                            {
                                title: "API Calls in React Native",
                                type: "video",
                                url: "https://www.youtube.com/watch?v=ZBCUegTZF7M",
                                html: null,
                                css: null
                            }
                        ]
                    },
                    {
                        _id: "step_mobile_3_2",
                        title: "App Store Deployment",
                        type: "learning",
                        duration: "45 min",
                        resources: [
                            {
                                title: "Publishing Your App",
                                type: "video",
                                url: "https://www.youtube.com/watch?v=1hPnytH-2r8",
                                html: null,
                                css: null
                            }
                        ]
                    },
                    {
                        _id: "step_mobile_3_3",
                        title: "Final Project: Weather App",
                        type: "project",
                        duration: "120 min",
                        resources: [
                            {
                                title: "Weather App Project",
                                type: "code",
                                url: null,
                                html: `
                  <div class="weather-app">
                    <div class="weather-header">
                      <h1>☁️ Weather App</h1>
                      <p>Your final mobile app project</p>
                    </div>
                    
                    <div class="search-section">
                      <input type="text" id="cityInput" placeholder="Enter city name..." />
                      <button id="searchBtn">Search</button>
                    </div>
                    
                    <div id="weatherInfo" class="weather-info">
                      <div class="loading">🌤️ Enter a city to get weather information...</div>
                    </div>
                    
                    <div class="api-info">
                      <p><strong>Project Requirements:</strong></p>
                      <ul>
                        <li>✅ Fetch weather data from an API</li>
                        <li>✅ Display temperature, conditions, and humidity</li>
                        <li>✅ Handle loading and error states</li>
                        <li>✅ Add error handling for invalid cities</li>
                        <li>✅ Show weather icon based on conditions</li>
                      </ul>
                    </div>
                  </div>
                  
                  <script>
                    // Simulated weather API for learning purposes
                    const weatherDatabase = {
                      'london': { temp: 12, condition: 'Cloudy', humidity: 78, icon: '☁️' },
                      'new york': { temp: 18, condition: 'Sunny', humidity: 65, icon: '☀️' },
                      'tokyo': { temp: 22, condition: 'Clear', humidity: 60, icon: '🌤️' },
                      'paris': { temp: 15, condition: 'Rainy', humidity: 85, icon: '🌧️' },
                      'sydney': { temp: 25, condition: 'Sunny', humidity: 55, icon: '☀️' },
                      'mumbai': { temp: 30, condition: 'Humid', humidity: 90, icon: '🌡️' },
                      'toronto': { temp: 8, condition: 'Snow', humidity: 82, icon: '❄️' }
                    };
                    
                    async function fetchWeather(city) {
                      // Simulate API delay
                      await new Promise(resolve => setTimeout(resolve, 1000));
                      
                      const normalizedCity = city.toLowerCase().trim();
                      const data = weatherDatabase[normalizedCity];
                      
                      if (!data) {
                        throw new Error('City not found. Try: London, New York, Tokyo, Paris, Sydney, Mumbai, or Toronto');
                      }
                      
                      return data;
                    }
                    
                    async function searchWeather() {
                      const cityInput = document.getElementById('cityInput');
                      const city = cityInput.value;
                      const weatherInfo = document.getElementById('weatherInfo');
                      
                      if (!city) {
                        weatherInfo.innerHTML = '<div class="error">Please enter a city name</div>';
                        return;
                      }
                      
                      weatherInfo.innerHTML = '<div class="loading">Loading weather data...</div>';
                      
                      try {
                        const data = await fetchWeather(city);
                        weatherInfo.innerHTML = \`
                          <div class="weather-card">
                            <div class="weather-icon">\${data.icon}</div>
                            <h2>\${city.toUpperCase()}</h2>
                            <div class="temp">\${data.temp}°C</div>
                            <div class="condition">\${data.condition}</div>
                            <div class="humidity">💧 Humidity: \${data.humidity}%</div>
                            <div class="success-badge">✓ API Integration Successful</div>
                          </div>
                        \`;
                      } catch (error) {
                        weatherInfo.innerHTML = \`
                          <div class="error">
                            ❌ \${error.message}
                            <br><br>
                            <small>Hint: Try one of the supported cities!</small>
                          </div>
                        \`;
                      }
                    }
                    
                    document.getElementById('searchBtn').addEventListener('click', searchWeather);
                    document.getElementById('cityInput').addEventListener('keypress', (e) => {
                      if (e.key === 'Enter') searchWeather();
                    });
                  </script>
                `,
                                css: `
                  body {
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    min-height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin: 0;
                    padding: 20px;
                  }
                  .weather-app {
                    background: white;
                    border-radius: 20px;
                    max-width: 500px;
                    width: 100%;
                    overflow: hidden;
                    box-shadow: 0 20px 60px rgba(0,0,0,0.2);
                  }
                  .weather-header {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    padding: 30px;
                    text-align: center;
                  }
                  .weather-header h1 {
                    margin: 0;
                    font-size: 28px;
                  }
                  .search-section {
                    padding: 20px;
                    display: flex;
                    gap: 10px;
                    border-bottom: 1px solid #e0e0e0;
                  }
                  .search-section input {
                    flex: 1;
                    padding: 12px;
                    border: 2px solid #e0e0e0;
                    border-radius: 10px;
                    font-size: 16px;
                  }
                  .search-section button {
                    background: #667eea;
                    color: white;
                    border: none;
                    padding: 12px 20px;
                    border-radius: 10px;
                    cursor: pointer;
                    font-weight: bold;
                    transition: all 0.2s;
                  }
                  .search-section button:hover {
                    background: #5a67d8;
                    transform: translateY(-2px);
                  }
                  .weather-info {
                    padding: 20px;
                    min-height: 300px;
                  }
                  .weather-card {
                    text-align: center;
                    animation: fadeIn 0.5s ease-out;
                  }
                  .weather-icon {
                    font-size: 80px;
                    margin: 20px 0;
                  }
                  .temp {
                    font-size: 48px;
                    font-weight: bold;
                    margin: 10px 0;
                  }
                  .condition {
                    font-size: 24px;
                    color: #666;
                    margin: 10px 0;
                  }
                  .humidity {
                    font-size: 18px;
                    color: #999;
                    margin: 10px 0;
                  }
                  .loading {
                    text-align: center;
                    padding: 40px;
                    color: #999;
                  }
                  .error {
                    background: #fee;
                    color: #c33;
                    padding: 20px;
                    border-radius: 10px;
                    text-align: center;
                  }
                  .success-badge {
                    margin-top: 20px;
                    padding: 10px;
                    background: #e8f5e9;
                    color: #2e7d32;
                    border-radius: 10px;
                    font-weight: bold;
                  }
                  .api-info {
                    background: #f8f9fa;
                    padding: 20px;
                    border-top: 1px solid #e0e0e0;
                  }
                  .api-info ul {
                    margin: 10px 0 0 20px;
                  }
                  .api-info li {
                    margin: 5px 0;
                    color: #666;
                  }
                  @keyframes fadeIn {
                    from {
                      opacity: 0;
                      transform: translateY(20px);
                    }
                    to {
                      opacity: 1;
                      transform: translateY(0);
                    }
                  }
                `
                            }
                        ]
                    }
                ]
            }
        ]
    }
];

// Export career list for quick preview
export const careerList = careerDetails.map(career => ({
    _id: career._id,
    title: career.title,
    description: career.description,
    difficulty: career.difficulty,
    estimatedDuration: career.estimatedDuration,
    thumbnail: career.thumbnail,
    skillsYouWillGain: career.skillsYouWillGain.slice(0, 3) // Preview first 3 skills
}));
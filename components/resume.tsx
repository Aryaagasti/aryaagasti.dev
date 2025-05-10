export default function Resume() {
  return (
    <section id="resume" className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 inline-block">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">My Resume</span>
        </h2>
        <p className="text-foreground/70 mt-2 max-w-2xl mx-auto">Learn more about my qualifications and experience</p>
        <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
        <div className="mt-6">
          <a
            href="/AryaAgastiCV.pdf"
            download="AryaAgastiCV.pdf"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-purple-600 text-white rounded-md hover:opacity-90 transition-opacity"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Download Resume
          </a>
        </div>
      </div>

      <div className="max-w-4xl mx-auto bg-background border border-primary/10 rounded-lg p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-1">Arya Agasti</h1>
        <p className="text-center text-foreground/70 mb-4">Nagpur, India • aryaagasti@gmail.com • +91-8830743653</p>
        <div className="text-center mb-6">
          <a
            href="https://github.com/aryaagasti"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline mx-2"
          >
            github.com/aryaagasti
          </a>
          •
          <a
            href="https://linkedin.com/in/arya-agasti-56234018b"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline mx-2"
          >
            linkedin.com/in/arya-agasti-56234018b
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-background border border-primary/10 rounded-lg p-6 shadow">
            <h2 className="text-xl font-bold border-b border-primary/20 pb-2 mb-4">Education</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between">
                  <span className="font-semibold">Master of Computer Applications (MCA)</span>
                  <span className="text-foreground/70">2023–2025</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/70">RTMNU University, KDK College</span>
                  <span>Pursuing</span>
                </div>
              </div>
              <div>
                <div className="flex justify-between">
                  <span className="font-semibold">Bachelor of Computer Applications</span>
                  <span className="text-foreground/70">2020–2023</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/70">Dr. Ambedkar Institute</span>
                  <span>CGPA: 7.51</span>
                </div>
              </div>
              <div>
                <div className="flex justify-between">
                  <span className="font-semibold">12th (Commerce + Mathematics)</span>
                  <span className="text-foreground/70">2018–2020</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/70">Maharashtra State Board</span>
                  <span>79%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-background border border-primary/10 rounded-lg p-6 shadow">
            <h2 className="text-xl font-bold border-b border-primary/20 pb-2 mb-4">Technical Skills</h2>
            <div className="space-y-3">
              <div>
                <span className="font-semibold">Languages:</span> JavaScript, Python, C#, Java
              </div>
              <div>
                <span className="font-semibold">Web/Backend:</span> React.js, Node.js, Express.js, ASP.NET Core, Flask,
                REST APIs
              </div>
              <div>
                <span className="font-semibold">Data:</span> SQL Server, MongoDB, NumPy, Pandas
              </div>
              <div>
                <span className="font-semibold">Tools:</span> Git, GitHub, GitLab, Postman, GitFlow
              </div>
              <div className="pt-2">
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-primary/10 text-primary text-sm rounded-full">Node.js</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-sm rounded-full">React.js</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-sm rounded-full">Express.js</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-sm rounded-full">MongoDB</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-sm rounded-full">ASP.NET</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-background border border-primary/10 rounded-lg p-6 shadow mb-8">
          <h2 className="text-xl font-bold border-b border-primary/20 pb-2 mb-4">Experience</h2>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between">
                <span className="font-semibold">Talentrise Technokrate Pvt. Ltd.</span>
                <span className="text-foreground/70">Feb 2025 – May 2025</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="italic">Node.js Developer Intern</span>
                <span>Nagpur, India · Remote</span>
              </div>
              <ul className="list-disc pl-5 space-y-1 text-foreground/80">
                <li>Built and maintained RESTful APIs for client applications aligned with Figma UI designs.</li>
                <li>Developed secure backend services using Node.js, Express.js, and MongoDB.</li>
                <li>Implemented authentication using JWT, bcrypt, and integrated Nodemailer for notifications.</li>
                <li>Integrated Tiltiwo API and tested endpoints with Postman for frontend-backend integration.</li>
                <li>Worked on live production projects handling CRUD operations and route structuring.</li>
                <li><span className="font-semibold text-xs">Tech Stack:</span> Node.js, Express.js, MongoDB, Postman, Git, GitHub, Figma, Nodemailer</li>
              </ul>
            </div>
            <div>
              <div className="flex justify-between">
                <span className="font-semibold">IT NetworkZ Infosystems Pvt Ltd</span>
                <span className="text-foreground/70">Oct 2024 – Mar 2025</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="italic">Project Trainee</span>
                <span>Nagpur, India</span>
              </div>
              <ul className="list-disc pl-5 space-y-1 text-foreground/80">
                <li>Contributed to an AI-powered ATS-Friendly Resume Feedback System with NLP-based scoring.</li>
                <li>Worked on backend development using Python (Flask) and integrated Gemini AI API.</li>
                <li>Designed web modules, managed content, and performed manual software testing.</li>
                <li>Implemented core logic for resume scoring and job match analysis.</li>
                <li><span className="font-semibold text-xs">Tech Stack:</span> Python, Flask, MongoDB, React.js, Git, Gemini AI API</li>
              </ul>
            </div>
            <div>
              <div className="flex justify-between">
                <span className="font-semibold">IndiaOPD</span>
                <span className="text-foreground/70">Jun 2023 – Jul 2023</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="italic">Web Developer</span>
                <span>Nagpur, India · On-site</span>
              </div>
              <ul className="list-disc pl-5 space-y-1 text-foreground/80">
                <li>Designed and developed various types of websites for healthcare clients.</li>
                <li>Converted UI designs into responsive HTML/CSS implementations.</li>
                <li>Collaborated with design team to ensure pixel-perfect implementation.</li>
                <li><span className="font-semibold text-xs">Tech Stack:</span> HTML, CSS, JavaScript, Responsive Design</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-background border border-primary/10 rounded-lg p-6 shadow">
          <h2 className="text-xl font-bold border-b border-primary/20 pb-2 mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="font-semibold">BagShop E-commerce Web App</div>
              <div className="italic text-foreground/70">Node.js, MongoDB, Stripe</div>
              <div className="text-foreground/80">EJS-based cart, checkout, and payment system.</div>
            </div>
            <div>
              <div className="font-semibold">Ecommerce MiniTeleBot</div>
              <div className="italic text-foreground/70">TMA.js SDK, Node.js</div>
              <div className="text-foreground/80">Telegram bot for product browsing and in-chat orders.</div>
            </div>
            <div>
              <div className="font-semibold">GreenRoute – Sustainable Routing</div>
              <div className="italic text-foreground/70">Flask, React, Gemini AI</div>
              <div className="text-foreground/80">ML-based eco-friendly route planner using AI.</div>
            </div>
            <div>
              <div className="font-semibold">Real-Time Tracker</div>
              <div className="italic text-foreground/70">Node.js, Socket.io, Leaflet.js</div>
              <div className="text-foreground/80">WebSocket-based real-time location tracker with maps.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import { Menu, Home, Calendar, LayoutGrid, Terminal, PenTool, Rocket, Coffee, Box, Target, Sparkles } from 'lucide-react'
import './index.css'

const TopSection = () => (
  <>
    <div className="header">
      <div className="user-info">
        <div className="avatar">
          {/* Mengambil foto profile github articflap */}
          <img src="https://github.com/articflap.png" alt="Avatar" width="48" height="48" style={{borderRadius: '50%'}}/>
        </div>
        <div>
          <div className="greeting-small">Welcome back</div>
          <div className="name">Articflap</div>
        </div>
      </div>
      <div className="menu-btn">
        <Menu size={20} strokeWidth={2.5} />
      </div>
    </div>

    <div className="main-title">
      Welcome to<br/>my workspace.
    </div>
  </>
)

const SkillPills = () => {
  const skills = [
    { name: 'Code', icon: <Terminal size={26} />, colorClass: 'skill-1' },
    { name: 'Design', icon: <PenTool size={26} />, colorClass: 'skill-2' },
    { name: 'Deploy', icon: <Rocket size={26} />, colorClass: 'skill-3' },
    { name: 'Coffee', icon: <Coffee size={26} />, colorClass: 'skill-4' },
  ]
  return (
    <div className="skills-container">
      {skills.map((skill, i) => (
        <div key={i} className="skill-pill">
          <div className={`skill-icon ${skill.colorClass}`}>{skill.icon}</div>
          <div className="skill-name">{skill.name}</div>
        </div>
      ))}
    </div>
  )
}

const GridCards = () => (
  <div className="cards-grid">
    {/* Orange Card */}
    <a href="https://github.com/articflap" className="card card-orange">
      <div className="card-header">
        <Box size={20} /> Projects
      </div>
      <div className="chart-bars">
        <div className="bar" style={{height: '40%'}}></div>
        <div className="bar active" style={{height: '70%'}}></div>
        <div className="bar" style={{height: '50%'}}></div>
        <div className="bar active" style={{height: '90%'}}></div>
        <div className="bar" style={{height: '60%'}}></div>
        <div className="bar" style={{height: '80%'}}></div>
      </div>
      <div className="card-title">15+</div>
      <div className="card-subtitle">Completed</div>
    </a>

    {/* Purple Card */}
    <div className="card card-purple">
      <div className="card-header">
        <Target size={20} /> Focus Level
      </div>
      <div className="chart-bars">
        <div className="bar" style={{height: '30%'}}></div>
        <div className="bar" style={{height: '50%'}}></div>
        <div className="bar" style={{height: '40%'}}></div>
        <div className="bar" style={{height: '70%'}}></div>
        <div className="bar active" style={{height: '100%'}}></div>
      </div>
      <div className="card-title">High</div>
      <div className="card-subtitle">Learning AI</div>
    </div>

    {/* Green Card */}
    <div className="card card-green card-wide">
      <div className="card-header">
        <Sparkles size={20} /> Let's Connect
        <span style={{marginLeft: 'auto', opacity: 0.6}}>Available</span>
      </div>
      <div className="green-content">
        Ready to build something amazing together?
      </div>
      <div className="action-buttons">
        <a href="mailto:articflap@gmail.com" className="action-btn">Email Me</a>
        <a href="https://github.com/articflap" className="action-btn secondary">GitHub</a>
      </div>
    </div>
  </div>
)

const BottomNav = () => (
  <nav className="bottom-nav">
    <button className="nav-btn active">
      <Home className="nav-icon active" size={24} strokeWidth={2.5} />
      <div className="nav-dot"></div>
    </button>
    <button className="nav-btn">
      <LayoutGrid className="nav-icon" size={24} strokeWidth={2.5} />
      <div className="nav-dot"></div>
    </button>
    <button className="nav-btn">
      <Calendar className="nav-icon" size={24} strokeWidth={2.5} />
      <div className="nav-dot"></div>
    </button>
  </nav>
)

function App() {
  return (
    <div className="app-container">
      <div className="top-section">
        <TopSection />
        <SkillPills />
      </div>
      <GridCards />
      <BottomNav />
    </div>
  )
}

export default App

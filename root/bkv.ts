import React from 'react'
import { createRoot } from 'react-dom/client'

const resumeData = {
  name: 'Bhavani Krishna Veni (Sasi) Manchina',
  title: 'AI/ML Engineer | Data Enthusiast',
  location: 'United Kingdom / India',
  email: 'sasimanchina@gmail.com',
  phone: '+91 9553234023',
  linkedin: 'https://linkedin.com/in/manchina-bhavani-krishna-veni-62b6b0279',
  github: 'https://github.com/sasimanchina7',
  summary: `Seasoned Data Scientist and Machine Learning Engineer with 5+ years of experience building and deploying AI solutions at scale. Specialized in Python-based development, NLP using transformer models, and modern LLM systems (RAG, embeddings).`,
  skills: ['Python','TypeScript','React','Tailwind','Docker','Kubernetes','MLflow','Hugging Face','Databricks','Spark','FastAPI'],
  projects: [
    {
      title: 'Stock Purchase Web-App (AI/DL)',
      desc: 'End-to-end ML lifecycle for stock buy prediction, containerized with CI/CD and AKS deployment.',
      link: '#'
    },
    {
      title: 'RAG LLM App (Prototype)',
      desc: 'Built RAG apps with FAISS/Pinecone and Hugging Face + LangChain.',
      link: '#'
    }
  ]
}

function Header(){
  return (
    <header className="max-w-4xl mx-auto py-6 px-4 flex items-center justify-between">
      <div>
        <h1 className="text-xl font-bold">{resumeData.name.split(' ')[0]}</h1>
        <p className="text-sm text-slate-500">{resumeData.title}</p>
      </div>
      <nav className="space-x-4 text-sm">
        <a href="#projects" className="hover:underline">Projects</a>
        <a href="#about" className="hover:underline">About</a>
        <a href={resumeData.linkedin} target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
      </nav>
    </header>
  )
}

function Hero(){
  return (
    <section className="bg-white shadow-sm rounded-lg max-w-4xl mx-auto p-8 mt-6">
      <div className="flex gap-6 items-center">
        <img src="/profile.jpg" alt="profile" className="w-24 h-24 rounded-full object-cover" />
        <div>
          <h2 className="text-2xl font-extrabold">{resumeData.name}</h2>
          <p className="text-slate-600 mt-1">{resumeData.title}</p>
          <p className="mt-3 text-slate-700">{resumeData.summary}</p>
          <div className="mt-4 flex gap-3">
            <a href={resumeData.github} className="px-3 py-2 border rounded text-sm">GitHub</a>
            <a href={resumeData.linkedin} className="px-3 py-2 border rounded text-sm">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Projects(){
  return (
    <section id="projects" className="max-w-4xl mx-auto mt-6">
      <h3 className="text-lg font-semibold mb-4">Selected Projects</h3>
      <div className="grid gap-4">
        {resumeData.projects.map((p, i) => (
          <article key={i} className="bg-white p-4 rounded shadow-sm">
            <h4 className="font-bold">{p.title}</h4>
            <p className="text-sm text-slate-600 mt-1">{p.desc}</p>
            <a href={p.link} className="text-xs mt-2 inline-block">View</a>
          </article>
        ))}
      </div>
    </section>
  )
}

function About(){
  return (
    <section id="about" className="max-w-4xl mx-auto mt-6 bg-white p-6 rounded shadow-sm">
      <h3 className="font-semibold">About</h3>
      <p className="mt-2">{resumeData.summary}</p>
      <div className="mt-4">
        <h4 className="font-medium">Skills</h4>
        <div className="flex flex-wrap gap-2 mt-2">
          {resumeData.skills.map((s) => (
            <span key={s} className="text-xs px-2 py-1 border rounded">{s}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer(){
  return (
    <footer className="max-w-4xl mx-auto mt-8 text-sm text-slate-500 p-4">
      <p>© {new Date().getFullYear()} {resumeData.name.split(' ')[0]}. Built with ❤️ in TypeScript.</p>
    </footer>
  )
}

function App(){
  return (
    <div className="min-h-screen pb-8 bg-gradient-to-b from-indigo-50 via-white to-slate-100">
      <Header />
      <main className="px-4">
        <Hero />
        <Projects />
        <About />
        <section id="contact" className="max-w-4xl mx-auto mt-8 bg-white p-6 rounded shadow-sm">
          <h3 className="font-semibold">Contact Me</h3>
          <form action="https://formspree.io/f/yourFormID" method="POST" className="mt-4 space-y-4">
            <input type="text" name="name" placeholder="Your Name" required className="w-full border p-2 rounded" />
            <input type="email" name="email" placeholder="Your Email" required className="w-full border p-2 rounded" />
            <textarea name="message" placeholder="Your Message" rows={5} required className="w-full border p-2 rounded" />
            <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">Send</button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  )
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

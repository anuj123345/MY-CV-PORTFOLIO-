"use client";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    id: 1,
    title: "Solace — AI Support Platform",
    tag: "Full-Stack AI Engineering",
    tech: ["Flask", "NVIDIA NIM", "Supabase", "pgvector", "RAG", "NL-to-SQL"],
    image: "/projects/solace.png",
    link: "https://ai-ticket-router.vercel.app/",
    github: "https://github.com/anuj123345/ai-ticket-router"
  },
  {
    id: 2,
    title: "StackFind: Managed SaaS Stacks",
    tag: "SaaS Infrastructure",
    tech: ["Next.js", "Supabase", "Razorpay", "Tailwind CSS"],
    image: "/projects/stackfind.png",
    link: "https://stack-find.vercel.app/",
    github: "https://github.com/anuj123345/StackFind"
  },
  {
    id: 3,
    title: "Gmail and Email Automation",
    tag: "Workflow Design",
    tech: ["Python", "Google API", "OAuth2"],
    image: "/projects/gmail_automation.png",
    link: "https://github.com/anuj123345/Gmail_and_Email_Automation"
  },
  {
    id: 4,
    title: "Google Drive and Google Sheets",
    tag: "Data Architecture",
    tech: ["Google Apps Script", "JavaScript"],
    image: "/projects/drive_sheets.png",
    link: "https://github.com/anuj123345/Google-drive-Google-sheets"
  },
  {
    id: 5,
    title: "HR and Recruitment",
    tag: "Process Automation",
    tech: ["Make.com", "Airtable", "OpenAI"],
    image: "/projects/hr_recruitment.png",
    link: "https://github.com/anuj123345/HR-and-Recruitment-"
  },
  {
    id: 6,
    title: "Notion",
    tag: "Workspace Operations",
    tech: ["Notion API", "Node.js"],
    image: "/projects/notion_workspace.png",
    link: "https://github.com/anuj123345/Notion-Automation-"
  }
];

export default function Projects() {
  return (
    <section className="relative w-full min-h-screen bg-[#121212] py-24 md:py-32 px-6 md:px-12 pt-32 md:pt-40 z-20">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl md:text-5xl font-bold mb-12 md:mb-16 text-white text-center">Selected Work</h3>

        {/* Featured project — full width */}
        <a
          href={PROJECTS[0].link}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-full h-[360px] md:h-[480px] rounded-[32px] overflow-hidden cursor-pointer backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:shadow-[0_0_60px_rgba(115,103,240,0.15)] flex flex-col justify-end p-8 md:p-12 mb-6 md:mb-8 block"
        >
          <img src={PROJECTS[0].image} alt={PROJECTS[0].title} className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 group-hover:opacity-65 transition-all duration-500 group-hover:scale-105 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent pointer-events-none z-10" />

          {/* Featured badge */}
          <div className="absolute top-6 left-6 z-20 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-300 text-xs font-mono uppercase tracking-widest backdrop-blur-sm">
            Featured
          </div>

          <div className="relative z-20 w-full">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-[#a1a1aa] mb-2">{PROJECTS[0].tag}</p>
                <h4 className="text-3xl md:text-5xl font-medium text-white group-hover:translate-x-3 transition-transform duration-500 will-change-transform pr-4">{PROJECTS[0].title}</h4>
                <p className="text-gray-400 text-sm md:text-base mt-3 max-w-xl">
                  AI ticket routing + NL-to-SQL ops analytics + RAG onboarding assistant — all with human-in-the-loop review. Built on NVIDIA NIM, Flask, and Supabase pgvector.
                </p>
              </div>
              <div className="flex flex-col gap-3 shrink-0 ml-6">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/20 flex items-center justify-center bg-white/5 group-hover:bg-white group-hover:text-black transition-colors duration-500">
                  <ArrowUpRight className="w-6 h-6 md:w-7 md:h-7" />
                </div>
                {PROJECTS[0].github && (
                  <a
                    href={PROJECTS[0].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={e => e.stopPropagation()}
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/20 flex items-center justify-center bg-white/5 hover:bg-white/20 transition-colors duration-300 text-white/60 hover:text-white text-xs font-mono"
                    title="GitHub"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                  </a>
                )}
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              {PROJECTS[0].tech.map((t, i) => (
                <span key={i} className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-[10px] text-purple-300 backdrop-blur-sm">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </a>

        {/* Remaining projects — 2-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {PROJECTS.slice(1).map((proj) => (
            <a
              key={proj.id}
              href={proj.link}
              target={proj.link === "#" ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className="group relative h-[300px] md:h-[400px] rounded-[32px] overflow-hidden cursor-pointer backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] flex flex-col justify-end p-6 md:p-8 block"
            >
              <img src={proj.image} alt={proj.title} className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 group-hover:opacity-70 transition-all duration-500 group-hover:scale-105 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none z-10" />

              <div className="relative z-20 w-full">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-[#a1a1aa] mb-1">{proj.tag}</p>
                    <h4 className="text-2xl md:text-4xl font-medium text-white group-hover:translate-x-3 transition-transform duration-500 will-change-transform pr-4">{proj.title}</h4>
                  </div>
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/20 flex items-center justify-center bg-white/5 group-hover:bg-white group-hover:text-black transition-colors duration-500 shrink-0">
                    <ArrowUpRight className="w-6 h-6 md:w-7 md:h-7" />
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {proj.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-[10px] text-white/70 backdrop-blur-sm">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

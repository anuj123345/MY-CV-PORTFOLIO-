import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  { 
    id: 1, 
    title: "StackFind: Managed SaaS Stacks", 
    tag: "SaaS Infrastructure", 
    tech: ["Next.js", "Supabase", "Razorpay", "Tailwind CSS"],
    image: "/projects/stackfind.png", 
    link: "https://stack-find.vercel.app/",
    github: "https://github.com/anuj123345/StackFind"
  },
  { 
    id: 2, 
    title: "Gmail and Email Automation", 
    tag: "Workflow Design", 
    tech: ["Python", "Google API", "OAuth2"],
    image: "/projects/gmail_automation.png", 
    link: "https://github.com/anuj123345/Gmail_and_Email_Automation" 
  },
  { 
    id: 3, 
    title: "Google Drive and Google Sheets", 
    tag: "Data Architecture", 
    tech: ["Google Apps Script", "JavaScript"],
    image: "/projects/drive_sheets.png", 
    link: "https://github.com/anuj123345/Google-drive-Google-sheets" 
  },
  { 
    id: 4, 
    title: "HR and Recruitment", 
    tag: "Process Automation", 
    tech: ["Make.com", "Airtable", "OpenAI"],
    image: "/projects/hr_recruitment.png", 
    link: "https://github.com/anuj123345/HR-and-Recruitment-" 
  },
  { 
    id: 5, 
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {PROJECTS.map((proj) => (
            <a 
              key={proj.id} 
              href={proj.link}
              target={proj.link === "#" ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className="group relative h-[300px] md:h-[400px] rounded-[32px] overflow-hidden cursor-pointer backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] flex flex-col justify-end p-6 md:p-8 block"
            >
              {/* Background Image */}
              <img src={proj.image} alt={proj.title} className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 group-hover:opacity-70 transition-all duration-500 group-hover:scale-105 pointer-events-none" />

              {/* Overlay gradient */}
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
                
                {/* Tech Stack Tags */}
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

"use client";
import { motion, useScroll, useTransform, useSpring, Variants } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Code2, GraduationCap, Cpu, Layers } from "lucide-react";

const SUMMARY = "Python-focused Data and Generative AI Engineer with 3+ years of experience in government consulting, IT services, and analytics. Proficient in building production-ready AI agents, LLM integrations, RAG architectures, and REST APIs. Experienced in end-to-end deployment, monitoring, and orchestration of AI systems using Claude and OpenAI-compatible models. Strong background in data pipelines, analytics, and enterprise reporting.";

const SKILLS = [
  { category: "Programming & Backend", items: ["Python", "REST APIs", "FastAPI", "Pandas", "NumPy"] },
  { category: "Generative AI & LLMs", items: ["Claude", "OpenAI", "Prompt Engineering", "Agentic Workflows", "AI Agent Development", "MCP-based Agents", "Custom GPT/Tool Dev"] },
  { category: "GenAI Frameworks", items: ["RAG Architecture", "Embeddings", "Tokenization", "LangChain-style", "Antigravity"] },
  { category: "Data & Analytics", items: ["Power BI", "DAX", "Power Query", "Data Modeling", "KPI Dashboards", "Tableau"] },
  { category: "Tools & Platforms", items: ["Git", "JIRA", "Selenium", "Windows Task Scheduler", "Excel (Advanced)"] },
];

const EXPERIENCE = [
  {
    role: "MIS Consultant – Data and Analytics",
    company: "Odisha School Education Program Authority (OSEPA) – World Bank Project | Bhubaneswar",
    dates: "Aug 2024 – Oct 2025",
    points: [
      "Developed state- and district-level analytics dashboards for the World Bank-funded STARS education program, enabling data-driven policy decisions across 30+ districts.",
      "Built end-to-end data pipelines using Python (Pandas, NumPy) and Power BI including ETL, validation, and reconciliation processes.",
      "Designed decision-support KPI frameworks to identify high-risk schools and operational inefficiencies, improving intervention targeting.",
      "Integrated AI-assisted analysis workflows to reduce reporting turnaround time and improve insight accuracy.",
      "Collaborated directly with senior government stakeholders to translate education policy objectives into measurable data solutions."
    ]
  },
  {
    role: "Senior Systems Executive",
    company: "Cognizant | Kolkata",
    dates: "Jul 2022 – Sep 2023",
    points: [
      "Analyzed ServiceNow ticket data using Python (Pandas, Matplotlib) to identify recurring incidents and resolution bottlenecks across enterprise IT infrastructure.",
      "Built classification and trend analysis models for incident pattern recognition, improving change management decisions.",
      "Automated reporting workflows, contributing to measurable improvements in first-level resolution efficiency.",
      "Operated in structured enterprise IT environments with strict compliance and process standards."
    ]
  },
  {
    role: "Ad Operations Executive",
    company: "MediaMint | Remote",
    dates: "Jan 2022 – Jun 2022",
    points: [
      "Managed digital ad delivery, pacing optimization, and discrepancy analysis across multiple advertiser accounts.",
      "Built Excel-based dashboards for CTR, impressions, and revenue reconciliation to support analytics-driven reporting.",
      "Contributed to reporting automation initiatives that improved operational efficiency."
    ]
  }
];

const AI_EXPERIENCE = [
  "Designed and deployed autonomous AI agents using Antigravity integrated with Claude LLM, supporting task planning, tool invocation, memory handling, and retry logic.",
  "Developed FastAPI-based micro services to expose AI agents as reusable, production-ready REST APIs.",
  "Implemented prompt optimization, safety constraints, and fallback mechanisms to ensure stable real-world agent behavior.",
  "Created no-code and low-code AI workflows for content automation, research generation, and operations use cases.",
  "Built AI writing style replication systems using Content DNA Analysis for personalized content generation."
];

const PROJECTS = [
  "Automated UDISE+ Daily Data Extraction and Reporting System – Python-based scheduler automating daily data.",
  "Selenium-Driven District-Level Data Automation – Web scraping and automation pipeline.",
  "Automated Excel to Power BI Pipeline for State Education Data – End-to-end automated data ingestion.",
  "Autonomous AI Research and Content Generation Agent – LLM-powered agent for automated research summarization."
];

const EDUCATION = [
  { degree: "Bachelor of Technology – Electrical and Electronics", school: "ITER, SOA University, Bhubaneswar", year: "2021" }
];

const CERTS = [
  "Generative AI and Prompt Engineering – Be10X / Outskill",
  "Python and Data Analytics – Nimble Tech",
  "Python 101 – IBM CognitiveClass"
];

// Reusable animated container with staggered children
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

const FadeInContainer = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const progressHeight = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const headerOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const headerY = useTransform(scrollYProgress, [0, 0.1], [50, 0]);

  return (
    <section ref={containerRef} className="relative w-full bg-[#0a0a0a] text-white py-32 px-6 md:px-12 z-20 overflow-hidden">
      
      {/* Background graphic elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-900/10 blur-[120px]" />
        <div className="absolute bottom-[10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-purple-900/10 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row gap-16">
        
        {/* Sticky Left Sidebar (Navigation/Title) */}
        <div className="md:w-1/3 shrink-0">
          <motion.div 
            style={{ opacity: headerOpacity, y: headerY }}
            className="sticky top-40"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Experience <br/><span className="text-gray-500 font-light">& Expertise</span></h2>
            <p className="text-gray-400 leading-relaxed mb-8 border-l-2 border-white/20 pl-4">{SUMMARY}</p>
            
            <div className="hidden md:flex flex-col gap-4 text-sm font-mono text-gray-500 uppercase tracking-widest mt-12">
              <span className="flex items-center gap-3"><Code2 size={16} /> Technical Skills</span>
              <span className="flex items-center gap-3"><Briefcase size={16} /> Professional Exp</span>
              <span className="flex items-center gap-3"><Cpu size={16} /> AI Engineering</span>
              <span className="flex items-center gap-3"><GraduationCap size={16} /> Education</span>
            </div>
          </motion.div>
        </div>

        {/* Scrolling Right Content */}
        <div className="md:w-2/3 flex flex-col gap-32 pb-32 pt-8">
          
          {/* Section: Technical Skills */}
          <FadeInContainer>
            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10"><Code2 className="text-blue-400" /></div>
              <h3 className="text-3xl font-medium">Core Technical Skills</h3>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {SKILLS.map((skill, i) => (
                <motion.div variants={itemVariants} key={i} className="group p-6 rounded-[24px] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors hover:border-white/20">
                  <h4 className="text-gray-400 text-sm mb-4 font-mono uppercase tracking-wider">{skill.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, j) => (
                      <span key={j} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-gray-200 hover:bg-white/10 transition-colors cursor-default">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </FadeInContainer>

          {/* Section: Professional Experience */}
          <FadeInContainer>
            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-12">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10"><Briefcase className="text-purple-400" /></div>
              <h3 className="text-3xl font-medium">Professional Experience</h3>
            </motion.div>
            
            <motion.div variants={itemVariants} className="relative border-l border-white/10 pl-8 md:pl-12 flex flex-col gap-16">
              {/* Animated Timeline Line */}
              <motion.div 
                className="absolute top-0 left-0 w-[1px] bg-gradient-to-b from-purple-500 to-blue-500 origin-top"
                style={{ scaleY: progressHeight }}
              />

              {EXPERIENCE.map((exp, i) => (
                <div key={i} className="relative group transition-all duration-300 hover:translate-x-2">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[37px] md:-left-[53px] top-1.5 w-3 h-3 rounded-full bg-[#0a0a0a] border-2 border-gray-400 z-10 group-hover:bg-purple-500 group-hover:border-purple-500 transition-colors duration-300 shadow-[0_0_10px_rgba(168,85,247,0)] group-hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
                  
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2 gap-2">
                    <h4 className="text-2xl font-semibold text-white">{exp.role}</h4>
                    <span className="text-gray-400 font-mono text-sm shrink-0 whitespace-nowrap bg-white/5 px-3 py-1 rounded-full">{exp.dates}</span>
                  </div>
                  <h5 className="text-lg text-blue-400 mb-6">{exp.company}</h5>
                  <ul className="flex flex-col gap-4">
                    {exp.points.map((point, j) => (
                      <li key={j} className="text-gray-300 leading-relaxed flex gap-3">
                        <span className="text-white/20 mt-1.5 shrink-0">▹</span>
                        <span className="opacity-80 group-hover:opacity-100 transition-opacity">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          </FadeInContainer>

          {/* Section: AI Agent Engineering */}
          <FadeInContainer>
            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10"><Cpu className="text-emerald-400" /></div>
              <h3 className="text-3xl font-medium">AI Agent Engineering</h3>
            </motion.div>
            <motion.div variants={itemVariants} className="p-8 rounded-[32px] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 hover:border-emerald-500/30 transition-colors duration-500 group">
              <ul className="flex flex-col gap-5">
                {AI_EXPERIENCE.map((point, i) => (
                  <motion.li variants={itemVariants} key={i} className="text-gray-300 leading-relaxed flex gap-4">
                    <span className="text-emerald-400/50 mt-1 shadow-[0_0_10px_rgba(52,211,153,0.3)] h-2 w-2 rounded-full shrink-0 group-hover:bg-emerald-400 transition-colors duration-300" />
                    <span className="opacity-90">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </FadeInContainer>

          {/* Section: Key Projects Grid */}
          <FadeInContainer>
            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10"><Layers className="text-orange-400" /></div>
              <h3 className="text-3xl font-medium">Data & AI Projects</h3>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {PROJECTS.map((proj, i) => (
                <motion.div variants={itemVariants} key={i} className="p-6 rounded-[24px] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-orange-500/30 transition-all duration-300 flex items-start gap-4 hover:-translate-y-1">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10 text-gray-400 text-sm group-hover:bg-orange-500 group-hover:text-white transition-colors">{i+1}</div>
                  <p className="text-gray-300 text-sm leading-relaxed">{proj}</p>
                </motion.div>
              ))}
            </div>
          </FadeInContainer>

          {/* Section: Education & Certifications */}
          <FadeInContainer>
            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10"><GraduationCap className="text-pink-400" /></div>
              <h3 className="text-3xl font-medium">Education & Training</h3>
            </motion.div>
            <div className="flex flex-col md:flex-row gap-8">
              <motion.div variants={itemVariants} className="flex-1 p-8 rounded-[32px] bg-white/[0.02] border border-white/5 hover:border-pink-500/30 transition-colors">
                <h4 className="text-gray-400 text-sm mb-6 font-mono uppercase tracking-wider">Academics</h4>
                {EDUCATION.map((edu, i) => (
                  <div key={i}>
                    <h5 className="text-lg text-white font-medium mb-1">{edu.degree}</h5>
                    <p className="text-gray-400 text-sm mb-3">{edu.school} • {edu.year}</p>
                  </div>
                ))}
              </motion.div>
              <motion.div variants={itemVariants} className="flex-1 p-8 rounded-[32px] bg-white/[0.02] border border-white/5 hover:border-pink-500/30 transition-colors">
                <h4 className="text-gray-400 text-sm mb-6 font-mono uppercase tracking-wider">Certifications</h4>
                <ul className="flex flex-col gap-3">
                  {CERTS.map((cert, i) => (
                    <li key={i} className="text-gray-300 text-sm flex gap-3 items-center hover:text-white transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                      {cert}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </FadeInContainer>

        </div>
      </div>
    </section>
  );
}

import ScrollyCanvas from "@/components/ScrollyCanvas"
import Projects from "@/components/Projects"
import Experience from "@/components/Experience"

export default function Home() {
  return (
    <main className="w-full relative">
      <ScrollyCanvas />
      <Projects />
      <Experience />
    </main>
  )
}


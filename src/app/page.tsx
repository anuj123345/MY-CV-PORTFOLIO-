import ScrollyCanvas from "@/components/ScrollyCanvas"
import Projects from "@/components/Projects"
import Experience from "@/components/Experience"
import DeviceWrapper from "@/components/DeviceWrapper"

export default function Home() {
  return (
    <main className="w-full relative">
      <DeviceWrapper>
        <ScrollyCanvas />
        <Projects />
        <Experience />
      </DeviceWrapper>
    </main>
  )
}


import Contact from "@/components/contact";
import Header from "@/components/header";
import Journey from "@/components/journey/journey";
import Navbar from "@/components/navbar/navbar";
import Projects from "@/components/projects/projects";
import Tools from "@/components/tools/tools";

export default function Home() {
  return (
    <div className="px-8 py-6 space-y-6 md:py-8 md:px-16 lg:px-28">
      <Navbar />
      <Header />
      <Journey />
      <Projects />
      <Tools />
      <Contact />
    </div>
  );
}

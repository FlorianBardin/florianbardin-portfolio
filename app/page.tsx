import Header from "./header";
import Journey from "./journey";
import Navbar from "./navbar";
import Projects from "./projects";

export default function Home() {
  return (
    <div className="px-8 py-6 space-y-6 md:py-8 sm:px-10 md:px-16 lg:px-28">
      <Navbar />
      <Header />
      <Journey />
      <Projects />
    </div>
  );
}

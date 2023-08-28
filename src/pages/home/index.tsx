import AboutMe from "../../components/AboutMe";
import Contact from "../../components/Contact";
import Education from "../../components/Education";
import Experience from "../../components/Experience";
import Skills from "../../components/Skills";

function Home() {
  return (
    <>
    <main className="snap-y snap-mandatory relative w-full h-screen overflow-y-auto overflow-x-hidden scroll-smooth">

      <div id="AboutMe" className="snap-center">
        <AboutMe/>
      </div>
      <div id="Experience" className="snap-center">
        <Experience/>
      </div>
      <div id="Education" className="snap-center">
        <Education/>
      </div>
      <div id="Skills" className="snap-center">
        <Skills/>
      </div>
      <div id="Contact" className="snap-center">
        <Contact/>
      </div>


    </main>
    </>

  );
}

export default Home;

import AboutMe from "../../components/AboutMe";
import Contact from "../../components/Contact";
import Education from "../../components/Education";
import Experience from "../../components/Experience";
import Skills from "../../components/Skills";
import "./index.css"

function Home() {
  return (
    <>
    <main className="snap-y snap-mandatory relative w-full h-screen overflow-y-auto overflow-x-hidden scroll-smooth">

      <div id="AboutMe" className="bg-black snap-center z-30 relative h-full flex flex-col">
        <div className="mt-40 grid grid-cols-2">
          <div className="col-span-1 text-center p-5">
            <img src="/perfil_picture.png" className="responsive rounded-full" alt="my+p"/>
          </div>
          {/* <div className="w-max text-white">
            <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-white font-bold">I'm Renzo Fattorini</h1>
            <p className="text-xl">Full Stack Developer</p>
          </div> */}
          <div className=" col-span-1 text-start text-center text-white p-5">
            <p className="typewriter text-4xl">I'm Renzo Fattorini</p>
            <p className="text-xl">Full Stack Developer</p>
            <br />
            <p>Me encanta jugar al futbol, hacer deporte y programar.</p>
          </div>
        </div>
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

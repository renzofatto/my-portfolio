import Section from "./Section"

function AboutMe() {
  return(
    <Section
      title='About Me'
      subtitle='Im Renzo Fattorini'
      color="white"
      backgroundColor='black'
      footerContent={
        <div slot="footer">
          <a className="border-[2px] border-white bg-white/5 backdrop-blur-xl text-sm rounded font-medium text-white px-12 py-2 inline-block hover:bg-white hover:text-black transition-colors" href="#">
            Prueba de conducción
          </a>
      </div>
      }
    />
  )
}

export default AboutMe;
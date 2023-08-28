import Section from "./Section"

function Skills() {
  return(
    <Section
      title='Skills'
      backgroundColor="black"
      subtitle='I know a lot of technologies'
      color="white"
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

export default Skills;
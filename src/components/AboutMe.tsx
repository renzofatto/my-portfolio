import Section from "./Section"

function AboutMe() {
  return(
    <Section
      title='About Me'
      subtitle={
        <>
          <p>Hello, I am Renzo Fattorini. I was born on June 10, 2000, in Uruguay.</p>
          <p>Currently, I'm pursuing a Bachelor's degree in Computer Science.</p>
          <p>Apart from my passion for technology and programming, I have a keen interest in soccer, travel, and enjoying a good mate. Welcome to my portfolio</p>
        </>
      }
    />
  )
}

export default AboutMe;
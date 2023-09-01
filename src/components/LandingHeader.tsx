import { useEffect, useState } from "react";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";

const LandingHeader = () => {

  const [again, setAgain] = useState(true);
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    console.log("Landing Header");
    const listItem = document.querySelectorAll("#landing-header li");
    const menuBackDrop = document.querySelector("#menu-backdrop") as HTMLElement;

    if(again) {
      setAgain(false);
    }

    listItem.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        const { left, top, width, height } = item.getBoundingClientRect();
        menuBackDrop.style.setProperty("--left", `${left}px`);
        menuBackDrop.style.setProperty("--top", `${top}px`);
        menuBackDrop.style.setProperty("--width", `${width}px`);
        menuBackDrop.style.setProperty("--height", `${height}px`);
        menuBackDrop.style.opacity = "1";
        menuBackDrop.style.visibility = "visible";
      });

      item.addEventListener("mouseleave", () => {
        menuBackDrop.style.visibility = "hidden";
        menuBackDrop.style.opacity = "0";
      });
    });

    const headerEl = document.querySelector("#landing-header") as HTMLElement;

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.9,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log("actualiza");
        const { isIntersecting } = entry;
        if (isIntersecting) {
          const color = entry.target.getAttribute('data-header-color');
          console.log(color);
          if (color) {
            headerEl.style.color = color;
          }
        }
      });
    }, observerOptions);

    const sectionsElements = document.querySelectorAll(".landing-section");
    sectionsElements.forEach((section) => observer.observe(section));

    return () => {
      listItem.forEach((item) => {
        item.removeEventListener("mouseenter", () => {});
        item.removeEventListener("mouseleave", () => {});
      });
      observer.disconnect();
    };
  }, [again]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header
        id="landing-header"
        className="py-3 px-10 flex items-center fixed top-0 w-full justify-between z-40 text-current"
      >
        <div className="flex flex-grow basis-0">
          {/* <Logo/> */}
        </div>

        { showHeader && <nav>
          <ul className="flex text-sm [&>li>a]:transition-colors [&>li>a]:duration-500 [&>li>a]:text-current [&>li>a]:font-medium [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2">
            <li><a href="#AboutMe">About Me</a></li>
            <li><a href="#Experience">Experience</a></li>
            <li><a href="#Education">Education</a></li>
            <li><a href="#Skills">Skills</a></li>
            <li><a href="#Contact">Contact</a></li>
          </ul>
        </nav>
        }

        <nav className="flex flex-grow justify-end basis-0">
          <ul className="flex text-sm [&>li>a]:transition-colors [&>li>a]:duration-500 [&>li>a]:text-current [&>li>a]:font-medium [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2">
            <li><a href="https://github.com/renzofatto" target="_blank" rel="noopener noreferrer"><BsGithub/></a></li>
            <li><a href="https://www.linkedin.com/in/renzo-fattorini-paracampo-6821ba1a6/" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a></li>
            <li><a href="https://www.instagram.com/renzofattorini/" target="_blank" rel="noopener noreferrer"><BsInstagram/></a></li>
          </ul>
        </nav>

        <div
          id="menu-backdrop"
          className={`absolute bg-white/5 backdrop-blur-lg rounded translate-x-[var(--left)] translate-y-[var(--top)] left-0 top-0 w-[var(--width)] h-[var(--height)] transition-all duration-500 ease-in-out opacity-0 -z-10`}
        />

      </header>

    </>
  );
};

export default LandingHeader;

import React, { ReactNode } from 'react';

const Section: React.FC<{ title: string, subtitle: string, footerContent?: ReactNode, backgroundContent?: ReactNode }> = ({ title, subtitle, footerContent, backgroundContent }) => {

  return (
    <section
      className={`landing-section h-screen w-screen text-center overflow-hidden relative`}
      data-header-color="white"
    >
      <div className="z-30 relative h-full flex flex-col">
        <header>
          <h2 className={`text-white pt-40 text-[40px] font-medium`}>
            {title}
          </h2>
          <p className={`text-white text-sm`}>{subtitle}</p>
        </header>
        <footer className="flex flex-col flex-grow justify-end pb-20">
          {footerContent}
        </footer>
      </div>
      <div className={`absolute bg-black top-0 bottom-0 h-full w-full z-10`}>
        {backgroundContent}
      </div>
    </section>
  );
};

export default Section;

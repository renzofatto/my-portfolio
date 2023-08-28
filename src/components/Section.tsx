import React, { ReactNode } from 'react';

const Section: React.FC<{ backgroundColor: string, color: string, title: string, subtitle: string, footerContent?: ReactNode, backgroundContent?: ReactNode }> = ({ backgroundColor, color, title, subtitle, footerContent, backgroundContent }) => {
  const textColor = `text-${color}`;
  const background = `bg-${backgroundColor}`;

  return (
    <section
      className={`landing-section ${background} h-screen w-screen text-center overflow-hidden relative`}
      data-header-color={color}
    >
      <div className="z-30 relative h-full flex flex-col">
        <header>
          <h2 className={`${textColor} pt-40 text-[40px] font-medium`}>
            {title}
          </h2>
          <p className={`${textColor} text-sm`}>{subtitle}</p>
        </header>
        <footer className="flex flex-col flex-grow justify-end pb-20">
          {footerContent}
        </footer>
      </div>
      <div className="absolute top-0 bottom-0 h-full w-full z-10">
        {backgroundContent}
      </div>
    </section>
  );
};

export default Section;

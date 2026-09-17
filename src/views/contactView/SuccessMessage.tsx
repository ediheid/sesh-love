import { NavLink } from 'react-router-dom';
import Image from '../../primitives/image/Image';
import pigeon from '../../assets/images/pigeon.webp';
import Svg from '../../primitives/svgs/Svgs';
import sky from '../../assets/images/sky.webp';

const SuccessMessage = () => {
  return (
    <div className="relative flex min-h-full flex-1 flex-col overflow-hidden md:min-h-[60vh] xl:min-h-[70vh]">
      {/* BG */}
      <Image
        src={sky}
        width={1920}
        height={1080}
        alt="Soft pastel clouds against a pink and blue sky, photo by Eberhard Grossgasteiger via Pexels"
        variant="default"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="relative z-10 flex flex-1 flex-col px-18 pt-18">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* TEXT */}
          <div className="flex h-full flex-col pt-12">
            <p className="text-card-headings pb-3 text-lg font-(--font-bold) md:text-xl">
              Your message is on its way!
            </p>

            <div className="mt-auto w-fit max-w-lg">
              <p className="text-card-headings font-(--font-bold) tracking-wide">
                Meanwhile, take a look around or keep up to date with news &
                upcoming events via
              </p>

              <a
                href="https://www.eventbrite.com.au/o/sesh-32151762855"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Eventbrite"
                className="inline-block"
              >
                <Svg
                  name="eventbriteText"
                  className="text-icon hover:text-eventbrite focus:text-eventbrite mt-3 transition-colors"
                  decorative
                />
              </a>
            </div>
          </div>

          {/* PIGEON */}
          <div className="relative flex justify-center md:justify-end">
            <Image
              src={pigeon}
              width={500}
              height={500}
              alt="decorative pigeon illustration"
              variant="default"
              className="load-in h-auto w-full max-w-none object-contain md:mr-[-20%] md:w-[140%]"
            />
          </div>
        </div>

        {/* FOOTER */}
        <footer className="-mx-18 mt-auto flex justify-end">
          <div className="border-card-border border-t-2 border-l-2">
            <NavLink
              to="/"
              className="text-surface hover:text-interactive-hover focus:text-submit-button-hover-text bg-primary hover:bg-surface focus:bg-surface block px-12 py-2 font-(--font-bold) tracking-wide transition-colors"
            >
              home
            </NavLink>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default SuccessMessage;

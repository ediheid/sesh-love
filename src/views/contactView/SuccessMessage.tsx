import { NavLink } from 'react-router-dom';
import Image from '../../primitives/image/Image';
import pigeon from '../../assets/images/pigeon.webp';

const SuccessMessage = () => {
  return (
    <div className="flex h-full flex-col">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          {/* // todo: Add fun copy for placeholders */}
          <h2 className="text-card-headings text-header-nav-sm md:text-header-nav-lg mb-3 font-(--font-bold)">
            message sent
          </h2>
          <p className="pb-3">Your message is on its way!</p>
          <p className="pb-3">I'll get back to you as soon as possible.</p>
          <p className="pb-4">Have you spotted all the Janes?</p>
          <h3 className="text-card-headings font-(--font-bold) tracking-wide">
            Meanwhile, check us out here..{' '}
          </h3>
          <div>Placeholder for links (eventbrite and instagram)</div>
        </div>

        {/* PIGEON */}
        <div className="flex justify-center md:justify-end">
          <Image
            src={pigeon}
            width={500}
            height={500}
            alt="decorative pigeon illustration"
            variant="default"
            className="load-in h-auto w-full max-w-125"
          />
        </div>
      </div>

      {/* FOOTER */}
      <div className="-mx-18 mt-auto flex justify-end">
        <div className="border-card-border border-t-2 border-l-2">
          <NavLink
            to="/"
            className="text-surface hover:text-interactive-hover bg-primary hover:bg-surface duration-fast ease-standard block px-12 py-2 font-(--font-bold) tracking-wide transition-colors"
          >
            home
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SuccessMessage;

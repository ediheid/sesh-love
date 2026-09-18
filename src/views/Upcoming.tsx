import { NavLink } from 'react-router-dom';
import Image from '../primitives/image/Image';
import upcoming from '../assets/images/upcoming.webp';

const Upcoming = () => {
  return (
    <section className="flex min-h-screen justify-center">
      <div className="border-card-border bg-card-background m-4 flex h-full flex-col border-2 px-4 pt-8 pb-10 sm:m-8 sm:px-8 md:m-12 md:px-12 lg:m-16 lg:px-18 xl:min-w-300">
        <div className="flex flex-col items-center justify-center">
          <div className="overflow-hidden">
            <Image
              src={upcoming}
              width={180}
              height={180}
              alt="A Chihuahua wearing pink glitter curlers, a rhinestone necklace, and long eyelashes."
              variant="default"
              className="load-in object-cover"
            />
          </div>

          <h2 className="text-card-headings text-header-nav-sm md:text-header-nav-lg mt-2 mb-4 font-(--font-bold)">
            upcoming events
          </h2>
        </div>

        <div className="mx-auto w-full max-w-180">
          <p className="mb-2 leading-relaxed">
            Keep up to date with future workshops and training via eventbrite.
          </p>

          <p>
            You can also reach out to me directly via the contact form if you
            have any questions or would like to discuss a bespoke workshop or
            training for your team.
          </p>

          <footer className="mt-8 flex max-w-180 flex-wrap justify-between gap-4 lg:flex-row">
            <a
              href="https://www.eventbrite.com.au/o/sesh-32151762855"
              target="_blank"
              rel="noreferrer noopener"
              className="bg-nav-link hover:bg-nav-link-hover focus:bg-nav-link-hover text-nav-link-text hover:text-interactive-hover focus:text-interactive-hover text-menu-nav-sm md:text-menu-nav-md lg:text-menu-nav-md duration-fast ease-standard flex w-full items-center justify-center py-2 font-(--font-semibold) transition-colors sm:py-1 lg:w-[calc(50%-0.5rem)] lg:py-1"
            >
              Eventbrite
            </a>

            <NavLink
              to="/contact"
              className="bg-nav-link hover:bg-nav-link-hover focus:bg-nav-link-hover text-nav-link-text hover:text-interactive-hover focus:text-interactive-hover text-menu-nav-sm md:text-menu-nav-md lg:text-menu-nav-md duration-fast ease-standard flex w-full items-center justify-center py-2 font-(--font-semibold) transition-colors sm:py-1 lg:w-[calc(50%-0.5rem)] lg:py-1"
            >
              Contact
            </NavLink>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default Upcoming;

import Svg from '../../primitives/svgs/Svgs';

const MenuFooter = () => {
  return (
    <footer className="pt-10">
      <div className="flex justify-center">
        <a
          href="https://www.eventbrite.com.au/o/sesh-32151762855"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Eventbrite link"
        >
          <Svg
            name="eventbriteText"
            className="text-icon hover:text-eventbrite transition-colors"
            decorative
          />
        </a>
      </div>

      <div className="text-md flex justify-between px-10 pt-15 pb-5 font-(--font-bold)">
        <span>
          Website Designed & Developed by{' '}
          <a
            href="https://edithsdev.com"
            target="_blank"
            rel="noreferrer noopener"
            className="text-link hover:text-link-hover transition-colors"
          >
            edithsdev
          </a>
        </span>

        <span>© {new Date().getFullYear()} Sesh</span>
      </div>
    </footer>
  );
};

export default MenuFooter;

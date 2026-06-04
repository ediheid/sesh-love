const MenuFooter = () => {
  return (
    <footer className="text-md flex justify-between p-6 font-(--font-bold)">
      <span>
        Designed & Developed by{' '}
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
    </footer>
  );
};

export default MenuFooter;

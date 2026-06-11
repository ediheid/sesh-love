type Props = {
  navOpen: boolean;
  children: React.ReactNode;
};

// const Panel = ({ navOpen, children }: Props) => {
//   return (
//     <aside
//       className={`bg-primary duration-slow ease-standard absolute top-0 right-0 flex h-full w-full flex-col transition-transform will-change-transform lg:w-1/2 ${
//         navOpen ? 'translate-x-0' : 'translate-x-[101%]'
//       }`}
//     >
//       {children}
//     </aside>
//   );
// };

const Panel = ({ navOpen, children }: Props) => {
  return (
    <aside
      className={`bg-primary duration-slow ease-standard absolute top-0 right-0 flex h-full w-full flex-col overflow-x-hidden transition-transform will-change-transform lg:w-1/2 ${
        navOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {children}
    </aside>
  );
};

export default Panel;

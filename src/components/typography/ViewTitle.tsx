type ViewTitleProps = {
  title: React.ReactNode;
};

const ViewTitle = ({ title }: ViewTitleProps) => {
  return <h1 className="view-title">{title}</h1>;
};

export default ViewTitle;

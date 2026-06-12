const Card = ({ children }: { children: React.ReactNode }) => {
  return <div className="border-primary border bg-white p-4">{children}</div>;
};

// todo: - Add props for title, image, who's it for, skill level, etc. instead of 'children'
// todo: Add card data to a separate file and map over it to create multiple cards

export default Card;

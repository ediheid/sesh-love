import Card from '../components/ui/card/Card';
import { workshops } from '../content/workshops';

const WorkshopsView = () => {
  return (
    <section className="view-section-margins">
      <div className="grid gap-6 md:grid-cols-2">
        {workshops.map((workshop) => (
          <Card key={workshop.title} {...workshop} />
        ))}
      </div>
    </section>
  );
};

export default WorkshopsView;

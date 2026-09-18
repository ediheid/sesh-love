import Card from '../components/ui/card/Card';
import { trainings } from '../content/tranings';

const TrainingView = () => {
  return (
    <section className="view-section-margins">
      <div className="grid gap-6 md:grid-cols-2">
        {trainings.map((training) => (
          <Card key={training.title} {...training} />
        ))}
      </div>
    </section>
  );
};

export default TrainingView;

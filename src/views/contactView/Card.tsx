import Form from './Form';
import Image from '../../primitives/image/Image';
import stamp from '../../assets/images/stamp.webp';

const Card = () => {
  return (
    <div className="border-card-border bg-card-background relative flex h-full w-[80vw] flex-col border-2 px-18 pt-4">
      <Image
        src={stamp}
        width={100}
        height={100}
        alt="decorative stamp drawing with three red roses"
        variant="default"
        className="load-in absolute top-4 right-4 h-auto w-[clamp(50px,10vw,100px)]"
      />

      <h1 className="text-card-headings text-header-nav-sm md:text-header-nav-lg mb-3 font-(--font-bold)">
        get in touch
      </h1>

      <Form />
    </div>
  );
};

export default Card;

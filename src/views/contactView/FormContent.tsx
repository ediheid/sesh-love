import Form from './Form';
import LoadIn from '../../components/ui/animation/LoadIn';
import Image from '../../primitives/image/Image';
import stamp from '../../assets/images/stamp.webp';

type FormContentProps = {
  onSuccess: () => void;
};

const FormContent = ({ onSuccess }: FormContentProps) => {
  return (
    <div className="pb-18">
      <LoadIn className="absolute top-6 right-5">
        <Image
          src={stamp}
          width={100}
          height={100}
          alt="decorative stamp drawing with three red roses"
          variant="default"
          className="h-auto w-[clamp(50px,10vw,100px)]"
        />
      </LoadIn>

      <h2 className="text-card-headings text-header-nav-sm md:text-header-nav-lg mb-3 font-(--font-bold)">
        get in touch
      </h2>

      <p className="text-card-headings pb-2 text-sm">
        * all fields are required
      </p>

      <Form onSuccess={onSuccess} />
    </div>
  );
};
export default FormContent;

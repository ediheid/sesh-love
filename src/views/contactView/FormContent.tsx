import Form from './Form';
import Image from '../../primitives/image/Image';
import stamp from '../../assets/images/stamp.webp';

type FormContentProps = {
  onSuccess: () => void;
};

// const FormContent = () => {
//   return (
//     <>
//       <Image
//         src={stamp}
//         width={100}
//         height={100}
//         alt="decorative stamp drawing with three red roses"
//         variant="default"
//         className="load-in absolute top-6 right-5 h-auto w-[clamp(50px,10vw,100px)]"
//       />

//       <h1 className="text-card-headings text-header-nav-sm md:text-header-nav-lg mb-3 font-(--font-bold)">
//         get in touch
//       </h1>

//       <p className="text-card-headings pb-2 text-sm">
//         * all fields are required
//       </p>

//       <Form />
//     </>
//   );
// };

const FormContent = ({ onSuccess }: FormContentProps) => {
  return (
    <>
      <Image
        src={stamp}
        width={100}
        height={100}
        alt="decorative stamp drawing with three red roses"
        variant="default"
        className="load-in absolute top-6 right-5 h-auto w-[clamp(50px,10vw,100px)]"
      />

      <h1 className="text-card-headings text-header-nav-sm md:text-header-nav-lg mb-3 font-(--font-bold)">
        get in touch
      </h1>

      <p className="text-card-headings pb-2 text-sm">
        * all fields are required
      </p>

      <Form onSuccess={onSuccess} />
    </>
  );
};
export default FormContent;

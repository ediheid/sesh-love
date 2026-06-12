import Image from '../../../primitives/image/Image';

interface CardProps {
  title: string;
  imageSrc: string;
  altText: string;
  description: string;
  whoFor: string;
  skillLevel: string;
  imageClassName?: string;
}

const Card = ({
  title,
  imageSrc,
  altText,
  description,
  whoFor,
  skillLevel,
  imageClassName,
}: CardProps) => {
  return (
    // todo: Add alt text for images in datya files (workshops and trainings) and pass it to Card component
    // todo: tidy up anmd break this down into multiple compoinents if needed

    <div className="border-card-border bg-card-background flex h-full flex-col border-2 px-18 pt-4">
      {/* CONTENT */}
      <div className="flex flex-col items-center justify-center">
        <div className="overflow-hidden">
          <Image
            src={imageSrc}
            width={200}
            height={200}
            alt={altText}
            variant="default"
            className={`load-in object-cover ${imageClassName ?? ''}`}
          />
        </div>

        <h2 className="text-card-headings text-header-nav-sm md:text-header-nav-lg mb-3 font-(--font-bold)">
          {title}
        </h2>
      </div>

      <p className="mb-2 leading-relaxed">{description}</p>

      <div className="w-full">
        <p className="mb-1 leading-relaxed">
          <h3 className="text-card-headings font-(--font-bold) tracking-wide">
            Who it's for:
          </h3>{' '}
          {whoFor}
        </p>

        <p className="mb-4 leading-relaxed">
          <h3 className="text-card-headings font-(--font-bold) tracking-wide">
            Skill level:
          </h3>{' '}
          {skillLevel}
        </p>
      </div>

      {/* FOOTER */}
      <div className="-mx-18 mt-auto flex justify-end">
        <div className="border-card-border border-t-2  border-l-2">
          {/* // todo: add styling and hover to buttons */}
          {/* // todo: add modal */}
          <button className="text-card-button-text hover:text-card-button-text-hover bg-card-button-background hover:bg-card-button-hover-background px-4 py-2 font-(--font-bold) tracking-wide cursor-pointer transition-colors duration-fast ease-standard">
            find out more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

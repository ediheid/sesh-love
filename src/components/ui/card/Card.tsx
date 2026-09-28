import { useState } from 'react';
import type { CardContent } from '../../../content/shared/types';
import Image from '../../../primitives/image/Image';
import Modal from './Modal';

type CardProps = CardContent;

const Card = (content: CardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="border-card-border bg-card-background flex h-full flex-col border-2 px-18 pt-4">
        <div className="flex flex-col items-center justify-center">
          <div className="overflow-hidden">
            <Image
              src={content.imageSrc}
              width={200}
              height={200}
              alt={content.altText}
              variant="default"
              className={`load-in object-cover ${content.imageClassName ?? ''}`}
            />
          </div>

          <h2 className="text-card-headings text-header-nav-sm md:text-header-nav-lg mb-3 font-(--font-bold)">
            {content.title}
          </h2>
        </div>

        <p className="mb-2 leading-relaxed">{content.description}</p>

        <div className="w-full">
          <div className="mb-1 leading-relaxed">
            <h3 className="text-card-headings font-(--font-bold) tracking-wide">
              Who it's for:
            </h3>
            <span>{content.whoFor}</span>
          </div>

          <div className="mb-4 leading-relaxed">
            <h3 className="text-card-headings font-(--font-bold) tracking-wide">
              Skill level:
            </h3>
            <span>{content.skillLevel}</span>
          </div>
        </div>

        <footer className="-mx-18 mt-auto flex justify-end">
          <div className="border-card-border border-t-2 border-l-2">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="text-card-button-text hover:text-card-button-text-hover focus:text-card-button-text-hover bg-card-button-background hover:bg-card-button-hover-background duration-fast ease-standard cursor-pointer px-4 py-2 font-(--font-bold) tracking-wide transition-colors"
            >
              find out more
            </button>
          </div>
        </footer>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        content={content}
      />
    </>
  );
};

export default Card;

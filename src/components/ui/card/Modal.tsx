import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Svg from '../../../primitives/svgs/Svgs';
import type { CardContent } from '../../../content/shared/types';
import { useScrollLock } from '../../../hooks/useScrollLock';
import { generatePdf } from '../../../utils/generatePdf';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: CardContent;
}

const Modal = ({ isOpen, onClose, content }: ModalProps) => {
  useScrollLock(isOpen);

  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = async () => {
    await generatePdf(content);

    setDownloaded(true);

    setTimeout(() => {
      setDownloaded(false);
    }, 2000);
  };

  if (!isOpen) {
    return null;
  }

  const modalTitleId = `modal-title-${content.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')}`;

  return (
    <div
      className="fixed inset-0 z-9999 flex items-center justify-center bg-black/80 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby={modalTitleId}
      onClick={onClose}
    >
      <div
        className="border-card-border relative max-h-[calc(100vh-2rem)] w-full max-w-2xl overflow-y-auto bg-white p-8 text-black"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-6 right-6 cursor-pointer"
        >
          <Svg
            name="closeSVG"
            className="text-icon hover:text-icon-hover focus:text-icon-hover h-7 w-7 transition-colors"
          />
        </button>

        <h2
          id={modalTitleId}
          className="text-header-nav-sm md:text-header-nav-lg mb-4 font-bold"
        >
          {content.title}
        </h2>

        <div className="space-y-4">
          <div>
            <h3 className="text-card-headings font-(--font-bold) tracking-wide">
              Price
            </h3>
            <p>{content.modal.price}</p>
          </div>

          <div>
            <h3 className="text-card-headings font-(--font-bold) tracking-wide">
              Next dates
            </h3>

            <ul>
              {content.modal.nextDates.map((date) => (
                <li key={date}>{date}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-card-headings font-(--font-bold) tracking-wide">
              Structure
            </h3>
            <p>{content.modal.structure}</p>
          </div>

          <div>
            <h3 className="text-card-headings font-(--font-bold) tracking-wide">
              Delivery
            </h3>
            <p>{content.modal.delivery}</p>
          </div>

          <div>
            <h3 className="text-card-headings font-(--font-bold) tracking-wide">
              Capacity
            </h3>
            <p>{content.modal.capacity}</p>
          </div>

          <div>
            <h3 className="text-card-headings font-(--font-bold) tracking-wide">
              Team building
            </h3>
            <p>{content.modal.teamBuilding}</p>
          </div>

          <div>
            <h3 className="text-card-headings font-(--font-bold) tracking-wide">
              Contact to book
            </h3>
            <p>
              {content.modal.contact.email}
              <br />
              or reach out via the{' '}
              <NavLink
                to="/contact"
                className="text-primary hover:text-highlight underline"
              >
                {content.modal.contact.formLabel}
              </NavLink>
            </p>
          </div>

          <button
            type="button"
            onClick={handleDownload}
            disabled={downloaded}
            className="text-modal-button-text hover:text-modal-button-text-hover focus:text-modal-button-text-hover bg-modal-button-background hover:bg-modal-button-hover-background duration-fast ease-standard cursor-pointer px-4 py-2 font-(--font-bold) tracking-wide transition-colors disabled:cursor-default"
          >
            {downloaded ? '✓ PDF downloaded' : 'Download PDF'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

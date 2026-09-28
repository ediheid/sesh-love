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
        className="relative w-full max-w-2xl bg-white p-8 text-black"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 cursor-pointer text-2xl"
        >
          ×
        </button>

        <h2 id={modalTitleId} className="mb-4 text-2xl font-bold">
          {content.title}
        </h2>

        <div className="space-y-4">
          <div>
            <h3 className="font-bold">Price</h3>
            <p>{content.modal.price}</p>
          </div>

          <div>
            <h3 className="font-bold">Next dates</h3>

            <ul>
              {content.modal.nextDates.map((date) => (
                <li key={date}>{date}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold">Structure</h3>
            <p>{content.modal.structure}</p>
          </div>

          <div>
            <h3 className="font-bold">Delivery</h3>
            <p>{content.modal.delivery}</p>
          </div>

          <div>
            <h3 className="font-bold">Capacity</h3>
            <p>{content.modal.capacity}</p>
          </div>

          <div>
            <h3 className="font-bold">Team building</h3>
            <p>{content.modal.teamBuilding}</p>
          </div>

          <div>
            <h3 className="font-bold">Contact</h3>
            <p>{content.modal.contact}</p>
          </div>

          <button type="button" onClick={() => generatePdf(content)}>
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

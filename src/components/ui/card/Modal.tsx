import type { ModalData } from '../../../content/shared/types';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  data: ModalData;
}

const Modal = ({ isOpen, onClose, title, data }: ModalProps) => {
  if (!isOpen) {
    return null;
  }

  const modalTitleId = `modal-title-${title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')}`;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4"
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
          {title}
        </h2>

        <div className="space-y-4">
          <div>
            <h3 className="font-bold">Price</h3>
            <p>{data.price}</p>
          </div>

          <div>
            <h3 className="font-bold">Next dates</h3>

            <ul>
              {data.nextDates.map((date) => (
                <li key={date}>{date}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold">Structure</h3>
            <p>{data.structure}</p>
          </div>

          <div>
            <h3 className="font-bold">Delivery</h3>
            <p>{data.delivery}</p>
          </div>

          <div>
            <h3 className="font-bold">Capacity</h3>
            <p>{data.capacity}</p>
          </div>

          <div>
            <h3 className="font-bold">Team building</h3>
            <p>{data.teamBuilding}</p>
          </div>

          <div>
            <h3 className="font-bold">Contact</h3>
            <p>{data.contact}</p>
          </div>

          <a
            href={data.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold underline"
          >
            Download PDF
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;

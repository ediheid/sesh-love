import { useState } from 'react';
import FormContent from './FormContent';
import SuccessMessage from './SuccessMessage';

const Card = () => {
  const [isSent, setIsSent] = useState(false);

  return (
    <div className="border-card-border relative mx-auto flex h-full w-full max-w-250 flex-col border-2">
      {isSent ? (
        <SuccessMessage />
      ) : (
        <div className="px-18 pt-18">
          <FormContent onSuccess={() => setIsSent(true)} />
        </div>
      )}
    </div>
  );
};

export default Card;

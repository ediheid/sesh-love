import { useState } from 'react';
import FormContent from './FormContent';
import SuccessMessage from './SuccessMessage';

const Card = () => {
  const [isSent, setIsSent] = useState(false);

  return (
    <div className="border-card-border bg-card-background relative mx-auto flex h-full w-full max-w-350 flex-col border-2 p-18">
      {isSent ? (
        <SuccessMessage />
      ) : (
        <FormContent onSuccess={() => setIsSent(true)} />
      )}
    </div>
  );
};

export default Card;

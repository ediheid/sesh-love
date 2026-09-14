import { useState } from 'react';
import { contactFormFields as fields } from './formFields';

const Form = () => {
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInput = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget as HTMLFormElement;

    setIsValid(form.checkValidity());

    if (form.checkValidity()) {
      setErrorMessage('');
    } else if (form.email.validity.typeMismatch) {
      setErrorMessage('Please enter a valid email address.');
    } else if (form.message.validity.tooShort) {
      setErrorMessage('Please enter at least 10 characters in your message.');
    } else {
      setErrorMessage('Please fill in all fields to enable sending.');
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget as HTMLFormElement;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);

    // todo: send to emailJS
    // todo: check for success and show pigeon ncontent, else show error message
    // todo: reset form
  };

  const inputStyles =
    'border-input-border focus:border-input-border-highlight border-b border-l pt-1 pb-1 pl-2 outline-none placeholder:italic focus:border-2';

  return (
    <form
      className="grid grid-cols-1 gap-6 md:grid-cols-2"
      onSubmit={handleSubmit}
      onInput={handleInput}
      aria-describedby="required-note"
    >
      {/* LEFT */}
      <div className="flex flex-col gap-6">
        {fields.map((field) => (
          <div key={field.id} className="flex flex-col gap-2">
            <label
              className="text-card-headings font-(--font-bold) tracking-wide"
              htmlFor={field.id}
            >
              {field.label}
            </label>

            <input
              placeholder={field.placeholder}
              id={field.id}
              name={field.id}
              type={field.type}
              autoComplete={field.autoComplete}
              className={inputStyles}
              required
            />
          </div>
        ))}
      </div>

      {/* RIGHT */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label
            className="text-card-headings font-(--font-bold) tracking-wide"
            htmlFor="message"
          >
            what can Sesh do for you?
          </label>

          <textarea
            placeholder="I have a team that wants to do some training.."
            id="message"
            name="message"
            rows={5}
            minLength={10}
            maxLength={10000}
            className={`${inputStyles} resize-none`}
            required
          />
        </div>

        {errorMessage && (
          <p
            className="text-card-headings text-sm"
            role="alert"
            aria-live="polite"
          >
            {' '}
            {errorMessage}{' '}
          </p>
        )}
        <button
          type="submit"
          disabled={!isValid}
          className="bg-submit-button-background text-submit-button-text disabled:bg-submit-button-disabled-background disabled:text-submit-button-disabled-text duration-fast ease-standard hover:bg-submit-button-hover-background hover:text-submit-button-hover-text cursor-pointer self-start px-6 py-2 font-(--font-bold) tracking-wide transition-colors disabled:cursor-not-allowed"
        >
          send message
        </button>
      </div>
    </form>
  );
};

export default Form;

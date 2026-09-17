import { useState, type SyntheticEvent } from 'react';
import emailjs from '@emailjs/browser';
import { contactFormFields as fields } from './formFields';

type FormProps = {
  onSuccess: () => void;
};

const Form = ({ onSuccess }: FormProps) => {
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleInput = (event: SyntheticEvent<HTMLFormElement>) => {
    const form = event.currentTarget;

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

  const handleSubmit = async (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setIsSending(true);
    setErrorMessage('');

    const formData = new FormData(form);

    const templateParams = {
      messageSubject:
        'New contact form submission from: ' + formData.get('name'),
      userName: formData.get('name'),
      email: formData.get('email'),
      location: formData.get('location'),
      messageText: formData.get('message'),
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        },
      );

      form.reset();
      setIsValid(false);
      onSuccess();
    } catch (error) {
      console.error('EmailJS error:', error);
      setErrorMessage('Something went wrong. Please try again.');
    } finally {
      setIsSending(false);
    }
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
            className="text-danger text-sm font-(--font-bold) tracking-wide"
            role="alert"
            aria-live="polite"
          >
            {' '}
            {errorMessage}{' '}
          </p>
        )}

        <button
          type="submit"
          disabled={!isValid || isSending}
          className="bg-submit-button-background text-submit-button-text disabled:bg-submit-button-disabled-background disabled:text-submit-button-disabled-text duration-fast ease-standard hover:bg-submit-button-hover-background focus:bg-submit-button-hover-background hover:text-submit-button-hover-text focus:text-submit-button-hover-text cursor-pointer self-start px-6 py-2 font-(--font-bold) tracking-wide transition-colors disabled:cursor-not-allowed"
        >
          {isSending ? 'sending...' : 'send message'}{' '}
        </button>
      </div>
    </form>
  );
};

export default Form;

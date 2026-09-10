const Form = () => {
  // todo: Add fun copy for placeholders
  const fields = [
    {
      id: 'name',
      label: 'name',
      type: 'text',
      placeholder: 'what is your name?',
    },
    {
      id: 'email',
      label: 'email',
      type: 'email',
      placeholder: 'email address',
    },
    {
      // todo: consider changing this to a select with country options, or a text input with validation for country names
      // ! OR add a autocomplete
      id: 'location',
      label: 'where are you?',
      type: 'text',
      placeholder: 'country',
    },
  ];
  return (
    <form className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {/* LEFT */}
      <div className="flex flex-col gap-6">
        {fields.map((field) => (
          <div key={field.id} className="flex flex-col gap-2">
            <label
              className="text-card-headings font-(--font-bold) tracking-wide"
              htmlFor={field.id}
            >
              {field.label} <span aria-hidden="true">*</span>
            </label>

            {/* // todo: make this a component? */}
            <input
              placeholder={field.placeholder}
              id={field.id}
              name={field.id}
              type={field.type}
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
            what can Sesh do for you? <span aria-hidden="true">*</span>
          </label>

          <textarea
            placeholder="I have a team that wants to do some training.."
            id="message"
            name="message"
            rows="5"
            required
            className="resize-none border"
          />
        </div>

        <button type="submit">Send</button>
      </div>

      {/* FOOTER */}
      <p className="text-sm md:col-span-2">* Required</p>
    </form>
  );
};

export default Form;

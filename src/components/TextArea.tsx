type Props = {
  name: string;
  label?: string;
  value: string | number | readonly string[];
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  placeholder?: string;
  required?: boolean;
  rows?: number;
};

export default function TextArea({
  name,
  label,
  value,
  onChange,
  placeholder,
  required,
  rows,
}: Props): React.JSX.Element {
  return (
    <section className="flex flex-col w-full">
      {label ? (
        <label className="ml-1 text-yellow-800" htmlFor={name}>
          {label}
        </label>
      ) : null}
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        id={name}
        required={required}
        rows={rows}
      />
    </section>
  );
}

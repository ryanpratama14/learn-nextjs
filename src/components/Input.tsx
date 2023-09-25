type Props = {
  name: string;
  label?: string;
  value: string | number | readonly string[];
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  type: React.HTMLInputTypeAttribute;
  required?: boolean;
};

export default function Input({
  name,
  label,
  value,
  onChange,
  placeholder,
  type,
  required,
}: Props): React.JSX.Element {
  return (
    <section className="flex flex-col w-full">
      {label ? (
        <label className="ml-1 text-yellow-800" htmlFor={name}>
          {label}
        </label>
      ) : null}
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        id={name}
        type={type}
        required={required}
      />
    </section>
  );
}

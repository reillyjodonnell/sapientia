export default function HighlightableTextInput({
  id,
  autocomplete,
  type,
  name,
  placeholder,
  styles,
  children,
}: any) {
  return (
    <input
      id={id}
      autoComplete={autocomplete}
      type={type}
      name={name}
      placeholder={placeholder}
      className={`${styles} hover:border-white `}
    ></input>
  );
}

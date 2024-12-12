import TextInput from "../TextInput";

export default function TextInputWithLabel({
  type,
  value,
  name,
  onChange,
  placeholder,
  label,
}) {
  return (
    <div>
      <p className="text-[16px] text-navy font-medium mb-[8px]">{label}</p>
      <TextInput
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

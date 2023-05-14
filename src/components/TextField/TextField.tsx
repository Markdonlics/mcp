type inputProps = {
  fullWidth?: boolean;
  inputSize?: string;
  name?: string;
  placeholder?: string;
  id?: string;
  disabled?: boolean;
  value?: string;
  type?: string;
  label?: string;
  required?: boolean;
  max?: number;
  maxLength?: number;
  min?: number;
  pattern?: string;
  readOnly?: boolean;
  step?: string;
  size?: number;
};
let labelSize: string;
const TextField = (props: inputProps) => {
  let {
    fullWidth,
    inputSize,
    name,
    placeholder,
    id,
    disabled,
    value,
    type,
    label,
    required,
    max,
    maxLength,
    min,
    pattern,
    readOnly,
    step,
    size,
  } = props;
  if (inputSize === "small") {
    inputSize = "py-1 px-2 text-sm";
    labelSize = "py-1 px-0 text-sm";
  } else if (inputSize === "large") {
    inputSize = "py-4 px-4 text-xl";
    labelSize = "py-2 px-0 text-sm";
  } else {
    inputSize = "";
  }
  return (
    <div>
      <p className={`${labelSize && labelSize} capitalize`}>{label && label}</p>
      <input
        name={name}
        placeholder={placeholder}
        id={id}
        disabled={disabled}
        value={value}
        type={type}
        required={required}
        max={max}
        maxLength={maxLength}
        min={min}
        pattern={pattern}
        readOnly={readOnly}
        step={step}
        size={size ? size : 10}
        className={`${fullWidth ? "w-full" : ""} ${
          inputSize && inputSize
        } px-3 py-2 rounded-lg overflow-visible focus:outline-sky-500 border-2 border-neutral-200 max-w-full`}
      />
    </div>
  );
};

export default TextField;

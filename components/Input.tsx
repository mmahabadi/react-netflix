import { FC } from "react";

type InputProps = {
  id: string;
  onChange: any;
  label: string;
  value: string;
  type?: string;
};

const Input: FC<InputProps> = ({
  id,
  onChange,
  label,
  value,
  type = "text",
}) => {
  return (
    <div className="relative">
      <input
        id={id}
        value={value}
        type={type}
        onChange={onChange}
        className="block rounded-md px-6 pt-6 pb-1 w-full text-md text-white bg-neutral-700 appearance-none focus:outline-none focus:ring-0  foxus:ring-0 peer"
        placeholder=" "
      />
      <label
        htmlFor={id}
        className="absolute text-md text-zinc-400 duration-150 transform -trabnslate-y-3 scale-75 top-4 z-10 left-6 peer-placeholder-shown:scale-100 origin-[0] peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 "
      >
        {label}
      </label>
    </div>
  );
};
export default Input;

import React from "react";
import Image from "next/image";

interface CheckboxProps {
  label: string;
  id: string;
  isChecked: boolean;
  onChange: (checked: boolean) => void;
  isDisabled?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  id,
  isChecked,
  onChange,
  isDisabled = false,
}) => {
  return (
    <div
      className={`w-[329px] rounded-[8px] px-4 py-[14px] ${
        isChecked
          ? "border-black border-[1px]"
          : "bg-white border-lightGray border-[1px]"
      }`}
    >
      <label
        htmlFor={id}
        className="flex items-center gap-2 font-light  font-larsseitRegular cursor-pointer text-sm text-textHeavyGray"
      >
        <div
          onClick={() => !isDisabled && onChange(!isChecked)}
          className="w-6 h-6 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300"
        >
          {isChecked ? (
            <Image
              src={"/icons/circleChecked.svg"} // SVG para el estado "checked"
              alt="checkbox-circle-checked"
              height={20}
              width={20}
            />
          ) : (
            <Image
              src={"/icons/circle.svg"} // SVG para el estado "unchecked"
              alt="checkbox-circle"
              height={20}
              width={20}
            />
          )}
        </div>
        <span>{label}</span>
      </label>
    </div>
  );
};

export default Checkbox;

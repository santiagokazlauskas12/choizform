import React from "react";

interface FormTextAreaProps {
  title: string;
  placeholder?: string;
  value: string;

  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const FormTextArea: React.FC<FormTextAreaProps> = ({
  title,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="w-[328px] mt-[21px]  rounded-lg h-full">
      <p className="font-larsseitMedium pb-[13px] text-[12px] leading-[12px] text-textGray">
        {title}
      </p>
      <textarea
        className="w-[328px] h-[117px] rounded-[8px] border-[1px] border-gray-400 p-2 resize-none"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default FormTextArea;

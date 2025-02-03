import React, { useState } from "react";

interface FormTitleProps {
  title?: string;
  subtitle?: string;
}

const FormTitle: React.FC<FormTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="w-full mt-8 ">
      {title && (
        <h1 className="font-larsseitMedium text-stepTitle text-left mb-2 text-[20px] leading-[24px]">
          {title}
        </h1>
      )}
      {subtitle && (
        <h2 className="text-left font-larsseitRegular text-[14px] leading-[20px] text-textGray mb-4">
          {subtitle}
        </h2>
      )}
    </div>
  );
};

export default FormTitle;

import React, { useState } from "react";
import Button from "../../components/Button"; // Componente de botón
import Checkbox from "./CheckBox";

interface FormFlowProps {
  title?: string;
  subtitle?: string;
  checkboxes: {
    label: string;
    id: string;
    isChecked: boolean;
  }[];
  onNext: () => void;
}

const FormFlow: React.FC<FormFlowProps> = ({
  title,
  subtitle,
  checkboxes,
  onNext,
}) => {
  const [checkboxStates, setCheckboxStates] = useState(
    checkboxes.reduce((acc, checkbox) => {
      acc[checkbox.id] = checkbox.isChecked;
      return acc;
    }, {} as Record<string, boolean>)
  );

  const handleCheckboxChange = (id: string) => {
    setCheckboxStates((prevStates) => ({
      ...prevStates,
      [id]: !prevStates[id],
    }));
  };

  return (
    <div className=" max-w-lg mx-auto w-[329px] p-6 rounded-lg h-full">
      {title && (
        <h1 className="font-larsseitMedium mb-2 text-[20px] leading-[24px]">
          {title}
        </h1>
      )}
      {subtitle && (
        <h2 className="font-larsseitRegular text-[14px] leading-[20px] text-textGray mb-4">
          {subtitle}
        </h2>
      )}
      <div className="flex flex-col mb-4 gap-4">
        {checkboxes.map((checkbox) => (
          <Checkbox
            key={checkbox.id}
            label={checkbox.label}
            id={checkbox.id}
            isChecked={checkboxStates[checkbox.id]}
            onChange={() => handleCheckboxChange(checkbox.id)}
          />
        ))}
      </div>

      <div className="mt-4">
        <Button label="Siguiente" onClick={onNext} />
      </div>
    </div>
  );
};

export default FormFlow;

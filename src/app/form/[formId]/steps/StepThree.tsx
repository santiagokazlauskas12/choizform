import React, { useState, useEffect } from "react";
import Button from "../../../components/Button";
import Checkbox from "../../components/CheckBox";
import FormTitle from "../../components/FormTitle";
import { useFormContext } from "@/app/context/FormContext";
import { IStepData } from "../types/interfases";
import { useRouter } from "next/navigation";
import { isChecked } from "../../utils";
import { handleCheckboxChange } from "../../utils";
import Loader from "../../components/Loader";
const StepThree: React.FC = ({}) => {
  const { stepThreeData, setStepThreeData } = useFormContext();
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const handleNextStep = () => {
    router.push("/form/4");
  };
  useEffect(() => {
    if (stepThreeData) {
      setLoading(false);
    }
  }, [stepThreeData]);

  if (loading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }
  return (
    <>
      <div className="max-w-lg mx-auto w-[329px] rounded-lg h-full animate-slide-in">
        <FormTitle
          title="¿Tienes o has tenido alguna de las siguientes condiciones médicas?"
          subtitle="Selecciona todas las opciones que apliquen."
        />
        <div className="flex flex-col mb-4 gap-4 justify-center items-center">
          {Object.values(stepThreeData).map((checkbox: IStepData) => (
            <Checkbox
              key={checkbox.id}
              label={checkbox.label}
              id={checkbox.id}
              isChecked={checkbox.isChecked}
              onChange={() =>
                handleCheckboxChange(checkbox.id, setStepThreeData, "checkbox8")
              }
            />
          ))}
        </div>
      </div>
      {isChecked(stepThreeData) && (
        <div className="absolute mt-10 bottom-4 max-w-lg mx-auto w-[329px]">
          <Button label="Siguiente" onClick={handleNextStep} />
        </div>
      )}
    </>
  );
};

export default StepThree;

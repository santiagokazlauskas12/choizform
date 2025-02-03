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

const StepFour: React.FC = ({}) => {
  const { stepFourData, setStepFourData } = useFormContext();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const handleNextStep = () => {
    router.push("/form/5");
  };
  useEffect(() => {
    if (stepFourData) {
      setLoading(false);
    }
  }, [stepFourData]);

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
          {Object.values(stepFourData).map((checkbox: IStepData) => (
            <Checkbox
              key={checkbox.id}
              label={checkbox.label}
              id={checkbox.id}
              isChecked={checkbox.isChecked}
              onChange={() =>
                handleCheckboxChange(checkbox.id, setStepFourData, "checkbox7")
              }
            />
          ))}
        </div>
      </div>
      {isChecked(stepFourData) && (
        <div className="absolute  bottom-4 max-w-lg mx-auto w-[329px]">
          <Button label="Siguiente" onClick={handleNextStep} />
        </div>
      )}
    </>
  );
};

export default StepFour;

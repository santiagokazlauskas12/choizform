import React, { useEffect, useState } from "react";
import Checkbox from "../../components/CheckBox";
import FormTitle from "../../components/FormTitle";
import { useFormContext } from "@/app/context/FormContext";
import { IStepData } from "../types/interfases";
import { useRouter } from "next/navigation";
import Loader from "../../components/Loader";

const StepTwo: React.FC = ({}) => {
  const { stepTwoData, setStepTwoData } = useFormContext();
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const handleCheckboxChange = (id: string) => {
    setStepTwoData((prevStates) => ({
      checkbox1: { ...prevStates.checkbox1, isChecked: id === "checkbox1" },
      checkbox2: { ...prevStates.checkbox2, isChecked: id === "checkbox2" },
      checkbox3: { ...prevStates.checkbox3, isChecked: id === "checkbox3" },
    }));
    handleNextStep();
  };
  useEffect(() => {
    if (stepTwoData) {
      setLoading(false);
    }
  }, [stepTwoData]);

  const handleNextStep = () => {
    router.push("/form/3");
  };

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
          title="¿Hay antecedentes de caída del cabello en tu familia?"
          subtitle=""
        />
        <div className="flex flex-col mb-4 gap-4 justify-center items-center">
          {Object.values(stepTwoData).map((checkbox: IStepData) => (
            <Checkbox
              key={checkbox.id}
              label={checkbox.label}
              id={checkbox.id}
              isChecked={checkbox.isChecked}
              onChange={() => handleCheckboxChange(checkbox.id)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default StepTwo;

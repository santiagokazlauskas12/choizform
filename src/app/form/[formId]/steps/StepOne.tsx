import React, { useState, useEffect } from "react";
import Button from "../../../components/Button";
import Checkbox from "../../components/CheckBox";
import FormTitle from "../../components/FormTitle";
import FormTextArea from "../../components/FormTextArea";
import { useFormContext } from "@/app/context/FormContext";
import { IStepData } from "../types/interfases";
import { useRouter } from "next/navigation";
import { isChecked } from "../../utils";
import { handleCheckboxChange } from "../../utils";
import Loader from "../../components/Loader";

const StepOne: React.FC = ({}) => {
  const { stepOneData, setStepOneData } = useFormContext();
  const [textValue, setTextValue] = useState("");
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (stepOneData) {
      setTextValue(stepOneData.checkbox4.text);
      setLoading(false);
    }
  }, [stepOneData]);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    setStepOneData((prevStates) => {
      const newData = {
        ...prevStates,
        checkbox4: {
          ...prevStates.checkbox4,
          text: newText,
        },
      };
      return newData;
    });
    setTextValue(newText);
  };

  const handleNextStep = () => {
    router.push("/form/2");
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
          title="¿Tienes algún problema en el cuero cabelludo?"
          subtitle="Selecciona todas las opciones que apliquen."
        />
        <div className="flex flex-col mb-8 gap-4 justify-center items-center">
          {Object.values(stepOneData).map((checkbox: IStepData) => (
            <Checkbox
              key={checkbox.id}
              label={checkbox.label}
              id={checkbox.id}
              isChecked={checkbox.isChecked}
              onChange={() =>
                handleCheckboxChange(checkbox.id, setStepOneData, "checkbox5")
              }
            />
          ))}

          {stepOneData.checkbox4.isChecked && (
            <FormTextArea
              onChange={handleTextChange}
              value={textValue}
              title="Cuéntanos cuál es el problema"
              placeholder="Inserta tu respuesta aquí"
            />
          )}
        </div>
      </div>
      {isChecked(stepOneData) && (
        <div
          className={`${
            stepOneData.checkbox4.isChecked
              ? "relative mt-8 bottom-4 max-w-lg mx-auto w-[329px]"
              : "absolute  bottom-4 max-w-lg mx-auto w-[329px]"
          }`}
        >
          {" "}
          <Button label="Siguiente" onClick={handleNextStep} />
        </div>
      )}
    </>
  );
};

export default StepOne;

import { IQuestions, IStepData } from "./[formId]/types/interfases";
import { Dispatch, SetStateAction } from "react";

export const isChecked = (stepData: IQuestions) => {
  return Object.values(stepData).some((e: IStepData) => e.isChecked);
};

export const handleCheckboxChange = (
  id: string,
  setter: Dispatch<SetStateAction<{ [key: string]: IStepData }>>, // El setter de estado
  specialCheck: string
) => {
  setter((prevStates) => {
    const updatedStates = Object.keys(prevStates).reduce<{
      [key: string]: IStepData;
    }>((acc, key) => {
      if (id === specialCheck) {
        acc[key] = {
          ...prevStates[key],
          isChecked: key === specialCheck ? !prevStates[key].isChecked : false,
        };
      } else {
        acc[key] = {
          ...prevStates[key],
          isChecked:
            key === id
              ? !prevStates[key].isChecked
              : key === specialCheck
              ? false
              : prevStates[key].isChecked,
        };
      }
      return acc;
    }, {});
    return updatedStates;
  });
};

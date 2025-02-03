"use client";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { IQuestions } from "../form/[formId]/types/interfases";
import {
  stepOneFormData,
  stepTwoFormData,
  stepFourFormData,
  stepThreeFormData,
} from "../form/[formId]/formData";

interface FormContextType {
  stepOneData: IQuestions;
  setStepOneData: React.Dispatch<React.SetStateAction<IQuestions>>;
  stepTwoData: IQuestions;
  setStepTwoData: React.Dispatch<React.SetStateAction<IQuestions>>;
  stepThreeData: IQuestions;
  setStepThreeData: React.Dispatch<React.SetStateAction<IQuestions>>;
  stepFourData: IQuestions;
  setStepFourData: React.Dispatch<React.SetStateAction<IQuestions>>;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

interface FormProviderProps {
  children: ReactNode;
}

export const FormProvider = ({ children }: FormProviderProps) => {
  const loadFormData = (key: string, defaultData: IQuestions) => {
    if (typeof window !== "undefined") {
      const storedData = localStorage.getItem(key);
      return storedData ? JSON.parse(storedData) : defaultData;
    }
    return defaultData;
  };

  const [stepOneData, setStepOneData] = useState<IQuestions>(
    loadFormData("stepOneData", stepOneFormData)
  );
  const [stepTwoData, setStepTwoData] = useState<IQuestions>(
    loadFormData("stepTwoData", stepTwoFormData)
  );
  const [stepThreeData, setStepThreeData] = useState<IQuestions>(
    loadFormData("stepThreeData", stepThreeFormData)
  );
  const [stepFourData, setStepFourData] = useState<IQuestions>(
    loadFormData("stepFourData", stepFourFormData)
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("stepOneData", JSON.stringify(stepOneData));
      localStorage.setItem("stepTwoData", JSON.stringify(stepTwoData));
      localStorage.setItem("stepThreeData", JSON.stringify(stepThreeData));
      localStorage.setItem("stepFourData", JSON.stringify(stepFourData));
    }
  }, [stepOneData, stepTwoData, stepThreeData, stepFourData]);

  return (
    <FormContext.Provider
      value={{
        stepOneData,
        setStepOneData,
        stepTwoData,
        setStepTwoData,
        stepThreeData,
        setStepThreeData,
        stepFourData,
        setStepFourData,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = (): FormContextType => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("Error con el contexto");
  }
  return context;
};

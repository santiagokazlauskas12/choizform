"use client";

import { useParams } from "next/navigation";
import StepOne from "./steps/StepOne";
import StepTwo from "./steps/StepTwo";
import StepThree from "./steps/StepThree";
import StepFour from "./steps/StepFour";
import StepFive from "./steps/StepFive";
export default function FormPage() {
  const params = useParams();
  const { formId } = params;

  const getFormContent = (formId: string) => {
    switch (formId) {
      case "1":
        return <StepOne />;
      case "2":
        return <StepTwo />;
      case "3":
        return <StepThree />;
      case "4":
        return <StepFour />;
      case "5":
        return <StepFive />;
    }
  };

  return <div>{getFormContent(formId)}</div>;
}

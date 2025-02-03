"use client";

import { useParams } from "next/navigation";
import StepOne from "./steps/StepOne";
import StepTwo from "./steps/StepTwo";
import StepThree from "./steps/StepThree";
import StepFour from "./steps/StepFour";
import StepFive from "./steps/StepFive";
import NotFoundPage from "@/app/not-found";
export default function FormPage() {
  const params = useParams();
  const formId = Array.isArray(params.formId)
    ? params.formId[0]
    : params.formId;
  const getFormContent = (formId: string | undefined) => {
    if (
      !formId ||
      isNaN(Number(formId)) ||
      Number(formId) < 1 ||
      Number(formId) > 5
    ) {
      return <NotFoundPage />;
    }
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
      default:
        return <NotFoundPage />;
    }
  };

  return <div>{getFormContent(formId)}</div>;
}

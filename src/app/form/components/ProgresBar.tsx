import React from "react";

interface Props {
  currentStep: number;
  totalSteps: number;
}

const ProgressBar = ({ currentStep, totalSteps }: Props) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full bg-customGray rounded-full h-1">
      <div
        className="bg-primary h-1 rounded-full transition-all duration-300"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;

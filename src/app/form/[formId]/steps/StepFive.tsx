import React from "react";
import FormTitle from "../../components/FormTitle";
import ImageCard from "../../components/ImageCard";
import FAQ from "../../components/FaqMedication";

const StepFive: React.FC = ({}) => {
  return (
    <>
      <div className="max-w-lg mx-auto w-[329px] rounded-lg h-full animate-slide-in">
        <FormTitle title="Tratamiento recomendado en base a tus respuestas" />
        <ImageCard />
        <FAQ />
      </div>
    </>
  );
};

export default StepFive;

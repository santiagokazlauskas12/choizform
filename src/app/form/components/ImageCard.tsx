import { useEffect, useState } from "react";
import Image from "next/image";
import Button from "../../components/Button";
import { useFormContext } from "@/app/context/FormContext";
import { stepFiveFormData } from "../[formId]/formData";
import {
  IStepFiveData,
  IQuestions,
  IMedicamento,
} from "../[formId]/types/interfases";
import Loader from "./Loader";

const ImageCard: React.FC = ({}) => {
  const { stepThreeData } = useFormContext();
  const [medicamento, setMedicamento] = useState<IMedicamento | null>(null);

  const getMedicamento = (
    stepThreeData: IQuestions,
    stepFiveFormData: IStepFiveData
  ) => {
    if (
      stepThreeData.checkbox1.isChecked ||
      stepThreeData.checkbox2.isChecked
    ) {
      return stepFiveFormData.minoxidilCapsulas;
    }

    if (stepThreeData.checkbox8.isChecked) {
      return stepFiveFormData.dutasterideCapsulas;
    } else {
      return stepFiveFormData.dutasterideGel;
    }
  };

  useEffect(() => {
    if (stepThreeData) {
      setMedicamento(getMedicamento(stepThreeData, stepFiveFormData));
    }
  }, [stepThreeData]);

  if (!medicamento) {
    return <Loader />;
  }

  return (
    <>
      <div className="flex flex-col justify-around items-center w-[328px] h-[406.58px] shadow-lg  rounded-[24px] pt-8 pr-5 pb-8 pl-5">
        <h4 className="w-full font-larsseitMedium text-[20px]  text-left  font-medium leading-6 text-left">
          {medicamento.title}
        </h4>{" "}
        <p className="w-full font-larsseitRegular text-[px]  text-left text-imageSubtitle  font-medium leading-4 text-left">
          {medicamento.subTitle}
        </p>
        <div className="flex flex-col h-[60%] mb-10 justify-center  items-center">
          <Image
            alt={"producto recomendado"}
            src={medicamento.img}
            width={145}
            height={160}
            layout="responsive"
          />
        </div>
        <Button
          label="Seleccionar"
          onClick={() => console.log("Seleccionado")}
        />
      </div>
    </>
  );
};

export default ImageCard;

"use client";

import Image from "next/image";
import ProgressBar from "./ProgresBar";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

interface Props {
  step: number;
}

const Header: React.FC<Props> = ({ step }) => {
  const router = useRouter();
  const params = useParams();
  const { formId } = params;

  const handleBack = () => {
    const previousStep = Number(formId) - 1;
    if (previousStep >= 1) {
      router.push(`/form/${previousStep}`);
    } else {
      router.push(`/`);
    }
  };

  return (
    <header className="w-full  lg:max-w-[1200px] max-w-[396px] flex flex-col justify-between">
      <div className="flex flex-row justify-between  items-center">
        <button
          onClick={handleBack}
          className="w-5 h-5 lg:w-8 lg:h-8 hover:cursor-pointer"
          aria-label="Back"
        >
          <Image
            src="/icons/backArrow.svg"
            alt="back arrow icon"
            width={40}
            height={40}
            className="w-full h-full"
          />
        </button>

        <Image
          src="/icons/choizLogo.svg"
          alt="Icono"
          width={40}
          height={80}
          className="w-12 h-12 lg:w-20 lg:h-20"
        />
        <button
          className="w-5 h-5 lg:w-8 lg:h-8 hover:cursor-pointer"
          aria-label="Back"
        >
          <Image
            src="/icons/whatsupp.svg"
            alt="whats app icon"
            width={40}
            height={40}
            className="w-5 h-5 lg:w-8 lg:h-8 hover:cursor-pointer"
          />
        </button>
      </div>

      <ProgressBar totalSteps={6} currentStep={step} />
    </header>
  );
};

export default Header;

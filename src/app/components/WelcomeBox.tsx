import Button from "./Button";
import BulletsText from "./BulletsText";
import Link from "next/link";
const WelcomeBox = () => {
  return (
    <div className="z-10  absolute bottom-0 w-full  h-[450px] bg-white rounded-tl-[32px] lg:h-[380px] pt-[45px] pl-[30px] pr-[30px] rounded-tr-[32px] flex flex-col justify-top items-center">
      <div className="flex flex-col items-start">
        <h1 className="font-larsseitBold text-[26px] text-welcomSubtitle  text-primary left">
          Bienvenido a Choiz
        </h1>
        <h4 className="text-[16px] text-textHeavyGray mb-[24px] font-larsseitRegular left ">
          Comienza tu tratamiento en tres pasos:
        </h4>
      </div>
      <BulletsText />
      <Link className="flex justify-center w-[328px]" href="/form/1">
        <Button label="Continuar" />
      </Link>
    </div>
  );
};

export default WelcomeBox;

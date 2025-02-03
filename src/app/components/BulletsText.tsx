import Image from "next/image";

const BulletsText = () => {
  return (
    <div className="flex flex-row mb-[24px]">
      <div className="flex flex-col items-center justify-center ">
        <div>
          <div className="flex   flex-col justify-center space-x-2">
            <div className="relative flex items-center justify-center w-[14.65px] h-[14.65px] border-[1.2px] border-textGray rounded-full"></div>
            <div className="w-[1.2px]  h-[18px] bg-textGray"></div>
          </div>
        </div>
        <div>
          <div className="flex   flex-col justify-center space-x-2">
            <div className="relative  flex items-center justify-center w-[14.65px] h-[14.65px] border-[1.2px] border-textGray rounded-full"></div>
            <div className="w-[1.2px]  h-[18px]  bg-textGray"></div>
          </div>
        </div>

        <div>
          <div className="flex   flex-col justify-center space-x-2">
            <div className="relative flex items-center justify-center w-[14.65px] h-[14.65px] border-[1.2px] border-textGray rounded-full"></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[10px] ml-4">
        <div className="flex flex-row  items-center">
          <p className="text-[14px] mr-2 font-larsseitRegular   text-textGray">
            Completa tu expediente médico
          </p>
          <Image src="/icons/clock.svg" height={10} width={10} alt="clock" />
          <p className="text-[12px] ml-1 text-secondary font-larsseitRegular ">
            2 min
          </p>
        </div>
        <p className="text-[14px] font-larsseitRegular  text-textGray">
          Explora las opciones de tratamiento
        </p>
        <p className="text-[14px] font-larsseitRegular  text-textGray">
          Paga y recibe tu tratamiento
        </p>
      </div>
    </div>
  );
};

export default BulletsText;

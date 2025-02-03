import Image from "next/image";
import WelcomeBox from "./components/WelcomeBox";
export default function Home() {
  return (
    <div className="w-full  h-screen flex flex-col items-center justify-between relative">
      <div className="w-full  lg:mt-[20px]  max-w-[1024px] h-[60%] relative">
        <Image
          src="/images/welcome.png"
          alt="Welcome Image"
          layout="fill"
          priority
          objectFit="cover"
          className="absolute  lg:rounded-[60px] inset-0"
        />

        <div className="absolute top-10 left-10 z-10">
          <Image
            src={"/icons/choizeLogoWhite.svg"}
            width={70}
            height={22}
            alt="choiz logo"
          />
        </div>
      </div>

      <WelcomeBox />
    </div>
  );
}

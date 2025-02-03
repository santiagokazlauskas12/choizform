import Link from "next/link";
import Image from "next/image";

const NotFoundPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center flex-col flex justify-center items-center">
        <h1 className="text-4xl font-bold text-primary">404</h1>
        <p className="text-lg text-primary mb-4">Página no encontrada</p>

        <Link href="/">
          <Image
            alt="choiz logo"
            src="/icons/choizLogo.svg"
            height={120}
            width={120}
          />{" "}
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;

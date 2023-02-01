import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";
import Scarecrow from "../../public/Scarecrow.png";

const NotFound404 = () => {
  return (
    <>
      <div className="h-screen p-2">
        <div className="mb-5  p-2">
          <h1 className="z-10 cursor-pointer text-2xl font-bold shadow-sm">
            404 NOT FOUND
          </h1>
        </div>
        <div className="my-6 flex h-screen flex-col lg:my-auto lg:flex-row lg:space-x-4">
          <Image
            src={Scarecrow}
            alt="Scarecrow"
            className="rounded-md p-4 lg:mx-auto lg:my-auto lg:w-2/5"
          />
          .
          <div className="my-6 mx-auto flex flex-col justify-center p-3 lg:my-auto lg:w-2/5 lg:scale-110">
            <h1 className="max-w-sm text-6xl font-bold">
              I have a bad news for you
            </h1>
            <p className="my-6 max-w-xs font-mono text-xl font-medium text-gray-500">
              The Page you are looking For might be removed or is temporarily
              unavailable
            </p>
            <Link
              href="/"
              className="z-10 mr-auto border-spacing-3 justify-start rounded-sm border-gray-700 bg-black p-5 font-bold text-white shadow-md hover:bg-green-900"
            >
              Back To Homepage
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default NotFound404;

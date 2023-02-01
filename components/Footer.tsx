import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="flex w-full justify-center">
        <p className="text-md p-2 text-gray-300">
          Designed and Developed by
          <Link
            href="http://github.com/ShubhamkumarAnand"
            className="border-b-orange-300 font-bold"
          >
            {" "}
            @imskanand{" "}
          </Link>
          {new Date().getFullYear()}
        </p>
      </div>
    </>
  );
};

export default Footer;

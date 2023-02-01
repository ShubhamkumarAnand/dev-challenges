import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import devchallenges from "public/devchallenges.png";
import Footer from "../../components/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Developer Challenges</title>
        <meta name="description" content="Responsive Design Challenges" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="p-4">
        <nav className="flex space-x-1 p-2">
          <Image src={devchallenges} alt="logo" className="mt-1 h-4 w-4" />
          <Link href="/" className="button cursor-pointer font-bold">
            Dev Challenges
          </Link>
        </nav>
        <div className="min-w-lg mx-auto flex h-screen flex-col space-y-4 p-2">
          <Link
            href="/NotFound404"
            className="hover:text-green button mx-auto rounded-md bg-green-700 p-2 text-lg font-medium"
          >
            {" "}
            Not Found 404
          </Link>
          <Link
            href="/CreativeCrew"
            className="hover:text-green button mx-auto rounded-md bg-green-700 p-2 text-lg font-medium"
          >
            {" "}
            Creative Crew
          </Link>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;

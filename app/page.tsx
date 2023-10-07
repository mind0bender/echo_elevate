import Link from "next/link";
import Button from "./components/button";
import Image from "next/image";
import HeroImage from "@assets/hero.png";

export default function Home(): JSX.Element {
  return (
    <div
      className={`px-6 sm:px-8 md:px-10 py-10 sm:py-16 md:py-20 flex flex-col lg:flex-row gap-10 grow justify-center items-center`}
    >
      <div className={`flex flex-col justify-center items-center gap-10`}>
        <div className={`max-w-3xl text-center`}>
          <div className={`font-bold text-2xl sm:text-3xl md:text-6xl`}>
            Welcome to Echo Elevate,
          </div>
          <br />
          <div className={`font-semibold text-xl sm:text-2xl md:text-4xl `}>
            Where Your Business Sours to New Heights!
          </div>
        </div>
        <div className={`max-w-3xl text-center`}>
          <div className={`font-medium text-lg sm:text-xl md:text-3xl `}>
            We Transform Ideas into Reality, Elevating Your Online Presence.
          </div>
        </div>
        <Link
          href={`/signup`}
          className={`rounded-md text-2xl focus:outline-none`}
        >
          <Button>Get Started Now</Button>
        </Link>
      </div>
      <div className={`rounded-md ring-blue-200 ring8`}>
        <div className={`rounded-md ring-blue-300 ring4`}>
          <Image
            className={`rounded-md ring-blue-400 ring2`}
            src={HeroImage}
            alt="Online"
          />
        </div>
      </div>
    </div>
  );
}

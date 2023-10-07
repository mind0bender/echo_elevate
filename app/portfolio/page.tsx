import Link from "next/link";
import Button from "../components/button";

export default function PortfolioPage(): JSX.Element {
  return (
    <div
      className={`grow px-6 sm:px-8 md:px-10 py-10 sm:py-16 md:py-20 flex flex-col justify-center items-center gap-10`}
    >
      <div
        className={`flex grow flex-col justify-around items-center max-w-3xl gap-10`}
      >
        <h4 className={`text-2xl sm:text-3xl font-medium`}>Our Portfolio</h4>
        <div className={`flex flex-col gap-2 max-w-2xl text-center`}>
          <p className={`sm:text-lg px-2`}>
            Explore our successful digital marketing campaigns that have driven
            business growth for our clients. Each project is a testament to our
            expertise and commitment to excellence.
          </p>
        </div>
        <ol
          className={`list-decimal max-w-3xl pl-5 flex flex-col justify-center gap-4`}
        >
          <li className={`px-4 py-3 rounded-md border bg-white`}>
            <div className={`flex flex-col justify-center gap-2`}>
              <h5 className={`text-lg sm:text-xl`}>ABC Company</h5>A
              comprehensive digital marketing strategy that resulted in a 30%
              increase in online sales within 3 months.
            </div>
          </li>
          <li className={`px-4 py-3 rounded-md border bg-white`}>
            <div className={`flex flex-col justify-center gap-2`}>
              <h5 className={`text-lg sm:text-xl`}>XYZ Corporation</h5>A Social
              Buzz Engaging social media campaign, doubling brand mentions and
              increasing website traffic by 50%.
            </div>
          </li>
          <li className={`px-4 py-3 rounded-md border bg-white`}>
            <div className={`flex flex-col justify-center gap-2`}>
              <h5 className={`text-lg sm:text-xl`}>LMN Enterprises</h5>
              Web Revamp Redesigned website with user-friendly interface,
              leading to a 40% decrease in bounce rates and 25% longer average
              session duration.
            </div>
          </li>
        </ol>
        <div>
          <Link href={`/#`} className={`rounded-md focus:outline-none`}>
            <Button>Explore more Projects</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

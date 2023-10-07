import Link from "next/link";
import Button from "../components/button";
import Project, { ProjectProps } from "../components/project";

import Project1Image from "@assets/project1.jpg";
import Project2Image from "@assets/project2.jpg";
import Project3Image from "@assets/project3.jpeg";

const projects: ProjectProps[] = [
  {
    title: "ABC Company",
    description: `Explore our successful digital marketing campaigns that have driven
            business growth for our clients. Each project is a testament to our
            expertise and commitment to excellence.`,
    image: {
      src: Project1Image,
      alt: "Project for ABC Company",
    },
  },
  {
    title: "XYZ Corporation",
    description: `A Social Buzz Engaging social media campaign, doubling brand mentions and increasing website traffic by 50%.`,
    image: {
      src: Project2Image,
      alt: "Project for XYZ Corporation",
    },
  },
  {
    title: "LMN Enterprises",
    description: `Web Revamp Redesigned website with user-friendly interface, leading to a 40% decrease in bounce rates and 25% longer average session duration`,
    image: {
      src: Project3Image,
      alt: "Project for LMN Enterprises",
    },
  },
];

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
          <p className={`sm:text-lg px-2`}></p>
        </div>
        <ol className={`max-w-3xl pl-5 flex flex-wrap justify-center gap-4`}>
          {projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
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

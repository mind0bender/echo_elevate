import Link from "next/link";
import Button from "../components/button";
import SEOImage from "@assets/seo.svg";
import SocialMediaImage from "@assets/social.svg";
import WebDevImage from "@assets/web.svg";
import ContentImage from "@assets/content.svg";
import { Service, ServiceProps } from "../components/service";

const services: ServiceProps[] = [
  {
    title: "Search Engine Optimization (SEO)",
    description:
      "Improve your online visibility and organic search rankings. Our SEO strategies focus on optimizing your website for search engines, driving more organic traffic and increasing your chances of being found by potential customers.",
    image: {
      src: SEOImage,
      alt: "SEO Icon",
    },
  },
  {
    title: "Social Media Marketing",
    description:
      "Engage and expand your audience on social media platforms. Our social media marketing services help businesses connect with their audience, build brand awareness, and drive website traffic through social channels.",
    image: {
      src: SocialMediaImage,
      alt: "Social Media Icon",
    },
  },
  {
    title: "Website Development & Design",
    description:
      "Create a stunning online presence with our website development and design services. We specialize in crafting visually appealing, user-friendly websites that reflect your brand identity and provide an exceptional user experience.",
    image: {
      src: WebDevImage,
      alt: "Web Design Icon",
    },
  },
  {
    title: "Content Marketing",
    description:
      "Tell your brand story through compelling content. Our content marketing strategies include creating high-quality blog posts, articles, videos, and infographics that resonate with your audience, drive engagement, and boost conversions.",
    image: {
      src: ContentImage,
      alt: "Content Marketing Icon",
    },
  },
];

export default function ServicesPage(): JSX.Element {
  return (
    <div
      className={`grow px-6 sm:px-8 md:px-10 py-10 sm:py-16 md:py-20 flex flex-col justify-around items-center gap-10`}
    >
      <h4 className={`font-medium text-2xl sm:text-3xl text-center`}>
        Our Digital Services
      </h4>
      <h5 className={`text-lg sm:text-xl max-w-md text-center`}>
        Transforming Businesses Online with Expertise and Innovation.
      </h5>
      <ol
        className={`list-decimal max-w-4xl pl-5 flex flex-wrap justify-around gap-4`}
      >
        {services.map((service: ServiceProps): JSX.Element => {
          return <Service {...service} key={service.title} />;
        })}
      </ol>
      <Link
        href={`/contact`}
        className={`rounded-md text-2xl focus:outline-none`}
      >
        <Button>Get Started Now</Button>
      </Link>
    </div>
  );
}

import Link from "next/link";
import Button from "../components/button";

export default function ServicesPage() {
  return (
    <div
      className={`grow px-6 sm:px-8 md:px-10 py-10 sm:py-16 md:py-20 flex flex-col justify-center items-center gap-10`}
    >
      <h4 className={`font-medium text-2xl sm:text-3xl text-center`}>
        Our Digital Servises
      </h4>
      <h5 className={`text-lg sm:text-xl max-w-md text-center`}>
        Transforming Businesses Online with Expertise and Innovation.
      </h5>
      <ol
        className={`list-decimal max-w-3xl pl-5 flex flex-col justify-center gap-4`}
      >
        <li className={`px-4 py-3 rounded-md border bg-white`}>
          <div className={`flex flex-col justify-center gap-2`}>
            <h5 className={`text-lg sm:text-xl`}>
              Search Engine Optimization (SEO)
            </h5>
            Boost your website&apos;s visibility and credibility. We optimize
            your online presence, driving organic traffic and maximizing
            conversions.
          </div>
        </li>
        <li className={`px-4 py-3 rounded-md border bg-white`}>
          <div className={`flex flex-col justify-center gap-2`}>
            <h5 className={`text-lg sm:text-xl`}>
              Social Media Marketing (SMM)
            </h5>
            Elevate your brand&apos;s voice on social platforms. We craft
            engaging content, foster community, and increase customer
            interactions.
          </div>
        </li>
        <li className={`px-4 py-3 rounded-md border bg-white`}>
          <div className={`flex flex-col justify-center gap-2`}>
            <h5 className={`text-lg sm:text-xl`}>Web Development</h5>
            Your website is your digital storefront. We design visually
            appealing, user-friendly sites that reflect your brand essence and
            captivate your audience.
          </div>
        </li>
        <li className={`px-4 py-3 rounded-md border bg-white`}>
          <div className={`flex flex-col justify-center gap-2`}>
            <h5 className={`text-lg sm:text-xl`}>Content Marketing</h5>
            Content Marketing Content is king. Our team creates compelling,
            relevant content that tells your story. We engage and convert your
            audience, building lasting relationships.
          </div>
        </li>
      </ol>
      <Link href={`/contact`} className={`rounded-md focus:outline-none`}>
        <Button>Get Started Now</Button>
      </Link>
    </div>
  );
}

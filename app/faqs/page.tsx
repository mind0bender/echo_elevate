import FAQItem, { FAQItemProps } from "../components/faq_item";

const faqItems: FAQItemProps[] = [
  {
    question: "What services does Echo Elevate offer?",
    answer:
      "Echo Elevate specializes in a wide range of digital marketing services, including Search Engine Optimization (SEO), Social Media Marketing, Website Development & Design, Content Marketing, Pay-Per-Click (PPC) Advertising, Email Marketing, and more. We offer comprehensive solutions tailored to meet the unique needs of businesses across various industries.",
  },
  {
    question: "How can I contact Echo Elevate?",
    answer:
      "You can easily get in touch with us through multiple channels. Reach out via email at info@echoelevate.com or give us a call at +1 (123) 456-7890. You can also visit our physical office located at 123 Digital Avenue, Tech City, TC 12345. We are available during our business hours to assist you with your inquiries and digital marketing needs.",
  },
  {
    question: "What sets Echo Elevate apart from other digital agencies?",
    answer:
      "At Echo Elevate, our approach is defined by innovation, expertise, and client-focused solutions. What sets us apart is our dedicated team of professionals who stay ahead of the curve in digital marketing trends and technologies. We prioritize client success, offering customized strategies, transparent communication, and measurable results. Our proven track record showcases our ability to drive tangible business growth and elevate online presence for our clients.",
  },
  {
    question: "Do you offer custom solutions?",
    answer:
      "Absolutely! We understand that every business is unique, and one-size-fits-all solutions don't work. That's why we specialize in providing tailored, custom solutions for our clients. Our team collaborates closely with you to understand your specific goals, challenges, and target audience. Based on this understanding, we create personalized digital marketing strategies that align with your business objectives. Whether you need a specific service or a comprehensive marketing campaign, our custom solutions are designed to meet your individual needs.",
  },
  {
    question: "Can I see examples of your work?",
    answer:
      "Certainly! Visit our Portfolio page on our website to explore a diverse range of successful digital marketing campaigns we've executed for our clients. Our portfolio showcases real-life projects, including SEO success stories, engaging social media campaigns, visually appealing websites, and effective content marketing initiatives. These examples demonstrate our expertise, creativity, and ability to deliver results. Feel free to browse through our portfolio to get a closer look at the quality of our work and the impact we've made for businesses like yours.",
  },
];

export default function FrequentlyAskedQuestionsPage(): JSX.Element {
  return (
    <div
      className={`flex flex-col justify-center items-center grow px-6 sm:px-8 md:px-10 py-10 sm:py-16 md:py-20 gap-10`}
    >
      <div
        className={`flex grow gap-10 w-full flex-col justify-around items-center max-w-3xl`}
      >
        <h4 className={`text-2xl sm:text-3xl font-medium text-center`}>
          Frequently Asked Questions
        </h4>
        <ul className={`flex flex-col gap-6 grow w-full`}>
          {faqItems.map((item, index) => (
            <FAQItem key={index} {...item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

import { getFAQData } from "@/lib/sanity/queries/faq";
import CustomAccordion from "./ui/Accordion";

interface FAQItem {
  _id?: string;
  question: string;
  answer: string;
  order?: number;
  published?: boolean;
}

async function FAQAccordion({ faqData }: { faqData?: FAQItem[] }) {
  const faqs = faqData || (await getFAQData());

  return <div>{<CustomAccordion items={faqs!} />}</div>;
}

export default FAQAccordion;

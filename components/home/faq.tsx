import FAQAccordion from "../FaqAccordion";
import { motion, Variants } from "framer-motion";
import MotionWrapper from "../shared/MotionWrapper";

interface FAQData {
  title: string;
  subtitle: string;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  showSection: boolean;
}

const EASE = [0.22, 1, 0.36, 1] as const;

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: 0.5, ease: EASE },
  },
};

function Faq({ faqData }: { faqData: FAQData }) {
  // Don't render if no data and section is disabled
  if (!faqData) {
    return null;
  }


  return (
    <section className='bg-[#FAFDFE]'>
      <div className='container mx-auto py-10 md:py-20 px-4 max-w-7xl'>
        {/* Header */}
        <MotionWrapper
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="mx-auto mb-10 max-w-2xl text-center"
        >
          <h2 className='text-2xl text-[#010101] md:text-4xl font-semibold leading-[1.25] mb-4'>
            {faqData.title}
          </h2>
          <p className='text-base font-medium text-[#363E3F]'>
            {faqData.subtitle}
          </p>
        </MotionWrapper>
        <div className='max-w-3xl mx-auto'>
          <FAQAccordion faqData={faqData.faqs!} />
        </div>
      </div>
    </section>
  );
}

export default Faq;

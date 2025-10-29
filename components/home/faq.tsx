import FAQAccordion from "../FaqAccordion";

interface FAQData {
  title: string;
  subtitle: string;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  showSection: boolean;
}

function Faq({ faqData }: { faqData: FAQData }) {
  // Don't render if no data and section is disabled
  if (!faqData) {
    return null;
  }

  return (
    <div className='bg-[#FAFDFE]'>
      <div className='container mx-auto py-10 md:py-20 px-4 max-w-7xl'>
        <div className='text-center mb-10 max-w-2xl mx-auto'>
          <h2 className='text-2xl text-[#010101] md:text-4xl font-semibold leading-[1.25] mb-4'>
            {faqData.title}
          </h2>
          <p className='text-base font-medium text-[#363E3F]'>
            {faqData.subtitle}
          </p>
        </div>
        <div className='max-w-3xl mx-auto'>
          <FAQAccordion />
        </div>
      </div>
    </div>
  );
}

export default Faq;

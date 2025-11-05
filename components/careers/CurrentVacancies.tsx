import { client } from "@/lib/sanity/client";
import { OPEN_POSITIONS_QUERY } from "@/lib/sanity/queries/careers";
import CurrentVacancy, { ICurrentVacancy } from "./CurrentVacancy";
import { Variants } from "framer-motion";
import MotionWrapper from "../shared/MotionWrapper";

interface OpenPositionsSection {
  title: string;
  subtitle: string;
  showSection: boolean;
  positions: any[];
}

interface CareersPageData {
  openPositionsSection: OpenPositionsSection;
}

interface CurrentVacanciesProps {
  careersPageData: CareersPageData;
}

// Typed easing (cubic-bezier)
const EASE = [0.22, 1, 0.36, 1] as const;

// Variants
const sectionVariants: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: 0.5, ease: EASE },
  },
};

async function CurrentVacancies({ careersPageData }: CurrentVacanciesProps) {
  const { openPositionsSection } = careersPageData;

  if (!openPositionsSection.showSection) {
    return null;
  }

  const openPositions = await client.fetch(OPEN_POSITIONS_QUERY);

  // Transform job positions to match the component's expected format
  const currentVacanciesList: ICurrentVacancy[] = openPositions.map(
    (position: any) => ({
      title: position.title,
      location: position.location,
      description: position.description,
      date: new Date(position.publishedAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      _id: position._id,
      department: position.department,
      employmentType: position.employmentType,
      experienceLevel: position.experienceLevel,
      applicationUrl: position.applicationUrl,
      applicationEmail: position.applicationEmail,
      salaryRange: position.salaryRange,
    })
  );

  return (
    <div className=' bg-[#F9FCFC] py-6 md:py-16 lg:py-24'>
      <div className='max-w-6xl mx-auto'>
        <MotionWrapper
          as='div'
          variants={headerVariants}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.35 }}
          className='mb-8'>
          <h6 className='text-[#009A74] font-medium text-lg'>
            {openPositionsSection.title || "Our current vacancies"}
          </h6>
          {openPositionsSection.subtitle && (
            <h2 className='text-[#363E3F] mt-2 text-2xl lg:text-4xl font-semibold'>
              {openPositionsSection.subtitle}
            </h2>
          )}
        </MotionWrapper>

        <MotionWrapper
          as='div'
          variants={sectionVariants}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.35 }}>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6'>
            {currentVacanciesList.length > 0 ? (
              currentVacanciesList.map((item: ICurrentVacancy) => (
                <CurrentVacancy key={item._id} item={item} />
              ))
            ) : (
              <div className='col-span-full text-center py-12'>
                <p className='text-gray-500 text-lg'>
                  No open positions available at the moment.
                </p>
                <p className='text-gray-400 mt-2'>
                  Check back later for new opportunities!
                </p>
              </div>
            )}
          </div>
        </MotionWrapper>
      </div>
    </div>
  );
}

export default CurrentVacancies;

import Header from "@/components/kobovault/header";
import Hero from "@/components/kobovault/hero";
import TotalControl from "@/components/kobovault/total-control";
import Security from "@/components/kobovault/security";
import BuiltForEveryday from "@/components/kobovault/built-for-everyday";
import Testimonials from "@/components/kobovault/testimonials";
import MoreBenefits from "@/components/kobovault/more-benefits";
import Footer from "@/components/shared/footer";
import SimplifyPaymentBanner from "@/components/kobovault/simplify-payment-banner";
import {
  getKoboVaultPersonalHeader,
  getKoboVaultPersonalHero,
  getKoboVaultPersonalTotalControl,
  getKoboVaultPersonalSecurity,
  getKoboVaultPersonalEveryday,
  getKoboVaultPersonalBenefits,
} from "@/lib/sanity/queries/kobovaultPersonal";
import MotionWrapper from "@/components/shared/MotionWrapper";
import { sectionScrollUp } from "@/lib/animations/variants";

async function page() {
  const [header, hero, totalControl, security, everyday, benefits] =
    await Promise.all([
      getKoboVaultPersonalHeader(),
      getKoboVaultPersonalHero(),
      getKoboVaultPersonalTotalControl(),
      getKoboVaultPersonalSecurity(),
      getKoboVaultPersonalEveryday(),
      getKoboVaultPersonalBenefits(),
    ]);

  return (
    <main>
      <Header
        logo={header?.logo as any}
        navLinks={header?.navLinks}
        ctaButton={header?.ctaButton}
      />
      <Hero data={hero as any} />
      <MotionWrapper
        variants={sectionScrollUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <TotalControl data={totalControl as any} />
      </MotionWrapper>
      <MotionWrapper
        variants={sectionScrollUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Security data={security as any} />
      </MotionWrapper>
      <MotionWrapper
        variants={sectionScrollUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <BuiltForEveryday data={everyday as any} />
      </MotionWrapper>
      <MotionWrapper
        variants={sectionScrollUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Testimonials />
      </MotionWrapper>
      <MotionWrapper
        variants={sectionScrollUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <MoreBenefits data={benefits as any} />
      </MotionWrapper>
      <MotionWrapper
        variants={sectionScrollUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <SimplifyPaymentBanner />
      </MotionWrapper>
      <Footer />
    </main>
  );
}

export default page;

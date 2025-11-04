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
      <TotalControl data={totalControl as any} />
      <Security data={security as any} />
      <BuiltForEveryday data={everyday as any} />
      <Testimonials />
      <MoreBenefits data={benefits as any} />
      <SimplifyPaymentBanner />
      <Footer />
    </main>
  );
}

export default page;

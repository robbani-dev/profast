
import Banner from "./home/Banner";
import HowItWorks from "./home/HowItWorks";
import OurServices from "./home/OurServices";
import CompanyMarquee from "./home/CompanyMarquee";
import Services from "./home/services";
import Merchant from "./home/Merchant";
import CustomerSay from "./home/CustomerSay";
import FAQ from "./home/FAQ";

export default function Home() {
  return (
    <div>
      <Banner />
      <HowItWorks />
      <OurServices />
      <CompanyMarquee />
      <Services />
      <Merchant />
      <CustomerSay />
      <FAQ />
    </div>
  );
}

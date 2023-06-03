import Console from "./landing/console-features";
import Hero from "./landing/hero";
import { PrimaryFeatures } from "./landing/primary-features";
import Testimonial from "./landing/testimonial";
import Stats from "./landing/stats";
import Faqs from "./landing/faqs";
import Pricing from "./landing/pricing";
import PersonalCommunication from "./landing/personal-communication";

export default function Home() {
  return (
    <main>
      <Hero />
      <PrimaryFeatures />
      <Console />
      <PersonalCommunication />
      <Stats />
      <Testimonial />
      <Pricing />
      <Faqs />
    </main>
  );
}

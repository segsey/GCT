import "../css/index.css";
import Hero from "../components/index components/hero/hero.jsx";
import LearningTrack from "../components/index components/learning track/learning-track.jsx";
import WhyChooseGCT from "../components/index components/why choose/why-choose-gct.jsx";
import Testimony from "../components/index components/testimony/testimony.jsx";
import FAQ from "../components/index components/faq/faq.jsx";

function Index() {
  return (
    <>
      <Hero />
      <LearningTrack />
      <WhyChooseGCT />
      <Testimony />
      <FAQ />
    </>
  );
}

export default Index;

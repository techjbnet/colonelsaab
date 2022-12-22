import Layout from "../components/Layout";
import Slider from "../components/AboutArt/Slider";
import Section1 from "../components/AboutArt/Section1";
import Section2 from "../components/AboutArt/Section2";
import Section3 from "../components/AboutArt/Section3";
import RoopPartapChoudhary from "../components/AboutArt/RoopPartapChoudhary";
import KarenAnand from "../components/AboutArt/KarenAnand";
import AntonyBertin from "../components/AboutArt/AntonyBertin";

const AboutArt = () => {
  return (
    <>
      <div className="">
        <Layout>
          <Slider />
          <Section1 />
          <Section2 />
          <Section3 />
          <RoopPartapChoudhary />
          <KarenAnand />
          <AntonyBertin />
        </Layout>
      </div>
    </>
  );
};

export default AboutArt;

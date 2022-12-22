import Layout from "../components/Layout";
import Slider from "../components/Story/Slider";
import Section1 from "../components/Story/Section1";
import Section2 from "../components/Story/Section2";
import Section3 from "../components/Story/Section3";
import Section4 from "../components/Story/Section4";
import Section5 from "../components/Story/Section5";
import Section6 from "../components/Story/Section6";

const Story = () => {
  return (
    <div className="">
      <Layout>
        <Slider />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
      </Layout>
    </div>
  );
};

export default Story;

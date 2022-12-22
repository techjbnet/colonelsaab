import Layout from "../components/Layout";
import Slider from "../components/PrivateDining/Slider";
import Section1 from "../components/PrivateDining/Section1";
import Section2 from "../components/PrivateDining/Section2";
import Section3 from "../components/PrivateDining/Section3";
import Section4 from "../components/PrivateDining/Section4";

const PrivateDining = () => {
  return (
    <Layout>
      <Slider />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </Layout>
  );
};

export default PrivateDining;

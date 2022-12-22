import Layout from "../components/Layout";
import Slider from "../components/WhatsOn/Slider";
import Section1 from "../components/WhatsOn/Section1";
import Section2 from "../components/WhatsOn/Section2";

const WhatsOn = () => {
  return (
    <Layout>
      {/* carousel */}
      <Slider />

      {/* section 1 */}
      <Section1 />

      {/* section 2 */}
      <Section2 />
    </Layout>
  );
};

export default WhatsOn;

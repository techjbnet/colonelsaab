import Layout from "../components/Layout";
import Slider from "../components/Blog1/Slider";
import Section1 from "../components/Blog1/Section1";
import Section2 from "../components/Blog1/Section2";

const Blog1 = () => {
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

export default Blog1;

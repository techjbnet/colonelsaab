import Layout from "../components/Layout";
import Slider from "../components/Blog/Slider";
import Section1 from "../components/Blog/Section1";
import Section2 from "../components/Blog/Section2";

const Blog = () => {
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

export default Blog;

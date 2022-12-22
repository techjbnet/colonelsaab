import Layout from "../components/Layout";
import Slider from "../components/Menu/Slider";
import Section1 from "../components/Menu/Section1";
import Section2 from "../components/Menu/Section2";
import Section3 from "../components/Menu/Section3";
import Section4 from "../components/Menu/Section4";
// import Section5 from "../components/Menu/Section5";

export const Menu = () => {
  return (
    <Layout>
      {/* carousel */}
      <Slider />

      {/* section 1 */}
      <Section1 />

      {/* section 2 */}
      <Section2 />

      {/* section 3 */}
      <Section3 />

      {/* section 4 */}
      <Section4 />

      {/* section 5 */}
      {/* <Section5 /> */}
    </Layout>
  );
};

export default Menu;

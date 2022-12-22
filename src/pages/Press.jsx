import { useState } from "react";
import Layout from "../components/Layout";
import Section1 from "../components/Press/Section1";
import Section2 from "../components/Press/Section2";
import Section3 from "../components/Press/Section3";

const Press = () => {
  const [year, setYear] = useState(new Date().getFullYear() - 1);
  return (
    <Layout>
      <Section1 />

      <Section2 year={year} />

      <Section3 setYear={setYear} />
    </Layout>
  );
};

export default Press;

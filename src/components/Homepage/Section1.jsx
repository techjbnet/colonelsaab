import ElephantImg from "../../assets/images/Elephant.jpg";
import Fade from "react-reveal/Fade";

const Section1 = () => {
  return (
    <Fade delay={500}>
      <div className="container-fluid mb-5 px-0">
        <img className="img-fluid w-100" src={ElephantImg} alt="elephant" />
      </div>
    </Fade>
  );
};

export default Section1;

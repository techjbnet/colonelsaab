// import useWindowSize from "../Hook/windowSize";
import Slider1 from "../../assets/images/StorySlider1.jpg";

const Slider = () => {
  // const windowSize = useWindowSize();
  return (
    // <div className={windowSize.width < 992 ? "vh-50 overflow-hidden" : "vh-50"}>
    <div className={"vh-50"}>
      <img
        // className={windowSize.width >= 992 && "img-fluid"}
        className={"img-fluid"}
        src={Slider1}
        alt="First slide"
        // width={windowSize.width < 992 && 992}
      />
    </div>
  );
};

export default Slider;

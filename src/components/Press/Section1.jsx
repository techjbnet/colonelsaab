import Award1 from "../../assets/images/Award1.webp";
import Award2 from "../../assets/images/Award2.webp";
import Award3 from "../../assets/images/Award3.webp";
import useWindowSize from "../Hook/windowSize";

const Section1 = () => {
  const windowSize = useWindowSize();
  return (
    <div className="container-fluid vh-50 px-5 py-3">
      <div className="row">
        <div className="col-12 text-center d-flex flex-column align-items-center">
          <h2 className="mt-3 text-success">Press</h2>
          <p className="text-success">
            Colonel Saab in the Press, Indian restaurant Covent Garden
          </p>
          <hr className="text-center w-50" />
          <h2 className="mt-3 text-success">Awards</h2>
          <div className="w-100 d-flex justify-content-evenly">
            <img
              src={Award1}
              className={windowSize.width > 600 && "img-fluid"}
              alt="Award1"
              style={{
                width: windowSize.width <= 600 && "60%",
                height: windowSize.width <= 600 && "60%",
                padding: windowSize.width <= 600 && "3px",
              }}
            />
            <img
              src={Award2}
              className={windowSize.width > 600 && "img-fluid"}
              alt="Award2"
              style={{
                width: windowSize.width <= 600 && "60%",
                height: windowSize.width <= 600 && "60%",
                padding: windowSize.width <= 600 && "3px",
              }}
            />
            <img
              src={Award3}
              className={windowSize.width > 600 && "img-fluid"}
              alt="Award3"
              style={{
                width: windowSize.width <= 600 && "60%",
                height: windowSize.width <= 600 && "60%",
                padding: windowSize.width <= 600 && "3px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;

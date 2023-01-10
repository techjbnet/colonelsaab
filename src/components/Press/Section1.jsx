import { width } from "@mui/system";
import { Carousel } from "react-bootstrap";
import Award1 from "../../assets/images/award/Asian Curry Awards (2) 1.png";
import Award2 from "../../assets/images/award/British Curry Awards 1.png";
import Award3 from "../../assets/images/award/opentable 1.png";
import Award4 from "../../assets/images/award/opentable 2.png";
import Award5 from "../../assets/images/award/opentable 3.png";
import useWindowSize from "../Hook/windowSize";

const Section1 = () => {
  const windowSize = useWindowSize();
  return (
    <div className="container-fluid vh-50 px-5 py-3">
      <div className="row">
        <div className="col-12 text-center d-flex flex-column align-items-center">
          <h3 className="fw-bolder mt-5 text-success mb-3">Awards</h3>
          <Carousel>
            <Carousel.Item>
            <div className="d-flex flex-row align-items-center justify-content-around mx-5">
              <img height={150} style={{width:"150px"}} src={Award1} alt="" />
              <img height={150} style={{width:"150px"}} src={Award2} alt="" />
              <img height={150} style={{width:"150px"}} src={Award3}  alt="" />
              <img height={150} style={{width:"150px"}} src={Award4}  alt="" />
              <img height={150} style={{width:"150px"}} src={Award5}  alt="" />
            </div>
            </Carousel.Item>
          </Carousel>
          <h3 className="fw-bolder mt-3 text-success">Press</h3>
          <hr style={{width:"25%", color:"green", height:"5px", margin:"0"}}/>
          <p className="fw-bolder text-success fs-5">Colonel Saab in the Press, Indian restaurant Covent Garden </p>
        </div>
      </div>
    </div>
  );
};

export default Section1;

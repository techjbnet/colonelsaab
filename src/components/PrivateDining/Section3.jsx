import { useRef } from "react";
import { NavLink } from "react-router-dom";
import Fade from "react-reveal/Fade";
import useOnScreen from "../Hook/useOnScreen";
import PrimaryButton from "../Layout/Button/PrimaryButton";
import PrivateDiningRoom from "../../assets/images/privateDining.jpg";
import useWindowSize from "../Hook/windowSize";

const Section3 = () => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);
  const windowSize = useWindowSize();

  return (
    <div ref={ref} className="container-fluid mt-4 mt-lg-0 mb-lg-5 px-2">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-7 d-none d-lg-flex align-items-center">
            <img
              className={isVisible ? "img-fluid image-reveal" : "img-fluid"}
              style={{
                marginLeft: windowSize.width >= 992 && "-3rem",
              }}
              src={PrivateDiningRoom}
              alt="PrivateDiningRoom"
            />
          </div>
          <div className="col-12 col-lg-5 text-center d-flex flex-column justify-content-center">
            <Fade bottom delay={100}>
              <h2 className="mt-3 text-center text-success">
                Complete Luxury Dining Experience
              </h2>
              <p className="text-center">
                The rooms feature large windows allowing for plenty of natural
                daylight and complimenting all the beautiful artworks adorning
                the shelves and walls. The picturesque setting allows for
                parties to hire either one or combine both dining rooms to
                create a larger space. Included in your hire is the stunning
                large oval wooden tables for up to 15 guests each. These can be
                cleared for standing receptions and replaced with high poseur
                tables.
                <br />
                Complimentary Wi-Fi and speakers for background music are
                included, and guests are welcome to bring in a DJ upon request.
              </p>
              <NavLink
                to="/menu"
                className="custom-cursor"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                <PrimaryButton className="mt-3">
                  PRIVATE DINING MENUS
                </PrimaryButton>
              </NavLink>
            </Fade>
          </div>
          <div className="col-12 col-lg-7 mt-4 mt-lg-0 d-flex d-lg-none align-items-center">
            <img
              className={isVisible ? "img-fluid image-reveal" : "img-fluid"}
              style={{
                marginLeft: windowSize.width >= 992 && "-3rem",
              }}
              src={PrivateDiningRoom}
              alt="PrivateDiningRoom"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;

import { useState, useRef } from "react";
import Fade from "react-reveal/Fade";
import useOnScreen from "../Hook/useOnScreen";
import PrimaryButton from "../Layout/Button/PrimaryButton";
import SubscriptionModal from "../Layout/Modal/SubscriptionModal";
import AboutTheArt1 from "../../assets/images/IndianBestRestaurant2.jpg";
// import YellowElephant from "../../assets/images/yellowElephant.png";
import { NavLink } from "react-router-dom";

const Section4 = () => {
  const [downloadModal, setDownloadModal] = useState(false);
  const ref = useRef();
  const isVisible = useOnScreen(ref);
  return (
    <>
      <div ref={ref} className="container-fluid py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 text-center px-lg-5 d-flex flex-column justify-content-center align-items-center">
              <Fade bottom delay={100}>
                {/* <img
                  className="img-fluid mx-auto d-block"
                  src={YellowElephant}
                  alt="YellowElephant"
                  width={150}
                /> */}
                <h2 className="mt-3 fw-bold text-success">
                  Indian Art at Colonel Saab
                </h2>
                <p className="text-warning text-center">
                  ORNATE GLASS CHANDELIERS AND ARTEFACTS THAT TELL A TALE
                </p>
                <p className="text-center">
                  Dining at Colonel Saab is also a feast for the eyes, with a
                  treasure trove of eclectic Indian art and artefacts collected
                  by Roop Partap Choudhary’s family on their travels, lovingly
                  brought to London.
                  <br />
                  <br />
                  The main restaurant features a carved temple door from South
                  India, you will find a grand, pure silver door from
                  a Gujarat temple embellishing the staircase.
                  <br />
                  <br />
                  <NavLink
                    to="/about-the-art"
                    end
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                  >
                    <PrimaryButton
                    // onClick={() => {
                    //   setDownloadModal(true);
                    // }}
                    >
                      {/* SUBSCRIBE */}
                      READ MORE
                    </PrimaryButton>
                  </NavLink>
                  <br />
                  <br />
                  For a combination of classic elegance with exotic art, Colonel
                  Saab is a perfect place for a meal, after-work cocktails or
                  private event.
                </p>
                {/* <NavLink
                  to="/about-the-art"
                  end
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  <PrimaryButton
                  // onClick={() => {
                  //   setDownloadModal(true);
                  // }}
                  >
                    
                    READ MORE
                  </PrimaryButton>
                </NavLink> */}
              </Fade>
            </div>
            <div className="col-12 col-lg-6 d-flex align-items-center pt-5 pt-lg-0">
              <img
                className={isVisible ? "img-fluid image-reveal" : "img-fluid"}
                src={AboutTheArt1}
                alt="AboutTheArt1"
              />
            </div>
          </div>
        </div>
      </div>
      {downloadModal && (
        <SubscriptionModal
          size="sm"
          show={downloadModal}
          onHide={() => setDownloadModal(!downloadModal)}
        />
      )}
    </>
  );
};

export default Section4;

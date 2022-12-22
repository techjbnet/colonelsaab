import { useState, useRef } from "react";
import Fade from "react-reveal/Fade";
import useOnScreen from "../Hook/useOnScreen";
import PrimaryButton from "../Layout/Button/PrimaryButton";
import SubscriptionModal from "../Layout/Modal/SubscriptionModal";
import MenuRoom from "../../assets/images/MenuRoom.jpg";

const Section2 = () => {
  const [downloadModal, setDownloadModal] = useState(false);
  const ref = useRef();
  const isVisible = useOnScreen(ref);

  return (
    <div ref={ref} className="container-fluid px-2 mb-lg-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-5 text-center d-flex flex-column justify-content-center">
            <Fade bottom delay={100}>
              <h2 className="mt-2 text-center text-success">
                Our Story - Indian Restaurant Covent Garden
              </h2>
              {/* <p className="text-center text-warning">
                ORNATE COLOURED GLASS CHANDELIERS AT THIS ECLECTIC INDIAN
                RESTAURANT IN COVENT GARDEN SHOWCASING A COLLECTION OF ORIGINAL
                INDIAN ARTIFACTS
              </p> */}
              {/* <p className="text-center text-warning">S</p> */}
              <p className="text-center">
                Colonel Saab is situated in the Grade II listed Holborn Town
                Hall building, which first opened as a public library in 1894.
                Today, apart from a few original features the new exotic design
                and decor of the restaurant compliments the old building with
                warm colours, brass and wood features and a stunning collection
                of chandeliers which have been handcrafted and shipped over from
                India.
                <br />
                <br />
                In addition to the restaurant and bar, we have two tastefully
                designed private dining rooms which accommodate up to 60 people
                standing or 30 for a seated dinner, creating the ideal setting
                for any corporate dining or celebratory event.
              </p>
              <PrimaryButton
                className="mt-3"
                onClick={() => {
                  setDownloadModal(true);
                }}
              >
                SUBSCRIBE
              </PrimaryButton>
            </Fade>
          </div>
          <div className="col-12 col-lg-7 mt-4 mt-lg-0 d-flex align-items-center">
            <img
              className={
                isVisible
                  ? "img-fluid image-reveal ms-lg-5"
                  : "img-fluid ms-lg-5"
              }
              src={MenuRoom}
              alt="MenuRoom"
            />
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
    </div>
  );
};

export default Section2;

import { useState, useRef } from "react";
import PrimaryButton from "../Layout/Button/PrimaryButton";
import SubscriptionModal from "../Layout/Modal/SubscriptionModal";
import useOnScreen from "../Hook/useOnScreen";
import Download from "../../assets/images/download.svg";
import Afternoon from "../../assets/images/Afternoon.jpg";
import AfternoonTeaMenu from "../../assets/pdf/AfternoonTeaMenu.pdf";
import { saveAs } from "file-saver";

const Section3 = () => {
  const [downloadModal, setDownloadModal] = useState(false);
  const divRef = useRef();
  const isVisible = useOnScreen(divRef);

  return (
    <div
      ref={divRef}
      id="AFTERNOONTEAMENU"
      className="container-fluid px-2 py-5"
    >
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 d-none d-lg-flex flex-column justify-content-center text-center">
            <img
              className={isVisible ? "img-fluid image-reveal" : "img-fluid"}
              src={Afternoon}
              alt="Afternoon"
            />
          </div>
          <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center">
            {isVisible && (
              <>
                <h2 className="mb-3 text-center text-success">
                  <span className="d-inline-block">Afternoon Tea Menu</span>
                </h2>
                <p className="mt-3">
                  For One 25
                  <br />
                  For Two 48
                </p>
                <p className="px-5 text-center">
                  Selection of finger dhokla sandwiches with coriander and mint
                  chutney, Veg. sandwich and Samosa.
                  <br />
                  <br />
                  Freshly baked raisins scones with clotted cream and strawberry
                  jam, raspberry tart & chocolate silk cake.
                  <br />
                  <br />
                  Selection of tea cakes. A choice of tea/coffee from our
                  selection.
                </p>

                <PrimaryButton
                  className="mt-3"
                  onClick={() => {
                    // setDownloadModal(true);
                    saveAs(AfternoonTeaMenu, "AfternoonTeaMenu.pdf");
                  }}
                >
                  <img
                    className="img-fluid me-2"
                    src={Download}
                    alt="Download"
                    width={20}
                  />
                  DOWNLOAD MENU
                </PrimaryButton>
              </>
            )}
          </div>
          <div className="col-12 col-lg-6 mt-4 mt-lg-0 d-flex d-lg-none flex-column justify-content-center text-center">
            <img
              className={isVisible ? "img-fluid image-reveal" : "img-fluid"}
              src={Afternoon}
              alt="Afternoon"
            />
          </div>
        </div>
        {downloadModal && (
          <SubscriptionModal
            size="sm"
            show={downloadModal}
            onHide={() => setDownloadModal(!downloadModal)}
            download={true}
            pdf="AfternoonTeaMenu"
          />
        )}
      </div>
    </div>
  );
};

export default Section3;

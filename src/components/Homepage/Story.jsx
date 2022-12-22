import { useRef, useState } from "react";
import Fade from "react-reveal/Fade";
import useOnScreen from "../Hook/useOnScreen";
import LotusImg from "../../assets/images/lotus pink.png";
import StoryImage from "../../assets/images/Story.jpg";
import PrimaryButton from "../Layout/Button/PrimaryButton";
import BookingModal from "../Layout/Modal/BookingModal";

const Story = () => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);
  const [bookingModal, setBookingModal] = useState(false);

  return (
    <div ref={ref} className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 text-center d-none d-lg-flex align-items-center">
            <img
              className={isVisible ? "img-fluid image-reveal" : "img-fluid"}
              src={StoryImage}
              alt="StoryImage"
            />
          </div>
          <div className="col-12 col-lg-6 px-lg-5 text-center">
            <Fade bottom delay={100}>
              <img
                className="img-fluid"
                src={LotusImg}
                alt="lotus"
                width={40}
              />
              <h2 className="mt-3 fw-bold text-success">Our Story</h2>
              <p className="text-warning text-center">
                COLONEL SAAB INDIAN RESTAURANT IN COVENT GARDEN
              </p>
              <p className="mb-3 text-center">
                Located at the former Holborn Town Hall in the heart of Central
                London, Colonel Saab is a modern Indian restaurant from Roop
                Partap Choudhary, offering a smart Indian fine dining
                experience. The restaurant is inspired by the travel tales of
                Roop&apos;s father, an Indian Army officer Col. Manbeer
                Choudhary and his wife Mrs. Binny Choudhary across the Indian
                subcontinent, created by Roop as a “love letter” to his family,
                as well as homage to India.
              </p>
              <p className="mb-3 text-center">
                With old-style jazz music, museum worthy artwork and a modern
                twist on the flavours and textures of India, Colonel Saab is a
                contemporary viewpoint with an old soul, and a nostalgic palate
                of memories, aromas and flavours.
              </p>
              <PrimaryButton
                onClick={() => {
                  setBookingModal(true);
                }}
              >
                BOOK NOW
              </PrimaryButton>

              {/* <img
                  className="img-fluid"
                  src={lotusImgReverse}
                  alt="lotus"
                  width={40}
                /> */}
            </Fade>
          </div>
          <div className="col-12 col-lg-6 text-center d-flex d-lg-none align-items-center pt-5 pt-lg-0">
            <img
              className={isVisible ? "img-fluid image-reveal" : "img-fluid"}
              src={StoryImage}
              alt="StoryImage"
            />
          </div>
        </div>
      </div>
      {bookingModal && (
        <BookingModal
          show={bookingModal}
          onHide={() => setBookingModal(!bookingModal)}
        />
      )}
    </div>
  );
};

export default Story;

import { useRef, useState } from "react";
import Fade from "react-reveal/Fade";
import useOnScreen from "../Hook/useOnScreen";
import PrimaryButton from "../Layout/Button/PrimaryButton";
import BookingModal from "../Layout/Modal/BookingModal";
// import YellowElephant from "../../assets/images/yellowElephant.png";
import PrivateDiningPhoto from "../../assets/images/privateDining.jpg";

const PrivateDining = () => {
  const ref = useRef();
  const [bookingModal, setBookingModal] = useState(false);
  const isVisible = useOnScreen(ref);

  return (
    <div
      ref={ref}
      className="container-fluid d-flex align-items-center justify-content-center px-2 py-3 py-lg-5"
    >
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 px-lg-5 text-center">
            <Fade bottom delay={100}>
              {/* <img
                className="img-fluid"
                src={YellowElephant}
                alt="YellowElephant"
                width={150}
              /> */}
              <h2 className="mt-3 fw-bold text-success">
                Private Dining Rooms
                <br />
                Covent Garden
              </h2>
              <p className="text-warning">EVENTS FROM 10 - 130 PEOPLE</p>
              <p className="mt-3 text-center">
                Our team of culinary experts would like to welcome you and your
                guests to dine in one of our four dining areas; at the main
                arena, the mezzanine or at two of our private dining rooms.
                <br />
                <br />
                Whether you’re celebrating special occasions with friends and
                family or you’d like to hold an important business meeting over
                lunch or unwind for a cocktail getogether, we welcome groups of
                10 to 60 guests to enjoy the moment at the privacy of one of our
                stunning private dining rooms.
                <br />
                <br />
                <PrimaryButton
                  onClick={() => {
                    setBookingModal(true);
                  }}
                >
                  MAKE A BOOKING
                </PrimaryButton>
                <br />
                <br />
                <span style={{ fontSize: "0.8rem" }}>
                  Exclusive hire is also available for larger parties up to 130
                  guests, email our team&nbsp;
                  <a
                    className="text-decoration-none text-warning"
                    title="Email restaurant Covent Garden"
                    href="mailto:reservations@colonelsaab.co.uk"
                  >
                    reservations@colonelsaab.co.uk
                  </a>
                </span>
                {/* <br />
                Our team of chefs would like to welcome you to eat in one of our
                four dining areas; the ground floor restaurant, the main arena,
                the mezzanine and our two private dining rooms. */}
              </p>
              {/* <PrimaryButton
                className="mt-3"
                onClick={() => {
                  setBookingModal(true);
                }}
              >
                MAKE A BOOKING
              </PrimaryButton> */}
            </Fade>
          </div>
          <div className="col-12 col-lg-6 pt-5 pt-lg-0 d-flex align-items-center">
            <img
              className={isVisible ? "img-fluid image-reveal" : "img-fluid"}
              src={PrivateDiningPhoto}
              alt="PrivateDining"
            />
          </div>
          {bookingModal && (
            <BookingModal
              show={bookingModal}
              onHide={() => setBookingModal(!bookingModal)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PrivateDining;

import { useState, useEffect } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import CookieModal from "./Modal/CookieModal";
import BookingModal from "./Modal/BookingModal";
import { useCookies } from "react-cookie";
import Reception from "../../assets/images/reception.svg";

const Cookie = () => {
  const [bookingModal, setBookingModal] = useState(false);
  const [cookieModal, setCookieModal] = useState(false);
  const [cookieShow, setCookieShow] = useState(true);
  const [cookies, setCookie] = useCookies(["cookiebar"]);

  useEffect(() => {
    if (cookies.cookiebar) {
      setCookieShow(false);
    }
  }, [cookies]);

  return (
    <>
      <footer
        className={
          cookieShow
            ? "sticky-bottom w-100 d-none d-sm-flex cookie ps-5 pt-2"
            : "sticky-bottom w-100 d-none cookie ps-5 pt-2"
        }
        style={{
          zIndex: 1,
        }}
      >
        <BsCheckCircleFill
          className="me-2 text-pink custom-cursor"
          size={25}
          onClick={() => {
            console.log("click");
            setCookie("cookiebar", "CookieAllowed", {
              path: "/",
              maxAge: 604800,
            });
            setCookieShow(false);
          }}
        />
        <p className="text-light">
          This website makes use of cookies to enhance browsing experience and
          provide additional functionality.
          <span
            role="button"
            className="text-decoration-underline ms-2"
            onClick={() => {
              setCookieModal(true);
            }}
          >
            Details
          </span>
        </p>
        {cookieModal && (
          <CookieModal
            show={cookieModal}
            onHide={() => setCookieModal(!cookieModal)}
          />
        )}
      </footer>
      <footer className="position-fixed bottom-0 w-100 d-flex justify-content-center d-sm-none mt-auto">
        <button
          type="button"
          className="btn w-100 rounded-0 text-light text-center custom-cursor"
          style={{
            backgroundColor: "#f99f49",
          }}
          onMouseOver={(e) => {
            e.target.classList.add(
              "bg-transparent",
              "border",
              "border-1",
              "border-warning"
            );
          }}
          onMouseOut={(e) => {
            e.target.classList.remove(
              "bg-transparent",
              "border",
              "border-1",
              "border-warning"
            );
          }}
          onClick={() => {
            setBookingModal(true);
          }}
        >
          <img
            className="img-fluid me-2"
            src={Reception}
            alt="Reception"
            width={20}
          />
          Book Now
        </button>
      </footer>
      {bookingModal && (
        <BookingModal
          show={bookingModal}
          onHide={() => setBookingModal(!bookingModal)}
        />
      )}
    </>
  );
};

export default Cookie;

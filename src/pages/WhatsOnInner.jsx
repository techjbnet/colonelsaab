import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import Layout from "../components/Layout";
import Slider from "../components/WhatsOnInner/Slider";
import Section1 from "../components/WhatsOnInner/Section1";
import BookingModal from "../components/Layout/Modal/BookingModal";
import { WhatsOn } from "../content";

const WhatsOnInner = () => {
  const [blog, setBlog] = useState();
  const [bookingModal, setBookingModal] = useState(false);
  let { serialNumber, title } = useParams();

  useEffect(() => {
    setBlog(
      WhatsOn.find(
        (element) =>
          element.serialNumber == serialNumber && element.title == title,
      ),
    );
  }, [serialNumber, title]);

  return (
    <Layout>
      {blog && <Slider image={blog.image} />}

      {blog && <Section1 blog={blog} />}

      {blog && (
        <>
          <div className="container-fluid px-5 py-2 ">
            <div className="row text-start">{parse(blog.content)}</div>
            <div className="col-12 text-center">
              <button
                type="button"
                className="btn mt-3 text-light border border-warning rounded-0 custom-cursor"
                style={{
                  backgroundColor: "#277977",
                }}
                onMouseOver={(e) => {
                  e.target.classList.add("bg-transparent", "text-success");
                }}
                onMouseOut={(e) => {
                  e.target.classList.remove("bg-transparent", "text-success");
                }}
                onClick={() => {
                  setBookingModal(true);
                }}
              >
                MAKE A BOOKING
              </button>
            </div>
          </div>
        </>
      )}

      {bookingModal && (
        <BookingModal
          show={bookingModal}
          onHide={() => setBookingModal(!bookingModal)}
        />
      )}
    </Layout>
  );
};

export default WhatsOnInner;

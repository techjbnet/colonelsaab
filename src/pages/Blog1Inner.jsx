import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import Layout from "../components/Layout";
import Slider from "../components/Blog1Inner/Slider";
import Section1 from "../components/Blog1Inner/Section1";
import Section2 from "../components/Blog1Inner/Section2";
import BookingModal from "../components/Layout/Modal/BookingModal";
import { Blog1 } from "../content";

const Blog1Inner = () => {
  const [blog, setBlog] = useState();
  const [bookingModal, setBookingModal] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    setBlog(Blog1[id]);
  }, [id]);

  return (
    <Layout>
      {blog && <Slider image={blog.image} />}

      {blog && <Section1 blog={blog} />}

      {blog && (
        <>
          <div className="container-fluid px-5 py-2 ">
            <div className="row text-center">{parse(blog.content)}</div>
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

      <Section2 />

      {bookingModal && (
        <BookingModal
          show={bookingModal}
          onHide={() => setBookingModal(!bookingModal)}
        />
      )}
    </Layout>
  );
};

export default Blog1Inner;

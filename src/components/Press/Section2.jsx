// import { useState } from "react";
import Slider from "react-slick";
// import PressModal from "../Layout/Modal/PressModal";
import { Press } from "../../content";

const Section2 = (props) => {
  // const [pressModal, setPressModal] = useState(false);
  // const [pressLink, setPressLink] = useState("");

  const settings = {
    arrows: false,
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    focusOnSelect: true,
    speed: 500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className=" py-3">
      <Slider {...settings}>
        {Press.length > 0 &&
          Press.filter((item) => item.year === props.year).map(
            (item, index) => {
              return (
                <div className="px-1 p-sm-3" key={index}>
                  <div className="p-sm-2 border border-success">
                    <div className="card w-100 custom-cursor">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="custom-cursor"
                      >
                        <img
                          src={item.image}
                          className="card-img-top img-fluid w-100"
                          alt="..."
                          style={{ height: "15rem", objectFit: "contain" }}
                        />
                      </a>
                      <div className="card-body bg-secondary press-div">
                        <h2 className="card-title text-light">{item.paper}</h2>
                        <p className="card-text text-light">{item.firstLine}</p>
                        <p className="card-text text-light">
                          {item.secondLine}
                        </p>
                        <h5 className="card-title text-warning">
                          -{item.paper}
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              );
            },
          )}
      </Slider>

      {/* {pressModal && (
        <PressModal show={pressModal} onHide={() => setPressModal(!pressModal)}>
          <iframe
            src={pressLink}
            title={pressLink}
            className="w-100 vh-100"
            frameBorder="0"
            allowFullScreen={true}
          ></iframe>
        </PressModal>
      )} */}
    </div>
  );
};

export default Section2;

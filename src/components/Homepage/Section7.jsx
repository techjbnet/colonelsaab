import { useRef } from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
// import PrimaryButton from "../Layout/Button/PrimaryButton";
// import YellowElephant from "../../assets/images/yellowElephant.png";
import parse from "html-react-parser";
import AfternoonTeaHolbornCoventGardenBloomsbury from "../../assets/images/shopimages/afternoon-tea-holborn-covent-garden-bloomsbury.webp";
import RestaurantCoventGardenNewYearsEve22a from "../../assets/images/shopimages/restaurant-covent-garden-new-years-eve-22a.webp";
import IndianRestaurantCoventGardenCsBestTreats from "../../assets/images/shopimages/indian-restaurant-covent-garden-cs-best-treats.webp";
import PreTheatreMenusInHolbornSoho from "../../assets/images/shopimages/pre-theatre-menus-in-holborn-soho.webp";
import IndianRestaurantCoventGardenSoho2z from "../../assets/images/shopimages/indian-restaurant-covent-garden-soho-2z.webp";
import RestaurantCoventGardenKebabFestival08 from "../../assets/images/shopimages/restaurant-covent-garden-kebab-festival-08.webp";
import RestaurantIndianHolbornCoventGardenBloomsburySoho3 from "../../assets/images/shopimages/restaurant-indian-holborn-covent-garden-bloomsbury-soho-3.webp";
import RestaurantIndianCoventGardenHighballM from "../../assets/images/shopimages/restaurant-indian-covent-garden-highball-m.webp";

const Section7 = () => {
  const ref = useRef();

  const whatsOn = [
    {
      image: RestaurantCoventGardenNewYearsEve22a,
      headline: "<span>New Year's Eve Covent Garden<br/><br/></span>",
      time: "12/11/2022",
      content:
        "Enquire Now New Year's Menu New Year's Eve Restaurant Covent GardenFor an unforgettable New...",
      serialNumber: 26,
      title: "new-years-eve-indian-restaurant-covent-garden-vegan",
    },
    {
      image: IndianRestaurantCoventGardenCsBestTreats,
      headline: "First Year Anniversary Celebrations",
      time: "12/09/2022",
      content:
        "Award-winning, luxury Indian restaurant, Colonel Saab will celebrate its first anniversary this October with...",
      serialNumber: 10,
      title: "first-year-anniversary-celebrations",
    },
    {
      image: IndianRestaurantCoventGardenCsBestTreats,
      headline: "First Year Anniversary Celebrations",
      time: "12/09/2022",
      content:
        "Award-winning, luxury Indian restaurant, Colonel Saab will celebrate its first anniversary this October with...",
      serialNumber: 27,
      title: "first-year-anniversary-celebrations",
    },
    {
      image: PreTheatreMenusInHolbornSoho,
      headline: "<span>Pre-Theatre Menus in Holborn<br/><br/></span>",
      time: "12/09/2022",
      content:
        "Colonel Saab is a modern Indian cuisine restaurant situated in the heart of the city, just a stone throw away from...",
      serialNumber: 11,
      title: "pre-theatre-menus-in-holborn",
    },
    {
      image: IndianRestaurantCoventGardenSoho2z,
      headline: "Christmas Events at Colonel Saab",
      time: "23/06/2022",
      content:
        "Book Your Party Now CHRISTMAS AT COLONEL SAAB LUNCH, DINNER AND STANDING RECEPTIONS Colonel Saab...",
      serialNumber: 76,
      title: "restaurant-covent-garden-christmas-party-menus",
    },
    {
      image: RestaurantCoventGardenKebabFestival08,
      headline: "<span>Kebab Festival Covent Garden<br/><br/></span>",
      time: "08/06/2022",
      content:
        "Get stuck in this summer for over a month of special delicacies, Colonel Saab will be showcasing an...",
      serialNumber: 12,
      title: "kebab-festival-covent-garden",
    },
    {
      image: RestaurantIndianCoventGardenHighballM,
      headline: "<span>Fun Fridays at Colonel Saab!<br/><br/></span>",
      time: "20/04/2022",
      content:
        "It’s time to break the rules on what to drink with Indian food! Join in Colonel Saab's unique Friday night dining...",
      serialNumber: 13,
      title: "fun-fridays-at-colonelsaab",
    },
    {
      image: AfternoonTeaHolbornCoventGardenBloomsbury,
      headline: `<span>Afternoon Tea Covent Garden<br/><br/></span>`,
      time: "10/03/2022",
      content:
        "At award winning Colonel Saab we love to celebrate special occasions, and what better way to do that than...",
      serialNumber: 14,
      title: "afternoon-tea-covent-garden",
    },
    {
      image: RestaurantIndianHolbornCoventGardenBloomsburySoho3,
      headline: "Colonel Saab's Traditional Lunch Tiffin Menu",
      time: "18/02/2022",
      content:
        "*SPECIAL OFFER; COLONEL SAAB'S TRADITIONAL LUNCH TIFFIN MENU 2-COURSES FOR ONLY £29.95. LIMITED...",
      serialNumber: 15,
      title: "colonelsaab-traditional-lunch-tiffin-menu",
    },
  ];

  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div ref={ref} className="container-fluid px-2 py-3 py-lg-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            {/* <img
              className="img-fluid"
              src={YellowElephant}
              alt="YellowElephant"
              width={150}
            /> */}
            <h2 className="mt-3 fw-bold text-success">WHAT&apos;S ON</h2>
            <div className="row m-0">
              <div className="col-12">
                <p className="mt-1 text-center text-warning">
                  CHECKOUT THE LATEST EVENTS AT COLONEL SAAB COVENT GARDEN
                </p>
              </div>
            </div>
            <div className="container-fluid my-4">
              <div className="container align-items-stretch">
                <Slider className="row" {...settings}>
                  {whatsOn.length > 0 &&
                    whatsOn.map((item, index) => {
                      return (
                        <div
                          className={
                            "col-12 col-lg-4 d-flex align-items-stretch h-100 px-3"
                          }
                          key={index}
                        >
                          <div className="card">
                            <img
                              src={item.image}
                              className="card-img-top"
                              alt="..."
                            />
                            <div className="card-body bg-warning d-flex flex-column whatsOn-Slider-Card">
                              <h5 className="card-title text-success">
                                {parse(item.headline)}
                              </h5>
                              <p
                                className="card-text text-light mt-3"
                                // style={{ fontSize: "0.8rem" }}
                              >
                                {item.content}
                              </p>
                              <NavLink
                                to={`/a/${item.serialNumber}/${item.title}`}
                                className="btn text-light border border-warning rounded-0 custom-cursor mt-auto align-self-center"
                                onClick={() => {
                                  window.scrollTo(0, 0);
                                }}
                              >
                                <button
                                  type="button"
                                  className="btn text-light border border-warning rounded-0 custom-cursor mt-auto align-self-center text-uppercase"
                                  style={{
                                    backgroundColor: "#277977",
                                  }}
                                  onMouseOver={(e) => {
                                    e.target.classList.remove("border-warning");
                                    e.target.classList.add(
                                      "bg-transparent",
                                      "text-success",
                                      "border-success",
                                    );
                                  }}
                                  onMouseOut={(e) => {
                                    e.target.classList.remove("border-success");
                                    e.target.classList.remove(
                                      "bg-transparent",
                                      "text-success",
                                      "border-warning",
                                    );
                                  }}
                                >
                                  Read More...
                                </button>
                              </NavLink>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </Slider>
              </div>
              {/* <div className="row mt-4">
                <div className="col-12">
                  <NavLink
                    to="/whats-on"
                    className="custom-cursor"
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                  >
                    <PrimaryButton>SEE ALL</PrimaryButton>
                  </NavLink>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section7;

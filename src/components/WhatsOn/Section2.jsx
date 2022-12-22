import { useState } from "react";
import { NavLink } from "react-router-dom";
import AfternoonTeaHolbornCoventGardenBloomsbury from "../../assets/images/shopimages/afternoon-tea-holborn-covent-garden-bloomsbury.webp";
import RestaurantCoventGardenNewYearsEve22a from "../../assets/images/shopimages/restaurant-covent-garden-new-years-eve-22a.webp";
import IndianRestaurantCoventGardenCsBestTreats from "../../assets/images/shopimages/indian-restaurant-covent-garden-cs-best-treats.webp";
import PreTheatreMenusInHolbornSoho from "../../assets/images/shopimages/pre-theatre-menus-in-holborn-soho.webp";
import IndianRestaurantCoventGardenSoho2z from "../../assets/images/shopimages/indian-restaurant-covent-garden-soho-2z.webp";
import RestaurantCoventGardenKebabFestival08 from "../../assets/images/shopimages/restaurant-covent-garden-kebab-festival-08.webp";
import RestaurantIndianHolbornCoventGardenBloomsburySoho3 from "../../assets/images/shopimages/restaurant-indian-holborn-covent-garden-bloomsbury-soho-3.webp";
import RestaurantIndianCoventGardenHighballM from "../../assets/images/shopimages/restaurant-indian-covent-garden-highball-m.webp";

const Section2 = () => {
  const [slicedIndex, setSlicedIndex] = useState(3);
  const whatsOn = [
    {
      image: RestaurantCoventGardenNewYearsEve22a,
      headline: "New Year's Eve Covent Garden",
      time: "12/11/2022",
      content:
        "Enquire Now New Year's Menu New Year's Eve Restaurant Covent GardenFor an unforgettable New Year’s eve in London, visit Colone...",
      serialNumber: 26,
      title: "new-years-eve-indian-restaurant-covent-garden-vegan",
    },
    {
      image: IndianRestaurantCoventGardenCsBestTreats,
      headline: "First Year Anniversary Celebrations",
      time: "12/09/2022",
      content:
        "Award-winning, luxury Indian restaurant, Colonel Saab will celebrate its first anniversary this October with a twist on an Indian birthday charity tra...",
      serialNumber: 10,
      title: "first-year-anniversary-celebrations",
    },
    {
      image: PreTheatreMenusInHolbornSoho,
      headline: "Pre-Theatre Menus in Holborn",
      time: "12/09/2022",
      content:
        "Colonel Saab is a modern Indian cuisine restaurant situated in the heart of the city, just a stone's throw away from bustling Covent Garden and the ex...",
      serialNumber: 11,
      title: "pre-theatre-menus-in-holborn",
    },
    {
      image: IndianRestaurantCoventGardenSoho2z,
      headline: "Christmas Events at Colonel Saab",
      time: "23/06/2022",
      content:
        "Book Your Party Now CHRISTMAS AT COLONEL SAAB LUNCH, DINNER AND STANDING RECEPTIONS Colonel Saab will play home to an alluring holiday exper...",
      serialNumber: 76,
      title: "restaurant-covent-garden-christmas-party-menus",
    },
    {
      image: RestaurantCoventGardenKebabFestival08,
      headline: "Kebab Festival Covent Garden",
      time: "08/06/2022",
      content:
        "Get stuck in this summer for over a month of special delicacies, Colonel Saab will be showcasing an extraordinary menu of superior kebabs. We are rebr...",
      serialNumber: 12,
      title: "kebab-festival-covent-garden",
    },
    {
      image: RestaurantIndianCoventGardenHighballM,
      headline: "Fun Fridays at Colonel Saab!",
      time: "20/04/2022",
      content:
        "It’s time to break the rules on what to drink with Indian food! Join in Colonel Saab's unique Friday night dining experiences. Join us for a seri...",
      serialNumber: 13,
      title: "fun-fridays-at-colonelsaab",
    },
    {
      image: AfternoonTeaHolbornCoventGardenBloomsbury,
      headline: "Afternoon Tea Covent Garden",
      time: "10/03/2022",
      content:
        "At award winning Colonel Saab we love to celebrate special occasions, and what better way to do that than offering our very own twist on afternoon tea...",
      serialNumber: 14,
      title: "afternoon-tea-covent-garden",
    },
    {
      image: RestaurantIndianHolbornCoventGardenBloomsburySoho3,
      headline: "Colonel Saab's Traditional Lunch Tiffin Menu",
      time: "18/02/2022",
      content:
        "*SPECIAL OFFER; COLONEL SAAB'S TRADITIONAL LUNCH TIFFIN MENU 2-COURSES FOR ONLY £29.95. LIMITED TIME ONLY.* In India food cooked at home with...",
      serialNumber: 15,
      title: "colonelsaab-traditional-lunch-tiffin-menu",
    },
  ];
  return (
    <>
      <div className="container-fluid py-5 ">
        <div className="container">
          <div className="row text-center">
            {whatsOn.length > 0 &&
              whatsOn.slice(0, slicedIndex).map((item, index) => {
                return (
                  <div
                    className={
                      index > 0 && index < 3
                        ? "col-12 mt-4 mt-lg-0 col-lg-4 d-flex align-items-stretch"
                        : index > 2
                        ? "col-12 mt-4 col-lg-4 d-flex align-items-stretch"
                        : "col-12 col-lg-4 d-flex align-items-stretch"
                    }
                    key={index}
                  >
                    <div className="card">
                      <img
                        src={item.image}
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body bg-warning d-flex flex-column">
                        <h5 className="card-title text-success">
                          {item.headline}
                        </h5>
                        <p
                          className="card-text text-success"
                          style={{ fontSize: "0.8rem" }}
                        >
                          Posted: {item.time}
                        </p>
                        <p
                          className="card-text text-light"
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
          </div>
        </div>
      </div>
      <div className="container-fluid px-2 py-5  overflow-hidden">
        <div className="text-center">
          <button
            type="button"
            className={
              slicedIndex < whatsOn.length
                ? "btn text-light m-2 rounded-0 bg-warning border border-success rounded-0 custom-cursor text-uppercase"
                : "btn text-light m-2 rounded-0 bg-warning border border-success rounded-0 custom-cursor text-uppercase d-none"
            }
            onClick={() => {
              setSlicedIndex(slicedIndex + 3);
            }}
          >
            Archive
          </button>
        </div>
      </div>
    </>
  );
};

export default Section2;

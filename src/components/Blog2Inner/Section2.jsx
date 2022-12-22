import { NavLink } from "react-router-dom";
// import RestaurantIndianHolbornCoventGardenBloomsburySoho47 from "./assets/images/shopimages/restaurant-indian-holborn-covent-garden-bloomsbury-soho-47.webp";
// import IndianTakeawayHolbornChefSohansConfitOfCauliflower from "../../assets/images/shopimages/indian-takeaway-holborn-Chef-Sohans-Confit-of-Cauliflower.webp";
import AfternoonTeaHolbornCoventGardenBloomsbury from "../../assets/images/shopimages/afternoon-tea-holborn-covent-garden-bloomsbury.webp";

const Section2 = () => {
  const blog = [
    {
      image: AfternoonTeaHolbornCoventGardenBloomsbury,
      headline: "Vegan Restaurant Covent Garden",
      time: "Posted: 19/02/2021",
      content:
        "Vegan Restaurant Covent GardenIf you haven't heard of Veganuary yet, don’t worry we’re here to tell you all about it! A whole month dedicate...",
    },
    {
      image: AfternoonTeaHolbornCoventGardenBloomsbury,
      headline: "Vegetarian Restaurant Covent Garden",
      time: "Posted: 13/02/2021",
      content:
        "Special Offer; Colonel Saab's traditional lunch tiffin menu 2-courses. Limited time only. Vegetarian Restaurant Covent GardenIn India food cooked a...",
    },
  ];
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="row text-center">
          {blog.length > 0 &&
            blog.map((item, index) => {
              return (
                <div className="col-12 col-lg-4 mb-3 d-flex align-items-stretch">
                  <div className="card w-100">
                    <img src={item.image} className="card-img-top" alt="..." />
                    <div className="card-body bg-warning d-flex flex-column">
                      <h5 className="card-title text-success">
                        {item.headline}
                      </h5>
                      <p
                        className="card-text text-success"
                        style={{ fontSize: "0.8rem" }}
                      >
                        {item.time}
                      </p>
                      <p className="card-text text-light">{item.content}</p>
                      <NavLink
                        to={`/blog2/${index}`}
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
  );
};

export default Section2;

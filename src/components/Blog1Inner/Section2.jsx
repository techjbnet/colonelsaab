import { NavLink } from "react-router-dom";
import AfternoonTeaHolbornCoventGardenBloomsbury from "../../assets/images/shopimages/afternoon-tea-holborn-covent-garden-bloomsbury.webp";
import IndianBestRestaurantCoventGarden1 from "../../assets/images/shopimages/indian-best-restaurant-covent-garden-1.webp";
import MothersDayMenuCoventGardenHolbornBloomsbury from "../../assets/images/shopimages/mothers-day-menu-covent-garden-holborn-bloomsbury.webp";
import RestaurantIndianHolbornCoventGardenBloomsburySoho42 from "../../assets/images/shopimages/restaurant-indian-holborn-covent-garden-bloomsbury-soho-42.jpg";
// import IndianRestaurantCoventGardenDiwali1 from "../../assets/images/shopimages/indian-restaurant-covent-garden-diwali-1.webp";
// import FathersDayMenusCoventGardenLondonIndianVegan from "../../assets/images/shopimages/fathers-day-menus-covent-garden-london-indian-vegan.webp";
// import RestaurantCoventGarden12 from "../../assets/images/shopimages/restaurant-covent-garden-12.webp";

const Section2 = () => {
  const blog = [
    {
      image: AfternoonTeaHolbornCoventGardenBloomsbury,
      headline: "Celebrating Diwali in Style with Roop at Colonel Saab",
      time: "Posted: 04/10/2022",
      content:
        "Among a plethora of festivals celebrated in India, Diwali can be considered as an Indian Christmas. Diwali celebrates the triumph of light over darkne...",
    },
    {
      image: AfternoonTeaHolbornCoventGardenBloomsbury,
      headline: "Father's Day Covent Garden",
      time: "Posted: 01/06/2022",
      content:
        "This Father’s day join us on Sunday 19th June to celebrate with your Dad. Partake of our delectable, all day menu featuring popular Indian favourite...",
    },
    {
      image: AfternoonTeaHolbornCoventGardenBloomsbury,
      headline: "Jubilee Weekend At Colonel Saab",
      time: "Posted: 25/05/2022",
      content:
        "This special extended bank holiday weekend will provide an opportunity for communities and people throughout the United Kingdom to come together to ma...",
    },
    {
      image: IndianBestRestaurantCoventGarden1,
      headline: "Food and Art",
      time: "Posted: 11/04/2022",
      content:
        "Tuesday 24th May, Colonel Saab's founder, Roop Partap Choudhary will personally take diners on a culinary journey across India, with a nine-course tas...",
    },
    {
      image: MothersDayMenuCoventGardenHolbornBloomsbury,
      headline: "Mother's Day Covent Garden",
      time: "Posted: 24/02/2022",
      content:
        "This March we are celebrating the most important person in all of our lives, Mother. If it wasn’t for her, we simply wouldn’t be! Join us for Moth...",
    },
    {
      image: RestaurantIndianHolbornCoventGardenBloomsburySoho42,
      headline: "Valentine's Day Restaurant Covent Garden",
      time: "Posted: 31/12/2021",
      content:
        "Sample menu only, view current menus. Valentine's Day Romantic Dining Covent GardenValentine's at Colonel Saab At Colonel Saab, we are very exci...",
    },
    {
      image: AfternoonTeaHolbornCoventGardenBloomsbury,
      headline: "New Year's Eve Covent Garden",
      time: "Posted: 12/11/2021",
      content:
        "Sample menu only, view current menus. New Year's Eve Restaurant Covent GardenFor an unforgettable New Year’s eve in London, visit Colonel Saab wh...",
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
                        to={`/blog1/${index}`}
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

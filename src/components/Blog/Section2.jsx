import { NavLink } from "react-router-dom";
import IndianBestRestaurantCoventGarden4 from "../../assets/images/shopimages/indian-best-restaurant-covent-garden-4.webp";
import RestaurantIndianHolbornCoventGardenBloomsburySoho45 from "../../assets/images/shopimages/restaurant-indian-holborn-covent-garden-bloomsbury-soho-45.webp";

const Section2 = () => {
  return (
    <>
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-12 col-lg-4 d-flex align-items-stretch">
              <div className="card w-100">
                <img
                  src={IndianBestRestaurantCoventGarden4}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body bg-warning d-flex flex-column">
                  <h5 className="card-title text-success">
                    Celebrations at Restaurant Covent Garden
                  </h5>
                  <p
                    className="card-text text-success"
                    style={{ fontSize: "0.8rem" }}
                  >
                    Posted: 02/03/2021
                  </p>
                  <p className="card-text text-light">
                    Celebrate with us at Restaurant Covent GardenCelebrate your
                    special occasion with us at Colonel Saab including
                    Valentine's Day, M...
                  </p>
                  <NavLink
                    to="/blog1"
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
                          "border-success"
                        );
                      }}
                      onMouseOut={(e) => {
                        e.target.classList.remove("border-success");
                        e.target.classList.remove(
                          "bg-transparent",
                          "text-success",
                          "border-warning"
                        );
                      }}
                    >
                      Read More...
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 d-flex align-items-stretch">
              <div className="card w-100">
                <img
                  src={RestaurantIndianHolbornCoventGardenBloomsburySoho45}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body bg-warning d-flex flex-column">
                  <h5 className="card-title text-success">
                    Food at Restaurant Holborn
                  </h5>
                  <p
                    className="card-text text-success"
                    style={{ fontSize: "0.8rem" }}
                  >
                    Posted: 12/02/2021
                  </p>
                  <p className="card-text text-light">
                    Indian menus at Restaurant HolbornThe extensive menus, with
                    dishes from around India, has been curated by one of
                    India&apos;s top food personalities, K...
                  </p>
                  <NavLink
                    to="/blog2"
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
                          "border-success"
                        );
                      }}
                      onMouseOut={(e) => {
                        e.target.classList.remove("border-success");
                        e.target.classList.remove(
                          "bg-transparent",
                          "text-success",
                          "border-warning"
                        );
                      }}
                    >
                      Read More...
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;

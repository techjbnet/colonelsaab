import { NavLink } from "react-router-dom";
import useWindowSize from "../Hook/windowSize";
import Layer1 from "../../assets/images/Layer1.png";
import Glass from "../../assets/images/glass.png";

const MenuSection = () => {
  const windowSize = useWindowSize();
  const menu = [
    "A-Là-Carte",
    "Tasting Menu",
    "Lunch Tiffin",
    "Afternoon Menu",
    "Beverages",
  ];

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 d-flex align-items-stretch justify-content-center">
            <div
              className={
                windowSize.width > 350
                  ? "px-6 py-2 d-flex flex-column"
                  : "px-5 py-4 d-flex flex-column"
              }
              style={{
                backgroundImage: `url(${Layer1})`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
              }}
            >
              <img
                className="img-fluid mt-3 align-self-center"
                src={Glass}
                alt="Glass"
                width={90}
              />
              <p
                className="mt-2 text-success text-center"
                style={{ fontSize: "1.5rem" }}
              >
                MENU
              </p>
              {menu.length > 0 &&
                menu.map((item, index) => {
                  if (index !== menu.length - 1) {
                    return (
                      <div
                        className={
                          index === 0
                            ? "mt-1 mb-1 d-flex flex-column"
                            : "mb-1 d-flex flex-column"
                        }
                        key={index}
                      >
                        <p
                          className="text-pink lh-1 m-0 menu-text custom-cursor text-center"
                          onMouseOver={(e) => {
                            e.target.classList.add("fw-bold");
                          }}
                          onMouseOut={(e) => {
                            e.target.classList.remove("fw-bold");
                          }}
                        >
                          <span className="d-inline-block">{item}</span>
                        </p>
                      </div>
                    );
                  } else {
                    return (
                      <p
                        className="text-pink lh-1 m-0 custom-cursor mb-3 text-center"
                        key={index}
                        onMouseOver={(e) => {
                          e.target.classList.add("fw-bold");
                        }}
                        onMouseOut={(e) => {
                          e.target.classList.remove("fw-bold");
                        }}
                      >
                        <span className="d-inline-block">{item}</span>
                      </p>
                    );
                  }
                })}

              <NavLink
                to="/menu"
                className="custom-cursor mt-auto align-self-center mb-3"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                <button
                  type="button"
                  className="btn btn-outline text-success rounded-0 border border-pink custom-cursor"
                  onMouseOver={(e) => {
                    e.target.classList.add("bg-warning");
                  }}
                  onMouseOut={(e) => {
                    e.target.classList.remove("bg-warning");
                  }}
                >
                  SEE MORE
                </button>
              </NavLink>
            </div>
          </div>
          <div className="col-12 col-lg-6 mt-4 mt-lg-0 d-flex align-items-stretch justify-content-center">
            <div
              className="py-2 px-4 d-flex flex-column"
              style={{
                backgroundImage: `url(${Layer1})`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
              }}
            >
              <img
                className="img-fluid mt-3 align-self-center"
                src={Glass}
                alt="Glass"
                width={90}
              />
              <p
                className="mt-2 text-success text-center"
                style={{ fontSize: "1.5rem" }}
              >
                MEMSAAB&apos;S TASTING MENU
              </p>
              <p className="mb-1 text-pink text-center">
                Experience a culinary <br />
                journey with Chef <br />
                Sohan Bhandari, <br />
                a curation of his culinary <br />
                heritage and signature <br />
                dishes. <br />
              </p>
              <NavLink
                to="/menu"
                className="custom-cursor mt-auto align-self-center mb-3"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                <button
                  type="button"
                  className="btn btn-outline text-success rounded-0 border border-pink custom-cursor"
                  onMouseOver={(e) => {
                    e.target.classList.add("bg-warning");
                  }}
                  onMouseOut={(e) => {
                    e.target.classList.remove("bg-warning");
                  }}
                >
                  SEE MORE
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuSection;

import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
// import { BsFacebook, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import useWindowSize from "../Hook/windowSize";
import BookingModal from "../Layout/Modal/BookingModal";
import YellowlotusImg from "../../assets/images/yellowLotus.png";
import YellowElephant from "../../assets/images/yellowElephant.png";
import Reception from "../../assets/images/reception.svg";
import WhiteElephant from "../../assets/images/HeaderWhiteElephant.png";
import MenuLogo from "../../assets/images/MenuLogo.png";

const Navbar = () => {
  const windowSize = useWindowSize();
  const [bookingModal, setBookingModal] = useState(false);
  const [menuShow, setMenuShow] = useState(false);
  const [logo, setLogo] = useState(YellowElephant);
  let location = useLocation();
  const handleMouseEnter = (state) => {
    if (state === "in") {
      setLogo(WhiteElephant);
    } else {
      setLogo(YellowElephant);
    }
  };

  return (
    <>
      <nav className="navbar navbar-light sticky-top py-1 px-3 px-sm-5 bg-success">
        <div className="navbar-nav w-100">
          <div className="row">
            <div className="col-12 col-sm-4 d-flex justify-content-between align-items-center align-items-sm-start justify-content-sm-center d-sm-block">
              <NavLink
                to="/"
                className="custom-cursor"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                <img
                  className="img-fluid mx-auto d-block d-sm-none custom-cursor"
                  src={logo}
                  alt="logo"
                  width={70}
                  onMouseOver={() => {
                    handleMouseEnter("in");
                  }}
                  onMouseOut={() => {
                    handleMouseEnter("out");
                  }}
                />
              </NavLink>
              <span
                className="navbar-brand d-flex d-sm-none align-items-center justify-content-center float-start custom-cursor"
                onClick={() => {
                  setMenuShow(true);
                }}
              >
                <img
                  className="img-fluid"
                  src={YellowlotusImg}
                  alt="lotus"
                  width={30}
                />
                <h6 className="ms-2 mt-3 text-light"> MENU</h6>
              </span>
              <span
                className="navbar-brand d-none d-sm-flex align-items-center justify-content-center float-start custom-cursor"
                onClick={() => {
                  setMenuShow(true);
                }}
              >
                <img
                  className="img-fluid"
                  src={YellowlotusImg}
                  alt="lotus"
                  width={35}
                />
                <h4 className="ms-2 mt-3 text-light"> MENU</h4>
              </span>
            </div>
            <div className="col-12 col-sm-4 d-flex justify-content-center align-items-center">
              <NavLink
                to="/"
                className="custom-cursor"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                <img
                  className="img-fluid mx-auto d-none d-sm-block custom-cursor"
                  src={logo}
                  alt="logo"
                  width={110}
                  onMouseOver={() => {
                    handleMouseEnter("in");
                  }}
                  onMouseOut={() => {
                    handleMouseEnter("out");
                  }}
                />
              </NavLink>
            </div>
            <div className="col-12 col-sm-4 d-none d-sm-flex align-items-center justify-content-center justify-content-sm-end">
              <button
                type="button"
                className="btn rounded-0 text-light custom-cursor"
                style={{
                  backgroundColor: "#f99f49",
                }}
                onMouseOver={(e) => {
                  e.target.classList.add(
                    "bg-transparent",
                    "border",
                    "border-1",
                    "border-warning",
                  );
                }}
                onMouseOut={(e) => {
                  e.target.classList.remove(
                    "bg-transparent",
                    "border",
                    "border-1",
                    "border-warning",
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
            </div>
          </div>
        </div>
      </nav>

      {bookingModal && (
        <BookingModal
          show={bookingModal}
          onHide={() => setBookingModal(!bookingModal)}
        />
      )}
      <Offcanvas
        show={menuShow}
        onHide={() => {
          setMenuShow(false);
        }}
        className="bg-success"
        style={{ width: windowSize.width >= 768 && "20%" }}
      >
        <Offcanvas.Header>
          <AiOutlineClose
            className="text-pink custom-cursor p-0"
            onClick={() => {
              setMenuShow(false);
            }}
            size={25}
          />
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            <div className="row">
              <div className="col-12 d-none d-md-block text-center mb-3">
                <NavLink
                  to="/"
                  className="custom-cursor"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  <img
                    className="img-fluid pb-2"
                    src={MenuLogo}
                    alt="MenuLogo"
                    width={"60%"}
                  />
                </NavLink>
              </div>
              <div className="col-12 text-center">
                <ul className="list-unstyled d-flex flex-column">
                  <li>
                    <NavLink
                      className={
                        location.pathname === "/"
                          ? "d-inline-block p-2 position-relative overflow-hidden menu text-warning text-decoration-none custom-cursor"
                          : "d-inline-block p-2 position-relative overflow-hidden menu text-light text-decoration-none custom-cursor"
                      }
                      to="/"
                      end
                      onClick={() => {
                        window.scrollTo(0, 0);
                      }}
                      onMouseOver={(e) => {
                        if (location.pathname !== "/") {
                          e.target.classList.remove("text-light");
                          e.target.classList.add("text-warning");
                        }
                      }}
                      onMouseOut={(e) => {
                        if (location.pathname !== "/") {
                          e.target.classList.remove("text-warning");
                          e.target.classList.add("text-light");
                        }
                      }}
                    >
                      <h4 className="text-uppercase">Home</h4>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={
                        location.pathname === "/menu"
                          ? "d-inline-block p-2 position-relative overflow-hidden menu  text-warning text-decoration-none custom-cursor"
                          : "d-inline-block p-2 position-relative overflow-hidden menu  text-light text-decoration-none custom-cursor"
                      }
                      to="/menu"
                      end
                      onClick={() => {
                        window.scrollTo(0, 0);
                      }}
                      onMouseOver={(e) => {
                        if (location.pathname !== "/menu") {
                          e.target.classList.remove("text-light");
                          e.target.classList.add("text-warning");
                        }
                      }}
                      onMouseOut={(e) => {
                        if (location.pathname !== "/menu") {
                          e.target.classList.remove("text-warning");
                          e.target.classList.add("text-light");
                        }
                      }}
                    >
                      <h4 className="text-uppercase">Menus</h4>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={
                        location.pathname === "/story"
                          ? "d-inline-block p-2 position-relative overflow-hidden menu text-warning text-decoration-none custom-cursor"
                          : "d-inline-block p-2 position-relative overflow-hidden menu text-light text-decoration-none custom-cursor"
                      }
                      to="/story"
                      end
                      onClick={() => {
                        window.scrollTo(0, 0);
                      }}
                      onMouseOver={(e) => {
                        if (location.pathname !== "/story") {
                          e.target.classList.remove("text-light");
                          e.target.classList.add("text-warning");
                        }
                      }}
                      onMouseOut={(e) => {
                        if (location.pathname !== "/story") {
                          e.target.classList.remove("text-warning");
                          e.target.classList.add("text-light");
                        }
                      }}
                    >
                      <h4 className="text-uppercase">Our Story</h4>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={
                        location.pathname === "/about-the-art"
                          ? "d-inline-block p-2 position-relative overflow-hidden menu text-warning text-decoration-none custom-cursor"
                          : "d-inline-block p-2 position-relative overflow-hidden menu text-light text-decoration-none custom-cursor"
                      }
                      to="/about-the-art"
                      end
                      onClick={() => {
                        window.scrollTo(0, 0);
                      }}
                      onMouseOver={(e) => {
                        if (location.pathname !== "/about-the-art") {
                          e.target.classList.remove("text-light");
                          e.target.classList.add("text-warning");
                        }
                      }}
                      onMouseOut={(e) => {
                        if (location.pathname !== "/about-the-art") {
                          e.target.classList.remove("text-warning");
                          e.target.classList.add("text-light");
                        }
                      }}
                    >
                      <h4 className="text-uppercase">About The Art</h4>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={
                        location.pathname === "/private-dining-rooms"
                          ? "d-inline-block p-2 position-relative overflow-hidden menu text-warning text-decoration-none custom-cursor"
                          : "d-inline-block p-2 position-relative overflow-hidden menu text-light text-decoration-none custom-cursor"
                      }
                      to="/private-dining-rooms"
                      end
                      onClick={() => {
                        window.scrollTo(0, 0);
                      }}
                      onMouseOver={(e) => {
                        if (location.pathname !== "/private-dining-rooms") {
                          e.target.classList.remove("text-light");
                          e.target.classList.add("text-warning");
                        }
                      }}
                      onMouseOut={(e) => {
                        if (location.pathname !== "/private-dining-rooms") {
                          e.target.classList.remove("text-warning");
                          e.target.classList.add("text-light");
                        }
                      }}
                    >
                      <h4 className="text-uppercase">Private Dining</h4>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={
                        location.pathname === "/gallery"
                          ? "d-inline-block p-2 position-relative overflow-hidden menu text-warning text-decoration-none custom-cursor"
                          : "d-inline-block p-2 position-relative overflow-hidden menu text-light text-decoration-none custom-cursor"
                      }
                      to="/gallery"
                      end
                      onClick={() => {
                        window.scrollTo(0, 0);
                      }}
                      onMouseOver={(e) => {
                        if (location.pathname !== "/#") {
                          e.target.classList.remove("text-light");
                          e.target.classList.add("text-warning");
                        }
                      }}
                      onMouseOut={(e) => {
                        if (location.pathname !== "/#") {
                          e.target.classList.remove("text-warning");
                          e.target.classList.add("text-light");
                        }
                      }}
                    >
                      <h4 className="text-uppercase">Gallery</h4>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={
                        location.pathname === "/whats-on"
                          ? "d-inline-block p-2 position-relative overflow-hidden menu text-warning text-decoration-none custom-cursor"
                          : "d-inline-block p-2 position-relative overflow-hidden menu text-light text-decoration-none custom-cursor"
                      }
                      to="/whats-on"
                      end
                      onClick={() => {
                        window.scrollTo(0, 0);
                      }}
                      onMouseOver={(e) => {
                        if (location.pathname !== "/whats-on") {
                          e.target.classList.remove("text-light");
                          e.target.classList.add("text-warning");
                        }
                      }}
                      onMouseOut={(e) => {
                        if (location.pathname !== "/whats-on") {
                          e.target.classList.remove("text-warning");
                          e.target.classList.add("text-light");
                        }
                      }}
                    >
                      <h4 className="text-uppercase">What&apos;s On</h4>
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="col-12 d-md-none text-center mb-3 mb-md-0">
                <NavLink
                  to="/"
                  className="custom-cursor"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  <img
                    className="img-fluid"
                    src={MenuLogo}
                    alt="MenuLogo"
                    width={200}
                  />
                </NavLink>
              </div>
            </div>
            <hr className="w-50 text-center border border-1 border-white mx-auto mt-0"></hr>
            <div className="row text-center">
              <div className="text-light">
                <a
                  className="d-inline-block position-relative overflow-hidden menu text-light text-decoration-none custom-cursor"
                  rel="noopener noreferrer"
                  href="https://www.google.com/maps/place/Colonel+Saab/@51.5169661,-0.1248385,17z/data=!3m1!4b1!4m5!3m4!1s0x48761b02dcfc579d:0x16101e9ce7039ed3!8m2!3d51.5169661!4d-0.1226498"
                  title="Find Indian Restaurant Covent Garden, Soho, Holborn, Bloomsbury West End - Colonel Saab Vegan and Vegetarian"
                  target="_blank"
                >
                  193-197 High Holborn,
                  <br />
                  London, WC1V 7BD
                </a>
                <br />
                <br />
                <a
                  className="d-inline-block position-relative overflow-hidden menu text-light text-decoration-none custom-cursor"
                  title="Directions to Indian Restaurant Covent Garden, Soho, Holborn, Bloomsbury, West End - Colonel Saab, Vegan and Vegetarian"
                  rel="noopener noreferrer"
                  href="https://www.google.co.uk/maps/dir/Current+Location/51.5169661,-0.1226498"
                  target="_blank"
                >
                  Get Directions
                </a>
                <br />
                <br />
                <a
                  className="d-inline-block position-relative overflow-hidden menu text-light text-decoration-none custom-cursor"
                  title="Call Indian Restaurant Covent Garden, Soho, Holborn Bloomsbury, West End - Colonel Saab Vegan and Vegetarian"
                  href="tel:+44-20-8016-6800"
                >
                  020 8016 6800
                </a>
              </div>
            </div>
            <div className="text-center mt-3">
              {/* <a
                href="https://uk.linkedin.com/company/colonel-saab/"
                target="_blank"
                rel="noreferrer"
                className="custom-cursor"
              >
                <BsLinkedin
                  className="m-1 btn-menu-footer rounded-circle custom-cursor"
                  size={25}
                />
              </a>
              <a
                href="https://www.instagram.com/colonelsaab/"
                target="_blank"
                rel="noreferrer"
                className="custom-cursor"
              >
                <AiOutlineInstagram
                  className="m-2 rounded-circle btn-menu-footer"
                  size={30}
                />
              </a>

              <a
                href="https://www.facebook.com/colonelsaab"
                className="custom-cursor"
                target="_blank"
                rel="noreferrer"
              >
                <BsFacebook
                  className="m-1 rounded-circle btn-menu-footer custom-cursor"
                  size={25}
                />
              </a>
              <a
                href="https://twitter.com/Colonelsaabuk"
                className="custom-cursor"
                target="_blank"
                rel="noreferrer"
              >
                <BsTwitter
                  className="m-1 rounded-circle btn-menu-footer custom-cursor"
                  size={25}
                />
              </a>
              <a
                href="https://www.youtube.com/channel/UCC-E3vcrN28tB3JGTgO9VVw/about"
                target="_blank"
                rel="noreferrer"
                className="custom-cursor"
              >
                <BsYoutube
                  className="m-1 rounded-circle btn-menu-footer custom-cursor"
                  size={25}
                />
              </a> */}

              <a
                href="https://uk.linkedin.com/company/colonel-saab/"
                target="_any"
              >
                <i className="bx bxl-linkedin rounded-circle btn-social-footer mx-1 p-1"></i>
              </a>
              <a href="https://www.instagram.com/colonelsaab/" target="_any">
                <i className="bx bxl-instagram rounded-circle btn-social-footer mx-1 p-1"></i>
              </a>

              <a href="https://www.facebook.com/colonelsaab" target="_any">
                <i className="bx bxl-facebook rounded-circle btn-social-footer mx-1 p-1"></i>
              </a>
              <a href="https://twitter.com/Colonelsaabuk" target="_any">
                <i className="bx bxl-twitter rounded-circle btn-social-footer mx-1 p-1"></i>
              </a>

              <a
                href="https://www.youtube.com/channel/UCC-E3vcrN28tB3JGTgO9VVw/about"
                target="_any"
              >
                <i className="bx bxl-youtube rounded-circle btn-social-footer mx-1 p-1"></i>
              </a>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Navbar;

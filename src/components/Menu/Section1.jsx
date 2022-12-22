import Download from "../../assets/images/download.png";
// import DiwaliMenu from "../../assets/pdf/DiwaliMenu.pdf";
import NEW_YEAR_MENU from "../../assets/pdf/New Year Menu 2023.pdf";
import ChristmasMenu2022 from "../../assets/pdf/ChristmasMenu2022.pdf";
// import TastingMenu from "../../assets/pdf/TastingMenu.pdf";
// import ALaCarte from "../../assets/pdf/ALaCarte.pdf";
import CSLunch from "../../assets/pdf/CSLunch.pdf";
import DrinksMenu from "../../assets/pdf/DrinksMenu.pdf";

const Section1 = () => {
  const buttonArray = [
    {
      text: "A LA CARTE",
      pdf: "#ALaCarte",
      // pdf: ALaCarte,
      pdfExist: false,
    },
    {
      text: "TASTING MENU",
      pdf: "#tasting-menu",
      // pdf: TastingMenu,
      pdfExist: false,
    },
    {
      text: "LUNCH TIFFIN",
      pdf: CSLunch,
      pdfExist: true,
    },
    {
      text: "AFTERNOON TEA MENU",
      pdf: "#AFTERNOONTEAMENU",
      pdfExist: false,
    },
    {
      text: "CHRISTMAS DAY MENU",
      pdf: ChristmasMenu2022,
      pdfExist: true,
    },
    {
      text: "NEW YEAR MENU",
      pdf: NEW_YEAR_MENU,
      pdfExist: true,
    },

    // {
    //   text: "DIWALI MENU",
    //   pdf: DiwaliMenu,
    //   pdfExist: true,
    // },

    {
      text: "BEVERAGES",
      pdf: DrinksMenu,
      pdfExist: true,
    },
  ];

  return (
    <div className="container-fluid px-5 py-5">
      <div className="row">
        <div className="col-12 text-center">
          <h2 className="mt-3 text-success">Colonel Saab&apos;s Menus</h2>
          <p className="text-center col-8 offset-2">
            Our menu is a melange of flavours from the Indian Subcontinent and
            has been curated by one of the top food personalities of India. A
            few of the signature dishes of Karen Anand as well as many regional
            Indian specialities that appear for the first time on an Indian
            restaurant menu in London.
          </p>
          {buttonArray.length > 0 &&
            buttonArray.map((item, index) => {
              return (
                <a
                  href={item.pdf}
                  target={item.pdfExist ? "_blank" : "_self"}
                  rel="noreferrer"
                  key={index}
                >
                  <button
                    type="button"
                    className="btn text-light m-2 rounded-0 bg-success border border-warning rounded-0 custom-cursor menu-button"
                  >
                    {item.text !== "AFTERNOON TEA MENU" && (
                      <img
                        className="d-none img-fluid me-2"
                        src={Download}
                        alt="Download"
                      />
                    )}
                    {item.text}
                  </button>
                </a>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Section1;

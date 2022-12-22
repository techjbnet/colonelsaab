import { Carousel } from "react-responsive-carousel";
import IndianBestRestaurantCoventGarden4 from "../../assets/images/shopimages/indian-best-restaurant-covent-garden-4.webp";

const Slider = () => {
  return (
    <Carousel showArrows={true} showThumbs={false}>
      <div>
        <img
          src={IndianBestRestaurantCoventGarden4}
          alt="Slider"
        />
      </div>
      <div>
        <img
          src={IndianBestRestaurantCoventGarden4}
          alt="Slider"
        />
      </div>
    </Carousel>
  );
};

export default Slider;

import { Carousel } from "react-responsive-carousel";
import RestaurantIndianHolbornCoventGardenBloomsburySoho45 from "../../assets/images/shopimages/restaurant-indian-holborn-covent-garden-bloomsbury-soho-45.webp";

const Slider = () => {
  return (
    <Carousel showArrows={true} showThumbs={false}>
      <div>
        <img
          src={RestaurantIndianHolbornCoventGardenBloomsburySoho45}
          alt="Slider"
        />
      </div>
      <div>
        <img
          src={RestaurantIndianHolbornCoventGardenBloomsburySoho45}
          alt="Slider"
        />
      </div>
    </Carousel>
  );
};

export default Slider;

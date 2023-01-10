const Slider = (props) => {
  return (
    <div className="image-container">
      <img className="slider-image-whatsonpage" src={props.image} alt="First slide" />
    </div>
  );
};

export default Slider;

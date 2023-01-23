import Slider from "react-slick";
import Image from "next/image";
import Callaway from "./banners/callaway";
// import banner_placeholder from "../public/image/banner_placeholder.png";

export default function banner_carousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/EaselPlugin.min.js"></script>
      <Callaway />

      <Slider {...settings}>
        <div> </div>
        <div>{/* <Callaway /> */}</div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </>
  );
}

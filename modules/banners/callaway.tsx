import { useEffect } from "react";
// import odyssey images
import Image from "next/image";
import BallOne from "./odyssey/ball1.png";
import BallTwo from "./odyssey/ball2.png";
import Bg from "./odyssey/bg.jpg";
import Bottomhead from "./odyssey/bottomhead.png";
import CTA from "./odyssey/cta.png";
import CTAtwo from "./odyssey/cta2.png";
import Logo from "./odyssey/logo.png";
import LogoTwo from "./odyssey/logo2.png";
import Tone from "./odyssey/t1.png";
import Ttwo from "./odyssey/t2.png";
import tophead from "./odyssey/tophead.png";

export default function callaway() {
  useEffect(() => {
    var t1 = new TimelineMax();

    t1.add("phase1", 0);
    t1.add("phase2", 0.8);
    t1.add("phase3", 2.5)
      .to(".cta2", 1, { clip: "rect(0px,0px,600px,0px)" })
      .from(".ball1", 0.8, { opacity: 0, y: -200 }, "phase1")
      .from(".ball2", 0.8, { opacity: 0, y: 200, delay: 0.2 }, "phase1")

      .from(".t1", 0.5, { opacity: 0, delay: 1 }, "phase1")

      .from(
        ".ball1",
        0.8,
        { scale: 1.5, rotation: 90, x: -30, delay: 1.3 },
        "phase2"
      )
      .from(
        ".ball2",
        0.8,
        { scale: 1.5, rotation: 90, x: -30, delay: 1.3 },
        "phase2"
      )
      .from(
        ".bottomhead",
        0.8,
        { scale: 1.5, opacity: 0, rotation: 90, x: -30, delay: 1.3 },
        "phase2"
      )
      .from(".bg", 0.8, { opacity: 0.7, delay: 1.3 }, "phase2")
      .from(".tophead", 0.5, { y: -250, dalay: 0.5 }, "phase3")
      .from(".tone", 0.5, { y: 30, opacity: 0 }, "phase3")
      .from(".ttwo", 0.5, { y: 30, opacity: 0 }, "phase3")
      .from(".cta", 1, { opacity: 0, delay: 0.6 }, "phase3")
      .from(".logo", 0.6, { opacity: 0, delay: 0.9 }, "phase3")
      .from(".logo2", 0.6, { opacity: 0, delay: 0.9 }, "phase3")
      .from(".cta", 1, { opacity: 0, delay: 0.3 }, "phase3");
  });

  return (
    <>
      <div className="box" id="ad">
        <div className="hide" id="content">
          <Image className="bg" src={Bg} alt="" />
          <Image className="bottomhead" src={Bottomhead} alt="" />
          <Image className="ball1" src={BallOne} alt="" />
          <Image className="ball2" src={BallTwo} alt="" />
          <Image className="tophead" src={tophead} alt="" />
          <Image className="tone" src={Tone} alt="" />
          <Image className="ttwo" src={Ttwo} alt="" />
          <Image className="cta" src={CTA} alt="" />
          <Image className="cta2" src={CTAtwo} alt="" />
          <Image className="logo" src={Logo} alt="" />
          <Image className="logo2" src={LogoTwo} alt="" />
        </div>
      </div>
    </>
  );
}

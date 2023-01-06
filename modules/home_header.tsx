import Image from "next/image";
import featuredImg from "../public/images/hero_img.png";

export default function Home() {
  return (
    <>
      <section id="header">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="content-container">
                <div className="child">
                  <small>
                    <i className="fas fa-code-branch"></i> Hello World
                  </small>
                  <h1> I'm J.P </h1>
                  <p>
                    Full Stack Web Developer with a background in Photography,
                    videography, and marketing. Effective at combining
                    creativity and problem solving to develop user-friendly
                    applications. Known among staff for strong wit and attention
                    to detail no matter the complexity of the project.
                  </p>
                  <a className="theme-btn" href="/">
                    Gimme a Job
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <Image className="featuredImg" src={featuredImg} />
            </div>
          </div>
          <div className="socials">
            <i class="fab fa-instagram"></i> <i class="fab fa-linkedin-in"></i>{" "}
            <i class="fab fa-github"></i>
            <i class="far fa-envelope"></i>
          </div>
          <p className="point_down">
            {" "}
            Scroll Down
            <img
              className="arrow"
              src="http://cdn.onlinewebfonts.com/svg/img_423359.png"
              alt=""
            />
          </p>
        </div>
      </section>
    </>
  );
}

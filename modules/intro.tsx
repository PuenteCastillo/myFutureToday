import Image from "next/image";
import googleImg from "../public/images/google_img.png";
import mic from "../public/images/mic_img.png";
import search from "../public/images/search.png";

export default function Home() {
  return (
    <>
      <div className="intro">
        <div className="container">
          <h1>Skills</h1>
          <h2>Top skill</h2>

          <div className="google_search_container">
            <div className="aline-box">
              <Image src={googleImg} />
            </div>

            <div className="aline-box search-box "> How to google ...</div>

            <div className="aline-box">
              <Image src={mic} />
            </div>
            <div className="aline-box">
              <Image src={search} />
            </div>
          </div>
          <h3>Other Skills / Honorable mentions...</h3>
          <div className="row limmitWidth">
            <div className="col-md-3">
              <div className="content-box">
                <p>FRONT END DEVELPMENT</p>
                <ul>
                  <li>HTML</li>

                  <li>CSS</li>

                  <li>JS </li>

                  <li>React</li>

                  <li>React Native</li>

                  <li>Next.js</li>

                  <li>Bootstrap</li>

                  <li>jQuery</li>

                  <li> SEO understanding </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="content-box">
                <p>Backend Development </p>
                <ul>
                  <li>Node.js</li>

                  <li>MySQL</li>

                  <li>MongoDB</li>

                  <li>Express</li>

                  <li>RESTful APIs</li>

                  <li>PHP</li>

                  <li>Heroku</li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="content-box">
                <p>DESIGN Tools</p>
                <ul>
                  <li>PhotoShop</li>

                  <li> Adobe XD</li>

                  <li>Adobe Lightroom</li>

                  <li>r u actually read this? </li>

                  <li>Adobe Illustrator</li>
                </ul>
              </div>
            </div>

            <div className="col-md-3">
              <div className="content-box">
                <p> Miscellaneous tools</p>
                <ul>
                  <li>GitHub </li>

                  <li>SEO</li>

                  <li>Git</li>

                  <li>VS Code</li>

                  <li>Terminal</li>

                  <li>Google Analytics</li>

                  <li> Photography </li>

                  <li> Videography</li>

                  <li>Marketing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

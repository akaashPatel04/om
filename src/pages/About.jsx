import "../styles/pages/About.css";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdPhone, MdLocationOn } from "react-icons/md";
import image from "../images/om-electronics-katni.jpg";

const About = () => {
  return (
    <div className="aboutPage">
      <div className="aboutContainer">
        <div className="aboutContact">
          <p className="WEB_HEADING">WEB</p>
          <div>
            <di diBottomv className="top">
              <div>
                <p>E-MAIL</p>
                <a href="mailto:akaashpatel04@gmail.com">
                  <MdLocationOn className="aboutPageIcons" /> Katni Madhya
                  Pradesh
                </a>
              </div>
              <div>
                <p>PHONE</p>
                <a href="tel:9584704865">
                  <MdPhone className="aboutPageIcons" /> 9584704865
                </a>
              </div>
            </di>
            <div className="bottom">
              <a href="https://github.com/akaashPatel04" target="_blank">
                <FaGithub className="aboutPageIcons aboutPageIconsBottom" />
              </a>
              <a
                href="https://www.instagram.com/akash_.patel04/"
                target="_blank"
              >
                <GrInstagram className="aboutPageIcons aboutPageIconsBottom" />
              </a>
              <a
                href="https://www.linkedin.com/in/akash-kumar-patel"
                target="_blank"
              >
                <FaLinkedin className="aboutPageIcons aboutPageIconsBottom" />
              </a>
            </div>
          </div>
        </div>
        <div className="imgContainer">
          <img src={image} />
        </div>
        <div className="aboutMain">
          <div>
            <div className="text">
              <div>
                <p>O</p>
                <p>M</p>
              </div>
              <div>
                <p>E</p>
                <p>L</p>
                <p>E</p>
                <p>C</p>
                <p>T</p>
                <p>R</p>
                <p>O</p>
                <p>N</p>
                <p>I</p>
                <p>C</p>
                <p>S</p>
              </div>
            </div>
            <p>
              We have all types electronic items that are solid in Quality, Om
              Electronics store is best store in Katni. We ensure that you get
              best out of it.
            </p>
            <a href="https://akash-patel04.vercel.app/">
              <button>Visit Me</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

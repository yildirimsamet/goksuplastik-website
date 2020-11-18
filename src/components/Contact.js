import React from "react";
import "./Contact.css";
function Contact() {
  return (
    <div id="contact">
      <div className="contact-bg">
        <div className="container contact">
          <h3>İLETİŞİM</h3>
          <div className="contact-border"></div>
          <div className="contact-context">
            <div className="contact-mailNumber">
              <p className="text-center contact-secondary-titles">
                Mail / Telefon
              </p>
              <p className="mail-p contact-a ">
                <img
                  src="https://img.icons8.com/color/48/000000/apple-mail.png"
                  alt="mailicon"
                />{" "}
                isa_degirmenci@windowslive.com
              </p>

              <p className="mail-p contact-a ">
                {" "}
                <img
                  src="https://img.icons8.com/color/48/000000/ringer-volume.png"
                  alt="phoneicon"
                />
                0537 597 51 63
              </p>
            </div>
            <div className="contact-socialLinks">
              <p className="text-center contact-secondary-titles">
                Sosyal Linkler
              </p>
              <ul className="contact-ul">
                <li className="contact-li">
                  <a
                    rel="noreferrer"
                    target="_blank"
                    className="contact-a"
                    href="https://www.facebook.com/isa.degirmenci.906"
                  >
                    <img
                      src="https://img.icons8.com/color/48/000000/facebook-new.png"
                      alt="faceicon"
                    />{" "}
                    Facebook
                  </a>
                </li>
                <li className="contact-li">
                  <a
                    rel="noreferrer"
                    target="_blank"
                    className="contact-a"
                    href="https://www.instagram.com/isa.degirmenci3503/"
                  >
                    <img
                      src="https://img.icons8.com/color/48/000000/instagram-new.png"
                      alt="instaicon"
                    />{" "}
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-3 contact-p contact-location-section">
            <img
              alt="locationicon"
              className="contact-loc-icon"
              src="https://img.icons8.com/color/56/000000/google-maps-new.png"
            />
            <a
              target="_blank"
              rel="noreferrer"
              className="contact-loc-a"
              href="https://www.google.com.tr/maps/place/Lale,+3591.+Sk.+No:6,+35180+Buca+Organize+Sanayi+B%C3%B6lgesi%2FKonak%2F%C4%B0zmir/@38.4064031,27.1464407,18z/data=!3m1!4b1!4m5!3m4!1s0x14bbd8c05643d4b9:0xe29e12650b385f9a!8m2!3d38.406401!4d27.147535"
            >
              3591sk no:6 Lale mh. Gürçeşme Konak/İZMİR
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

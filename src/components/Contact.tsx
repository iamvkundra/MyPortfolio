import { MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:souravsinghraja1998@gmail.com" data-cursor="disable">
                souravsinghraja1998@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+916203761971" data-cursor="disable">
                +91 62037 61971
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h2>
              Portfolio for <br /> <span>Sourav Kumar</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

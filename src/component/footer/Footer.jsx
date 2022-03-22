import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import "./Footer.css";

export default function Footer() {
  return (
    <footer id="footer">
      <h5>Ryne Ferdinand, 2022</h5>
      <div className="footer-links">
        <a
          className="footer-link-item footer-link-cv"
          href="https://drive.google.com/file/d/1vq0raQUAlTVcH0GU5Cf6YHPssYghWwc3/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          CV
        </a>
        <a
          className="footer-link-item"
          href="http://www.linkedin.com/in/ryneferdinand/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          className="footer-link-item"
          href="http://www.linkedin.com/in/ryneferdinand/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </a>
        <a
          className="footer-link-item"
          href="http://www.linkedin.com/in/ryneferdinand/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiMail />
        </a>
      </div>
    </footer>
  );
}

import "./ProjectCard.css";
import { MdOutlineWebAsset } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { useEffect, useState } from "react";

export default function ProjectCard({
  image,
  title,
  color,
  techs,
  link,
  description,
}) {
  const [showDesc, setShowDesc] = useState(false);

  const updateShowDesc = () => {
    if (window.innerWidth <= 1024) {
      setShowDesc((prevShowDesc) => !prevShowDesc);
    }
  };

  return (
    <div className="project-card" style={{ backgroundColor: color }}>
      <div className="image-section" onClick={updateShowDesc}>
        <div
          className={
            "project-card-description " + (showDesc ? "show-description" : "")
          }
        >
          <p>{description}</p>
          <div className="card-links">
            {link.github ? (
              <a
                href={link.github}
                className="card-link-item"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub />
              </a>
            ) : (
              <></>
            )}
            {link.web ? (
              <a
                href={link.web}
                className="card-link-item"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdOutlineWebAsset />
              </a>
            ) : (
              <></>
            )}
            {link.api ? (
              <a
                href={link.api}
                className="card-link-item card-link-api"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>API</span>
              </a>
            ) : (
              <></>
            )}
          </div>
        </div>
        <img src={image} alt="" />
      </div>
      <div className="info-section">
        <h3 className="info-section__title">{title}</h3>
        <div className="type-list">
          {techs.map((tech, idx) => (
            <span className="tech-tag" key={idx}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

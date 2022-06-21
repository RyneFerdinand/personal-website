import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiJava,
  SiNodedotjs,
  SiGithub,
  SiPython,
  SiMicrosoftsqlserver,
  SiMariadb,
  SiFigma,
  SiMongodb,
  SiVisualstudiocode,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiC,
} from "react-icons/si";
import ReactTooltip from "react-tooltip";
import comicList from "../assets/ComicList.webp";
import portfolio from "../assets/Portfolio.webp";
import papiKatering from "../assets/PapiKatering.webp";
import profile from "../assets/Profile.webp";
import ProjectCard from "../component/project-card/ProjectCard";
import SectionTitle from "../component/section-title/SectionTitle";
import "./HomePage.css";

export default function HomePage() {
  const projects = [
    {
      image: papiKatering,
      title: "Papi Katering",
      color: "#28947f",
      techs: ["React.JS", "Express.JS", "PostgreSQL"],
      description:
        "A catering website for users to subscribe and sell packets.",
      link: {
        github: "https://github.com/kevinbennetth/PapiKatering",
        web: "https://papikatering.netlify.app/",
        api: "https://papi-katering.herokuapp.com/packet/home",
      },
    },
    {
      image: comicList,
      title: "Comic List",
      color: "#08234A",
      techs: ["React.JS", "Express.JS"],
      description:
        "A website where users can search and add comics to their wishlist, created with React.JS and Express.JS. ",
      link: {
        github: "https://github.com/RyneFerdinand/Comic-List",
        web: "https://comic-list.netlify.app/",
        api: "https://comic-list-api.herokuapp.com/comic/home",
      },
    },
    {
      image: portfolio,
      title: "Portfolio Website",
      color: "#E7E7E7",
      techs: ["React.JS"],
      description: "A personal website created using React.JS.",
      link: {
        github: "https://github.com/RyneFerdinand/personal-website",
        web: "https://ryne-ferdinand.netlify.app/",
      },
    },
  ];

  return (
    <div id="home-section">
      <div id="hero" className="hero-section">
        <img src={profile} alt="" className="hero__profile" />
        <div className="hero__detail">
          <h1 className="hero__title">Hey, I'm Ryne</h1>
          <h5 className="hero__subtitle">
            Computer Science Student, Front-End Developer
          </h5>
          <hr className="hero__line" />
          <h5 className="section-description">
            I’m an undergraduate computer science student at Bina Nusantara
            University, mainly working on front-end web stuff.
          </h5>
          <div className="hero-links">
            <a
              className="hero-link-item hero-link-cv"
              href="https://drive.google.com/file/d/1Gw9i4YVg_m0tGiZRKazQsSXwqubaZnpJ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              CV
            </a>
            <a
              className="hero-link-item"
              href="https://github.com/RyneFerdinand"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              className="hero-link-item"
              href="http://www.linkedin.com/in/ryneferdinand/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              className="hero-link-item"
              href="mailto:ryneferdnand@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiMail />
            </a>
          </div>
        </div>
      </div>
      <div id="project" className="project-section">
        <SectionTitle title={"Projects"} type={"light"} />
        <h5 className="section-description">
          Here are some things that I’ve worked on (Hover or click the image to
          see the details).
        </h5>
        <div className="project-list">
          {projects.map((project, idx) => (
            <ProjectCard
              key={idx}
              image={project.image}
              title={project.title}
              color={project.color}
              techs={project.techs}
              link={project.link}
              description={project.description}
            />
          ))}
        </div>
      </div>
      <div id="skills" className="skill-section">
        <SectionTitle title={"Skills"} type={"dark"} />
        <h5 className="section-description section-description--dark">
          Here are a few things that I could use (Hover or click to see more
          information).
        </h5>
        <div className="skill-section__tech">
          <h3 className="subsection-title">Tech</h3>
          <ReactTooltip
            place="top"
            id="icon-tooltip"
            type="light"
            effect="solid"
            getContent={(dataTip) => (
              <span className="tooltip-text">{dataTip}</span>
            )}
          />
          <div className="icons-grid">
            <SiHtml5 className="icon" data-tip="HTML" data-for="icon-tooltip" />
            <SiCss3 className="icon" data-tip="CSS" data-for="icon-tooltip" />
            <SiJavascript
              className="icon"
              data-tip="javaScript"
              data-for="icon-tooltip"
            />

            <SiReact
              className="icon"
              data-tip="React.JS"
              data-for="icon-tooltip"
            />
            <SiC className="icon" data-tip="C" data-for="icon-tooltip" />
            <SiJava className="icon" data-tip="Java" data-for="icon-tooltip" />
            <SiPython
              className="icon"
              data-tip="Python (Basics)"
              data-for="icon-tooltip"
            />
            <SiMongodb
              className="icon"
              data-tip="MongoDB (Basics)"
              data-for="icon-tooltip"
            />
            <SiNodedotjs
              className="icon"
              data-tip="Node.JS (Express.JS) (Basics)"
              data-for="icon-tooltip"
            />
            <SiGithub
              className="icon"
              data-tip="Github (Basics)"
              data-for="icon-tooltip"
            />
            <SiMicrosoftsqlserver
              className="icon"
              data-tip="MsSQL"
              data-for="icon-tooltip"
            />
            <SiMariadb
              className="icon"
              data-tip="MariaDB (Basics)"
              data-for="icon-tooltip"
            />
            <SiVisualstudiocode
              className="icon"
              data-tip="VSCode"
              data-for="icon-tooltip"
            />
            <SiFigma
              className="icon"
              data-tip="Figma"
              data-for="icon-tooltip"
            />
            <SiAdobephotoshop
              className="icon"
              data-tip="Photoshop (Basics)"
              data-for="icon-tooltip"
            />
            <SiAdobeillustrator
              className="icon"
              data-tip="Illustrator (Basics)"
              data-for="icon-tooltip"
            />
          </div>
        </div>
        <div className="skill-section__lang">
          <h3 className="subsection-title">Language</h3>
          <div className="icons-grid">
            <span
              className="language-icon"
              data-tip="Indonesian (Native)"
              data-for="icon-tooltip"
            >
              In
            </span>
            <span
              className="language-icon"
              data-tip="English (Fluent)"
              data-for="icon-tooltip"
            >
              En
            </span>
            <span
              className="language-icon"
              data-tip="Mandarin (Basic)"
              data-for="icon-tooltip"
            >
              Cn
            </span>
          </div>
        </div>
      </div>
      <div className="action-section">
        <SectionTitle title={"Contact Me"} type={"light"} />
        <h5 className="section-description">
          Let's get in touch ! Here are a few ways you could contact me.
        </h5>
        <ul className="action-links">
          <li className="action-item">
            <a
              href="https://www.linkedin.com/in/ryneferdinand/"
              rel="noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>{" "}
            — /in/RyneFerdinand
          </li>
          <li className="action-item">
            <a
              href="mailto:ryneferdnand@gmail.com"
              rel="noreferrer"
              target="_blank"
            >
              Email
            </a>{" "}
            — ryneferdnand@gmail.com
          </li>
          <li className="action-item">
            <a
              href="https://github.com/RyneFerdinand"
              rel="noreferrer"
              target="_blank"
            >
              Github
            </a>{" "}
            — RyneFerdinand
          </li>
        </ul>
      </div>
    </div>
  );
}

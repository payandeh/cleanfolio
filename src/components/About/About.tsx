import { about } from "../../portfolio";
import "./About.css";

const About = () => {
  const { firstName, name, role, description, resume, social } = about;

  return (
    <div className="about center">
      <div className="about__header">
        {/* {picture && <img src={picture} alt={name} className="about__picture" />} */}

        <div className="about__intro">
          {name && (
            <h1>
              Hi, I am <span className="about__name">{firstName}.</span>
            </h1>
          )}

          {role && <h2 className="about__role">A {role}.</h2>}
        </div>
      </div>
      <p className="about__desc">{description && description}</p>

      <div className="about__contact center">
        {resume && (
          <a href={resume} target="_blank" rel="noopener">
            <span className="btn btn--outline btn--primary">Resume</span>
          </a>
        )}

        {social && (
          <>
            {/* {social.github && (
              <a
                href={social.github}
                aria-label="github"
                className="link link--icon"
              >
                <GitHubIcon />
              </a>
            )} */}

            {social.linkedin && (
              <a href={social.linkedin} target="_blank" rel="noopener">
                <span className="btn btn--outline">Linkedin</span>
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default About;

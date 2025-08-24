import uniqid from "uniqid";
import { projects } from "../../portfolio";
import ProjectContainer, {
  type Project,
} from "../ProjectContainer/ProjectContainer";
import "./Projects.css";

const Projects = () => {
  if (!projects.length) return null;

  return (
    <section id="projects" className="section projects">
      <h2 className="section__title">Projects</h2>

      <div className="projects__grid">
        {(projects as Project[]).map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div>
      <h4 className="more__projects">20+ Web Applications</h4>
    </section>
  );
};

export default Projects;

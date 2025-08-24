import uniqid from "uniqid";
import "./ProjectContainer.css";

export interface Project {
  name: string;
  description: string;
  stack: string[];
  sourceCode: string;
  livePreview: string;
  image: string;
}
const ProjectContainer = ({ project }: { project: Project }) => (
  <div className="project">
    {project.image && (
      <img
        src={project.image}
        alt={`${project.name} screenshot`}
        style={{ width: "100%", objectFit: "cover", borderRadius: "6px" }}
      />
    )}

    <h3>{project.name}</h3>

    <p className="project__description">{project.description}</p>
    {project.stack && (
      <ul className="project__stack">
        {project.stack.map((item) => (
          <li key={uniqid()} className="project__stack-item">
            {item}
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default ProjectContainer;

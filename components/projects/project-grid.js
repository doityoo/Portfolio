import classes from './project-grid.module.css'
import ProjectItem from './project-item';

const ProjectGrid = (props) => {
  const { projects } = props;
  return (
    <ul className={classes.grid}>
      {projects && projects.map(project => <ProjectItem key={project.slug} project={project} />)}
    </ul>
  )
};

export default ProjectGrid;
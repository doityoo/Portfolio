import classes from './all-projects.module.css'
import ProjectGrid from './project-grid';
const AllProjects = (props) => {

  return (
    <section className={classes.projects}>
      <h1>All Projects</h1>
      <ProjectGrid projects={props.projects} />

    </section>
  );
};

export default AllProjects;
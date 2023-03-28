import ProjectGrid from '../projects/project-grid';
import classes from './home-resume.module.css'

const HomeResume = (props) => {
  console.log(props)
  return (
    <section className={classes.latest} >
      <h3>RESUME</h3>
      <ProjectGrid
        projects={props.projects}
      />
    </section>
  );
};

export default HomeResume;
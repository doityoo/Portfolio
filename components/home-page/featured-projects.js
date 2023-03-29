// import ProjectGrid from '../projects/project-grid';
import classes from './featured-projects.module.css'
import ProjectItem from './../projects/project-item';

// 해당 컴포넌트의 props는 pages dir의 index.js에서 가져오는 것.
const FeaturedProjects = (props) => {
  const projects = props.projects;
  console.log(projects)
  return (
    <section className={classes.latest}>
      <h3>PROJECTS</h3>
      <div className={classes.gradiention}>
        <ul className={classes.grid}>
          {projects && projects.map(project => <ProjectItem key={project.id} project={project} />)}
        </ul>
      </div>
      <button className={classes.addButton}>더보기</button>
      {/* <ProjectGrid projects={props.projects} /> */}
    </section>
  );
}

export default FeaturedProjects;
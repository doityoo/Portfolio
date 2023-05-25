// import ProjectGrid from '../projects/project-grid';
import classes from './featured-projects.module.css'
import ProjectItem from './../projects/project-item';
import Link from "next/link";

// 해당 컴포넌트의 props는 pages dir의 index.js에서 가져오는 것.
const FeaturedProjects = (props) => {
  const projects = props.projects;

  return (
    <div className={classes.sectionWrapper}>
      <section className={classes.latest}>
        <h3>PROJECTS</h3>
        <div className={classes.sectionBackground}></div>
        <button className={classes.addButton}>
          <Link href='/projects'>
            ● ● ●
          </Link>
        </button>
        <ul className={classes.grid}>
          {projects && projects.map(project => <ProjectItem key={project.id} project={project} />)}
        </ul>
      </section>
    </div>
  );
}

export default FeaturedProjects;  
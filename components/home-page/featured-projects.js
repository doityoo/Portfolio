// import ProjectGrid from '../projects/project-grid';
import classes from './featured-projects.module.css'
import ProjectItem from './../projects/project-item';
import Link from "next/link";


// 해당 컴포넌트의 props는 pages dir의 index.js에서 가져오는 것.
const FeaturedProjects = (props) => {
  const projects = props.projects;
  console.log('Home-Projects: ',projects)

  const moveProjects = () => {
    return
  }

  return (
    <section className={classes.latest}>
      <h3>PROJECTS</h3>
      <ul className={classes.grid}>
        {projects && projects.map(project => <ProjectItem key={project.id} project={project} />)}
        <div className={classes.gradiention}>
          <button className={classes.addButton} onClick={moveProjects}>
            <Link href='/projects'>
              더보기
            </Link>
          </button>
        </div>
      </ul>
      {/* <ProjectGrid projects={props.projects} /> */}
    </section>
  );
}

export default FeaturedProjects;  
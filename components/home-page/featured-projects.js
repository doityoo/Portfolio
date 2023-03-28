import ProjectGrid from '../projects/project-grid';
import classes from './featured-projects.module.css'
import Image from 'next/image';

// 해당 컴포넌트의 props는 pages dir의 index.js에서 가져오는 것.
const FeaturedProjects = (props) => {
  return (
    <section className={classes.latest}>
      <h3>PROJECTS</h3>
      <div className={classes.gradiention}>
        <button className={classes.addButton}>더보기</button>
      </div>
      <ProjectGrid projects={props.projects} />
    </section>
  );
}

export default FeaturedProjects;
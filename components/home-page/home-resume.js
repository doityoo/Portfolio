// import ProjectGrid from '../projects/project-grid';
import classes from './home-resume.module.css'
import ReactMarkdown from 'react-markdown';
import Link from "next/link";


const HomeResume = (props) => {
  const resume = props.resume[2];
  return (
    <section className={classes.latest} >
      <h3>RESUME</h3>
      {/* <ProjectGrid
        projects={props.projects}
      /> */}
      <div className={classes.gradiention}>
        <ReactMarkdown className={classes.markdown}
        // components={customRenderers}
        >
          {resume.content}
        </ReactMarkdown>
        <button className={classes.addButton}>
          <Link href='/resume'>
            ● ● ●
          </Link>
        </button>
      </div>
    </section>
  );
};

export default HomeResume;
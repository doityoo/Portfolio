// import ProjectGrid from '../projects/project-grid';
import classes from './home-resume.module.css'
import ReactMarkdown from 'react-markdown';


const HomeResume = (props) => {
  const resume = props.resume[2];
  return (
    <section className={classes.latest} >
      <h3>RESUME</h3>
      {/* <ProjectGrid
        projects={props.projects}
      /> */}
      <ReactMarkdown
        // components={customRenderers}
      >
        {resume.content}
      </ReactMarkdown>

    </section>
  );
};

export default HomeResume;
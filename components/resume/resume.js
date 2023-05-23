// import ProjectGrid from '../projects/project-grid';
import classes from './resume.module.css'

const Resume = () => {
  return (
    <section className={classes.latest} >
      <h3>RESUME</h3>
      <iframe src="/resume.html" width="100%" height="3500px" style={{ border: 'none' }} scrolling="no" target="_blank" />

    </section>
  );
};

export default Resume;
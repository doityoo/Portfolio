import classes from './home-resume.module.css'
import Link from "next/link";

const HomeResume = () => {
  return (
    <section className={classes.latest} >
      <h3>RESUME</h3>
      <div className={classes.gradiention}>
        <iframe className={classes.iframe} src="/resume.html" width="100%" height="900px" style={{ border: 'none' }} scrolling="no" />
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
import classes from './home-resume.module.css'
import Link from "next/link";

const HomeResume = () => {
  const handleIframeLoad = () => {
    const iframeDocument = document.getElementById('myIframe').contentDocument;
    const links = iframeDocument.getElementsByTagName('a');
    for (let i = 0; i < links.length; i++) {
      links[i].addEventListener('click', function (event) {
        event.preventDefault();
        window.open(this.href, '_blank');
      });
    }
  };
  return (
    <section className={classes.latest} >
      <h3>RESUME</h3>
      <div className={classes.gradiention}>
        <iframe className={classes.iframe} src="/resume.html" width="100%" height="900px" style={{ border: 'none' }} scrolling="no" target="_blank" onLoad={handleIframeLoad} />
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
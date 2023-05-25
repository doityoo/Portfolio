// import ProjectGrid from '../projects/project-grid';
import classes from './resume.module.css'
import React, { useRef } from 'react';

const Resume = () => {
  const iframeRef = useRef(null);

  const handleIframeLoad = () => {
    const iframeDocument = iframeRef.current.contentDocument;
    if (iframeDocument) {
      const links = iframeDocument.getElementsByTagName('a');
      for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function (event) {
          event.preventDefault();
          window.open(this.href, '_blank');
        });
      }
    }
  };
  return (
    <section className={classes.latest} >
      <h3>RESUME</h3>
      <iframe
        ref={iframeRef}
        src="/resume.html"
        width="100%"
        height="4300px"
        style={{ border: 'none' }}
        scrolling="no"
        target="_blank"
        onLoad={handleIframeLoad}
      />
    </section>
  );
};

export default Resume;
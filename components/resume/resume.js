import classes from './resume.module.css';
import React, { useRef, useEffect } from 'react';

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

  useEffect(() => {
    const updateIframeHeight = () => {
      const iframe = iframeRef.current;
      const width = window.innerWidth;

      if (width >= 1000) {
        iframe.style.height = '4200px';
      } else if (width >= 800) {
        iframe.style.height = '4400px';
      } else if (width >= 700) {
        iframe.style.height = '4600px';
      } else if (width >= 600) {
        iframe.style.height = '4940px';
      } else if (width >= 500) {
        iframe.style.height = '5400px';
      } else if (width >= 420) {
        iframe.style.height = '6100px';
      } else if (width >= 350) {
        iframe.style.height = '6800px';
      }
    };

    updateIframeHeight();

    window.addEventListener('resize', updateIframeHeight);
    return () => {
      window.removeEventListener('resize', updateIframeHeight);
    };
  }, []);

  return (
    <section className={classes.latest}>
      <h3>RESUME</h3>
      <iframe
        ref={iframeRef}
        src="/resume.html"
        width="100%"
        style={{ border: 'none' }}
        scrolling="no"
        target="_blank"
        onLoad={handleIframeLoad}
      />
    </section>
  );
};

export default Resume;

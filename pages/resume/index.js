import React, { Fragment } from 'react';
import Head from 'next/head';
import HomeResume from '../../components/home-page/home-resume';
import { getAllProjects } from '../../lib/projects-util';

const ResumePage = (props) => {
  const { resume } = props;
  console.log("resume: ", resume);
  return (
    <div>
      <Fragment>
        <Head>
          <title>유인태의 이력서입니다.</title>
          <meta
            name="Resume"
            content="프론트엔드 개발자 유인태의 이력서입니다."
          />
        </Head>
      </Fragment>
      <section>
        <HomeResume resume={resume} />
      </section>
    </div>
  );
};

export const getStaticProps = async () => {
  const reusme = await getAllProjects();
  return {
    props: {
      resume: reusme
    },
    revalidate: 1800,
  }
}
export default ResumePage;
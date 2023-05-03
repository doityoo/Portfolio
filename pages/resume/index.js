import React, { Fragment } from 'react';
import Head from 'next/head';
import Resume from '../../components/resume/resume';
import { getAllResume } from '../../lib/projects-util';

const ResumePage = (props) => {
  const { resume } = props;
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
        <Resume resume={resume} />
      </section>
    </div>
  );
};

export const getStaticProps = async () => {
  const reusme = await getAllResume();
  return {
    props: {
      resume: reusme
    },
    revalidate: 1800,
  }
}
export default ResumePage;
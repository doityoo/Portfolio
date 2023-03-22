import React, { Fragment } from 'react';
import Head from 'next/head';

const ResumePage = () => {
  return (
    <Fragment>
      <Head>
        <title>유인태의 이력서입니다.</title>
        <meta
          name="Resume"
          content="프론트엔드 개발자 유인태의 이력서입니다."
        />
      </Head>
    </Fragment>
  );
};

export default ResumePage;
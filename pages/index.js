import { Fragment } from "react";
import Ourselves from "../components/home-page/ourselves";
import FeaturedProjects from "../components/home-page/featured-projects";
import { getFeaturedProjects } from '../lib/projects-util'
import Head from "next/head";
import HomeResume from "../components/home-page/home-resume";

const HomePage = (props) => {
  console.log('resume: ', props.resume)

  return (
    <Fragment>
      <Head>
        <title>유인태의 포트폴리오입니다.</title>
        <meta
          name="description"
          content="프론트엔드 개발자 유인태의 포트폴리오입니다."
        />
      </Head>
      <Ourselves />
      <HomeResume />
      <FeaturedProjects projects={props.projects} />
    </Fragment>

  );
};

export const getStaticProps = async () => {
  const featuredProject = await getFeaturedProjects();
  return {
    props: {
      projects: featuredProject,
    }
  }
}

export default HomePage;

// 들어갈 내용
// 1. 자기 소개
// 2. Featureed Projects (더미데이터)
// 페이지 컴포넌트에서는 많은 마크업을 사용하지 않음
// 주로 데이터만 주고 받음
// 필요한 데이터는 getStaticProps 사전 렌더링으로 데이터 가져옴

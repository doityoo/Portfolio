import AllProjects from "../../components/projects/all-projects";
import { getAllProjects } from "../../lib/projects-util";
import { Fragment } from "react";
import Head from "next/head";

// const DUMMY_PROJECTS = [
//   {
//     slug: "getting-started-with-nextjs01",
//     title: "Getting Started with NextJS01",
//     image: "getting-started-with-nextjs01.jpg",
//     description: '지금은 더미데이터로 테스트 중입니다.',
//     date: '2023-03-10'
//   },
//   {
//     slug: "getting-started-with-nextjs02",
//     title: "Getting Started with NextJS02",
//     image: "getting-started-with-nextjs02.jpg",
//     description: '지금은 더미데이터로 테스트 중입니다.',
//     date: '2023-03-10'
//   },
//   {
//     slug: "getting-started-with-nextjs03",
//     title: "Getting Started with NextJS03",
//     image: "getting-started-with-nextjs03.jpg",
//     description: '지금은 더미데이터로 테스트 중입니다.',
//     date: '2023-03-10'
//   },
//   {
//     slug: "getting-started-with-nextjs04",
//     title: "Getting Started with NextJS04",
//     image: "getting-started-with-nextjs04.jpg",
//     description: '지금은 더미데이터로 테스트 중입니다.',
//     date: '2023-03-10'
//   },
// ]

const AllProjectPage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>유인태의 Projects입니다.</title>
        <meta
          name="Projects"
          content="프론트엔드 개발자 유인태의 Projects입니다."
        />
      </Head>
      <AllProjects projects={props.projects} />
    </Fragment>
  )
};

export const getStaticProps = () => {
  const allProjects = getAllProjects()
  return {
    props: {
      projects: allProjects
    }
  }
}

export default AllProjectPage;
import AllProjects from "../../components/projects/all-projects";
import { getAllProjectsNotion } from "../../lib/projects-util";
import { Fragment } from "react";
import Head from "next/head";

const AllProjectPage = (props) => {
  const projects = props.projects;
  console.log(projects)

  return (
    <Fragment>
      <Head>
        <title>유인태의 Projects입니다.</title>
        <meta
          name="Projects"
          content="프론트엔드 개발자 유인태의 Projects입니다."
        />
      </Head>
      <AllProjects projects={projects} />
    </Fragment>
  )
};

export const getStaticProps = async () => {
  const allProjects = await getAllProjectsNotion()
  return {
    props: {
      projects: allProjects
    },
    revalidate: 60
  }
}

export default AllProjectPage;
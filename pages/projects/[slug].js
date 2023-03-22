///posts/getting-started-with-nextjs
import Head from "next/head";
import { Fragment } from "react";
import { getProjectData, getProjectFiles } from "../../lib/projects-util";
import ProjectContent from "../../components/projects/project-detail/project-content";


const PostDetailPage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>유인태의 Project입니다.</title>
        <meta
          name="Project"
          content={props.project.excerpt}
        />
      </Head>
      <ProjectContent project={props.project} />
    </Fragment>
  );
};

export const getStaticProps = (context) => {
  console.log(context)
  const { params } = context;
  const { slug } = params;
  const projectData = getProjectData(slug);
  return {
    props: {
      project: projectData
    },
    revalidate: 600
  }
}

export const getStaticPaths = () => {
  const projectFileNames = getProjectFiles();
  const slugs = projectFileNames.map(fileName => fileName.replace(/\.md$/, ''));
  return {
    paths: slugs.map(slug => ({ params: { slug: slug } })),
    fallback: false,
  }
}

export default PostDetailPage;
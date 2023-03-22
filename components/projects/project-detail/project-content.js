import ProjectHeader from './project-header';
import classes from './project-content.module.css'
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';


// const DUMMY_PROJECT = {
//   slug: "getting-started-with-nextjs01",
//   title: "Getting Started with NextJS01",
//   image: "getting-started-with-nextjs01.jpg",
//   // description: '지금은 더미데이터로 테스트 중입니다.',
//   date: '2023-03-10',
//   content: "# 첫번째 게시글입니다."
// };

const ProjectContent = (props) => {
  const { project } = props;
  const imagePath = `/images/projects/${project.slug}/${project.image}`

  const customRenderers = {
    p(paragraph) {
      const { node } = paragraph;
      console.log(node)
      if (node.children[0].tagName === 'img') {
        const image = node.children[0];
        return (
          <div className={classes.image}>
            <Image
              src={`/images/projects/${project.slug}/${image.properties.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        )
      }
      return <p>{props.children}</p> 
    },
    code(code) {
      console.log(code)
      const { className, children } = code;
      const language = className.split('-')[1];
      return <SyntaxHighlighter
        style={atomDark}
        langauge={language}
        children={children} />
    }
  }

  return (
    <article className={classes.content}>
      <ProjectHeader title={project.title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>{project.content}</ReactMarkdown>
    </article>

  );
};

export default ProjectContent;
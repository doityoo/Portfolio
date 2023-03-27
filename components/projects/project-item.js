import classes from './project-item.module.css'
import Link from 'next/link';
import Image from 'next/image';

// 데이터 페칭하거나 useEffect로 페칭하지 않고 props로 데이터 전달 예정
const ProjectItem = (props) => {
  const { url, cover, icon, properties, id } = props.project;

  
  // console.log("url: ", url)
  // console.log("img: ", cover.external.url)
  // console.log("icon: ", icon.emoji)
  // console.log("desc: ", properties.Description.rich_text[0].plain_text)
  // console.log("stack: ", properties.Stack.multi_select)
  // console.log("title: ", properties.이름.title[0].plain_text)
  // console.log("URL: ", properties.URL.url)
  // console.log("ID: ", id)


  // const { title, image, description, date, slug } = props.project;

  // const formmatedDate = new Date(date).toLocaleDateString('en-US', {
  //   day: 'numeric',
  //   month: 'long',
  //   year: 'numeric',
  // })

  // const imagePath = `/images/projects/${slug}/${image}`;
  // const linkPath = `/projects/${slug}`;

  return (
    <li className={classes.project}>
      <Link href={url}>
        <a>
          <div className={classes.image}>
            <Image
              src={cover.external.url}
              alt={properties.이름.title[0].plain_text}
              width={300}
              height={200}
              layout='responsive'
              unoptimized={true} // 외부 api img를 Image 컴포넌트에서 사용할때 반드시 next.config.js domains를 설정하고, properties에 unoptimized={true}을 해야한다.
            />
          </div>
          <div className={classes.content}>
            <h4>{properties.이름.title[0].plain_text}</h4>
            <time></time>
            <p>{properties.Description.rich_text[0].plain_text}</p>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default ProjectItem;
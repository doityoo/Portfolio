import classes from './project-item.module.css'
import Link from 'next/link';
import Image from 'next/image';

// 데이터 페칭하거나 useEffect로 페칭하지 않고 props로 데이터 전달 예정
const ProjectItem = (props) => {
  const { url, cover, properties } = props.project;

  return (
    <li className={classes.project}>
      <Link href={url}>
        <a>
          <div className={classes.image}>
            <Image
              src={cover.file ? cover.file.url : cover.external.url}
              alt={properties.이름.title[0].plain_text}
              width={300}
              height={200}
              layout='responsive'
              unoptimized={true} // 외부 api img를 Image 컴포넌트에서 사용할때 반드시 next.config.js domains를 설정하고, properties에 unoptimized={true}을 해야한다.
            />
          </div>
          <div className={classes.content}>
            <h4>{properties.이름.title[0].plain_text}</h4>
            {properties.Stack.multi_select.map((stack) => {
              return <span style={{
                backgroundColor: stack.color,
                display: 'inline-block',
                color: 'white',
                borderRadius: '6px',
                marginRight: '2%',
                padding: '1%',
                fontSize: '0.7rem'
              }}>{stack.name}</span>
            })}
            <div className={classes.members}>{properties.Members.rich_text[0].text.content}</div>
            <p className={classes.dsc}>{properties.Description.rich_text[0].plain_text}</p>
          </div>
        </a>
      </Link>
    </li >
  );
};

export default ProjectItem;
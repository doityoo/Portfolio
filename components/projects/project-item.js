import classes from './project-item.module.css'
import Link from 'next/link';
import Image from 'next/image';

// 데이터 페칭하거나 useEffect로 페칭하지 않고 props로 데이터 전달 예정
const ProjectItem = (props) => {
  const { title, image, description, date, slug } = props.project;

  const formmatedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const imagePath = `/images/projects/${slug}/${image}`;
  const linkPath = `/projects/${slug}`;

  return (
    <li className={classes.project}>
      <Link href={linkPath}>
        <a>
          <div className={classes.image}>
            <Image
              src={imagePath}
              alt={title}
              width={300}
              height={200}
              layout='responsive'
            />
          </div>
          <div className={classes.content}>
            <h4>{title}</h4>
            <time>{formmatedDate}</time>
            <p>{description}</p>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default ProjectItem;
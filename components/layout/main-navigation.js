import Link from "next/link";
import { useRouter } from "next/router";
import classes from './main-navigation.module.css'

const MainNavigation = () => {
  const router = useRouter();

  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li><Link href='/'><a className={router.pathname === '/' ? classes.activeLink : ''}>HOME</a></Link></li>
          <li><Link href='/resume'><a className={router.pathname === '/resume' ? classes.activeLink : ''}>RESUME</a></Link></li>
          <li><Link href='/projects'><a className={router.pathname === '/projects' ? classes.activeLink : ''}>PROJECTS</a></Link></li>
          <li><Link href='/contact'><a className={router.pathname === '/contact' ? classes.activeLink : ''}>CONTACT</a></Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;

import Link from "next/link";
import classes from './main-navigation.module.css'

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li><Link href='/'>HOME</Link></li>
          <li><Link href='/resume'>RESUME</Link></li>
          <li><Link href='/projects'>PROJECTS</Link></li>
          <li><Link href='/contact'>CONTACT</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
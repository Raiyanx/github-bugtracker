import styles from "../styles/nav-bar.module.css"
import NavigationBarItem from "./nav-bar-item"

export default function NavigationBar() {
  return (
    <div className={styles.header}>
      <div className={styles.title}>
        GitHub Bugtracker
      </div>
      <div className={styles.headeritems}>
        <NavigationBarItem name="Home" href="/projects" />
        <NavigationBarItem name="Sign In" />
        <NavigationBarItem name="Sign Out" />
      </div>
    </div>
  )
}
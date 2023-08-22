import styles from "../styles/nav-bar.module.css"
import NavigationBarItem from "./nav-bar-item"
import { useSession, signIn, signOut } from "next-auth/react"

export default function NavigationBar() {
  const { data: session, ...others } = useSession()
  console.log(session)
  console.log(others)
  return (
    <div className={styles.header}>
      <div className={styles.title}>
        GitHub Bugtracker
      </div>
      <div className={styles.headeritems}>
        <NavigationBarItem name="Home" href="/projects" />
        {session ?
          <NavigationBarItem name="Sign Out" onClick={() => signOut()} />
          : <NavigationBarItem name="Sign In" onClick={() => signIn()} />
        }
      </div>
    </div>
  )
}

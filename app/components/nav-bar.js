"use client"

import styles from "@Styles/nav-bar.module.css"
import NavigationBarItem from "./nav-bar-item"
import { useSession, signIn, signOut } from "next-auth/react"
import Profile from "./profile-pic"

export default function NavigationBar() {
  const { data: session } = useSession()
  return (
    <div className={styles.header}>
      <div className={styles.title}>
        GitHub Bugtracker
      </div>
      <div className={styles.headeritems}>
        <NavigationBarItem name="Home" href="/projects" />
        {session ?
          <NavigationBarItem name="Sign Out" onClick={() => signOut()} />
          : <NavigationBarItem name="Sign In" onClick={() => signIn("github")} />
        }
        <Profile />
      </div>
    </div>
  )
}

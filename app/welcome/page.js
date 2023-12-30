"use client"

import styles from "@Styles/welcome.module.css"
import { signIn } from "next-auth/react"

export default function WelcomePage() {
  return (
    <div className={styles.page}>
      <div className={styles.title}>
        Welcome to GitHub Bugtracker!
      </div>
      <div className={styles.options}>
        <div>
          <button
            className={styles.button}
            onClick={() => signIn("github")}
          >
            Continue with GitHub
          </button>
        </div>
        <div>
          <button
            className={styles.button}
          >
            See Demo
          </button>
        </div>
      </div>
    </div>
  )
}

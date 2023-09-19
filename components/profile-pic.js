import { useSession } from "next-auth/react"
import styles from "../styles/profile-pic.module.css"

export default function Profile() {
  const { data: session, status } = useSession()
  return (
    <div className={styles.profile}>
      {status === "authenticated" &&
        <img src={session.user.image} />
      }
    </div>
  )
}
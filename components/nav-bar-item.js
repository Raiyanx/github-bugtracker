import styles from "../styles/nav-bar.module.css"
import { useRouter } from "next/router"

export default function NavigationBarItem(props) {
  const router = useRouter()
  function handleClick() {
    if (props.href)
      router.replace(props.href)
  }
  return (
    <button className={styles.navbaritem} onClick={handleClick}>
      {props.name}
    </button>
  )
}
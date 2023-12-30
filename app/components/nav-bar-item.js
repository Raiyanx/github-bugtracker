"use client"

import styles from "@Styles/nav-bar-item.module.css"
import { useRouter } from "next/navigation"

export default function NavigationBarItem(props) {
  const router = useRouter()
  function handleClick() {
    if (props.href)
      router.replace(props.href)
    else
      props.onClick()
  }
  return (
    <button className={styles.navbaritem} onClick={handleClick}>
      {props.name}
    </button>
  )
}
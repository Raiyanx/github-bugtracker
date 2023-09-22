import styles from "../styles/side-bar.module.css"
import { hideBar } from "../store/slices/sidebarSlice"
import { useDispatch } from "react-redux"

export default function SideBar(props) {
  const dispatch = useDispatch()
  return (
    <div className={styles.sidebar}>
      Sidebar
      <button onClick={() => dispatch(hideBar())}>
        Close
      </button>
    </div>
  )
}
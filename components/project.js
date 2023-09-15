import styles from "../styles/project.module.css"
import { postProject } from "../backend/utilities"

export default function Project(props) {

  function handleClick() {
    const newProject = {
      name: props.name,
    }
  }

  return (
    <div className={styles.project}>
      <div>
        {props.name}
      </div>
      <div>
        {props.link}
      </div>
      <div>
        {props.collaborators}
      </div>
    </div>
  )
}
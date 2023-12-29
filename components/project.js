import styles from "../styles/project.module.css"
import { postProject } from "../backend/utilities"

export default function Project(props) {

  return (
    <div className={styles.project} onClick={() => window.open(props.link)}>
      <div className={styles.projectName}>
        {props.name}
      </div>
      <div className={styles.collaborators}>
        {props.collaborators.map(c => <div key={c} >{c}</div>)}
      </div>
    </div>
  )
}
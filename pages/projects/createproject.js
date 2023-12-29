import { useSession } from "next-auth/react"
import styles from "../../styles/createproject.module.css"
import Project from "../../components/project"

export default function NewProject() {
  const { data: session } = useSession()
  const publicRepos = session ? session.publicRepos.map(obj => JSON.parse(obj)) : []
  const privateRepos = session ? session.privateRepos.map(obj => JSON.parse(obj)) : []
  return (
    <div>
      <div className={styles.title}>
        Choose a new repository to create a new project:
      </div>
      <div className={styles.subtitle}>
        Public Repositories:
      </div>
      <div className={styles.projectList} >
        {publicRepos.map((r, index) => { return (<div key={index}> <Project name={r.full_name} link={r.link} collaborators={r.collaborators} /> </div>) })}
      </div>
      <div className={styles.subtitle}>
        Private Repositories:
      </div>
      <div className={styles.projectList} >
        {privateRepos.map((r, index) => { return (<div key={index}> <Project name={r.full_name} link={r.link} collaborators={r.collaborators} /> </div>) })}
      </div>
    </div>
  )
}
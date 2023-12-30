"use client"

import { useSession } from "next-auth/react"
import styles from "@Styles/createproject.module.css"
import Project from "@Components/project"
import { connect } from "react-redux"
import { useEffect } from "react"

function NewProject(props) {
  const { data: session } = useSession()
  const publicRepos = session ? session.publicRepos.map(obj => JSON.parse(obj)) : []
  const privateRepos = session ? session.privateRepos.map(obj => JSON.parse(obj)) : []
  useEffect(() => {
    props.setUser({
      publicRepos: publicRepos,
      privateRepos: privateRepos
    })
  }, [])
  return (
    <div>
      <div className={styles.title}>
        Here are all your Repositories:
      </div>
      <div className={styles.subtitle}>
        Public Repositories:
      </div>
      <div className={styles.projectList} >
        {props.publicRepos && props.publicRepos.map((r, index) => { return (<div key={index}> <Project name={r.full_name} link={r.link} collaborators={r.collaborators} /> </div>) })}
      </div>
      <div className={styles.subtitle}>
        Private Repositories:
      </div>
      <div className={styles.projectList} >
        {props.privateRepos && props.privateRepos.map((r, index) => { return (<div key={index}> <Project name={r.full_name} link={r.link} collaborators={r.collaborators} /> </div>) })}
      </div>
    </div>
  )
}

const mapState = ({user}) => ({
  publicRepos: user.publicRepos,
  privateRepos: user.privateRepos
})

const mapDispatch = ({
  user: { setUser } 
}) => ({
  setUser: setUser
})

export default connect(mapState, mapDispatch)(NewProject);
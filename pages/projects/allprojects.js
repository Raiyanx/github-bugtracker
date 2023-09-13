import { useSession } from "next-auth/react";
import { getProjects } from "../../backend/utilities";
import { useState, useEffect } from "react";

export default function AllProjects() {
  let count = 0
  const { data: session, status } = useSession()
  const [proj, setProj] = useState([])
  useEffect(() => {
    if (status === "authenticated") {
      const work = async () => {
        const user = {
          "github_email": session.user.email
        }
        const projects = await getProjects(user)
        const data = projects["successful"] ? projects["data"] : []
        const proje = data.map(p => {
          return p["fields"]["name"]
        })
        setProj(proje)
      }
      work().catch(console.error)
    }
  }, [session, status])
  return (
    <div className="projects">
      {proj.map(p => {
        return (<div key={count++}> {p} </div>)
      })}
    </div>
  )
}

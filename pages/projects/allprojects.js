import { useSession } from "next-auth/react";
import { getProjects } from "../../backend/utilities";

export default function AllProjects({ proj }) {
  let count = 0
  return (
    proj.map(p => {
      return (<div key={count++}> {p} </div>)
    })
  )
}

export async function getServerSideProps() {
  const { data: session } = useSession()
  const user = {
    "github_email": session.user.email
  }
  const projects = await getProjects(user)
  const data = projects["successful"] ? projects["data"] : []
  const proj = data.map(p => {
    return p["fields"]["name"]
  })
  return {
    props: {
      proj
    },
  }
}
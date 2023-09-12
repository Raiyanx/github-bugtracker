import { useSession } from "next-auth/react"

export default function NewProject() {
  const { data: session } = useSession()
  const publicRepos = session ? session.publicRepos : []
  const privateRepos = session ? session.privateRepos : []
  let count1 = 0;
  let count2 = 0;
  return (
    <div>
      <div>
        Choose a repository to create a new project:
      </div>
      <div>
        Public Repositories:
      </div>
      <div>
        {publicRepos.map(r => { return (<div key={count1++}> {r} </div>) })}
      </div>
      <div>
        Private Repositories:
      </div>
      <div>
        {privateRepos.map(r => { return (<div key={count1++}> {r} </div>) })}
      </div>
    </div>
  )
}
import { getUser, postUser } from "../backend/utilities"

export default function HomePage() {
  async function handleClick() {
    const newdata = {
      "name": "raiyan",
      "github_email": "raiyanjamil10@gmail.com",
      "projects": [
        {
          name: "first project",
          own_project: true,
          owner_email: "raiyanjamil10@gmail.com",
          collaborators: ["promi@gmail.com"],
          link: "github.com",
        },
        {
          name: "second project",
          own_project: false,
          owner_email: "promi@gmail.com",
          collaborators: [],
          link: "github.com",
        }
      ]
    }
    const createuser = await getUser(newdata)
    console.log(createuser)
  }
  return (
    <div>
      Homepage
      <button onClick={handleClick}>
        Click to create new user
      </button>
    </div>
  )
}
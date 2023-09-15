import { useSession } from "next-auth/react"

const backendURL = "http://localhost:8000/"

export async function getUser(data) {
  const response = await fetch(backendURL + "user/?" + new URLSearchParams(data), {
    method: "GET",
    headers: { "Content-type": "application/json" },
    credentials: 'include'
  })
  return response.json()
}

export async function postUser(data) {
  const response = await fetch(backendURL + "user/", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(data),
    credentials: 'include'
  })
  return response.json()
}

export async function getProjects(data) {
  const response = await fetch(backendURL + "user/projects/?" + new URLSearchParams(data), {
    method: "GET",
    headers: { "Content-type": "application/json" },
    credentials: 'include'
  })
  return response.json()
}

export async function postProject(data) {
  const response = await fetch(backendURL + "user/projects/", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(data),
    credentials: 'include'
  })
  return response.json()
}
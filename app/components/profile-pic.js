"use client"

import { useSession } from "next-auth/react"
import styles from "@Styles/profile-pic.module.css"
import { useState } from "react"
import SideBar from "./side-bar"
import { useSelector, useDispatch } from "react-redux"
import { showBar } from "../store/slices/sidebarSlice"
import MiddlePlane from "./middleplane"

export default function Profile() {
  const { data: session, status } = useSession()
  const showSidebar = useSelector(state => state.sidebar.show)
  const dispatch = useDispatch()
  return (
    status === "authenticated" ?
      <div className={styles.profile} >
        <img src={session.user.image} onClick={() => dispatch(showBar())} />
        {showSidebar &&
          <div>
            <MiddlePlane />
            <SideBar />
          </div>
        }
      </div>
      : <></>
  )
}
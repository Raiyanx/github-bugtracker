"use client"

import { useSession } from "next-auth/react"
import styles from "@Styles/profile-pic.module.css"
import { useState } from "react"
import SideBar from "./side-bar"
import { connect } from "react-redux"
import MiddlePlane from "./middleplane"

function Profile(props) {
  const { data: session, status } = useSession()
  return (
    status === "authenticated" ?
      <div className={styles.profile} >
        <img src={session.user.image} onClick={() => props.showBar()} />
        {props.showSidebar &&
          <div>
            <MiddlePlane />
            <SideBar />
          </div>
        }
      </div>
      : <></>
  )
}

const mapState = ({sidebar}) => ({
  showSidebar: sidebar.show
})

const mapDispatch = (dispatch) => ({
  showBar: () => dispatch.sidebar.showBar()
})

export default connect(mapState, mapDispatch)(Profile);

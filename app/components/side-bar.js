"use client"

import styles from "@Styles/side-bar.module.css"
import { connect } from "react-redux"

function SideBar(props) {
  return (
    <div className={styles.sidebar}>
      Sidebar
      <button onClick={() => props.hideBar()}>
        Close
      </button>
    </div>
  )
}

const mapState = (state) => ({

})

const mapDispatch = (dispatch) => ({
  hideBar: () => dispatch.sidebar.hideBar()
})

export default connect(mapState, mapDispatch)(SideBar);

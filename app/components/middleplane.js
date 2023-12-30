"use client"

import styles from "@Styles/middleplane.module.css"
import { hideBar } from "../../lib/store/models/sidebar"
import { connect } from "react-redux"

function MiddlePlane() {
  return (
    <div className={styles.plane} onClick={() => props.hideBar()}>
    </div>
  )
}

const mapState = (state) => ({

})

const mapDispatch = (dispatch) => ({
  hideBar: () => dispatch.sidebar.hideBar()
})

export default connect(mapState, mapDispatch)(MiddlePlane);

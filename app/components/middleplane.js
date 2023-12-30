"use client"

import styles from "@Styles/middleplane.module.css"
import { hideBar } from "../store/slices/sidebarSlice"
import { useDispatch } from "react-redux"

export default function MiddlePlane() {
  const dispatch = useDispatch()
  return (
    <div className={styles.plane} onClick={() => dispatch(hideBar())}>
    </div>
  )
}
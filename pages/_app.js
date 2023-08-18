import "../styles/global.css"
import NavigationBar from "../components/nav-bar"

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavigationBar />
      <div className="component">
        <Component {...pageProps} />
      </div>
    </>
  )
}
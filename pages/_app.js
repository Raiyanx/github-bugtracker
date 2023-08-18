import "../styles/global.css"
import NavigationBar from "../components/nav-bar"
import { SessionProvider } from "next-auth/react"

export default function App({
  Component,
  pageProps: { session, ...pageProps }
}) {
  return (
    <SessionProvider session={session}>
      <NavigationBar />
      <div className="component">
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  )
}
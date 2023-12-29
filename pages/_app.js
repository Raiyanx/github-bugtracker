import "../styles/global.css"
import NavigationBar from "../components/nav-bar"
import { SessionProvider, useSession } from "next-auth/react"
import { useRouter } from "next/router";
import { Provider } from 'react-redux'
import store from "../store/store";

const AuthWrapper = (props) => {
  const { status } = useSession();
  const router = useRouter()
  if (status === "loading") {
    return <></> // Maybe replace with a loading page later
  }
  if (status === "unauthenticated") {
    if (router.pathname !== '/welcome') {
      router.push('/welcome')
      return <></>
    }
    return props.children
  }
  if (status === "authenticated") {
    // Setting width to accomodate for scrollbar
    // document.documentElement.style.width = document.body.clientWidth + 'px'
    if (router.pathname === '/welcome') {
      router.push('/')
      return <></>
    }
    return props.children
  }
};

export default function App({
  Component,
  pageProps: { session, ...pageProps }
}) {
  const router = useRouter()
  return (
    <SessionProvider session={session}>
      <AuthWrapper>
        <Provider store={store}>
          <title>
            GitHub Bugtracker
          </title>
          {router.pathname !== '/welcome' &&
            <div>
              <NavigationBar />
              <div className="component">
                <Component {...pageProps} />
              </div>
            </div>
          }
          {router.pathname === '/welcome' &&
            <div className="component welcome">
              <Component {...pageProps} />
            </div>
          }
        </Provider>
      </AuthWrapper>
    </SessionProvider>
  )
}
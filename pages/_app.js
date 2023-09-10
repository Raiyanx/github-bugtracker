import "../styles/global.css"
import "../styles/variables.css"
import NavigationBar from "../components/nav-bar"
import { SessionProvider, useSession } from "next-auth/react"
import { useRouter } from "next/router";

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
      </AuthWrapper>
    </SessionProvider>
  )
}
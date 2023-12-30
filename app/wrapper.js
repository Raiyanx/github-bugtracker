"use client";

import "@Styles/global.css"
import NavigationBar from "@Components/nav-bar"
import { SessionProvider, useSession } from "next-auth/react"
import { useRouter, usePathname } from "next/navigation";
import { Provider } from 'react-redux'
import store from "./store/store";


const AuthWrapper = (props) => {
  const { status } = useSession();
  const router = useRouter()
  const pathname = usePathname()
  if (status === "loading") {
    return <></> // Maybe replace with a loading page later
  }
  if (status === "unauthenticated") {
    if (pathname !== '/welcome') {
      router.push('/welcome')
      return <></>
    }
    return props.children
  }
  if (status === "authenticated") {
    // Setting width to accomodate for scrollbar
    // document.documentElement.style.width = document.body.clientWidth + 'px'
    if (pathname === '/welcome') {
      router.push('/')
      return <></>
    }
    return props.children
  }
};

export const Wrapper = ({ children }) => {
  const pathname = usePathname()
  return ( 
    <SessionProvider>
      <AuthWrapper>
        <Provider store={store}>
          <title>
            GitHub Bugtracker
          </title>
          {pathname !== '/welcome' &&
            <div>
              <NavigationBar />
              <div className="component">
                {children}
              </div>
            </div>
          }
          {pathname === '/welcome' &&
            <div className="component welcome">
              {children}
            </div>
          }
        </Provider>
      </AuthWrapper>
    </SessionProvider>
  )
};


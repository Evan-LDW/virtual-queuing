import SignUpPage from "./apps/SignUpPage";
import QueueListPage from "./apps/QueueListPage";
import { useEffect, useState } from "react";

const App = () => {
  const [pathname, setPathname] = useState(window.location.pathname)
  const [authenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    window.history.pushState(undefined, undefined, pathname)
  }, [pathname])

  const route = {
    '/auth/sign-up': (<SignUpPage setPathname={setPathname} setAuthenticated={setAuthenticated} />),
    '/': (<QueueListPage setPathname={setPathname} authenticated={authenticated} />),
  }

  return (
    <>
      <button onClick={() => setPathname('/')}>/</button>
      <button onClick={() => setPathname('/auth/sign-up')}>/auth/sign-up</button>
      {route[pathname] || `${pathname} 404`}
    </>
  )
}

export default App;

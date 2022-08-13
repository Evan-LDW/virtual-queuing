import { useEffect, useState } from "react";
import RouterContext from "./RouterContext";

const Router = ({ children }) => {
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    window.history.pushState(undefined, undefined, pathname);
  }, [pathname]);

  return (
    <RouterContext.Provider value={{ pathname, push: setPathname }}>
      {children}
    </RouterContext.Provider>
  );
};

export default Router;

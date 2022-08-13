import { useContext } from "react";
import RouterContext from "../RouterContext";

const Route = ({ path, children }) => {
  const router = useContext(RouterContext);

  if (router.pathname !== path) {
    return null;
  }
  return children;
};

export default Route;

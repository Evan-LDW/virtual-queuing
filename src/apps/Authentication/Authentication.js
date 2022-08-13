import { useEffect, useState } from "react";
import getAuthenticatedUser from "../../apis/getAuthenticatedUser";
import AuthenticationContext from "./AuthenticationContext";

const Authentication = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  const xAuthToken = localStorage.getItem("xAuthToken");

  const [loading, setLoading] = useState(!!xAuthToken);

  useEffect(() => {
    getAuthenticatedUser()
      .then(() => {
        setAuthenticated(true);
      })
      .catch(() => {
        setAuthenticated(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <AuthenticationContext.Provider
      value={{
        loading,
        authenticated,
        setAuthenticated,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export default Authentication;

import SignUpPage from "./apps/SignUpPage";
import QueueListPage from "./apps/QueueListPage";
import Authentication from "./apps/Authentication";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Authentication>
        <Routes>
          <Route path="/auth/sign-up" element={<SignUpPage />} />
          <Route path="/" element={<QueueListPage />} />
        </Routes>
      </Authentication>
    </BrowserRouter>
  );
};

export default App;

// if (pathname === "/auth/sign-up") {
//   return <SignUpPage />;
// }

// if (pathname === "/") {
//   return <QueueListPage />;
// }
// return `${pathname} 404`;

// useEffect(() => {
//   localStorage.setItem("authenticated", JSON.stringify(authenticated));
// }, [authenticated]);

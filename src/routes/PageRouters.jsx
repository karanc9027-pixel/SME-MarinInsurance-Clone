import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Login from "../pages/Login";
import UserPage from "../pages/Userpage";
import ProfilePage from "../pages/ProfilePage";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PrivateRoute from "./PrivateRoute";
import { NotFound } from "../components/NotFound";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const PageRouter = () => {
  const navigate= useNavigate();
  const {isAuthenticated} = useSelector(state=> state.auth)
  useEffect(()=>{
    if(isAuthenticated) {
      navigate('/user')
    }
  },[isAuthenticated]);

  return (
    <div>
      {/* //Header */}
      <Header />
      <main style={{ minHeight: "" }}>
        <Routes>
          <Route path="/" Component={Login} />
          <Route path="/login" Component={Login} />
          <Route
            path="/user"
            element={
              <PrivateRoute>
                <UserPage />
              </PrivateRoute>
            }
          />
          <Route path="/profile" Component={ProfilePage} />
          <Route path="*" Component={NotFound} />
        </Routes>
      </main>
      {/* // footer */}
      <Footer />
    </div>
  );
};

export default PageRouter;

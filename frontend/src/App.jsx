import Layout from "./components/Layout.jsx";
import { Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/auth/SignUpPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/auth/LoginPage.jsx";
import {Toaster} from "react-hot-toast";

function App() {
  return (
      <Layout>

          <Routes>
              <Route path="/" element={ <HomePage /> } />
              <Route path="/signup" element={ <SignUpPage /> } />
              <Route path="/login" element={ <LoginPage /> } />
          </Routes>
          <Toaster />
      </Layout>
  )
}

export default App

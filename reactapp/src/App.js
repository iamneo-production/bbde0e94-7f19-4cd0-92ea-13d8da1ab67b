import LoginPage from "./Login";
import RegistrationPage from "./Register";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";



export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Frontpage />}></Route> */}
          <Route path="/Login" element={<LoginPage />}></Route>
          <Route path="/Register" element={<RegistrationPage />}></Route>={" "}
          <Route path="/Home" element={<Home />} />
 
 </Routes>
      </Router>
</>
);
}
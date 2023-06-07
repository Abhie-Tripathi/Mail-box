import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import Home from "./components/Home"
import Mail from "./components/Mail";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ComposeMail from "./components/ComposeMail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUpForm/>}/>
        <Route path="/login" element={<LoginForm/>}/>
        <Route path="/home" element={<ComposeMail/>}/>
      </Routes>
    </Router>
  );
}

export default App;

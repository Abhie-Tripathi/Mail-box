import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import Home from "./components/Home"
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUpForm/>}/>
        <Route path="/login" element={<LoginForm/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;

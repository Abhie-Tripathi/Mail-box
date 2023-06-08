import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import ComposeMail from "./components/ComposeMail";
import Inbox from "./components/Inbox";
import EmailView from "./components/EmailView";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUpForm/>}/>
        <Route path="/login" element={<LoginForm/>}/>
        <Route path="/compose" element={<ComposeMail/>}/>
        <Route path="/inbox" element={<Inbox/>}/>
        <Route path="/inbox/:id" element={<EmailView/>}/>
      </Routes>
    </Router>
  );
}

export default App;

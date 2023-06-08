import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import ComposeMail from "./components/ComposeMail";
import Inbox from "./components/Inbox";
import EmailView from "./components/EmailView";
import SentBox from "./components/SentBox";
import SentEmailView from "./components/SentEmailView";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUpForm/>}/>
        <Route path="/login" element={<LoginForm/>}/>
        <Route path="/compose" element={<ComposeMail/>}/>
        <Route path="/inbox" element={<Inbox/>}/>
        <Route path="/inbox/:id" element={<EmailView/>}/>
        <Route path="/sentbox" element={<SentBox/>}/>
        <Route path="/sentbox/:id" element={<SentEmailView/>}/>
      </Routes>
    </Router>
  );
}

export default App;

import React,{useContext} from "react";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import ComposeMail from "./components/ComposeMail";
import Inbox from "./components/Inbox";
import EmailView from "./components/EmailView";
import SentBox from "./components/SentBox";
import SentEmailView from "./components/SentEmailView";
import { Context } from "./components/ContextProvider";
import ForgotPass from "./components/ForgotPass";


function App() {
  const ctx = useContext(Context)
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUpForm/>}/>
        <Route path="/login" element={<LoginForm/>}/>
        <Route path="/forgotpassword" element={<ForgotPass/>}/>
        {ctx.isLoggedIn && <Route path="/compose" element={<ComposeMail/>}/>}
        {ctx.isLoggedIn && <Route path="/inbox" element={<Inbox/>}/>}
        {ctx.isLoggedIn && <Route path="/inbox/:id" element={<EmailView/>}/>}
        {ctx.isLoggedIn && <Route path="/sentbox" element={<SentBox/>}/>}
        {ctx.isLoggedIn && <Route path="/sentbox/:id" element={<SentEmailView/>}/>}
      </Routes>
    </Router>
  );
}

export default App;

import React,{useContext} from "react";
import logo from "../assets/email.png"
import { Link,useNavigate } from "react-router-dom";
import { Context } from "./ContextProvider";

const Sidebar = (props) => {
  const navigate = useNavigate()
  const ctx = useContext(Context)
  const userName = localStorage.getItem("email")

  const signOutHandler = () =>{
    ctx.setToken(null)
    localStorage.removeItem("email")
    navigate("/login")
  }

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <a
              href="/"
              className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
            >
              <img src={logo} alt="mail-logo" style={{width: "64px",height:"64px"}}/>
            </a>
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <li className="nav-item ">
                <Link to="/compose" className="nav-link align-middle text-white px-0">
                  <i className="fs-4 bi-envelope"></i>{" "}
                  <span className="ms-1 d-none d-sm-inline">Compose</span>
                </Link>
              </li>

              <li>
                <Link to="/inbox" className="nav-link px-0 text-white align-middle">
                  <i className="fs-4 bi-inbox"></i>{" "}
                  <span className="ms-1 d-none d-sm-inline">{`Inbox - ${ctx.inboxNo}`}</span>
                </Link>
              </li>

              <li>
                <Link to="/sentbox" className="nav-link px-0 text-white align-middle">
                  <i className="fs-4 bi-envelope-fill"></i>{" "}
                  <span className="ms-1 d-none d-sm-inline">Sent Box</span>
                </Link>
              </li>

              <li>
                <Link to="" className="nav-link px-0  text-white align-middle">
                  <i className="fs-4 bi-trash"></i>{" "}
                  <span className="ms-1 d-none d-sm-inline">Trash</span>
                </Link>
              </li>

            </ul>
            <hr />
            <div className="dropdown pb-4">
              <a
                href="/nothing"
                className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                id="dropdownUser1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://github.com/mdo.png"
                  alt="hugenerd"
                  width="30"
                  height="30"
                  className="rounded-circle"
                />
                <span className="d-none d-sm-inline mx-1" style={{fontSize:"14px"}}>{userName}</span>
              </a>
              <ul
                className="dropdown-menu dropdown-menu-dark text-small shadow"
                aria-labelledby="dropdownUser1"
              >
                <li>
                  <a className="dropdown-item" href="/setting">
                    Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/profile">
                    Profile
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <button className="dropdown-item" onClick={signOutHandler}>
                    Sign out
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col py-3">
          {props.children}

        </div>
      </div>
    </div>
  );
};

export default Sidebar;

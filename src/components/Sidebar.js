import React from "react";
import logo from "../assets/email.png"
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  return (
    <div class="container-fluid">
      <div class="row flex-nowrap">
        <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
          <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <a
              href="/"
              class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
            >
              <img src={logo} style={{width: "64px",height:"64px"}}/>
            </a>
            <ul
              class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <li class="nav-item ">
                <Link to="/compose" class="nav-link align-middle text-white px-0">
                  <i class="fs-4 bi-envelope"></i>{" "}
                  <span class="ms-1 d-none d-sm-inline">Compose</span>
                </Link>
              </li>

              <li>
                <Link to="/inbox" class="nav-link px-0 text-white align-middle">
                  <i class="fs-4 bi-inbox"></i>{" "}
                  <span class="ms-1 d-none d-sm-inline">Inbox</span>
                </Link>
              </li>

              <li>
                <Link to="" class="nav-link px-0 text-white align-middle">
                  <i class="fs-4 bi-envelope-fill"></i>{" "}
                  <span class="ms-1 d-none d-sm-inline">Sent Box</span>
                </Link>
              </li>

              <li>
                <Link to="" class="nav-link px-0  text-white align-middle">
                  <i class="fs-4 bi-trash"></i>{" "}
                  <span class="ms-1 d-none d-sm-inline">Trash</span>
                </Link>
              </li>

            </ul>
            <hr />
            <div class="dropdown pb-4">
              <a
                href="#"
                class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                id="dropdownUser1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://github.com/mdo.png"
                  alt="hugenerd"
                  width="30"
                  height="30"
                  class="rounded-circle"
                />
                <span class="d-none d-sm-inline mx-1">UserName</span>
              </a>
              <ul
                class="dropdown-menu dropdown-menu-dark text-small shadow"
                aria-labelledby="dropdownUser1"
              >
                <li>
                  <a class="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Profile
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col py-3">
          {props.children}

        </div>
      </div>
    </div>
  );
};

export default Sidebar;

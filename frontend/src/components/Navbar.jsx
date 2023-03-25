import { useState } from "react";
import Cookies from "universal-cookie";
import logo from '../assets/logo.png'
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';


export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  const cookie = new Cookies();
  const check = cookie.get('authorisation');

  const logout = () => {
    cookie.remove('authorisation');
    localStorage.removeItem('info');
  }

  if (check) {
    if (check.role != 0) {
      return (
        <nav className="w-full shadow-lg">
          <div className=" justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 pt-6">
            <div >
              <div className="flex items-center justify-between py-3 md:py-5 md:block">
                <a className="" href="">
                  <img className="w-10 h-10" src={logo} alt="" />
                </a>
                <div className="md:hidden">
                  <button
                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                    onClick={() => setNavbar(!navbar)}>
                    {navbar ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div
                className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                  }`}
              >
                <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                  <li className="text-gray-600 hover:text-blue-600">
                    <a href="/">Home</a>
                  </li>
                  <li className="text-gray-600 hover:text-blue-600">
                    <a href="/gallery">Books</a>
                  </li>
                  <li className="text-gray-600 hover:text-blue-600">
                    <a href="/groups">Join a group</a>
                  </li>
                  <li>
                    <MDBDropdown>
                      <MDBDropdownToggle>Profile <i className="fa-solid fa-user"></i></MDBDropdownToggle>
                      <MDBDropdownMenu>
                        <MDBDropdownItem href="/profile" link>Your Profile</MDBDropdownItem>
                        <MDBDropdownItem href="/Dashboard" link>Dashboard</MDBDropdownItem>
                        <MDBDropdownItem href="/" onClick={logout} link>Logout</MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      )
    } else {
      return (
        <nav className="w-full shadow-lg">
          <div className=" justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 pt-6">
            <div >
              <div className="flex items-center justify-between py-3 md:py-5 md:block">
                <a className="" href="">
                  <img className="w-10 h-10" src={logo} alt="" />
                </a>
                <div className="md:hidden">
                  <button
                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                    onClick={() => setNavbar(!navbar)}>
                    {navbar ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div
                className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                  }`}
              >
                <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                  <li className="text-gray-600 hover:text-blue-600">
                    <a href="/">Home</a>
                  </li>
                  <li className="text-gray-600 hover:text-blue-600">
                    <a href="/gallery">Books</a>
                  </li>
                  <li className="text-gray-600 hover:text-blue-600">
                  <MDBDropdown>
                      <MDBDropdownToggle>Groups</MDBDropdownToggle>
                      <MDBDropdownMenu>
                        <MDBDropdownItem href="/groups" link>Join a group</MDBDropdownItem>
                        <MDBDropdownItem href="/usergroups" link>Your Groups</MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </li>
                  <li>
                    <MDBDropdown>
                      <MDBDropdownToggle>Profile <i className="fa-solid fa-user"></i></MDBDropdownToggle>
                      <MDBDropdownMenu>
                        <MDBDropdownItem href="/profile" link>Your Profile</MDBDropdownItem>
                        <MDBDropdownItem href="/" onClick={logout} link>Logout</MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      );
    }
  } else {
    return (
      <nav className="w-full shadow-lg">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <a href="javascript:void(0)">
                <img className="w-14 h-14 flex justify-start" src={logo} alt="" />
              </a>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}>
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-gray-600 hover:text-blue-600">
                  <a href="/">Home</a>
                </li>
                <li className="text-gray-600 hover:text-blue-600">
                  <a href="/gallery">Books</a>
                </li>
                <li className="text-gray-600 hover:text-blue-600">
                  <a href="/groups">Join a Group</a>
                </li>
                <li className="text-gray-600 hover:text-blue-600">
                  <a href="/register">Register</a>
                </li>
                <li className="text-gray-600 hover:text-blue-600">
                  <a href="/login">Login</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
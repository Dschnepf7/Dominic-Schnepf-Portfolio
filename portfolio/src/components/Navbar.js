import React, { useState } from "react";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Resume from "./Resume";

function Navbar() {
  const [selected, setSelected] = useState(null);

  const items = [
    { label: "About Me", component: <AboutMe /> },
    { label: "Portfolio", component: <Portfolio /> },
    { label: "Contact", component: <Contact /> },
    { label: "Resume", component: <Resume /> }
  ];

  const handleClick = (index) => {
    setSelected(index);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Dominic Schnepf
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {items.map((item, index) => (
              <li className="nav-item" key={index}>
                <a
                  className={`nav-link ${
                    selected === index ? "active" : ""
                  }`}
                  onClick={() => handleClick(index)}
                  href="#"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {selected !== null && items[selected].component}
    </nav>
  );
}

export default Navbar;

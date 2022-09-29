import logo from "../../assets/burger-logo.b8503d26.png";
import "./nav.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-sm bg-color navbar-dark container-fluid">
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon white"></span>
      </button>
      <a className="navbar-brand mx-1" href="#goes-to-nothing">
        <img src={logo} alt="Burger-logo" width="30" height="24" />
      </a>
      <div
        className="collapse navbar-collapse navbar-nav "
        id="navbarSupportedContent"
      >
        <a
          className="nav-link white ms-auto"
          aria-current="page"
          href="#Burger"
        >
          Burger Builder
        </a>
        <a className="nav-link white" href="#Login">
          Login
        </a>
      </div>
    </nav>
  );
}

export default Nav;

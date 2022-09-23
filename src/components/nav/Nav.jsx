import logo from "../../assets/burger-logo.b8503d26.png";
import "./nav.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-sm bg-color navbar-dark">
      <div className="container-fluid">
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
        <a className="navbar-brand" href="#goes-to-nothing">
          <img src={logo} alt="Burger-logo" width="30" height="24" />
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav ms-auto">
            <a className="nav-link white" aria-current="page" href="#Burger">
              Burger Builder
            </a>
            <a className="nav-link white" href="#Login">
              Login
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

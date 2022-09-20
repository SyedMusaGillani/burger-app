
import logo from '../../assets/burger-logo.b8503d26.png'
import './nav.css'

function Nav(){
  return (
    <nav className="navbar navbar-expand-sm bg-color navbar-dark">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon white"></span>
        </button>
        <a class="navbar-brand" href="#goes-to-nothing">
            <img src={logo} alt="Burger-logo" width="30" height="24" />
        </a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="navbar-nav ms-auto">
          <a class="nav-link white" aria-current="page" href="#Burger">Burger Builder</a>
          <a class="nav-link white" href="#Login">Login</a>
        </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { Nav } from "./components";

import "./App.css";

function App() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}

export default App;

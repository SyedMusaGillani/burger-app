import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import store from "./redux/store";
import { Nav } from "./components";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <>
        <Nav />
        <Outlet />
      </>
    </Provider>
  );
}

export default App;

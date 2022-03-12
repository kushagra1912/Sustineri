import "./App.css";
import { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import NavBar from "./components/layout/NavBar";
import Login from "./components/auth/Login";

const App = () => {

  useEffect(() => {
    M.AutoInit();
  });

  return (
    <div>
      <NavBar />
      <p>Hello</p>
    </div>
  );

};

export default App;

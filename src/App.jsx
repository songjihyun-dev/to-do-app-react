import { Outlet } from "react-router-dom";
import { Header } from "./components/Header/Header";

import "./App.css";

export const App = () => {
  return (
    <div>
      <Header />
      <Outlet></Outlet>
    </div>
  );
};

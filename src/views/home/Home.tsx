import logo from "./../../logo.svg";
import "./../../App.css";
import { HomeStyle } from "../../styles/views/HomeStyles";

function Home() {
  return (
    <div className={HomeStyle}>
      <div className="logoContainer">
        <img src={logo} alt="logo" title="logo" />
      </div>
      <a href="/about">Acerca de</a>
    </div>
  )
}

export default Home;
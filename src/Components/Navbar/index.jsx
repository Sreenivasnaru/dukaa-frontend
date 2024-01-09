import NavFoot from "./NavFoot";
import NavTop from "./NavTop";
import NavBody from "./Navbody";
import "./index.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <NavTop />
      <NavBody />
      <NavFoot />
    </div>
  );
}

import { Link } from "react-router-dom";
import ycs_logo from "../assets/ycs_logo_dark_512.png";
import "./Header.css";

export const Header = () => {
  return (
    <div className="header">
      <Link className="logo" to="/">
        &lt;y/cs&gt;
      </Link>
      <div className="pagesList">
        <Link className="header-link" to="/team">
          Team
        </Link>
        <Link className="header-link" to="/products">
          Products
        </Link>
        <Link className="header-link" target="_blank" to="https://airtable.com/appuVd3lWwTikuv40/shrLYVYcHUDQa8T3h">
          Feedback
        </Link>
      </div>
    </div>
  );
};
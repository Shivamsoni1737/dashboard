import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__wrapper">
        <div className="sidebar__menu">
          <ul className="sidebar__list">
            <Link to="/" className="link">
            <li className="sidebar__listitem">
              <LineStyle className="sidebar__icon" />
              Home
            </li>
            </Link>
            <li className="sidebar__listitem">
              <Timeline className="sidebar__icon" />
              Analytics
            </li>
            <li className="sidebar__listitem">
              <TrendingUp className="sidebar__icon" />
              Sales
            </li>
            <Link to="/users" className="link">
              <li className="sidebar__listitem">
                <PermIdentity className="sidebar__icon" />
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebar__listitem">
                <Storefront className="sidebar__icon" />
                Products
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

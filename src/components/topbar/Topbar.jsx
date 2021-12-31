import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar__wrapper">
        <div className="topbar__left">
          <span className="topbar__logo">Admin Dashboard</span>
        </div>
        <div className="topbar__right">
          <div className="topbar__icon">
            <NotificationsNone />
            <span className="topbar__badge">2</span>
          </div>
          <div className="topbar__icon">
            <Language />
            <span className="topbar__badge">99</span>
          </div>
          <div className="topbar__icon">
            <Settings />
          </div>
          <img src="https://image.shutterstock.com/image-vector/man-character-face-avatar-glasses-260nw-562077406.jpg" alt="" className="topbar__avatar" />
        </div>
      </div>
    </div>
  );
}

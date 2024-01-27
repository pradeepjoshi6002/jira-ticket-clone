import React from "react";
import "./styles/Navbar.css";

export default function Navbar({ setModal, deleteTicket, setDeleteTicket }) {
  return (
    <>
      <div className="navbar">
        <div className="priority-colors-cont">
          <div className="lightblue priority-colors"></div>
          <div className="lightpink priority-colors"></div>
          <div className="lightgreen priority-colors"></div>
          <div className="black priority-colors"></div>
        </div>
        <div className="tools-cont">
          <div className="add" onClick={setModal}>
            <span className="material-icons">add</span>
          </div>
          <div
            className={`${deleteTicket ? "red" : ""} delete`}
            onClick={setDeleteTicket}
          >
            <span className="material-icons">close</span>
          </div>
        </div>
      </div>
    </>
  );
}

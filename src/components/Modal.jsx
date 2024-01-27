import React, { useState } from "react";
import "./styles/Modal.css";

export default function Modal({ ticketArr, makeTicket, setModal }) {
  const [priorityColor, setPriorityColor] = useState("black");
  const [data, setData] = useState("");

  const handleKeydown = (e) => {
    if (e.key === "Shift") {
      makeTicket({
        ticketColor: priorityColor,
        ticketID: ticketArr.length,
        ticketData: data,
      });
      setModal();
    }
  };
  const handleClick = () => {
    makeTicket({
      ticketColor: priorityColor,
      ticketID: ticketArr.length,
      ticketData: data,
    });
    setModal();
  };

  return (
    <div className="modal-cont">
      <textarea
        className="modal-text-area"
        spellCheck="false"
        onKeyDown={(e) => handleKeydown(e)}
        onChange={(e) => setData(e.target.value)}
      ></textarea>
      <div className="modal-priority-colors-cont">
        <div
          onClick={() => setPriorityColor("lightblue")}
          className={`lightblue modal-priority-color ${
            priorityColor == "lightblue" ? "border" : ""
          }`}
        ></div>
        <div
          onClick={() => setPriorityColor("lightpink")}
          className={`lightpink modal-priority-color ${
            priorityColor == "lightpink" ? "border" : ""
          }`}
        ></div>
        <div
          onClick={() => setPriorityColor("lightgreen")}
          className={`lightgreen modal-priority-color ${
            priorityColor == "lightgreen" ? "border" : ""
          }`}
        ></div>
        <div
          onClick={() => setPriorityColor("black")}
          className={`black modal-priority-color ${
            priorityColor == "black" ? "border" : ""
          }`}
        ></div>
        <div className="mobile-add-btn" onClick={handleClick}>
          <span className="material-icons">bookmark</span>
        </div>
      </div>
    </div>
  );
}

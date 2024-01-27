import React, { useState } from "react";
import "./styles/Ticket.css";

export default function Ticket({
  ticketArr,
  deleteTicketsFn,
  deleteTicket,
  ticketColor,
  ticketId,
  ticketText,
}) {
  const handleClick = (indx) => {
    if (deleteTicket) {
      const newArr = ticketArr.filter((element) => element.ticketID != indx);
      deleteTicketsFn(newArr);
    }
  };
  return (
    <div className="ticket-cont" onClick={() => handleClick(ticketId)}>
      <div className={`ticket-color-line ${ticketColor}`}></div>
      <div className="ticket-id-cont">#{ticketId}</div>
      <div className="ticket-text-area">{ticketText}</div>
    </div>
  );
}

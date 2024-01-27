import Modal from "./Modal";
import Ticket from "./Ticket";
import "./styles/MainCont.css";
import React, { useEffect, useState } from "react";

const getLocalTickets = () => {
  const items = JSON.parse(localStorage.getItem("ticketsArr"));
  if (items) {
    return items;
  }
  return [];
};

export default function MainCont({ setModal, showModal, deleteTicket }) {
  const [tickets, setTickets] = useState(getLocalTickets());

  const makeTicket = (data) => {
    setTickets([...tickets, data]);
  };
  const deleteTicketFromArr = (data) => {
    setTickets([...data]);
  };

  useEffect(() => {
    localStorage.setItem("ticketsArr", JSON.stringify(tickets));
  }, [tickets]);

  return (
    <div className="main-cont">
      {showModal ? (
        <Modal
          ticketArr={tickets}
          makeTicket={makeTicket}
          setModal={setModal}
        />
      ) : (
        ""
      )}
      {tickets.map((ele, index) => (
        <Ticket
          ticketArr={tickets}
          deleteTicketsFn={deleteTicketFromArr}
          deleteTicket={deleteTicket}
          key={index}
          ticketColor={ele.ticketColor}
          ticketId={ele.ticketID}
          ticketText={ele.ticketData}
        />
      ))}
    </div>
  );
}

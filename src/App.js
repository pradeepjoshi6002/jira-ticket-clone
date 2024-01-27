import { useState } from "react";
import "./App.css";
import MainCont from "./components/MainCont";
import Navbar from "./components/Navbar";

function App() {
  const [showModal, setModal] = useState(false);
  const [deleteTicket, setDeleteTicket] = useState(false);
  return (
    <>
      <Navbar
        setModal={() => setModal(!showModal)}
        deleteTicket={deleteTicket}
        setDeleteTicket={() => setDeleteTicket(!deleteTicket)}
      />
      <MainCont
        setModal={() => setModal(!showModal)}
        showModal={showModal}
        deleteTicket={deleteTicket}
      />
    </>
  );
}

export default App;

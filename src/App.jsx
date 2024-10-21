import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import MailboxList from "./components/MailboxList";
import MailboxForm from "./components/MailboxForm";
import MailboxDetails from "./components/MailboxDetails";

// src/App.jsx

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);
  const [selection, setSelection] = useState("small");

  const handleSelectionChange = (event) => {
    setSelection(event.target.value);
  };

  const addBox = () => {
    //code here
  };
  return (
    <div className="container">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <h1>Post Office</h1>
            </main>
          }
        />
        <Route path="/mailboxes" element={<MailboxList />} />
        <Route
          path="/new-mailbox"
          element={
            <MailboxForm
              selection={selection}
              handleSelectionChange={handleSelectionChange}
            />
          }
        />
        <Route path="mailboxes/:mailboxId" element={<MailboxDetails />} />
      </Routes>
      {selection}
    </div>
  );
};

export default App;

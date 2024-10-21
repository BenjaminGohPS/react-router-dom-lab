import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import { Route, Routes, useNavigate } from "react-router-dom";
import MailboxList from "./components/MailboxList";
import MailboxForm from "./components/MailboxForm";
import MailboxDetails from "./components/MailboxDetails";

// src/App.jsx

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);
  const [selection, setSelection] = useState("small");
  const [name, setName] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSelectionChange = (event) => {
    setSelection(event.target.value);
  };

  const navigate = useNavigate();

  const addBox = (event) => {
    event.preventDefault();
    setMailboxes((prevState) => [
      ...prevState,
      { id: mailboxes.length, name: name, size: selection },
    ]);
    navigate("/mailboxes");
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
        <Route
          path="/mailboxes"
          element={
            <MailboxList
              name={name}
              size={selection}
              mailboxId={mailboxes.length}
              mailboxes={mailboxes}
            />
          }
        />
        <Route
          path="/new-mailbox"
          element={
            <MailboxForm
              selection={selection}
              name={name}
              handleNameChange={handleNameChange}
              handleSelectionChange={handleSelectionChange}
              addBox={addBox}
            />
          }
        />
        <Route
          path="/mailboxes/:mailboxId"
          element={
            <MailboxDetails
              name={name}
              size={selection}
              mailboxId={mailboxes.length}
              mailboxes={mailboxes}
            />
          }
        />
      </Routes>
      {/* {name}
      {JSON.stringify(selection)} */}
      {JSON.stringify(mailboxes)}
      {mailboxes.length}
    </div>
  );
};

export default App;

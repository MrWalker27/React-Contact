import "./App.css";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddContacts from "./components/AddContacts";
import EditContacts from "./components/EditContacts";
import { useState } from "react";
import uuid from "react-uuid";

function App() {
  const [contacts, setContacts] = useState([]);
  const [activeContact, setActiveContact] = useState([false]);
  const [editedContact, setEditedContact] = useState();
  const onAddContact = (iname, iphone, iemail, iage, ipass) => {
    const newContact = {
      id: uuid(),
      name: iname,
      phone: iphone,
      email: iemail,
      age: iage,
      pass: ipass,
    };
    setContacts([newContact, ...contacts]);
  };
  return (
    <>
      <nav className="navigation">
        <NavLink to="/" className="links">
          Home
        </NavLink>
        <NavLink to="/AddContacts" className="links">
          Add Contacts
        </NavLink>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              contacts={contacts}
              setContacts={setContacts}
              activeContact={activeContact}
              setActiveContact={setActiveContact}
              editedContact={editedContact}
              setEditedContact={setEditedContact}
            />
          }
        />
        <Route
          path="/AddContacts"
          element={
            <AddContacts
              onAddContact={onAddContact}
              setActiveContact={setActiveContact}
              setEditedContact={setEditedContact}
            />
          }
        />
        <Route
          path="/EditContacts"
          element={
            <EditContacts
              editedContact={editedContact}
              setEditedContact={setEditedContact}
              contacts={contacts}
              setContacts={setContacts}
              setActiveContact={setActiveContact}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;

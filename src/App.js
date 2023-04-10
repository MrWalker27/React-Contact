import "./App.css";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddContacts from "./components/AddContacts";
import EditContacts from "./components/EditContacts";
import { useEffect, useState } from "react";
import uuid from "react-uuid";
import InvalidPage from "./components/InvalidPage";

function App() {
  const [contacts, setContacts] = useState(JSON.parse(localStorage.contacts) || []);
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  },[contacts]);
  const [activeContact, setActiveContact] = useState([false]);
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
      <nav className="navigation" >
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
            />
          }
        />
        <Route
          path="/AddContacts"
          element={
            <AddContacts
              onAddContact={onAddContact}
              setActiveContact={setActiveContact}
            />
          }
        />
        <Route
          path="/EditContacts/:id"
          element={
            <EditContacts
              contacts={contacts}
              setContacts={setContacts}
              setActiveContact={setActiveContact}
            />
          }
        />
        <Route
          path="/InvalidPage"
          element={
            <InvalidPage
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;

import './App.css';
import { NavLink,Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AddContacts from './components/AddContacts';
import { useState } from 'react';
import uuid from 'react-uuid';

function App() {
  const [contacts, setContacts] = useState([]);
  const [activeContact, setActiveContact] = useState([false]);
  const onAddContact = (iname,iphone,iemail,iage) => {
    const newContact = {
      id: uuid(),
      name: iname,
      phone: iphone,
      email: iemail,
      age: iage,
    };
    setContacts([newContact, ...contacts]);
  };
  return (
    <>
      <nav className='navigation'>
        <NavLink to="/" className='links'>Home</NavLink>
        <NavLink to="/AddContacts" className='links'>Add Contacts</NavLink>
      </nav>
      <Routes>
        <Route path='/' element={<Home contacts={contacts} setContacts={setContacts} activeContact={ activeContact} setActiveContact={setActiveContact} />} /> 
        <Route path='/AddContacts' element={<AddContacts onAddContact={ onAddContact} setActiveContact={setActiveContact}/>} /> 
      </Routes>
    </>
  );
}

export default App;

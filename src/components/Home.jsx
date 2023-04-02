import React, { useState } from "react";
import "../App.css";
import { NavLink } from 'react-router-dom';

function Home({ contacts, activeContact, setActiveContact , setContacts ,editedContact,setEditedContact}) {  

  const click = (id) => {
    setActiveContact(id);
    setEditedContact(contacts.find((contact) => contact.id === id));
  };

  const handleDelete = () => {
    const updatedContacts = contacts.filter(
      (contact) => contact.id !== editedContact.id
    );
    setContacts(updatedContacts);
    setEditedContact(null);
  };
  return (
    <>
      <div className="home-heading">Contact List:</div>

      {contacts.length === 0 ? (
        <p className="empty-list">No contacts to display</p>
      ) : (
        <>
          <div className="home-contacts-container">
            {contacts.map((contact) => (
              <div
                key={contact.id}
                className={`home-contacts ${
                  contact.id === activeContact && "active"
                }`}
                onClick={() => click(contact.id)}
              >
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <div className="contacts-heading-display">Name:</div>
                      </td>
                      <td>
                        <div className="contacts-content-display">
                          {contact.name}
                        </div>
                      </td>
                      <td>
                        <div className="contacts-heading-display">
                          Phone:
                        </div>
                      </td>
                      <td>
                        <div className="contacts-content-display">
                          {contact.phone}
                        </div>
                      </td>
                      <td>
                      {editedContact && (contact.id === editedContact.id && (
                  <div>
                    
                    <button ><NavLink to="/EditContacts" style={{color:'lightgreen',textDecoration:'none'}} >Edit</NavLink></button>
                  </div>
                ))}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="contacts-heading-display">
                          Email:
                        </div>
                      </td>
                      <td>
                        <div className="contacts-content-display">
                          {contact.email}
                        </div>
                      </td>
                      <td>
                        <div className="contacts-heading-display">Age:</div>
                      </td>
                      <td>
                        <div className="contacts-content-display">
                          {contact.age}
                        </div>
                      </td>
                      <td>
                      {editedContact && (contact.id === editedContact.id && (
                  <div>
                    
                    <button style={{color:'crimson'}}
                      id="delete_button"
                      onClick={handleDelete}
                    >
                      Delete
                    </button>
                  </div>
                ))}
                      </td>
                    </tr>
                    
                  </tbody>
                  
                </table>
                
              </div>
            ))}
          </div>

          
        </>
      )}
    </>
  );
}

export default Home

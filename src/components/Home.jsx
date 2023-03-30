import React, { useState } from "react";
import "../App.css";

function Home({ contacts, activeContact, setActiveContact , setContacts}) {
  const [editedContact, setEditedContact] = useState(null);

  

  const click = (id) => {
    setActiveContact(id);
    setEditedContact(contacts.find((contact) => contact.id === id));
  };
  const handleSave = () => {
    const updatedContacts = contacts.map((contact) =>
      contact.id === editedContact.id ? editedContact : contact
    );
    setContacts(updatedContacts);
    setEditedContact(null);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditedContact((prev) => ({
      ...prev,
      [name]: value,
    }));
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
                    </tr>
                  </tbody>
                </table>
              </div>
            ))}
          </div>

          {editedContact && (
            <div className="active-contact-container">
              <div className="active-contact-input-container">
                    <table className="table-edit">
                      <tr>
                        <td className="table-edit-heading"><div className="active-contact-input-heading">Name:</div></td>
                        <td><input
                    type="text"
                    name="name"
                    value={editedContact.name}
                    onChange={handleChange}
                  /></td>
                      </tr>
                      <tr>
                        <td className="table-edit-heading"><div className="active-contact-input-heading">Phone:</div></td>
                        <td><input
                    type="text"
                    name="phone"
                    value={editedContact.phone}
                    onChange={handleChange}
                  /></td>
                    </tr>
                    <tr>
                        <td className="table-edit-heading"><div className="active-contact-input-heading">Email:</div></td>
                        <td><input
                    type="text"
                    name="email"
                    value={editedContact.email}
                    onChange={handleChange}
                  /></td>
                    </tr>
                    <tr>
                        <td className="table-edit-heading"><div className="active-contact-input-heading">Age:</div></td>
                        <td><input
                    type="text"
                    name="age"
                    value={editedContact.age}
                    onChange={handleChange}
                  /></td>
                    </tr>
                    <tr>
                      
                      <td></td>
                      <td><button onClick={handleSave}>Save</button></td>
                    </tr>
                    </table>                
                  
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default Home

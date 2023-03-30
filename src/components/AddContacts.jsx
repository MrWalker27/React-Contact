import '../App.css';
import React, { useState} from 'react';

const AddContacts = ({ onAddContact, setActiveContact }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const handleSave = () => {
        onAddContact(name, phone, email, age);
        setName('');
        setPhone('');
        setEmail('');
        setAge('');
    }
    return (<>
        <div className="addContacts-main">
            <table>
                <tr>
                    <td><div className='contacts-heading' style={{marginTop: '15px'}}>Name:</div></td>
                    <td><input type="text" value={name}  style={{marginTop: '15px'}} onChange={(e) => setName(e.target.value)} /></td>
                </tr>
                <tr>
                    <td><div className='contacts-heading'>Phone:</div></td>
                    <td> <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} /></td>
                </tr>
                <tr>
                    <td><div className='contacts-heading'>Email:</div></td>
                    <td><input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /></td>
                </tr>
                <tr>
                    <td><div className='contacts-heading'>Age:</div></td>
                    <td><input type="text" value={age} onChange={(e) => setAge(e.target.value)} /></td>
                </tr>
                <tr>
                    <td><div className='contacts-heading'></div></td>
                    <button onClick={handleSave}>Save</button>
                </tr>
                </table>
        </div>  
        
    </>    
    );
};

export default AddContacts;
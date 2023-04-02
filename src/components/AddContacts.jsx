import '../App.css';
import React, { useState, useEffect} from 'react';

const AddContacts = ({ onAddContact, setActiveContact,setEditedContact }) => {
    useEffect(() => {
        setActiveContact(null);
        setEditedContact(null);
      }, []);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [pass, setPass] = useState('');
    const [cPass, setCPass] = useState('');
    const handleSave = () => {
        (((name != "") && (phone != "") && (email != "") && (age != "") && (pass != "") && (cPass != "")) ? passHandler() : window.alert("Please fill all the fields properly"))
        
    }
    const passHandler = () => {
        (pass === cPass ? sendSave() : passMissMatch())
    };
    const passMissMatch = () => {
        window.alert("Password doesn't match !!")
        setPass('');
        setCPass('');
    };
    const sendSave = () => {
        onAddContact(name, phone, email, age, pass);
        setName('');
        setPhone('');
        setEmail('');
        setAge('');
        setPass('');
        setCPass('');
    };
    return (<>
        <div className="addContacts-main">
            <table>
                <tr>
                    <td><div className='contacts-heading' style={{marginTop: '15px'}}>Name:</div></td>
                    <td><input type="text" value={name}  style={{marginTop: '15px'}} onChange={(e) => setName(e.target.value)} /></td>
                </tr>
                <tr>
                    <td><div className='contacts-heading'>Phone:</div></td>
                    <td> <input type="number" value={phone} onChange={(e) => setPhone(e.target.value)} /></td>
                </tr>
                <tr>
                    <td><div className='contacts-heading'>Email:</div></td>
                    <td><input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /></td>
                </tr>
                <tr>
                    <td><div className='contacts-heading'>Age:</div></td>
                    <td><input type="number" value={age} onChange={(e) => setAge(e.target.value)} /></td>
                </tr>
                <tr>
                    <td><div className='contacts-heading'>Password:</div></td>
                    <td><input type="password" value={pass} onChange={(e) => setPass(e.target.value)} /></td>
                </tr>
                <tr>
                    <td><div className='contacts-heading'>Confirm Password:</div></td>
                    <td><input type="password" value={cPass} onChange={(e) => setCPass(e.target.value)} /></td>
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
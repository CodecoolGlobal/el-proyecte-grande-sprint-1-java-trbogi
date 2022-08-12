import React from 'react';
import '../../style/registrationmodal.css';
import {useState} from "react";
import {AiFillCloseCircle} from "react-icons/ai";
import {FaLock, FaUserAlt, FaQuestionCircle, FaEnvelope} from "react-icons/fa";
import UserRoleDropdown from "./UserRoleDropdown";

const Register = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [selectedRole, setSelectedRole] = useState("MEMBER");


    const submitRegistration = async (e) => {
        e.preventDefault();
        await fetch("/api/user/create-user", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                "username": username,
                "password": password,
                "email": email,
                "role": selectedRole
            })
        }).then(r => {
            console.log("status" + r.status);
        })
        props.closeDialog();

    }

    return (
        <div id="modal-container">
            <div id="modal-fade">
                <div id="registration-modal-dialog">
                    <div id="modal-header">
                        <div id="modal-close" onClick={props.closeDialog}><AiFillCloseCircle size={20}/></div>
                        <div id="modal-title">Sign up</div>
                    </div>
                    <div id="modal-content">
                        <form>
                            <div className="input-container">
                                <input type="text" required=" " onChange={event => setUsername(event.target.value)} />
                                <label><FaUserAlt/> Username</label>
                            </div>
                            <div className="input-container">
                                <input type="text" required=" " onChange={event => setEmail(event.target.value)} />
                                <label><FaEnvelope/> E-mail</label>
                            </div>
                            <div className="input-container">
                                <label><FaQuestionCircle/> Who are you?</label> <br/>
                                <UserRoleDropdown selected={selectedRole} setSelected={setSelectedRole}/>
                            </div>
                            <div className="input-container">
                                <input type="password" required=" " onChange={event => setPassword(event.target.value)}/>
                                <label><FaLock/> Password</label>
                            </div>
                        </form>
                        <button id="modal-button" onClick={submitRegistration}>Sign up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
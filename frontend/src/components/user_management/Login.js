import '../../style/modal.css';
import {useContext} from 'react'
import {useState} from "react";
import AuthContext from "../context/AuthContext";

const Login = (props) => {
    const {login} = useContext(AuthContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const submit = (e) => {
        e.preventDefault();
        login(username, password);
    }


    return (
        <div id="modal-container">
            <div id="modal-fade">
                <div id="modal-dialog">
                    <div id="modal-header">
                        <div id="modal-title">Login</div>
                        <div id="modal-close" onClick={props.closeDialog}>x</div>
                    </div>
                    <div id="modal-content">
                        <div><div>Username:</div><input type="text" placeholder="Username" onChange={event => setUsername(event.target.value)} /></div>
                        <div><div>Password:</div><input type="password" placeholder="Password" onChange={event => setPassword(event.target.value)}/></div>
                    </div>
                    <div id="modal-footer">
                        <button id="modal-button" onClick={submit}>Log in</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
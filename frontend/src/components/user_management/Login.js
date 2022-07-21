import '../../style/modal.css';
import {FaUserAlt, FaLock} from 'react-icons/fa'
import {AiFillCloseCircle} from 'react-icons/ai'
import {useContext} from 'react'
import {useState} from 'react';
import AuthContext from '../context/AuthContext';

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
                        <div id="modal-close" onClick={props.closeDialog}><AiFillCloseCircle size={20}/></div>
                        <div id="modal-title">LOGIN</div>
                    </div>
                    <div id="modal-content">
                        <form>
                            <div className="input-container">
                                <input type="text" required=" " onChange={event => setUsername(event.target.value)} />
                                <label><FaUserAlt/> Username</label>
                            </div>
                            <div className="input-container">
                                <input type="password" required=" " onChange={event => setPassword(event.target.value)}/>
                                <label><FaLock/> Password</label>
                            </div>
                        </form>
                        <button id="modal-button" onClick={submit}>Log in</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
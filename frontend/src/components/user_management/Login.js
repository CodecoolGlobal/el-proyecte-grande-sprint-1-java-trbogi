import React from 'react';
import '../../style/modal.css';

const Login = (props) => {
    return (
        <div id="modal-container">
            <div id="modal-fade">
                <div id="modal-dialog">
                    <div id="modal-header">
                        <div id="modal-title">Login</div>
                        <div id="modal-close" onClick={props.closeDialog}>x</div>
                    </div>
                    <div id="modal-content">
                        <div><div>E-mail Address:</div><input /></div>
                        <div><div>Password:</div><input /></div>
                    </div>
                    <div id="modal-footer">
                        <div id="modal-button">Log in</div>                                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
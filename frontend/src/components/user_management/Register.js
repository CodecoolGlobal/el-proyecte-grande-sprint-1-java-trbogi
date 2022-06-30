import React, {useState, SyntheticEvent} from 'react'

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("MEMBER");
    const [redirect, setRedirect] = useState(false);
    const navigate = useNavigate();

    const submit = (e: SyntheticEvent) => {
        e.preventDefault();
        fetch("http://localhost:8080/api/user/create-user", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                "username": username,
                "password": password,
                "role": role
            })
        }).then(r => {
            console.log("status" + r.status);
            setRedirect(true)})

    }

    if (redirect){
        return navigate("/login")
    }

    return (
        <div>
            <form onSubmit={submit}>
                <h1>Register</h1>

                <div>
                    <label htmlFor="floatingInput">Username</label>
                    <input type="text" className="form-control" id="floatingInput" placeholder="username" onChange={event => setUsername(event.target.value)}/>
                </div>
                <div>
                    <label htmlFor="floatingPassword">Password</label>
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={event => setPassword(event.target.value)}/>
                </div>
                <label>Who are you?</label>

                <select onChange={event => setRole(event.target.value)}>
                    <option value="MEMBER">Member</option>
                    <option value="COACH">Coach</option>
                </select>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register
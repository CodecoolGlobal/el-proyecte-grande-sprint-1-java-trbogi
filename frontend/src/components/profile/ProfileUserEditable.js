import '../../style/profile.css';
import {useContext, useEffect, useState} from "react";
import AuthContext from "../context/AuthContext";

const ProfileUserEditable = (props) => {

    const {user} = useContext(AuthContext);
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        const fetchUserData = async () => {
            const response = await fetch(`http://localhost:8080/api/user/get-user/${user.userId}`);
            const data = await response.json();
            setUserData(data);
        }
        fetchUserData();
    }, []);

    return (
        <>
            <label className="profile-label" htmlFor="username">Username:</label>
            <input
                onChange={(event) => props.setUserDataUserName(event.target.value)}
                id="profile-username"
                type="text"
                defaultValue={userData.username}
            />

            <label className="profile-label" htmlFor="username">E-mail:</label>
            <input
                onChange={(event) => props.setUserDataUserEmail(event.target.value)}
                id="profile-email"
                type="text"
                defaultValue={userData.email}
            />
            <label className="profile-label" htmlFor="username">Phone:</label>
            <input
                onChange={(event) => props.setUserDataUserPhone(event.target.value)}
                id="profile-phone"
                type="text"
                defaultValue={userData.phone}
            />
        </>
    )

}

export default ProfileUserEditable
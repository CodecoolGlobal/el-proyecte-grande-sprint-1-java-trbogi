import '../../style/profile.css';
import {useContext, useEffect, useState} from "react";
import AuthContext from "../context/AuthContext";

const ProfileUser = () => {

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
            <label className="profile-label" htmlFor="username">Username:</label><span id="profile-username">{userData.username}</span>
            <label className="profile-label" htmlFor="username">E-mail:</label><span id="profile-email">{userData.email}</span>
            <label className="profile-label" htmlFor="username">Phone:</label><span id="profile-phone">{userData.phone}</span>
        </>
    )

}

export default ProfileUser
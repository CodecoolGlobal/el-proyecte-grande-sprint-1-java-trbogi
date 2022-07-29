import '../../style/profile.css';
import ProfileUser from "./ProfileUser";
import ProfileUserEditable from "./ProfileUserEditable";
import {useState} from "react";
import {useContext} from "react";
import AuthContext from "../context/AuthContext";

const Profile = () => {

    const [userDataContent, setUserDataContent] = useState(<ProfileUser></ProfileUser>);
    const [userDataEditButtonVisibility, setUserDataEditButtonVisibility] = useState("");
    const [userDataOkButtonVisibility, setUserDataOkButtonVisibility] = useState("hidden");
    const [userDataCancelButtonVisibility, setUserDataCancelButtonVisibility] = useState("hidden");
    const [userDataUserName, setUserDataUserName] = useState("");
    const [userDataUserEmail, setUserDataUserEmail] = useState("");
    const [userDataUserPhone, setUserDataUserPhone] = useState("");
    const {user} = useContext(AuthContext);

    async function fetchData(methodType, url, headerContent, bodyContent, contentType, responseType) {
        let request;
        if (headerContent != null || bodyContent != null || contentType!= null || responseType != null) {
            request = { method: methodType,
                headers: { 'Content-type': contentType, ...headerContent },
                body: bodyContent };
        }

        const response = await fetch(url, request);
        if (responseType == "JSON" && response.ok) {
            return await response.json();
        } else if (responseType == "Text" && response.ok) {
            return await response.text();
        } else {
            return response;
        }
    }

    return (
        <div id="profile-container">
            <div id="profile-user">
                {userDataContent}
                <button
                    onClick={() => {
                        setUserDataContent(
                            <ProfileUserEditable
                                saveUserData={() => setUserDataContent(<ProfileUser></ProfileUser>)}
                                userDataUserName={userDataUserName}
                                setUserDataUserName={setUserDataUserName}
                                userDataUserEmail={userDataUserEmail}
                                setUserDataUserEmail={setUserDataUserEmail}
                                userDataUserPhone={userDataUserPhone}
                                setUserDataUserPhone={setUserDataUserPhone}
                            >
                            </ProfileUserEditable>);
                        setUserDataEditButtonVisibility("hidden");
                        setUserDataOkButtonVisibility("");
                        setUserDataCancelButtonVisibility("");
                        }
                    }
                    hidden={userDataEditButtonVisibility}
                >
                    Edit
                </button>
                <button
                    onClick={async () => {
                        setUserDataContent(<ProfileUser></ProfileUser>);
                        setUserDataEditButtonVisibility("");
                        setUserDataOkButtonVisibility("hidden");
                        setUserDataCancelButtonVisibility("hidden");
                        const response = await fetchData("PATCH", `http://localhost:8080/api/user/modify-user/${user.userId}`, {'Access-Control-Allow-Origin': '*'}, `{"id": "${user.userId}", "username": "${userDataUserName}", "email": "${userDataUserEmail}", "phone": "${userDataUserPhone}"}`, 'application/json', null);
                        console.log(response);
                        }
                    }
                    hidden={userDataOkButtonVisibility}
                >
                    OK
                </button>
                <button
                    onClick={() => {
                        setUserDataContent(<ProfileUser></ProfileUser>);
                        setUserDataEditButtonVisibility("");
                        setUserDataOkButtonVisibility("hidden");
                        setUserDataCancelButtonVisibility("hidden");

                        }
                    }
                    hidden={userDataCancelButtonVisibility}
                >
                    Cancel
                </button>
            </div>


            <div id="profile-address">
                Zip code: <input type="text"/>
                Country: <input type="text"/>
                City: <input type="text"/>
                Address line: <input type="text"/>
                <button>Edit</button>
                <button>OK</button>
                <button>Cancel</button>
            </div>

            {/*<div id="profile-password-change">*/}
            {/*    Current password: <input type="text"/>*/}
            {/*    New password: <input type="text"/>*/}
            {/*    Password confirmation: <input type="text"/>*/}
            {/*    <button>Change</button>*/}
            {/*</div>*/}

        </div>
    )

}

export default Profile
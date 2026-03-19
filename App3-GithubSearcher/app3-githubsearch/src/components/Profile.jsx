import Repos from "./Repos";
import { useEffect, useState } from "react";

const Profile = ({ username, link, profilePicture }) => {
    const [repos, setRepos] = useState([]);
    const [isShowOpen, setIsShowOpen] = useState(false);

    async function handleShowRepos() {
        const url = `https://api.github.com/users/${username}/repos`;
        try {
            const response = await fetch(url); 
            if (!response.ok) {
                throw new Error(`GitHub API error: ${response.status}`);
            }
            const data = await response.json();
            setRepos(data);
            console.log(`Fetched repos for ${username}:`, data);
        } catch (err) {
            alert("An error occurred while fetching repositories from GitHub API.");
            console.error(err);
        }
    }

    function handleIsOpen() {
        if (isShowOpen) {
            setRepos([]);
            setIsShowOpen(false);
        } else {
            setIsShowOpen(true);
        }
    }

    useEffect(() => {
        if(isShowOpen) {
            handleShowRepos();
        }
    }, [isShowOpen]);

    return ( <>
        <div className="p-4 border rounded shadow-md flex align-middle items-center my-4 w-150 mx-auto">
            <div className="flex items-center flex-1">
                <div className="w-10 h-10 m-1 rounded-full overflow-hidden "> 
                    <img src={profilePicture} alt={`${username}'s profile`}/>
                </div>
                <h1 className="flex-1 text-2xl font-bold underline"> {username} </h1>
            </div>
            <button className="mx-3 bg-blue-500 text-white p-2 rounded mt-1 hover:bg-blue-600 active:bg-blue-700 w-30">
                <a href={link} className="text-white mt-1 block">View Profile</a>
            </button>
                <button onClick={() => handleIsOpen(username)} className="mx-3 bg-green-500 text-white p-2 rounded mt-1 hover:bg-green-600 active:bg-green-700 w-30">
                    {isShowOpen ? "Hide Repos" : "Show Repos"}
                </button>
        </div>
            {repos.length > 0 && <Repos repos={repos} />}

    </>);
}
 
export default Profile;
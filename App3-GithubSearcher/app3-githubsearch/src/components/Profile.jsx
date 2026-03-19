import Repos from "./Repos";
import { useState } from "react";

const Profile = ({ username, link, profilePicture }) => {
    const [repos, setRepos] = useState([]);
    const [isShowOpen, setIsShowOpen] = useState(false);

    function handleShowRepos(username) {
        fetch(`https://api.github.com/users/${encodeURIComponent(username)}/repos?per_page=7`)
        .then(response => {
            if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            setRepos(data);
            console.log(`Fetched repos for ${username}:`, data);
        })
        .catch(err => {
            alert("An error occurred while fetching repositories from GitHub API.");
            console.error(err);
        });

        setIsShowOpen(true);
    }

    function handleHideRepos() {
        setRepos([]);
        setIsShowOpen(false);
    }

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
            {isShowOpen && (
                <button onClick={() => handleHideRepos(username)} className="mx-3 bg-green-500 text-white p-2 rounded mt-1 hover:bg-green-600 active:bg-green-700 w-30">
                    Hide Repos
                </button>
            )}
            {!isShowOpen && (
                <button onClick={() => handleShowRepos(username)} className="mx-3 bg-green-500 text-white p-2 rounded mt-1 hover:bg-green-600 active:bg-green-700 w-30">
                    Show Repos
                </button>
            )}
        </div>
            {repos.length > 0 && <Repos repos={repos} />}

    </>);
}
 
export default Profile;
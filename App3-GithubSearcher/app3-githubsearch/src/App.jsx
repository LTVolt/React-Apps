import { Suspense, useState } from "react";
import Profile from "./components/Profile";

const App = () => {
  const [results, setResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  function handleSubmit() {
    console.log("Searching for:", searchTerm);

    try {
      fetch(`https://api.github.com/search/users?q=${encodeURIComponent(searchTerm)}&per_page=10`)
        .then(response => {
          if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          setResults(data.items || []);
          console.log("Fetched items:", data.items || []);
        });
    } catch (err) {
      alert("An error occurred while fetching data from GitHub API.");
      console.error(err);
    }
  }

  return ( 
  <>  
    <h1 className="mt-5 text-3xl font-bold underline text-center">
      Github Searcher
    </h1>
    <form onSubmit={(e) => {e.preventDefault(); handleSubmit();}} className="flex justify-center mx-auto mt-5">
      <input type="text" placeholder="Search for a GitHub user..." className="border p-2 rounded" value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded ml-2">Search</button>
    </form>

    <Suspense fallback={<div className="text-center mt-20 text-2xl font-bold underline">Loading profiles...</div>}>
      {results.length > 0 && (
        <div className="mt-5">
          {results.map(user => (
            <Profile 
              key={user.id}
              username={user.login} 
              link={user.html_url} 
              profilePicture={user.avatar_url}
            />
          ))}
        </div>
      )}
    </Suspense>
  </>
  );
}

export default App;
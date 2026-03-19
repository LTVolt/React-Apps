import { Suspense } from "react";

const Repos = ({ repos }) => {
    return (
        <Suspense fallback={<div className="text-center mt-5 text-2xl font-bold underline">Loading repositories...</div>}>
            <div className="mt-5 w-100 mx-auto text-center">
                {repos.map(repo => (
                    <div key={repo.id} className="p-4 border rounded shadow-md my-2">
                        <h2 className="text-xl font-bold">{repo.name}</h2>
                        <p>{repo.description}</p>
                        <a href={repo.html_url} className="text-blue-500" target="_blank" rel="noopener noreferrer">View Repository</a>
                    </div>
                ))}
            </div>
        </Suspense>
    );
}
 
export default Repos;
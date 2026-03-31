import PostCard from "./PostCard";
import { Link } from "react-router-dom";
import * as data from '../data/data.js'

const Home = () => {
    return ( 
    <>
        <h2 className="text-center mt-5">Welcome to the Home Page</h2>
        <p className="text-center mt-2">This is the home page of our blog. Here you can find the latest posts and updates.</p>
        <nav>
            <ul className="flex justify-center mt-4 space-x-4">
                <li><a href="/" className="text-blue-500 hover:underline">Home</a></li>
                <li><a href="/about" className="text-blue-500 hover:underline">About</a></li>
            </ul>
        </nav>

        {data.posts.map(post => (
            <Link key={post.id} to={`/post/${post.id}`}>
                <PostCard
                    postID={post.id}
                    postTitle={post.title}
                    postAttractText={"Click me to read more"}
                />
            </Link>
        ))}
    </> );
}
 
export default Home;
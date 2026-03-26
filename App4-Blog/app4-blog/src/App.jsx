import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Post from "./components/Post";

const App = () => {
  return ( <>
  <BrowserRouter>
    <div>
      <h1 className="font-bold text-3xl underline text-center mt-5">
        This is a blog.
      </h1>
      <Post postID={1} postTitle={"First Post"} postAttractText={"Click me to read more"} />
      <nav>
        <ul className="flex justify-center mt-5 gap-5">
          <li><Link to="/" className="text-blue-500 hover:underline cursor-pointer">Home</Link></li>
          <li><Link to="/about" className="text-blue-500 hover:underline cursor-pointer">About</Link></li>
          <li><Link to="/contact" className="text-blue-500 hover:underline cursor-pointer">Contact</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<h2 className="text-center mt-5">Welcome to the Home Page</h2>} />
        <Route path="/about" element={<h2 className="text-center mt-5">This is the About Page</h2>} />
        <Route path="/contact" element={<h2 className="text-center mt-5">Get in touch with us on the Contact Page</h2>} />
      </Routes>

    </div>
  </BrowserRouter>
  </> );
}
 
export default App;
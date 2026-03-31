import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import About from "./components/About"; 
import Home from "./components/Home";
import Post from "./components/Post";

const App = () => {
  return ( <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/post/:postID" element={<Post />} />
      </Routes>
  </> );
}
 
export default App;
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Posts from "./pages/Posts";
import About from "./pages/About";
import NavBar from "./components/NavBar";
import ErrorPage from "./pages/ErrorPage";
  
function App() {
  return (
    // <div className="App">
    //   <PostForm create={createPost}/>
    //   <PostFilter
    //     filter={filter}
    //     setFilter={setFilter}
    //   />
    //   <PostList del={deletePost} posts={sortedAndSeached}/>
    // </div>
    
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Posts/>} />
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </Router>
    
  );
}

export default App;

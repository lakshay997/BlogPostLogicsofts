import Header from "./myComponents/Header";
import ArticleList from "./myComponents/ArticleList";
import Pagination from "./myComponents/Pagination";
import {useState, useEffect} from 'react';
import Footer from "./myComponents/Footer";


function App() {
  const [posts, setPosts] = useState([])
const [postsPerPage] = useState(12)


const getPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();
  setPosts(posts);
}

useEffect(() => {
  getPosts();
}, [])



  return (
    <div>
      <Header />
      <ArticleList />
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length}/>
      <Footer />
    </div>
  );
}

export default App;

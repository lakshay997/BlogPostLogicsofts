import React, {useState, useEffect} from 'react'
import ArticleCard from "./ArticleCard"

const info = "https://jsonplaceholder.typicode.com/posts";

export const Body = () => {
    
    const [posts, setPosts] = useState([])
    const [currentPage] = useState(1)
    const [postsPerPage] = useState(12)

    const getPosts = async () => {
        const response = await fetch(info);
        const posts = await response.json();
        setPosts(posts);
      }
    
      useEffect(() => {
        getPosts();
      }, [posts])

      const indexofLastPost = currentPage * postsPerPage;
      const indexofFirstPost = indexofLastPost - postsPerPage;
      const currenPosts = posts.slice(indexofFirstPost, indexofLastPost);
      return ( 
      <>
      {
          
        currenPosts.map((post) => {
              const {id, userId, title, body} = post
              return (
                    <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginLeft: '60px', marginTop: '60px', outline: '1px 	solid gray',
  outlineOffset: '15px'}}>
                    <ArticleCard
                    key = {id}
                    id = {id}
                    title = {title}
                    body = {body}
                    userId = {userId}
                    img = {"http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/img/blog-list-2.png"}
                    logo = {"http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/img/author.png"}
                    />
                    </div>
              )
          })
      }
      </>
      )

}

export default Body

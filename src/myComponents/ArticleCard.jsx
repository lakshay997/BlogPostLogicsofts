import "./ArticleCard.css"

function ArticleCard({id, userId, body, title, img, logo}) {
    return (
        <div>
            <div className="card" style={{width: "18rem"}}>
                <img src={img} className="card-img-top" alt={logo}/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{body}</p>
                    <li className="list-group list-group-flush">
                    <button className="buttonPrimary">Read more</button>
                </li>
                <div className="cards">
                    <img className="logo" src={logo}/>
                    <h6 className="author">Author: {userId}</h6>
                </div>
                </div>
                
                
            </div>
        </div>
    )
}

export default ArticleCard;





// //<div class="blog-list-box">
// <div class="blog-list-img">
// <a href="single-blog.html"><img src="img/blog-list-2.png"></a>
// </div>
// <h3><a href="single-blog.html">Consider These 7 Things Before Moving Into Your New Home</a></h3>
// <p class="blog-desc">Leaving your home behind to move into a new one is nerve-wracking as it is with surprises waiting for you ...</p>
// <a href="single-blog.html" class="btn btn-white arrow-btn">Read more</a>
// <div class="blog-list-author">
// <div class="blog-author-img">
//   <img src="img/author.png">
// </div>
// <div class="blog-author-name">
//   <h4><span>Author : </span><a href="#">Sam Singh</a></h4>
// </div>
// </div>
// </div>
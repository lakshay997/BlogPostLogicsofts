import Body from './Body';
import './Component.css';

const ArticleList = () => {

    return (
        <>
        <section className="section">
            <div className="container">
                <h1 className="heading">Smart marketing <br/>starts here</h1>
                <h4 className="body">Join over 150,000 marketing managers who get our best digital marketing insights, <br/> strategies and tips delivered straight to their inbox.</h4>
                <form className="form">
                    <input type="text" class="form-control" placeholder="ENTER YOUR WORK EMAIL"></input>
                    <button type="submit" className="buttonClass">Subscribe</button>
                </form>
            </div>
        </section>
        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', flexBasis: '33.333333%', padding: '10px 10px'}}>
            <Body />
        </div>
        </>
    )
}


export default ArticleList;
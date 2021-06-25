
import './Component.css';

const Footer = () => {

    return (
        <>
        <section className="section">
            <div className="container">
                <h1 className="heading">Get in touch/ also  <br/>schedule a call/meet</h1>
                <h4 className="body">Schedule a call or meeting with our digital marketing expert <br/> for FREE consultation.</h4>
                <form className="form">
                    <input type="text" class="form-control" placeholder="SCHEDULE CONSULTANCY"></input>
                    <button type="submit" className="buttonClass">Subscribe</button>
                </form>
            </div>
        </section>
        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', flexBasis: '33.333333%', padding: '10px 10px'}}>
        </div>
        </>
    )
}


export default Footer;
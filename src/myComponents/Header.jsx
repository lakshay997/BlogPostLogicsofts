import "./Component.css"
function NavBar() {
    return(
        <div className="nav">
            <nav className="navbar container navbar-expand-lg navbar-light">
                <a className="navbar-brand ms-3 fw-bold fs-2" href="/">
                    <img src = "http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/img/blog-logo.png"/>
                </a>
                <button type="button" className="btn btn-outline-dark btn-sm">Bloggin Tools</button>
                <button type="button" className="btn btn-outline-dark btn-sm">Google</button>
                <button type="button" className="btn btn-outline-dark btn-sm">Internet Marketing</button>
                <button type="button" className="btn btn-outline-dark btn-sm">Our Services</button>
                <button type="button" className="btn btn-outline-dark btn-sm">Advertise With Us</button>
                <button type="button" className="ms-4 btn btn-primary btn-sm">Request a Free Quote</button>
                <button type="button" className="ms-4 btn btn-dark btn-sm">Contact Us</button> 
            </nav>
        </div>
    );
}

export default NavBar;
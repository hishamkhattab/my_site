import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { Linkedin, Github } from "react-bootstrap-icons"
const Header = () => {
    return (

        <Navbar bg="light" expand="md" className='shadow mb-5'>
            <div className="container-lg">
                <Navbar.Brand as="div">
                    <Link
                        to="/"
                        className="text-decoration-none"
                    >
                        <span className="lead text-muted fw-bold text-uppercase">Hisham Khattab</span>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" placement="end" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end align-items-center">
                    <Nav>
                        <Nav.Link href='/document/Resume.pdf' download target='_self' className="text-decoration-none">
                            Resume
                        </Nav.Link>
                        <Nav.Link href="https://linkedin.com/in/hisham-khattab-506907b9" className="text-decoration-none" target='_blank' rel="noreferrer">
                            <Linkedin color="dark" className="p-1" size={30} />
                        </Nav.Link>
                        <Nav.Link href="https://github.com/hishamkhattab" className="text-decoration-none" target='_blank' rel="noreferrer">
                            <Github color="dark" className="p-1" size={30} />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}
 
export default Header;
/*
        <nav className='navbar navbar-expand-md navbar-light'>
            <div className="container-xl">
                <Link
                    to="/"
                    className="navbar-brand"
                >
                    <span className="lead text-muted fw-bold text-uppercase">Hisham Khattab</span>
                </Link>
            </div>

            
            <button className="navbar-toggler">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end align-center">
                <ul className="navbar-nav">
                    <li className="navbar-item">
                        <a href="">Resume</a>
                    </li>
                    <li className="navbar-item">
                        <a href="">Linkedin</a>
                    </li>
                    <li className="navbar-item">
                        <a href="">Github</a>
                    </li>
                </ul>
            </div>


            <a >
                <div
                    className="fs-5 text-light"
                >
                    Resume
                </div>
            </a>
        </nav>
*/
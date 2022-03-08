import { Linkedin, Github } from "react-bootstrap-icons"

const Footer = () => {
    return (
        <footer className=
        "py-2 bg-dark d-flex flex-column justify-content-evenly align-items-center">
        <p className="text-light fs-6 mb-0">hisham.khattab93@gmail.com</p>
        <div className="d-flex align-items-center">
            <a href="https://linkedin.com/in/hisham-khattab-506907b9" className="text-decoration-none" target='_blank' rel="noreferrer">
                <Linkedin color="white" className="p-1" size={30}/>
            </a>
            <a href="https://github.com/hishamkhattab" className="text-decoration-none" target='_blank' rel="noreferrer">
                <Github color="white" className="p-1" size={30}/>
            </a>
        </div>
        </footer>
    );
}
 
export default Footer;
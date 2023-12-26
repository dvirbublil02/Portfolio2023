
import { Container } from "react-bootstrap";
import NameReveal from "../components/NameReveal";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';



export const Home =() =>{
    return(
        <Container style={{ backgroundColor: '#66d9ff',borderRadius: '8px' }} className="d-flex align-items-center justify-content-center vh-100" >
            <div className="text-center">
                <h1 className="animated-text ">Welcome to My Portfolio</h1>
                <NameReveal/>
                <p className="animated-text ">Feel free to explore, and to contact me!</p>

                                <div className="social-icons">
                        <a href="https://www.linkedin.com/in/dvir-bublil-4862b41b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </a>
                        <span className="icon-space"></span>
                        <a href="https://github.com/dvirbublil02" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} size="2x" />
                        </a>
                        </div>
            </div>
    </Container>
    );
};
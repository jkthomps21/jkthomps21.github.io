import React from 'react';
import './components.css';

const divStyle = {
    color: "white"
};

function Footer() {
    return (
        <footer className="page-footer font-small">
            <div id="footer-line" className="py-1"></div>
            <div className="footer-copyright text-center py-3">
                
                <span className="justify-content-center">
                    <a target="_blank" href="#" className="footer-icon"><i className="fab fa-linkedin-in fa-lg mr-2" style={divStyle}></i></a>
                    <a target="_blank" href="https://github.com/jkthomps21/" className="footer-icon mr-2"><i className="fab fa-github fa-lg" style={divStyle}></i></a>
                    <a target="_blank" href="https://www.instagram.com/jkthomps21/" className="footer-icon"><i className="fab fa-instagram fa-lg" style={divStyle}></i></a>
                </span>
            </div>
        </footer>
    )
}

export default Footer;
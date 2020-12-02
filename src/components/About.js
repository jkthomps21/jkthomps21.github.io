import React from 'react';
import './components.css';
import photo from '../components/img/profMe.jpg';
import styled, { keyframes } from 'styled-components';
import { fadeInLeft } from 'react-animations';

const fadeAnimation = keyframes`${fadeInLeft}`;

const FadeDiv = styled.div`
    animation: 1s ${fadeAnimation};
`;

function About() {
    return (
        <main id="home-page" className="container">
            <br></br>
                <section className="row justify-content-center">
                    <FadeDiv className="col-sm-10 col-md-8 col-lg-6 col-xl-5 about mb-4">
                        <img src={photo} className="rounded-circle img-fluid img-dec" alt="Professional Photo"></img>
                        <div className="dropdown-divider"></div>
                        <p className="text-center">
                            GIS Analyst studying to be a full-stack web developer.
                        </p>
                        <p className="text-center">
                            My current work focuses on data analysis, programming and cartography. I utilize
                            mapping software to analyze location-based data and design digital maps with geographic
                            data and various other data sets.
                        </p>
                        <p className="text-center">
                            Please feel free to contact me with any questions or for further information.
                        </p>
                        <p className="text-center">
                            Click <a href="assets/WebResume.pdf">here</a> to view my resume!
                        </p>
                    </FadeDiv>
                </section>
            <br></br>
        </main>
    );
}

export default About;
import React from 'react';
import { Form } from 'react-bootstrap';
import './components.css';

function Contact() {
    return (
        <main id="contact-page" className="container">
            <br></br>
                <section className="row justify-content-center">
                    <div className="col-sm-10 col-md-8 col-lg-6 col-xl-5 about bounce-right my-4">
                        <section className="row mt-4">
                            <div className="container text-center">
                                <h3>Thanks for reaching out!</h3>
                            </div>
                        </section>
                        <section className="row">
                            <div className="w-100 mx-1"><hr></hr></div>
                        </section>
                        <section className="container text-center">
                            <h5>Email: <a href='mailto:jkthomps21@gmail.com'>jkthomps21@gmail.com</a></h5>
                            <h5 className='pb-2'>Phone: (218) 280-8828</h5>
                        </section>
                    </div>
                </section>
            <br></br>
        </main>
    );
}

export default Contact;
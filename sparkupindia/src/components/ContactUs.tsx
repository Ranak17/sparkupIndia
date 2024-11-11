import React from 'react';

const ContactUs = () => {
    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Contact Us</h2>
            <p className="text-center mb-5">We'd love to hear from you! Fill out the form below to get in touch with us.</p>
            <div className="row">
                <div className="col-md-8 mx-auto">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Full Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Enter your full name" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email Address</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter your email address" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="subject" className="form-label">Subject</label>
                            <input type="text" className="form-control" id="subject" placeholder="Subject" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea className="form-control" id="message" rows="5" placeholder="Type your message here" required></textarea>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary btn-lg">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;

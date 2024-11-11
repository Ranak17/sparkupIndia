import React from 'react';
import Header from './components/Header';
import ContactUs from './components/ContactUs';

const App = () => {
  return (
    <div>
      <Header />
      <main className="container my-5">
        <section className="text-center py-5">
          <h1 className="display-4 fw-bold">Welcome to Sparkup India</h1>
          <p className="lead">Empowering your digital presence with innovative solutions</p>
          <a href="#" className="btn btn-primary btn-lg mt-4">Get Started</a>
        </section>

        <section className="py-5">
          <h2 className="text-center mb-4">Why Choose Us?</h2>
          <p className="text-center">We offer a range of services from app development to digital marketing to help your business thrive in the digital world.</p>
        </section>

        {/* Contact Us Section */}
        <ContactUs />
      </main>
    </div>
  );
};

export default App;

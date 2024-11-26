import React, { useState } from 'react';
import { Phone, Mail, Sun, Battery, Wrench, Calculator } from 'lucide-react';

const ContactForm = () => {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value
    };

    try {
      const response = await fetch('/.netlify/functions/email-notification', {
        method: 'POST',
        body: JSON.stringify({ data: formData }),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        e.target.reset();
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      alert('Failed to send message. Please try again.');
    }
    setSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Name"
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="w-full p-2 border rounded"
        required
      />
      <textarea
        name="message"
        placeholder="Message"
        className="w-full p-2 border rounded h-32"
        required
      />
      <button 
        type="submit" 
        className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600"
        disabled={submitting}
      >
        {submitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Sun className="text-yellow-500" size={32} />
              <span className="text-xl font-bold">Free Solar Power</span>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#services" className="hover:text-yellow-500">Services</a>
              <a href="#why-us" className="hover:text-yellow-500">Why Us</a>
              <a href="#contact" className="hover:text-yellow-500">Contact</a>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600">
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="md:w-2/3">
            <h1 className="text-4xl font-bold mb-4">
              Switch to Solar - It's Free!
            </h1>
            <p className="text-xl mb-8">
              Professional solar panel installation with zero upfront costs. 
              Start saving money on day one.
            </p>
            <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-yellow-600">
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="py-16 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Battery className="text-yellow-500 mb-4" size={40} />
            <h3 className="text-xl font-semibold mb-2">Free Installation</h3>
            <p>Zero-cost solar panel installation for homes and businesses</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Calculator className="text-yellow-500 mb-4" size={40} />
            <h3 className="text-xl font-semibold mb-2">Savings Analysis</h3>
            <p>See exactly how much you'll save with our detailed assessment</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Wrench className="text-yellow-500 mb-4" size={40} />
            <h3 className="text-xl font-semibold mb-2">Full Service</h3>
            <p>Complete maintenance and monitoring included at no extra cost</p>
          </div>
        </div>
      </div>

      {/* Why Us Section */}
      <div id="why-us" className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">No Upfront Costs</h3>
              <p>Start saving immediately with zero initial investment</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Quality Guarantee</h3>
              <p>Premium equipment with comprehensive warranties</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="py-16 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Phone className="text-yellow-500" />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="text-yellow-500" />
              <span>info@freesolarpower.ie</span>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>© 2024 Free Solar Power. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Message sent successfully! We will get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
    
    setTimeout(() => setStatus(""), 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-teal-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-teal-800 to-amber-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 font-serif">Contact</h1>
          <p className="text-xl md:text-2xl">Get in Touch</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-teal-900 mb-6">Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                Feel free to reach out for academic collaborations, research inquiries, 
                or any questions related to art and cultural heritage.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-lg flex items-start gap-4 hover:shadow-xl transition-all">
                <div className="bg-teal-100 p-3 rounded-lg">
                  <Mail className="text-teal-700" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-teal-900 mb-1">Email</h3>
                  <a href="mailto:uttama.dixit@bhu.ac.in" className="text-gray-700 hover:text-teal-700 transition">
                    uttama.dixit@bhu.ac.in
                  </a>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg flex items-start gap-4 hover:shadow-xl transition-all">
                <div className="bg-amber-100 p-3 rounded-lg">
                  <Phone className="text-amber-700" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-teal-900 mb-1">Phone</h3>
                  <a href="tel:+919793331447" className="text-gray-700 hover:text-teal-700 transition">
                    +91 9793331447
                  </a>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg flex items-start gap-4 hover:shadow-xl transition-all">
                <div className="bg-teal-100 p-3 rounded-lg">
                  <MapPin className="text-teal-700" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-teal-900 mb-1">Office Address</h3>
                  <p className="text-gray-700">
                    Faculty of Visual Arts<br />
                    Banaras Hindu University<br />
                    Varanasi, Uttar Pradesh - 221005<br />
                    India
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg flex items-start gap-4 hover:shadow-xl transition-all">
                <div className="bg-amber-100 p-3 rounded-lg">
                  <Clock className="text-amber-700" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-teal-900 mb-1">Office Hours</h3>
                  <p className="text-gray-700">
                    Monday - Friday: 10:00 AM - 5:00 PM<br />
                    Saturday: 10:00 AM - 1:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-gradient-to-br from-teal-600 to-amber-600 text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Quick Information</h3>
              <ul className="space-y-2 text-white/90">
                <li>• Appointments can be scheduled via email</li>
                <li>• Research collaboration inquiries welcome</li>
                <li>• PhD guidance available for eligible candidates</li>
                <li>• Guest lecture invitations accepted</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-teal-900 mb-6">Send a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition"
                  placeholder="What is this regarding?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              {status && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
                  {status}
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-teal-600 to-amber-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-teal-700 hover:to-amber-700 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-teal-900 mb-8 text-center">Find Us</h2>
          <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg h-96 flex items-center justify-center">
            <p className="text-gray-600 text-lg">
              Map: Faculty of Visual Arts, Banaras Hindu University, Varanasi
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
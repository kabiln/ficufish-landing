import React, { useState } from 'react';
import { Mail, User, Book, MessageSquare } from 'lucide-react';

export default function ContactForm() {
  // State to hold the form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });

  // Handle input changes and update state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  async function handleSubmit(e) {
        e.preventDefault();
        
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: "39cefe42-ef46-4bd9-9354-6a6724a2b325",
                name: e.target.name.value,
                email: e.target.email.value,
                subject: e.target.subject.value,
                message: e.target.message.value,
            }),
        });
        const result = await response.json();
        if (result.success) {
            console.log(result);
        }


    }

  return (
    <div className="flex items-center justify-center p-4 sm:p-6">
      <div className="max-w-xl md:w-xl sm:w-md rounded-xl p-8 space-y-2 transform transition-all duration-300 hover:scale-[1.01]">
 
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div className="relative">
            <User className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-300" size={20} />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full pl-10 pr-4 py-3 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-white transition duration-200 text-gray-300"
            />
          </div>

          {/* Email Field */}
          <div className="relative">
            <Mail className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-300" size={20} />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full pl-10 pr-4 py-3 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-white transition duration-200 text-gray-300"/>
          </div>

          {/* Subject Dropdown */}
          <div className="relative">
            <Book className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-300" size={20} />
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-white transition duration-200 text-gray-400 bg-auto appearance-none"
            >
              <option value="General Inquiry">General Inquiry</option>
              <option value="Feedback">Feedback</option>
              <option value="Support">Support</option>
              <option value="Partnership">Partnership</option>
            </select>
          </div>

          {/* Message Textarea */}
          <div className="relative">
            <MessageSquare className="absolute top-4 left-3 text-gray-300" size={20} />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              required
              className="w-full pl-10 pr-4 py-3 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-white transition duration-200 text-gray-300 resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-slate-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-white hover:text-slate-700 focus:outline-none focus:ring-4 focus:ring-white-300 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

//export default ContactForm;

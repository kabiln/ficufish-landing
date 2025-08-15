import React, { useState } from 'react';

  export default function Contact() {
    const [submissionStatus, setSubmissionStatus] = useState(null);
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
                message: e.target.message.value,
            }),
        });
        const result = await response.json();
    if (result.success) {
      setSubmissionStatus("success");
    } else {
      setSubmissionStatus("error");
    }
    }

  return (
    <div className="flex items-center justify-center p-4 sm:p-6">
      <div className="max-w-xl md:w-xl sm:w-md rounded-xl p-8 space-y-2 transform transition-all duration-300 hover:scale-[1.01]">
 
      <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
              <input type="text" name="name" required placeholder="Your name" className="w-full pl-10 pr-4 py-3 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-white transition duration-200 text-gray-300" />
          </div>
          <div className="relative">
              <input type="email" name="email" required placeholder="email@example.com" className="w-full pl-10 pr-4 py-3 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-white transition duration-200 text-gray-300"/>
          </div>
          <div className="relative">
              <textarea name="message" required rows="3" placeholder="Enter Message" className='w-full pl-10 pr-4 py-3 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-white transition duration-200 text-gray-400 bg-auto appearance-none'></textarea>
          </div>
          <button type="submit" className="w-full bg-slate-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-white hover:text-slate-700 focus:outline-none focus:ring-4 focus:ring-white-300 transition-all duration-300 shadow-md hover:shadow-lg">Submit Form</button>
      </form>
      {submissionStatus === "success" && (
        <p className="success-message">Thank you for submitting the form! We'll get back to you soon.</p>
      )}
      {submissionStatus === "error" && (
        <p className="error-message">Error submitting the form. Please try again.</p>
      )}
     </div>
    </div>
  );
}
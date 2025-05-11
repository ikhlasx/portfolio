import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitted: true, success: false, message: 'Sending...' });

    try {
      // In a real application, you would send this data to your API
      // Simulate API call success
      await new Promise(resolve => setTimeout(resolve, 1000));

      setFormStatus({
        submitted: true,
        success: true,
        message: 'Your message has been sent successfully!'
      });

      // Clear form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

    } catch (error) {
      console.error('Error sending message:', error);
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Failed to send message. Please try again later.'
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-neon-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">CONTACT ME</h2>
          <div className="w-24 h-1 bg-neon-cyan mx-auto"></div>
          <p className="mt-4 text-xl text-gray-300">Have a question or want to work together?</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-neon-cyan flex items-center justify-center">
                  <svg className="h-5 w-5 text-neon-darker" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-lg font-medium text-white">Email</p>
                  <a href="mailto:ikhlas110@gmail.com" className="text-gray-300 hover:text-neon-cyan transition-colors duration-300">ikhlas110@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-neon-cyan flex items-center justify-center">
                  <svg className="h-5 w-5 text-neon-darker" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-lg font-medium text-white">Phone</p>
                  <a href="tel:+918129624615" className="text-gray-300 hover:text-neon-cyan transition-colors duration-300">+91 8129624615</a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-neon-cyan flex items-center justify-center">
                  <svg className="h-5 w-5 text-neon-darker" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V19c0 .27.16.59.67.5C17.14 18.16 20 14.42 20 10A10 10 0 0010 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-lg font-medium text-white">GitHub</p>
                  <a href="https://github.com/ikhlasx" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-neon-cyan transition-colors duration-300">github.com/ikhlasx</a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-neon-cyan flex items-center justify-center">
                  <svg className="h-5 w-5 text-neon-darker" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 0a10 10 0 100 20 10 10 0 000-20zm6.96 6.04a8.5 8.5 0 11-13.92 9.92 8.5 8.5 0 0113.92-9.92zM10 6a.75.75 0 01.75.75v4.69l2.78 2.78a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 01-.22-.53V6.75A.75.75 0 0110 6z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-lg font-medium text-white">Working Hours</p>
                  <p className="text-gray-300">Monday - Friday: 9am - 6pm</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-2xl font-bold mb-6 text-white">Connect With Me</h3>
              <div className="flex space-x-4">
                <a href="https://github.com/ikhlasx" target="_blank" rel="noopener noreferrer" className="h-12 w-12 rounded-full bg-neon-dark flex items-center justify-center hover:bg-neon-cyan hover:text-neon-darker transition-colors duration-300">
                  <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/ikhlas-pv" target="_blank" rel="noopener noreferrer" className="h-12 w-12 rounded-full bg-neon-dark flex items-center justify-center hover:bg-neon-cyan hover:text-neon-darker transition-colors duration-300">
                  <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="mailto:ikhlas110@gmail.com" className="h-12 w-12 rounded-full bg-neon-dark flex items-center justify-center hover:bg-neon-cyan hover:text-neon-darker transition-colors duration-300">
                  <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="neon-card p-8">
            <h3 className="text-2xl font-bold mb-6 text-white">Send Me a Message</h3>

            {formStatus.submitted && (
              <div className={`p-4 mb-6 rounded-md ${formStatus.success ? 'bg-green-900 text-green-200' : 'bg-red-900 text-red-200'}`}>
                {formStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-300 font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-neon-dark border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-transparent text-white"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-300 font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-neon-dark border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-transparent text-white"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-300 font-medium mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-neon-dark border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-transparent text-white"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-300 font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-2 bg-neon-dark border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-transparent text-white"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="neon-button w-full py-3"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
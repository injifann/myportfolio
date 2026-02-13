import { FaTelegram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { useState } from 'react';

function ContactMe() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!name.trim()) newErrors.name = 'Please enter your name';
    if (!email.trim()) newErrors.email = 'Please enter your email';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Please enter a valid email';

    if (!message.trim()) newErrors.message = 'Please enter your message';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert('Form submitted successfully! (Demo mode)');
      setName('');
      setEmail('');
      setMessage('');
      setErrors({});
    }
  };

  return (
    <section id="contact-me" className="py-12 md:py-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-4xl">
        {/* Section Title */}
        <div className="text-center mb-10 md:mb-12">
         <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-center">
           <span className="text-indigo-600 dark:text-indigo-400">Contact Me</span>{' '}
         </h1>

  <div className="mt-3 h-1 w-20 bg-indigo-600 dark:bg-indigo-500 mx-auto rounded-full" />
          <p className="mt-4 text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Have a project in mind? Let's talk about how I can help.
          </p>
        </div>

        {/* Promotion text + Social icons */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-3">
            Let's Build Something Great
          </h2>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Modern frontend, robust backend, or full-stack — I'm here to help.
          </p>

          <div className="flex justify-center gap-8">
            <a
              href="https://t.me/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors transform hover:scale-110"
              aria-label="Telegram"
            >
              <FaTelegram />
            </a>
            <a
              href="https://wa.me/2519xxxxxxxx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400 transition-colors transform hover:scale-110"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
            <a
              href="mailto:kabegutema36@gmail.com"
              className="text-3xl text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors transform hover:scale-110"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-xl mx-auto">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-200 dark:border-gray-800 p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onFocus={() => setErrors((prev) => ({ ...prev, name: '' }))}
                  className={`w-full px-4 py-2.5 rounded-lg border ${
                    errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                  } bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-all text-base`}
                  placeholder="John Doe"
                />
                {errors.name && <p className="mt-1 text-xs text-red-600 dark:text-red-400">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setErrors((prev) => ({ ...prev, email: '' }))}
                  className={`w-full px-4 py-2.5 rounded-lg border ${
                    errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                  } bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-all text-base`}
                  placeholder="example@email.com"
                />
                {errors.email && <p className="mt-1 text-xs text-red-600 dark:text-red-400">{errors.email}</p>}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onFocus={() => setErrors((prev) => ({ ...prev, message: '' }))}
                  rows={4}
                  maxLength={500}
                  className={`w-full px-4 py-2.5 rounded-lg border ${
                    errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                  } bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-all resize-none text-base`}
                  placeholder="Tell me about your project..."
                />
                <div className="flex justify-between mt-1 text-xs text-gray-500 dark:text-gray-400">
                  {errors.message && <p className="text-red-600 dark:text-red-400">{errors.message}</p>}
                  <p className="ml-auto">{message.length}/500</p>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mt-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
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
    <section
      id="contact-me"
      className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight">
            <span className="text-indigo-600 dark:text-indigo-400">Contact Me</span>
          </h1>
          <div className="mt-4 h-1 w-20 bg-indigo-600 dark:bg-indigo-500 mx-auto rounded-full" />
          <p className="mt-5 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Have a project in mind? Let's talk about how I can help.
          </p>
        </div>

        {/* Main content: left text + right form */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 xl:gap-16 items-center lg:items-start">
          {/* Left side – promotion text + icons */}
          <div className="w-full lg:w-5/12 text-center lg:text-left py-20">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-4">
              Let's Build Something Great
            </h2>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Modern frontend, robust backend, or full-stack — I'm here to help.
            </p>

            <div className="flex justify-center lg:justify-start gap-8 md:gap-10">
              <a
                href="https://t.me/kabe_g"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-all transform hover:scale-110"
                aria-label="Telegram"
              >
                <FaTelegram />
              </a>
              <a
                href="https://wa.me/qr/ZDY5VV65IQURG1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400 transition-all transform hover:scale-110"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
              <a
                href="mailto:kabegutema4@gmail.com"
                className="text-4xl text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-all transform hover:scale-110"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* Right side – Contact Form */}
          <div className="w-full lg:w-7/12">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-200 dark:border-gray-800 p-6 md:p-8 lg:p-9">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onFocus={() => setErrors((prev) => ({ ...prev, name: '' }))}
                    className={`w-full px-3 py-2 rounded-lg border ${
                      errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
                    } bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-all`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="mt-1.5 text-sm text-red-600 dark:text-red-400">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setErrors((prev) => ({ ...prev, email: '' }))}
                    className={`w-full px-3 py-2 rounded-lg border ${
                      errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
                    } bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-all`}
                    placeholder="example@email.com"
                  />
                  {errors.email && <p className="mt-1.5 text-sm text-red-600 dark:text-red-400">{errors.email}</p>}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onFocus={() => setErrors((prev) => ({ ...prev, message: '' }))}
                    rows={3}
                    maxLength={500}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
                    } bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-all resize-none`}
                    placeholder="Tell me about your project..."
                  />
                  <div className="flex justify-between mt-2 text-sm text-gray-500 dark:text-gray-400">
                    {errors.message && <p className="text-red-600 dark:text-red-400">{errors.message}</p>}
                    <p className="ml-auto py-1">{message.length}/500</p>
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mt-3"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
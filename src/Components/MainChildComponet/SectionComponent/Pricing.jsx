
import { Link } from 'react-router-dom';

function Pricing() {

  const packages = [
    {
      name: 'Basic Package',
      price: '$500',
      description: 'Perfect for startups needing a simple online presence.',
      features: [
        'Responsive website (5 pages)',
        'Basic SEO setup',
        'Contact form integration',
        'Mobile optimization',
        '1 week deployment',
      ],
      cta: 'Choose Basic',
      mostPopular: false,
    },
    {
      name: 'Standard Package',
      price: '$1,200',
      description: 'Ideal for growing businesses wanting full functionality.',
      features: [
        'Custom 10+ pages',
        'Advanced SEO & analytics',
        'User authentication',
        'API integrations (e.g., Stripe)',
        '2 weeks deployment + 1 month support',
      ],
      cta: 'Choose Standard',
      mostPopular: true,
    },
    {
      name: 'Premium Package',
      price: '$3,000+',
      description: 'Enterprise-level app for complex projects.',
      features: [
        'Full-stack custom app',
        'Database design & backend',
        'Advanced features (AI/ML if needed)',
        'Performance optimization',
        'Ongoing maintenance (3 months)',
      ],
      cta: 'Choose Premium',
      mostPopular: false,
    },
  ];

  return (
    <div className={`bg-gray-50 text-gray-900 min-h-screen`}>
      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-br from-indigo-50 to-pink-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent">
            My Development Packages
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Tailored solutions for your digital needs. Pick a package or let's customize one together.
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            Prices in USD | Based in Addis Ababa, serving global clients 🚀
          </p>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={pkg.name || index}
                className={`
                  bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border-2 transition-all duration-300 hover:shadow-xl
                  ${pkg.mostPopular ? 'border-indigo-500 ring-4 ring-indigo-100 dark:ring-indigo-900 scale-105' : 'border-gray-200 dark:border-gray-700'}
                `}
              >
                {/* Badge for Most Popular */}
                {pkg.mostPopular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{pkg.description}</p>
                <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">{pkg.price}</div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={`${pkg.name}-feature-${i}`} className="flex items-center text-gray-700 dark:text-gray-300">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact-me" // Or to a form on this page: to="/pricing#contact-form"
                  className={`
                    block w-full py-3 px-6 rounded-lg font-semibold text-center transition-colors
                    ${pkg.mostPopular 
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
                      : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                    }
                  `}
                >
                  {pkg.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact-form" className="py-16 px-4 text-center bg-indigo-500 text-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Something Amazing?</h2>
          <p className="text-xl mb-8">No package fits? Let's chat—I'll create a custom plan just for you.</p>
          <Link
            to="/contact-me"
            className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get in Touch Now
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Pricing;
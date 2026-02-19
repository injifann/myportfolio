import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Building a Modern Portfolio with Vite + React + Tailwind",
    excerpt:
      "How I set up a fast, responsive portfolio site in under an hour using today's favorite frontend stack.",
    date: "March 15, 2025",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1516321310764-9f3c9619d7d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Tailwind", "Vite"],
  },
  {
    id: 2,
    title: "Why I Switched from Create React App to Vite in 2025",
    excerpt:
      "The performance gains, better DX, and why most new projects should start with Vite now.",
    date: "February 28, 2025",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Vite", "Performance", "Frontend"],
  },
  {
    id: 3,
    title: "Mastering Tailwind CSS: From Utility Classes to Custom Themes",
    excerpt:
      "Practical patterns and best practices I've learned after building 10+ production apps with Tailwind.",
    date: "January 10, 2025",
    readTime: "12 min read",
    image:
      "https://images.unsplash.com/photo-1551650975-60cb498c8c8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Tailwind", "CSS", "Design Systems"],
  },
];

function Blog() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white text-center">
        <div className="container mx-auto px-6 md:px-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Blog & Insights
          </h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
        A bit more natural and completeThoughts on frontend development, performance, and modern web tools, as well as backend development — including my journey, the projects I've worked on, and the problems I've solved.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-10 max-w-4xl">

          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="mb-20 border-b border-gray-200 dark:border-gray-800 pb-12"
            >
              {/* Featured Image */}
              <div className="mb-8 overflow-hidden rounded-xl">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-[300px] object-cover"
                />
              </div>

              {/* Meta */}
              <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                <time>{post.date}</time>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>

              {/* Title */}
              <h2 className="text-3xl font-bold mb-4 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                <Link to={`/blog/${post.id}`}>
                  {post.title}
                </Link>
              </h2>

              {/* Excerpt */}
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {post.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mb-6">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Read More */}
              <Link
                to={`/blog/${post.id}`}
                className="inline-block text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
              >
                Read full article →
              </Link>
            </article>
          ))}

        </div>
      </section>
    </div>
  );
}

export default Blog;

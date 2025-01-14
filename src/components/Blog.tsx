import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      title: "Building Scalable React Applications",
      excerpt: "Learn the best practices and patterns for creating maintainable React applications that scale.",
      date: "2024-03-15",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80",
      category: "React"
    },
    {
      title: "Modern TypeScript Features You Should Know",
      excerpt: "Explore the latest TypeScript features that can improve your development workflow.",
      date: "2024-03-10",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=800&q=80",
      category: "TypeScript"
    },
    {
      title: "Optimizing Web Performance",
      excerpt: "Essential techniques for improving your website's loading speed and overall performance.",
      date: "2024-03-05",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      category: "Performance"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-4xl font-bold">Latest Articles</h2>
          <a href="/blog" className="text-blue-600 hover:text-blue-700 flex items-center group">
            View All
            <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition" size={20} />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  {post.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 hover:text-blue-600 transition">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <div className="flex items-center mr-4">
                    <Calendar size={16} className="mr-2" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-2" />
                    {post.readTime}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
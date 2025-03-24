import React from "react";

const Blog = () => {
  const posts = [
    { id: 1, title: "The Future of Real Estate", date: "March 10, 2025", summary: "Exploring trends in modern real estate development." },
    { id: 2, title: "How to Invest in Properties", date: "March 5, 2025", summary: "A beginner’s guide to property investment and ROI." },
    { id: 3, title: "Top Locations for Luxury Homes", date: "February 28, 2025", summary: "Discover the best places for high-end properties." }
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Our Blog</h1>
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="p-4 border border-gray-300 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-sm text-gray-500">{post.date}</p>
            <p className="text-gray-700 mt-2">{post.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;

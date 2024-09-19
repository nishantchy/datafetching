"use client";
import { useState } from "react";
import BlogCards from "./BlogCards";

export default function Search({ posts }: { posts: any[] }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(posts);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(term) ||
        post.content.toLowerCase().includes(term) ||
        post.author.toLowerCase().includes(term)
    );

    setFilteredPosts(filtered);
  };

  return (
    <div className="max-w-[1240px] w-full mx-auto">
      <div className="my-4">
        <input
          type="text"
          placeholder="Search blogs..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <BlogCards posts={filteredPosts} />
    </div>
  );
}

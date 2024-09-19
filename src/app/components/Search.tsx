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
      <div className="py-3 flex justify-center items-center max-w-[400px] mx-auto">
        <input
          type="text"
          placeholder="Search blogs..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full p-2 text-gray-900 border border-gray-300 rounded-3xl shadow-2xl bg-gray-50 outline:none focus:ring-blue-950 focus:border-blue-950 text-center"
        />
      </div>
      <BlogCards posts={filteredPosts} />
    </div>
  );
}

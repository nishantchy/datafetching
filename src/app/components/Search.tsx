"use client";
import { useState } from "react";

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

      <div className="flex flex-wrap justify-start items-center gap-3 font-semibold">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <div
              key={post.id}
              className="rounded-lg shadow-xl bg-white h-[300px] max-w-[300px] w-full mx-auto p-6 mt-6"
            >
              <p className="text-3xl">{post.title}</p>
              <p className="text-xl">{post.content}</p>
              <p className="text-xl">{post.author}</p>
              <p className="text-sm">{post.date}</p>
              <p className="text-sm">{post.category}</p>
            </div>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
}

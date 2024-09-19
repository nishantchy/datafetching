export default function BlogCards({ posts }: { posts: any[] }) {
  return (
    <div className="flex flex-wrap justify-start items-center gap-3 font-semibold">
      {posts.length > 0 ? (
        posts.map((post) => (
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
  );
}

export default async function BlogCards() {
  let data = await fetch("https://api.vercel.app/blog");
  let posts = await data.json();
  return (
    <div className="flex flex-wrap justify-start items-center gap-3 font-semibold max-w-[1240px] w-full mx-auto">
      {posts.map((post: any) => (
        <div className="rounded-lg shadow-xl bg-white h-[300px] max-w-[300px] w-full mx-auto p-6 mt-24">
          <p key={post.id} className="text-3xl">
            {post.title}
          </p>
          <p key={post.id} className="text-xl">
            {post.content}
          </p>
          <p key={post.id} className="text-xl">
            {post.author}
          </p>
          <p key={post.id} className="text-sm">
            {post.date}
          </p>
          <p key={post.id} className="text-sm">
            {post.category}
          </p>
        </div>
      ))}
    </div>
  );
}

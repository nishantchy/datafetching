import Image from "next/image";
import johnImage from "../../../public/image/john.jpg";

export default function BlogCards({ posts }: { posts: any[] }) {
  return (
    <div className="flex flex-wrap justify-start items-center gap-3 font-semibold">
      {posts.length > 0 ? (
        posts.map((post) => (
          <div
            key={post.id}
            className="rounded-lg shadow-xl bg-white h-[270px] max-w-[300px] w-full mx-auto p-8 mt-6"
          >
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-400 font-thin">{post.date}</p>
              <p className="text-sm text-white bg-blue-950 py-1 px-3 rounded-2xl">
                {post.category}
              </p>
            </div>
            <p className="text-xl tracking-tighter mt-3 text-blue-950">
              {post.title}
            </p>
            <p className="text-sm mt-3 text-gray-500">{post.content}</p>
            <div className="flex justify-start items-center gap-2 mt-5">
              <Image
                src={johnImage}
                width={30}
                height={30}
                alt="john"
                style={{
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
              <p className="text-sm text-gray-700">{post.author}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
}

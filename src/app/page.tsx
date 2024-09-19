// src/app/Page.tsx
import Search from "./components/Search";

export default async function Page() {
  let data = await fetch("https://api.vercel.app/blog");
  let posts = await data.json();

  return (
    <div>
      <Search posts={posts} />
    </div>
  );
}

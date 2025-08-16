import { Navbar } from "./components/Navbar";
import { PostCard } from "./components/PostCard";
import React, { useState } from "react";

const postsData = [
  {
    id: 1,
    title: "React Basics",
    image: "/images/react.png",
    description: "Learn the basics of React and component-driven development.",
    date: "2025-08-01",
    category: "Tech",
  },
  {
    id: 2,
    title: "Exploring the Alps",
    image: "/images/Exploring_the_Alps.jpg",
    description: "A travel guide to the beautiful Alps mountains.",
    date: "2025-07-20",
    category: "Travel",
  },
  {
    id: 3,
    title: "Best Pasta Recipes",
    image: "/images/Pasta.jpg",
    description: "Delicious pasta recipes from Italy.",
    date: "2025-07-10",
    category: "Food",
  },
  {
    id: 4,
    title: "Advanced React Patterns",
    image: "/images/Advanced_React_Patterns.jpg",
    description: "Take your React skills to the next level.",
    date: "2025-08-10",
    category: "Tech",
  },
  {
    id: 5,
    title: "Street Food Adventures",
    image: "/images/Street_Food_Adventures.jpg",
    description: "Discover the best street food around the world.",
    date: "2025-06-30",
    category: "Food",
  },
  {
    id: 6,
    title: "Backpacking Southeast Asia",
    image: "/images/Backpacking_Southeast_Asia.jpeg",
    description: "Tips and tricks for backpacking through Southeast Asia.",
    date: "2025-07-25",
    category: "Travel",
  },
];

const categories = ["All", "Tech", "Travel", "Food"];
const POSTS_PER_PAGE = 4;

export const HomePage = () => {
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = postsData.filter((post) => {
    const matchesCategory = category === "All" || post.category === category;
    const matchesSearch = post.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (page - 1) * POSTS_PER_PAGE,
    page * POSTS_PER_PAGE
  );

  return (
    <div className="h-screen bg-gray-100 ">
      <Navbar />
      <div className="container mx-auto px-4 my-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4 px-4 gap-4">
          <input
            type="text"
            placeholder="Search posts by title"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-1/3 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          />
          <div className="flex gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 border rounded ${
                  category === cat
                    ? "bg-blue-500 text-white"
                    : "bg-white text-black"
                } transition duration-300 ease-in-out transform hover:scale-105`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        <section className="px-6 mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {paginatedPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </section>

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 py-8">
            <button
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
              className="px-3 py-1 rounded bg-gray-200 text-gray-700 disabled:opacity-50 hover:bg-gray-300 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Prev
            </button>

            <span className="px-2">Page {page} of {totalPages}</span>

            <button
              onClick={() => setPage(page + 1)}
              disabled={page === totalPages}
              className="px-3 py-1 rounded bg-gray-200 text-gray-700 disabled:opacity-50 hover:bg-gray-300 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

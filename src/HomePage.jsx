import { Navbar } from "./components/Navbar";
import { PostCard } from "./components/PostCard";



const postsData = [
  {
    id: 1,
    title: 'React Basics',
    image: 'https://via.placeholder.com/300x180',
    description: 'Learn the basics of React and component-driven development.',
    date: '2025-08-01',
    category: 'Tech',
  },
  {
    id: 2,
    title: 'Exploring the Alps',
    image: 'https://via.placeholder.com/300x180',
    description: 'A travel guide to the beautiful Alps mountains.',
    date: '2025-07-20',
    category: 'Travel',
  },
  {
    id: 3,
    title: 'Best Pasta Recipes',
    image: 'https://via.placeholder.com/300x180',
    description: 'Delicious pasta recipes from Italy.',
    date: '2025-07-10',
    category: 'Food',
  },
  {
    id: 4,
    title: 'Advanced React Patterns',
    image: 'https://via.placeholder.com/300x180',
    description: 'Take your React skills to the next level.',
    date: '2025-08-10',
    category: 'Tech',
  },
  {
    id: 5,
    title: 'Street Food Adventures',
    image: 'https://via.placeholder.com/300x180',
    description: 'Discover the best street food around the world.',
    date: '2025-06-30',
    category: 'Food',
  },
  {
    id: 6,
    title: 'Backpacking Southeast Asia',
    image: 'https://via.placeholder.com/300x180',
    description: 'Tips and tricks for backpacking through Southeast Asia.',
    date: '2025-07-25',
    category: 'Travel',
  },
];

const categories = ['All', 'Tech', 'Travel', 'Food'];
const POSTS_PER_PAGE = 4;


export const HomePage = () => {


    return (
        <div className="h-screen bg-gray-100 ">
            <Navbar />
            <div className="container mx-auto px-4 my-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {postsData.map((post) => (
                        <PostCard key={post.id} post={post} />
                    ))}
                </div>
            </div>
        </div>
    )
}
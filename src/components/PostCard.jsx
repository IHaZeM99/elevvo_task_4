


export const PostCard = ({ post }) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
            <div className="p-4">
                <h2 className="font-bold text-xl text-gray-900 ">{post.title}</h2>
                <p className="text-gray-600">{post.description}</p>
                <div className="mt-2 flex justify-between items-center">
                    <span className="text-gray-500 text-sm">{post.date}</span>
                    <span className="text-gray-500 text-sm">{post.category}</span>
                </div>
            </div>
        </div>
    )
}

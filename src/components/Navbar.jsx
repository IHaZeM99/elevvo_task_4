

const categories = ['All', 'Tech', 'Travel', 'Food'];


export const Navbar = () => {
    return (
        <nav className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                    </div>
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0 cursor-pointer">
                            <h1 className="text-2xl font-bold">My Blog</h1>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
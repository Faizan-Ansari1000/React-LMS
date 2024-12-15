import { Link, Route, Routes } from "react-router-dom";
import User from "./User";
import Album from "./Album";
import { FaUser, FaImages } from "react-icons/fa";  

export default function LMS() {
    return (
        <div className="flex flex-col md:flex-row">
            {/* Sidebar for large screens */}
            <div className="hidden md:flex md:w-64 bg-gray-800 text-white p-4">
                <div className="space-y-4">
                    <Link to="/LMS/User" className="flex items-center space-x-2 hover:text-gray-300">
                        <FaUser />
                        <span>User</span>
                    </Link>
                    <Link to="/LMS/Album" className="flex items-center space-x-2 hover:text-gray-300">
                        <FaImages />
                        <span>Album</span>
                    </Link>
                </div>
            </div>

            {/* Main content */}
            <div className="flex-1 p-6">
                {/* Header for mobile and desktop */}
                <div className="md:hidden flex justify-between items-center mb-4">
                    <Link to="/LMS/User" className="flex items-center space-x-2 text-blue-600 hover:text-blue-800">
                        <FaUser />
                        <span>User</span>
                    </Link>
                    <Link to="/LMS/Album" className="flex items-center space-x-2 text-blue-600 hover:text-blue-800">
                        <FaImages />
                        <span>Album</span>
                    </Link>
                </div>

                <Routes>
                    <Route path="/User" element={<User />} />
                    <Route path="/Album" element={<Album />} />
                </Routes>
            </div>
        </div>
    );
}

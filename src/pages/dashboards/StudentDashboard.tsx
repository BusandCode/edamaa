import { useState } from 'react';
import { FaSearch, FaBell, FaBook, FaClock, FaClipboardList, FaChartPie, FaFileAlt, FaDollarSign, FaVideo, FaBars, FaEdit } from 'react-icons/fa';
import Logo from "../../components/Logo";
const StudentDashboard = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // const [selectedLanguage, setSelectedLanguage] = useState('EN');

  const recordedClasses = [
    {
      id: 1,
      title: 'Introduction to Financial Accounting',
      instructor: 'Prof Olamide Sobowale',
      duration: '1h 30m',
      date: 'May 20, 2024',
      thumbnail: 'https://api.dicebear.com/7.x/shapes/svg?seed=class1&backgroundColor=3D08BA'
    },
    {
      id: 2,
      title: 'Advanced Mathematics - Calculus',
      instructor: 'Prof Adetokunbo Andrew',
      duration: '2h 15m',
      date: 'May 18, 2024',
      thumbnail: 'https://api.dicebear.com/7.x/shapes/svg?seed=class2&backgroundColor=F68C29'
    },
    {
      id: 3,
      title: 'Physics - Quantum Mechanics',
      instructor: 'Prof Bukunmi',
      duration: '1h 45m',
      date: 'May 15, 2024',
      thumbnail: 'https://api.dicebear.com/7.x/shapes/svg?seed=class3&backgroundColor=3D08BA'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between mb-3">
            {/* Logo */}
            <div className='shrink-0'>
              <Logo logoWidth={50} logoHeight={50} textSize="text-[13px]" gap="gap-2" centered={false} />
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-3">
              {/* Language Selector */}
              <button className="flex items-center gap-2 px-3 py-1 border border-gray-300 rounded-full text-sm">
                <span className="text-2xl">🇬🇧</span>
                <span className="text-xs text-gray-600">Select Language</span>
              </button>

              {/* Back Button */}
              <button className="px-4 py-2 bg-black text-white text-xs rounded-full hover:bg-gray-800 transition-colors">
                BACK
              </button>

              {/* Menu Button */}
              <button 
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <FaBars className="text-gray-700 text-xl" />
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative mb-3">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search course, tutorial..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3D08BA]"
            />
          </div>

          {/* Welcome Section */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full border-4 border-[#F68C29] overflow-hidden bg-white">
                <img 
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=student" 
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-800">Welcome, Chika</h2>
                <div className="flex items-center gap-2">
                  <p className="text-xs text-gray-600">I am here to learn, unlearn and relearn</p>
                  <FaEdit className="text-gray-400 text-xs cursor-pointer hover:text-[#3D08BA]" />
                </div>
              </div>
            </div>

            {/* Notification Bell */}
            <button className="relative p-2 hover:bg-gray-100 rounded-full">
              <FaBell className="text-[#3D08BA] text-2xl" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Progress Card */}
        <div className="bg-[#3D08BA] rounded-2xl p-5 mb-6 shadow-lg">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-white text-sm mb-1">15 of 30 Syllabus covered</p>
              <div className="w-full bg-white bg-opacity-20 rounded-full h-2">
                <div className="bg-linear-to-r from-[#F68C29] to-yellow-400 h-2 rounded-full" style={{width: '50%'}}></div>
              </div>
            </div>
            <span className="text-white font-bold text-xl">30%</span>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-3 gap-3">
            <button className="flex flex-col items-center gap-2 bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-3 hover:bg-opacity-20 transition-all">
              <FaBook className="text-white text-2xl" />
              <span className="text-white text-xs text-center">Upcoming class</span>
            </button>
            <button className="flex flex-col items-center gap-2 bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-3 hover:bg-opacity-20 transition-all">
              <FaClock className="text-white text-2xl" />
              <span className="text-white text-xs text-center">Remaining class days</span>
            </button>
            <button className="flex flex-col items-center gap-2 bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-3 hover:bg-opacity-20 transition-all">
              <FaClipboardList className="text-white text-2xl" />
              <span className="text-white text-xs text-center">Marked test/Quiz</span>
            </button>
          </div>
        </div>

        {/* Quick Access Grid */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {/* My Subjects */}
          <button className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center gap-3">
            <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center">
              <FaBook className="text-white text-2xl" />
            </div>
            <span className="text-sm font-semibold text-gray-800 text-center">My Subjects</span>
          </button>

          {/* Assignments */}
          <button className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center gap-3">
            <div className="w-16 h-16 bg-white border-4 border-gray-800 rounded-full flex items-center justify-center relative">
              <div className="absolute inset-0 border-4 border-transparent border-t-gray-800 rounded-full animate-spin"></div>
              <FaClock className="text-gray-800 text-2xl" />
            </div>
            <span className="text-sm font-semibold text-gray-800 text-center">Assignments</span>
          </button>

          {/* Join Class */}
          <button className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center gap-3">
            <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center relative">
              <FaVideo className="text-white text-2xl" />
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full font-bold">LIVE</span>
            </div>
            <span className="text-sm font-semibold text-gray-800 text-center">Join Class</span>
          </button>

          {/* Performance Report */}
          <button className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center gap-3">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
              <FaChartPie className="text-white text-2xl" />
            </div>
            <span className="text-sm font-semibold text-gray-800 text-center">Performance Report</span>
          </button>

          {/* Resource Library */}
          <button className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center gap-3">
            <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center">
              <FaFileAlt className="text-white text-2xl" />
            </div>
            <span className="text-sm font-semibold text-gray-800 text-center">Resource Library</span>
          </button>

          {/* Payment & Subscriptions */}
          <button className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center gap-3">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center border-4 border-gray-300">
              <FaDollarSign className="text-white text-2xl" />
            </div>
            <span className="text-sm font-semibold text-gray-800 text-center">Payment & Subscriptions</span>
          </button>
        </div>

        {/* Recorded Class Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-800">Recorded Class</h3>
            <button className="text-[#3D08BA] font-medium text-sm hover:underline">
              See more........
            </button>
          </div>

          {/* Recorded Classes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recordedClasses.map((classItem) => (
              <div
                key={classItem.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              >
                {/* Thumbnail */}
                <div className="relative h-40 bg-linear-to-br from-[#3D08BA] to-[#5a2dd4] overflow-hidden">
                  <img 
                    src={classItem.thumbnail}
                    alt={classItem.title}
                    className="w-full h-full object-cover opacity-20"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all">
                      <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-[#3D08BA] border-b-8 border-b-transparent ml-1"></div>
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                    {classItem.duration}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h4 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                    {classItem.title}
                  </h4>
                  <div className="flex items-center justify-between text-xs text-gray-600">
                    <span>{classItem.instructor}</span>
                    <span>{classItem.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={() => setMenuOpen(false)}
        >
          <div 
            className="absolute right-0 top-0 h-full w-64 bg-white shadow-lg p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4">Menu</h3>
            <nav className="space-y-4">
              <a href="#" className="block text-gray-700 hover:text-[#3D08BA]">Profile</a>
              <a href="#" className="block text-gray-700 hover:text-[#3D08BA]">Settings</a>
              <a href="#" className="block text-gray-700 hover:text-[#3D08BA]">Help & Support</a>
              <a href="#" className="block text-gray-700 hover:text-[#3D08BA]">Logout</a>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentDashboard;
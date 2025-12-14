import { useState, useRef } from 'react';
import { FaSearch, FaBell, FaBook, FaClock, FaClipboardList, FaFileAlt, FaDollarSign, FaVideo, FaBars, FaEdit, FaTasks, FaChartLine } from 'react-icons/fa';
import { IoMdCamera } from 'react-icons/io';
import Logo from "../../components/Logo";
import SubscriptionStatus from "../../components/SubscriptionStatus";

const StudentDashboard = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // editable profile
  const [profileSrc, setProfileSrc] = useState<string | null>(null);
  const profileInputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState<string>('Andrew');
  const [isEditingName, setIsEditingName] = useState<boolean>(false);

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
        <div className="max-w-7xl mx-auto px-4 py-4">
          {/* Logo, Search and Menu on same line */}
          <div className="flex items-center justify-between gap-3 mb-3">
            {/* Logo */}
            <div className='shrink-0'>
              <Logo logoWidth={50} logoHeight={50} textSize="text-[13px]" gap="gap-2" centered={false} />
            </div>

            {/* Search Bar */}
            <div className="flex-1 min-w-0">
              <div className="relative">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={14} />
                <input
                  type="text"
                  placeholder="Search course, tutorial..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3D08BA] text-sm"
                />
              </div>
            </div>

            {/* Menu Button */}
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 hover:bg-gray-100 rounded-lg shrink-0"
            >
              <FaBars className="text-gray-700 text-xl" />
            </button>
          </div>

          {/* Welcome Section */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                {/* Profile Avatar */}
              <div className="flex items-center gap-3">
                <div className="relative shrink-0">
                  <button
                    type="button"
                    aria-label="Change profile picture"
                    title="Click to change profile picture"
                    onClick={() => profileInputRef.current?.click()}
                    className="
                      group
                      relative
                      w-14 h-14 sm:w-16 sm:h-16
                      rounded-full
                      border-4 border-[#F68C29]
                      overflow-hidden
                      bg-white
                      flex items-center justify-center
                      focus:outline-none
                      focus:ring-2 focus:ring-[#3D08BA]
                      transition
                    "
                  >
                    <img
                      src={
                        profileSrc
                          ? profileSrc
                          : "https://api.dicebear.com/7.x/avataaars/svg?seed=student"
                      }
                      alt="Profile picture"
                      className="w-full h-full object-cover"
                    />

                    {/* Hover Overlay */}
                    <div className="
                      absolute inset-0
                      bg-black/40
                      flex items-center justify-center
                      text-white text-[10px] sm:text-xs font-medium
                      opacity-0 group-hover:opacity-100
                      transition-opacity
                    ">
                      Change Photo
                    </div>
                  </button>

                  {/* Hidden File Input */}
                  <input
                    ref={profileInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (!file) return;

                      const reader = new FileReader();
                      reader.onload = (ev) => setProfileSrc(String(ev.target?.result));
                      reader.readAsDataURL(file);
                    }}
                  />
                </div>

                {/* Welcome + Name */}
                <div className="min-w-0">
                  {!isEditingName ? (
                    <div className="flex items-center gap-2">
                      <h2 className="text-base sm:text-lg font-bold text-gray-800 truncate">
                        Welcome, {name}
                      </h2>
                      <button
                        aria-label="Edit name"
                        onClick={() => setIsEditingName(true)}
                        className="p-1 rounded hover:bg-gray-100"
                      >
                        <FaEdit className="text-gray-400 text-sm" />
                      </button>
                    </div>
                  ) : (
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      onBlur={() => setIsEditingName(false)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          (e.target as HTMLInputElement).blur();
                        }
                      }}
                      autoFocus
                      className="
                        px-2 py-1
                        border rounded
                        focus:outline-none focus:border-[#3D08BA]
                        text-base sm:text-lg font-bold
                        w-full max-w-[200px]
                      "
                    />
                  )}

                  <p className="text-xs sm:text-sm text-gray-600 truncate">
                    I am here to learn, unlearn and relearn
                  </p>
                </div>
              </div>
              </div>
            </div>

            {/* Notification Bell */}
            <button className="relative p-2 hover:bg-gray-100 rounded-full shrink-0">
              <FaBell className="text-[#3D08BA] text-2xl" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Progress Card */}
         {/* Earnings Overview Card */}
          <div className='bg-linear-to-r from-[#3D08BA] to-[#5010E0] rounded-2xl p-5 text-white'>
            <div className='flex items-center justify-between mb-4'>
              <h3 className='text-base sm:text-lg font-semibold'>Earnings Overview</h3>
              <span className='text-sm font-medium'>30%</span>
            </div>
            <div className='relative h-3 bg-white/20 rounded-full overflow-hidden mb-5'>
              <div className='absolute inset-y-0 left-0 w-[30%] bg-linear-to-r from-[#F68C29] to-[#FF9F4D] rounded-full'></div>
            </div>
            
            {/* Subscription Status */}
            <SubscriptionStatus isActive={true} showBoth={true} />
          </div>

        {/* Quick Access Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-6">
          {/* My Subjects */}
          <button className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center gap-3">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-linear-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center">
              <FaBook className="text-white text-2xl" />
            </div>
            <span className="text-xs sm:text-sm font-semibold text-gray-800 text-center">My Subjects</span>
          </button>

          {/* Assignments */}
          <button className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center gap-3">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-linear-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center">
              <FaTasks className="text-white text-2xl" />
            </div>
            <span className="text-xs sm:text-sm font-semibold text-gray-800 text-center">Assignments</span>
          </button>

          {/* Join Class */}
          <button className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center gap-3">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-linear-to-br from-red-500 to-red-700 rounded-2xl flex items-center justify-center relative">
              <FaVideo className="text-white text-2xl" />
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full font-bold">LIVE</span>
            </div>
            <span className="text-xs sm:text-sm font-semibold text-gray-800 text-center">Join Class</span>
          </button>

          {/* Performance Report */}
          <button className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center gap-3">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-linear-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center">
              <FaChartLine className="text-white text-2xl" />
            </div>
            <span className="text-xs sm:text-sm font-semibold text-gray-800 text-center">Performance Report</span>
          </button>

          {/* Resource Library */}
          <button className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center gap-3">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-linear-to-br from-orange-500 to-orange-700 rounded-2xl flex items-center justify-center">
              <FaFileAlt className="text-white text-2xl" />
            </div>
            <span className="text-xs sm:text-sm font-semibold text-gray-800 text-center">Resource Library</span>
          </button>

          {/* Payment & Subscriptions */}
          <button className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center gap-3">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-linear-to-br from-yellow-500 to-yellow-700 rounded-2xl flex items-center justify-center">
              <FaDollarSign className="text-white text-2xl" />
            </div>
            <span className="text-xs sm:text-sm font-semibold text-gray-800 text-center">Payment & Subscriptions</span>
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
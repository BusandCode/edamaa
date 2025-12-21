import { useState } from 'react';
import { FaSearch, FaBell, FaCog, FaBook, FaUserGraduate, FaMoneyBillWave, FaHome, FaClock, FaCalendar, FaCopy, FaVideo, FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import NewLogo from '../../components/NewLogo';
import { students } from '../students/students';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScheduleClass, { type NewClassData } from '../../components/ScheduleClass';

const TutorDashboard = () => {
  const [activeTab, setActiveTab] = useState('classroom');
  const [showProfile, setShowProfile] = useState(false);
  const [showScheduleModal, setShowScheduleModal] = useState(false);

  // Profile image and editable name
  const [profileSrc] = useState(null);
  const [name] = useState('Abdulrahman Farhan');
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  const [upcomingClasses, setUpcomingClasses] = useState([
    {
      id: 1,
      title: 'Introduction to Financial Accounting',
      date: '24 May 26',
      time: '12:00pm',
      students: 25,
      avatars: 3
    },
    {
      id: 2,
      title: 'Advanced Mathematics',
      date: '25 May 26',
      time: '2:30pm',
      students: 18,
      avatars: 3
    }
  ]);

  const classroomId = '224091556';

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(classroomId);
      toast.success('Classroom ID copied successfully');
    } catch (err) {
      toast.error('Failed to copy classroom ID');
    }
  }; 

  const handleScheduleClass = (newClass: NewClassData) => {
    setUpcomingClasses([...upcomingClasses, newClass]);
  };

  const navigate = useNavigate();
  const handleStudentListClick = () => {
    navigate('/student-list');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className={`bg-white shadow-sm sticky top-0 z-10 ${showProfile ? 'blur-sm' : ''}`}>
        <div className="max-w-7xl mx-auto px-3 sm:px-4 py-3 sm:py-4">
          {/* Logo and Search */}
          <div className="flex items-center justify-between gap-2 sm:gap-3 mb-2 sm:mb-3">
            {/* Logo */}
            <div className='shrink-0'>
              <NewLogo logoWidth={30} logoHeight={30} textSize="text-[14px]" gap="gap-1.5" centered={false} />
            </div>
            
            {/* Search Bar - Desktop */}
            <div className="hidden md:flex items-center flex-1 max-w-md mx-4 lg:mx-8">
              <div className="relative w-full">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={14} />
                <input
                  type="text"
                  placeholder="Search course, tutorial..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3D08BA] text-sm"
                />
              </div>
            </div>

            {/* Mobile Search button */}
            <button
              onClick={() => setShowMobileSearch((s) => !s)}
              className="md:hidden p-1.5 sm:p-2 rounded-full hover:bg-gray-100"
              aria-label="Search"
            >
              <FaSearch className="text-gray-600 text-base sm:text-lg" />
            </button>

            {/* Notification and Settings */}
            <div className="flex items-center gap-1 sm:gap-2">
              <button className="relative p-1.5 sm:p-2 hover:bg-gray-100 rounded-full">
                <FaBell className="text-gray-600 text-base sm:text-lg md:text-xl" />
                <span className="absolute top-0.5 right-0.5 sm:top-1 sm:right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-full">
                <FaCog className="text-gray-600 text-base sm:text-lg md:text-xl" />
              </button>
            </div>
          </div>

          {/* Mobile search overlay */}
          {showMobileSearch && (
            <div className="md:hidden absolute left-0 right-0 top-full bg-white px-3 sm:px-4 py-2 sm:py-3 border-t shadow z-20">
              <div className="relative max-w-7xl mx-auto">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={12} />
                <input
                  type="text"
                  placeholder="Search course, tutorial..."
                  className="w-full pl-9 pr-10 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3D08BA] text-sm"
                />
                <button 
                  onClick={() => setShowMobileSearch(false)} 
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" 
                  aria-label="Close search"
                >
                  ✕
                </button>
              </div>
            </div>
          )}

          {/* Welcome Section */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4 min-w-0 flex-1">
              {/* Profile Avatar with Plus Button */}
              <div className="relative shrink-0 group">
                <button
                  type="button"
                  aria-label="View profile"
                  title="View profile"
                  onClick={() => setShowProfile(true)}
                  className="
                    relative
                    w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20
                    rounded-full
                    overflow-hidden
                    border-2 sm:border-3 md:border-4 border-[#F68C29]
                    bg-gray-200
                    flex items-center justify-center
                    focus:outline-none
                    focus:ring-2 focus:ring-[#3D08BA]
                    transition
                  "
                >
                  {profileSrc ? (
                    <img
                      src={profileSrc}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <svg
                      className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  )}

                  {/* Hover Overlay */}
                  <div
                    className="
                      absolute inset-0
                      bg-black/40
                      hidden sm:flex
                      items-center justify-center
                      text-white text-[9px] md:text-[10px] font-medium
                      opacity-0 group-hover:opacity-100
                      transition-opacity
                    "
                  >
                    View Profile
                  </div>
                </button>

                {/* Plus Button */}
                <button
                  type="button"
                  onClick={() => setShowProfile(true)}
                  aria-label="Edit profile"
                  title="Edit profile"
                  className="
                    absolute -bottom-0.5 -right-0.5 sm:-bottom-1 sm:-right-1
                    w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7
                    rounded-full
                    bg-[#3D08BA]
                    flex items-center justify-center
                    shadow-md
                    hover:bg-[#2c0691]
                    transition
                  "
                >
                  <FaPlus className="text-white text-[14px] md:text-sm" />
                </button>
              </div>

              {/* Name and Welcome */}
              <div className="min-w-0 flex-1">
                <p className="text-[14px] text-gray-600 leading-tight">Welcome</p>
                <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-800 truncate leading-tight mt-0.5">
                  {name}
                </h2>
              </div>
            </div>

            {/* Share Classroom ID */}
            <div className="w-2/4 sm:w-auto bg-[#F68C29] px-3 sm:px-4 py-2 rounded-lg">
              <p className="text-[14px] text-white">Share Classroom ID</p>
              <div onClick={copyToClipboard}  className="flex items-center gap-2 mt-1">
                <span className="text-xs sm:text-sm font-bold text-white">ID: {classroomId}</span>
                <button className="text-white hover:scale-110 transition-transform">
                  <FaCopy className="text-xs sm:text-sm" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={`max-w-7xl mx-auto px-3 sm:px-4 py-4 sm:py-6 pb-24 sm:pb-28 ${showProfile ? 'blur-sm' : ''}`}>
        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6">
          <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#3D08BA] bg-opacity-10 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-3">
                <FaBook className="text-white text-xs sm:text-sm md:text-base" />
              </div>
              <h3 className="text-[14px] md:text-sm text-gray-600 mb-1 text-center">Total Courses</h3>
              <p className="text-sm sm:text-base md:text-lg font-bold text-gray-800">12</p>
            </div>
          </div>

          <div onClick={handleStudentListClick} className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#3D08BA] bg-opacity-10 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-3">
                <FaUserGraduate className="text-white text-xs sm:text-sm md:text-base" />
              </div>
              <h3 className="text-[14px] md:text-sm text-gray-600 mb-1 text-center">Total Students</h3>
              <p className="text-sm sm:text-base md:text-lg font-bold text-gray-800">{students.length}</p>
            </div>
          </div>

          <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#3D08BA] bg-opacity-10 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-3">
                <FaMoneyBillWave className="text-white text-xs sm:text-sm md:text-base" />
              </div>
              <h3 className="text-[14px] md:text-sm text-gray-600 mb-1 text-center">Earnings</h3>
              <p className="text-sm sm:text-base md:text-lg font-bold text-gray-800">$45,280</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg sm:rounded-xl p-1.5 sm:p-2 shadow-sm mb-4 sm:mb-6 inline-flex gap-1 sm:gap-2 overflow-x-auto w-full sm:w-auto">
          <button
            onClick={() => setActiveTab('group')}
            className={`px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-lg font-medium transition-colors text-xs sm:text-sm md:text-base whitespace-nowrap ${
              activeTab === 'group'
                ? 'bg-gray-100 text-gray-800'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            Group
          </button>
          <button
            onClick={() => setActiveTab('classroom')}
            className={`px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-lg font-medium transition-colors text-xs sm:text-sm md:text-base whitespace-nowrap ${
              activeTab === 'classroom'
                ? 'bg-gray-100 text-gray-800'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            Classroom
          </button>
          <button
            onClick={() => setActiveTab('live')}
            className={`px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-lg font-medium transition-colors flex items-center gap-1 sm:gap-2 text-xs sm:text-sm md:text-base whitespace-nowrap ${
              activeTab === 'live'
                ? 'bg-gray-100 text-gray-800'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <FaVideo className="text-xs sm:text-sm" /> Live
          </button>
        </div>

        {/* Upcoming Classes Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800">Upcoming Class</h3>
            <button 
              onClick={() => setShowScheduleModal(true)}
              className="bg-[#3D08BA] text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold hover:bg-[#2c0691] transition-colors flex items-center gap-2"
            >
              <FaPlus className="text-xs" />
              Schedule Class
            </button>
          </div>

          {/* Class Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {upcomingClasses.map((classItem) => (
              <div
                key={classItem.id}
                className="bg-linear-to-r from-[#5a18f2] to-[#3D08BA] rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                {/* Student Avatars and Date */}
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="flex items-center">
                    <div className="flex -space-x-2">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full border-2 border-white overflow-hidden bg-white">
                        <img 
                          src="https://api.dicebear.com/7.x/avataaars/svg?seed=student1" 
                          alt="Student"
                          className="w-full h-full"
                        />
                      </div>
                      <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full border-2 border-white overflow-hidden bg-white">
                        <img 
                          src="https://api.dicebear.com/7.x/avataaars/svg?seed=student2" 
                          alt="Student"
                          className="w-full h-full"
                        />
                      </div>
                      <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full border-2 border-white bg-white flex items-center justify-center">
                        <span className="text-[14px] font-bold text-gray-700">+{classItem.students}</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white bg-opacity-20 backdrop-blur-sm px-2 sm:px-3 py-1 sm:py-2 rounded-lg flex items-center gap-1 sm:gap-2">
                    <FaCalendar className="text-white text-[14px]" />
                    <span className="text-black text-[12px] font-medium">{classItem.date}</span>
                  </div>
                </div>

                {/* Class Title */}
                <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white mb-3 sm:mb-4 line-clamp-2">
                  {classItem.title}
                </h4>

                {/* Time and Action */}
                <div className="flex items-stretch sm:items-center justify-between gap-2 sm:gap-3">
                  <div className="bg-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg flex items-center justify-center gap-1 sm:gap-2">
                    <FaClock className="text-gray-700 text-xs sm:text-sm" />
                    <span className="text-gray-800 font-medium text-xs sm:text-sm">{classItem.time}</span>
                  </div>
                  <button className="bg-[#F68C29] text-white px-4 py-1.5 rounded-lg font-semibold hover:bg-opacity-90 transition-all text-xs sm:text-sm md:text-base">
                    Start Class
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg md:hidden z-10">
        <div className="flex justify-around items-center py-2 sm:py-3 px-2">
          <button className="flex flex-col items-center gap-0.5 sm:gap-1 text-orange-500">
            <div className="bg-orange-100 p-2 sm:p-2.5 rounded-lg">
              <FaHome size={16} className="sm:w-5 sm:h-5" />
            </div>
            <span className="text-[14px]">Home</span>
          </button>
          <button className="flex flex-col items-center gap-0.5 sm:gap-1 text-gray-600 hover:text-orange-500">
            <div className="p-2 sm:p-2.5 rounded-lg hover:bg-orange-100">
              <FaBook size={16} className="sm:w-5 sm:h-5" />
            </div>
            <span className="text-[14px]">Courses</span>
          </button>
          <button onClick={handleStudentListClick} className="flex flex-col items-center gap-0.5 sm:gap-1 text-gray-600 hover:text-orange-500">
            <div className="p-2 sm:p-2.5 rounded-lg hover:bg-orange-100">
              <FaUserGraduate size={16} className="sm:w-5 sm:h-5" />
            </div>
            <span className="text-[14px]">Students</span>
          </button>
          <button className="flex flex-col items-center gap-0.5 sm:gap-1 text-gray-600 hover:text-orange-500">
            <div className="p-2 sm:p-2.5 rounded-lg hover:bg-orange-100">
              <FaMoneyBillWave size={16} className="sm:w-5 sm:h-5" />
            </div>
            <span className="text-[14px]">Earnings</span>
          </button>
        </div>
      </div>

      {/* Schedule Class Modal Component */}
      <ScheduleClass 
        isOpen={showScheduleModal}
        onClose={() => setShowScheduleModal(false)}
        onSchedule={handleScheduleClass}
      />

      <ToastContainer 
        position="top-right" 
        autoClose={3000} 
        hideProgressBar={false} 
        newestOnTop={false} 
        closeOnClick 
        rtl={false} 
        pauseOnFocusLoss 
        draggable 
        pauseOnHover 
      />

    </div>
  );
};

export default TutorDashboard;
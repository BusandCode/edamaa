import { useState } from 'react';
import { FaSearch, FaBell, FaCog, FaBook, FaUserGraduate, FaMoneyBillWave, FaHome, FaPhone, FaChartBar, FaUser, FaPlus, FaClock, FaCalendar, FaShare, FaCopy, FaVideo } from 'react-icons/fa';
import Logo from "../../components/Logo";

const TutorDashboard = () => {
  const [activeTab, setActiveTab] = useState('classroom');
  const [showShareModal, setShowShareModal] = useState(false);

  const upcomingClasses = [
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
  ];

  const classroomId = '224091556';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(classroomId);
    alert('Classroom ID copied!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          {/* Logo and Search */}
          <div className="flex items-center justify-between mb-4">
            {/* Logo */}
            <div className='shrink-0'>
              <Logo logoWidth={50} logoHeight={50} textSize="text-[13px]" gap="gap-2" centered={false} />
            </div>
            
            {/* Search Bar */}
            <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search course, tutorial....."
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3D08BA]"
                />
              </div>
            </div>

            {/* Notification and Settings */}
            <div className="flex items-center gap-3">
              <button className="relative p-2 hover:bg-gray-100 rounded-full">
                <FaBell className="text-gray-600 text-xl" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <FaCog className="text-gray-600 text-xl" />
              </button>
            </div>
          </div>

          {/* Welcome Section */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
             <div className='w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-gray-200 overflow-hidden'>
              <div className='w-full h-full flex items-center justify-center'>
                <svg className='w-20 h-20 text-gray-400' fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
            </div>
              <div>
                <p className="text-sm text-gray-600">Welcome</p>
                <h2 className="text-xl font-bold text-gray-800">Abdulrahman Farhan ✏️</h2>
              </div>
            </div>

            {/* Share Classroom ID */}
            <div className="bg-linear-to-r from-[#F68C29] to-[#ffa94d] px-4 py-2 rounded-lg">
              <p className="text-xs text-white">Share Classroom ID</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-sm font-bold text-white">ID: {classroomId}</span>
                <button onClick={copyToClipboard} className="text-white hover:scale-110 transition-transform">
                  <FaCopy />
                </button>
                <button onClick={() => setShowShareModal(true)} className="text-white hover:scale-110 transition-transform">
                  <FaShare />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-[#3D08BA] bg-opacity-10 rounded-xl flex items-center justify-center mb-3">
                <FaBook className="text-[#3D08BA] text-2xl" />
              </div>
              <h3 className="text-sm text-gray-600 mb-1">Total Courses</h3>
              <p className="text-2xl font-bold text-gray-800">12</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-[#3D08BA] bg-opacity-10 rounded-xl flex items-center justify-center mb-3">
                <FaUserGraduate className="text-[#3D08BA] text-2xl" />
              </div>
              <h3 className="text-sm text-gray-600 mb-1">Students List</h3>
              <p className="text-2xl font-bold text-gray-800">847</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-[#3D08BA] bg-opacity-10 rounded-xl flex items-center justify-center mb-3">
                <FaMoneyBillWave className="text-[#3D08BA] text-2xl" />
              </div>
              <h3 className="text-sm text-gray-600 mb-1">Earnings</h3>
              <p className="text-2xl font-bold text-gray-800">$45,280</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl p-2 shadow-sm mb-6 inline-flex gap-2">
          <button
            onClick={() => setActiveTab('group')}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'group'
                ? 'bg-gray-100 text-gray-800'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            Group
          </button>
          <button
            onClick={() => setActiveTab('classroom')}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'classroom'
                ? 'bg-gray-100 text-gray-800'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            Classroom
          </button>
          <button
            onClick={() => setActiveTab('live')}
            className={`px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 ${
              activeTab === 'live'
                ? 'bg-gray-100 text-gray-800'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <FaVideo /> Live
          </button>
        </div>

        {/* Upcoming Classes Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-800">Upcoming Class</h3>
            <button className="text-[#3D08BA] font-medium flex items-center gap-1 hover:underline">
              View All →
            </button>
          </div>

          {/* Class Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {upcomingClasses.map((classItem) => (
              <div
                key={classItem.id}
                className="bg-linear-to-br from-[#F68C29] to-[#ffa94d] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                {/* Student Avatars and Date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="flex -space-x-2">
                      <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-white">
                        <img 
                          src="https://api.dicebear.com/7.x/avataaars/svg?seed=student1" 
                          alt="Student"
                          className="w-full h-full"
                        />
                      </div>
                      <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-white">
                        <img 
                          src="https://api.dicebear.com/7.x/avataaars/svg?seed=student2" 
                          alt="Student"
                          className="w-full h-full"
                        />
                      </div>
                      <div className="w-10 h-10 rounded-full border-2 border-white bg-white flex items-center justify-center">
                        <span className="text-sm font-bold text-gray-700">+{classItem.students}</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white bg-opacity-20 backdrop-blur-sm px-3 py-2 rounded-lg flex items-center gap-2">
                    <FaCalendar className="text-white text-sm" />
                    <span className="text-white text-sm font-medium">{classItem.date}</span>
                  </div>
                </div>

                {/* Class Title */}
                <h4 className="text-xl font-bold text-white mb-4">
                  {classItem.title}
                </h4>

                {/* Time and Action */}
                <div className="flex items-center justify-between">
                  <div className="bg-white px-4 py-2 rounded-lg flex items-center gap-2">
                    <FaClock className="text-gray-700" />
                    <span className="text-gray-800 font-medium">{classItem.time}</span>
                  </div>
                  <button className="bg-white text-gray-800 px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-all">
                    Start Class
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-around py-3">
            <button className="flex flex-col items-center gap-1 text-[#F68C29] hover:text-[#3D08BA] transition-colors">
              <FaHome className="text-2xl" />
              <span className="text-xs">Home</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-gray-600 hover:text-[#3D08BA] transition-colors">
              <FaPhone className="text-2xl" />
              <span className="text-xs">Calls</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-gray-600 hover:text-[#3D08BA] transition-colors">
              <FaChartBar className="text-2xl" />
              <span className="text-xs">Analytics</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-gray-600 hover:text-[#3D08BA] transition-colors">
              <FaUser className="text-2xl" />
              <span className="text-xs">Profile</span>
            </button>
            <button className="w-14 h-14 bg-linear-to-r from-[#F68C29] to-[#ffa94d] rounded-full flex items-center justify-center -mt-6 shadow-lg hover:shadow-xl transition-shadow">
              <FaPlus className="text-white text-2xl" />
            </button>
          </div>
        </div>
      </div>

      {/* Share Modal */}
      {showShareModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Share Classroom ID</h3>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <p className="text-center text-2xl font-bold text-[#3D08BA]">{classroomId}</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={copyToClipboard}
                className="flex-1 bg-[#3D08BA] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Copy ID
              </button>
              <button
                onClick={() => setShowShareModal(false)}
                className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TutorDashboard;
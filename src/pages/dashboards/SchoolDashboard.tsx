import { useState } from 'react';
import { FaSearch, FaBars, FaCheckCircle, FaEdit, FaBell, FaChartLine, FaCalendarAlt, FaVideo, FaFolder, FaIdCard, FaCreditCard, FaQuestionCircle, FaUsers, FaFileAlt, FaCertificate, FaBook, FaFlag, FaInfoCircle, FaLanguage, FaEnvelope, FaShieldAlt, FaTimes, FaCamera } from 'react-icons/fa';
import Logo from "../../components/Logo";
import SubscriptionStatus from "../../components/SubscriptionStatus";

const SchoolDashboard = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileImage, setProfileImage] = useState<string>('');

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Header */}
      <header className='bg-white shadow-sm sticky top-0 z-10'>
        <div className='max-w-7xl mx-auto px-4 py-4'>
          <div className='flex items-center justify-between gap-3'>
            {/* Logo */}
            <div className='shrink-0'>
              <Logo logoWidth={50} logoHeight={50} textSize="text-[13px]" gap="gap-2" centered={false} />
            </div>
            
            {/* Search Bar */}
            <div className='flex-1 min-w-0'>
              <div className='relative'>
                <FaSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' size={14} />
                <input
                  type='text'
                  placeholder='Search course, tutorial...'
                  className='w-full pl-9 pr-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3D08BA] text-sm'
                />
              </div>
            </div>

            {/* Menu Icon */}
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className='w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors shrink-0'
            >
              <FaBars size={22} className='text-gray-700' />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className='max-w-7xl mx-auto px-4 py-6'>
        {/* Welcome Section */}
        <div className='bg-white rounded-2xl p-5 mb-6 shadow-sm'>
          <div className='flex items-start gap-4 mb-5'>
            <div className='relative shrink-0'>
              <div className='w-16 h-16 rounded-full overflow-hidden bg-linear-to-br from-purple-400 to-purple-600'>
                {profileImage ? (
                  <img 
                    src={profileImage} 
                    alt='School Profile' 
                    className='w-full h-full object-cover'
                  />
                ) : (
                  <div className='w-full h-full flex items-center justify-center text-white text-2xl font-bold'>
                    GS
                  </div>
                )}
              </div>
              <div className='absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white'></div>
              
              {/* Camera Icon for Upload */}
              <label className='absolute -bottom-1 -right-1 w-6 h-6 bg-[#3D08BA] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#5010E0] transition-colors'>
                <FaCamera className='text-white text-xs' />
                <input 
                  type='file' 
                  accept='image/*' 
                  onChange={handleImageChange}
                  className='hidden'
                />
              </label>
            </div>
            
            <div className='flex-1 min-w-0'>
              <div className='flex items-center gap-2 flex-wrap'>
                <h2 className='text-lg sm:text-xl font-bold text-gray-900'>Welcome, God'swill School</h2>
                <FaCheckCircle className='text-blue-500 shrink-0' size={18} />
              </div>
              <p className='text-sm text-gray-600 mt-1'>A WAEC accredited tutorial center focused</p>
              <div className='flex items-center gap-1'>
                <p className='text-sm text-gray-600'>on Science and Technology</p>
                <FaEdit className='text-gray-400 cursor-pointer hover:text-[#3D08BA] transition-colors' size={14} />
              </div>
            </div>

            <button className='w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-full shrink-0 relative'>
              <FaBell size={20} className='text-gray-700' />
              <span className='absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full'></span>
            </button>
          </div>

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
        </div>

        {/* Stats Cards */}
        <div className='grid grid-cols-3 gap-3 sm:gap-4 mb-6'>
          <div className='bg-white rounded-xl p-3 sm:p-4 shadow-sm flex flex-col items-center justify-center'>
            <div className='w-10 h-10 sm:w-12 sm:h-12 rounded-full border-4 border-[#3D08BA] border-t-[#F68C29] animate-spin mb-2 sm:mb-3'></div>
            <p className='text-xs sm:text-sm text-gray-600 font-medium text-center'>Total Student</p>
            <p className='text-xs text-gray-500'>Registered</p>
          </div>
          <div className='bg-white rounded-xl p-3 sm:p-4 shadow-sm flex flex-col items-center justify-center'>
            <div className='w-10 h-10 sm:w-12 sm:h-12 rounded-full border-4 border-[#3D08BA] border-t-[#F68C29] animate-spin mb-2 sm:mb-3'></div>
            <p className='text-xs sm:text-sm text-gray-600 font-medium text-center'>Total Tutor</p>
            <p className='text-xs text-gray-500'>Assigned</p>
          </div>
          <div className='bg-white rounded-xl p-3 sm:p-4 shadow-sm flex flex-col items-center justify-center'>
            <div className='w-10 h-10 sm:w-12 sm:h-12 rounded-full border-4 border-[#3D08BA] border-t-[#F68C29] animate-spin mb-2 sm:mb-3'></div>
            <p className='text-xs sm:text-sm text-gray-600 font-medium text-center'>Active-Class</p>
            <p className='text-xs text-gray-500'>Now</p>
          </div>
        </div>

        {/* Main Menu Grid */}
        <div className='grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-6'>
          {/* Finance */}
          <button className='bg-white rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center gap-2 sm:gap-3'>
            <div className='w-14 h-14 sm:w-16 sm:h-16 bg-linear-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center'>
              <FaChartLine className='text-white' size={24} />
            </div>
            <span className='text-xs sm:text-sm font-semibold text-gray-900 text-center'>Finance</span>
          </button>

          {/* Schedule Panel */}
          <button className='bg-white rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center gap-2 sm:gap-3'>
            <div className='w-14 h-14 sm:w-16 sm:h-16 bg-linear-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center'>
              <FaCalendarAlt className='text-white' size={24} />
            </div>
            <span className='text-xs sm:text-sm font-semibold text-gray-900 text-center'>Schedule</span>
            <span className='text-xs text-gray-500'>Panel</span>
          </button>

          {/* Live Class */}
          <button className='bg-white rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center gap-2 sm:gap-3'>
            <div className='w-14 h-14 sm:w-16 sm:h-16 bg-linear-to-br from-red-400 to-red-600 rounded-2xl flex items-center justify-center'>
              <FaVideo className='text-white' size={24} />
            </div>
            <span className='text-xs sm:text-sm font-semibold text-gray-900 text-center'>Live Class</span>
          </button>

          {/* Grading & Feedback */}
          <button className='bg-white rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center gap-2 sm:gap-3'>
            <div className='w-14 h-14 sm:w-16 sm:h-16 bg-linear-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center'>
              <FaFolder className='text-white' size={24} />
            </div>
            <span className='text-xs sm:text-sm font-semibold text-gray-900 text-center'>Grading &</span>
            <span className='text-xs text-gray-500'>feedback</span>
          </button>

          {/* Student */}
          <button className='bg-white rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center gap-2 sm:gap-3'>
            <div className='w-14 h-14 sm:w-16 sm:h-16 bg-linear-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center'>
              <FaIdCard className='text-white' size={24} />
            </div>
            <span className='text-xs sm:text-sm font-semibold text-gray-900 text-center'>Student</span>
          </button>

          {/* Subscriptions */}
          <button className='bg-white rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center gap-2 sm:gap-3'>
            <div className='w-14 h-14 sm:w-16 sm:h-16 bg-black rounded-2xl flex items-center justify-center'>
              <FaCreditCard className='text-white' size={24} />
            </div>
            <span className='text-xs sm:text-sm font-semibold text-gray-900 text-center'>Subscriptions</span>
          </button>
        </div>

        {/* Recorded Classroom Videos */}
        <div className='flex items-center gap-2 mb-4'>
          <span className='text-sm sm:text-base font-semibold text-gray-900'>Recorded Classroom Videos</span>
          <FaQuestionCircle className='text-gray-400' size={16} />
        </div>

        {/* WAEC & International Module */}
        <div className='bg-white rounded-2xl shadow-sm overflow-hidden'>
          <div className='flex items-center justify-between p-4 border-b border-gray-100'>
            <h3 className='text-sm sm:text-base font-semibold text-gray-900'>WAEC & International Module</h3>
            <button className='text-xs sm:text-sm text-[#3D08BA] font-medium hover:underline'>See more</button>
          </div>
          <div className='p-4 sm:p-6'>
            <div className='bg-linear-to-r from-[#3D08BA] to-[#5010E0] rounded-2xl p-5 sm:p-6 text-white relative overflow-hidden'>
              <h4 className='text-base sm:text-lg font-bold mb-2'>Past Questions & Mock Exams</h4>
              <p className='text-xs sm:text-sm mb-4 max-w-md pr-16 sm:pr-0'>Providing access to official Waec past questions, marking schemes and mock examinations to familiarize students with the exam format and content</p>
              <button className='bg-white text-[#3D08BA] px-4 sm:px-6 py-2 rounded-lg font-semibold text-xs sm:text-sm hover:bg-gray-100 transition-colors'>
                to Mock Test
              </button>
              <div className='absolute right-4 sm:right-6 bottom-4 sm:bottom-6'>
                <div className='w-12 h-12 sm:w-16 sm:h-16 bg-[#F68C29] rounded-2xl flex items-center justify-center transform rotate-12'>
                  <FaQuestionCircle className='text-white' size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={() => setMenuOpen(false)}
        >
          <div 
            className="absolute right-0 top-0 h-full w-72 bg-white shadow-2xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Menu Header */}
            <div className="bg-[#3D08BA] p-4 flex items-center justify-between">
              <h3 className="text-white font-bold text-lg">Menu</h3>
              <button 
                onClick={() => setMenuOpen(false)}
                className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-colors"
              >
                <FaTimes size={20} />
              </button>
            </div>

            {/* Menu Items */}
            <nav className="p-4">
              <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                <FaUsers size={18} />
                <span className="font-medium">Content Management</span>
              </a>
              
              <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                <FaChartLine size={18} />
                <span className="font-medium">Statistics</span>
              </a>
              
              <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                <FaCertificate size={18} />
                <span className="font-medium">Certifications</span>
              </a>
              
              <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                <FaFileAlt size={18} />
                <span className="font-medium">Documents</span>
              </a>
              
              <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                <FaFlag size={18} />
                <span className="font-medium">Reports</span>
              </a>
              
              <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                <FaBell size={18} />
                <span className="font-medium">Notifications</span>
              </a>
              
              <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                <FaInfoCircle size={18} />
                <span className="font-medium">About us</span>
              </a>
              
              <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                <FaLanguage size={18} />
                <span className="font-medium">Languages</span>
              </a>
              
              <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                <FaBook size={18} />
                <span className="font-medium">Share And Embed Links</span>
              </a>
              
              <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                <FaEnvelope size={18} />
                <span className="font-medium">Invite us</span>
              </a>
              
              <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                <FaQuestionCircle size={18} />
                <span className="font-medium">Help</span>
              </a>
              
              <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                <FaShieldAlt size={18} />
                <span className="font-medium">Privacy And Security</span>
              </a>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default SchoolDashboard;
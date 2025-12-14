
import { FaSearch, FaBars, FaCheckCircle, FaEdit, FaBell, FaChartLine, FaCalendarAlt, FaVideo, FaFolder, FaIdCard, FaCreditCard, FaQuestionCircle } from 'react-icons/fa';
import Logo from "../../components/Logo";

const SchoolDashboard = () => {
  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Header */}
      <header className='bg-white shadow-sm sticky top-0 z-10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between'>
          {/* Logo */}
          <Logo logoWidth={50} logoHeight={50} textSize="text-lg sm:text-xl" gap="gap-2" centered={false} />

          {/* Search Bar */}
          <div className='hidden md:flex flex-1 max-w-md mx-8'>
            <div className='relative w-full'>
              <FaSearch className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400' size={16} />
              <input
                type='text'
                placeholder='Search course, tutorial...'
                className='w-full pl-12 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3D08BA]'
              />
            </div>
          </div>

          {/* Menu Icon */}
          <button className='w-10 h-10 flex items-center justify-center'>
            <FaBars size={24} className='text-gray-700' />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className='max-w-7xl mx-auto px-4 sm:px-6 py-6'>
        {/* Welcome Section */}
        <div className='bg-white rounded-2xl p-6 mb-6 shadow-sm'>
          <div className='flex items-center gap-4 mb-6'>
            <div className='relative'>
              <div className='w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full overflow-hidden'>
                <img src='https://via.placeholder.com/64' alt='Profile' className='w-full h-full object-cover' />
              </div>
              <div className='absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white'></div>
            </div>
            <div className='flex-1'>
              <div className='flex items-center gap-2'>
                <h2 className='text-xl font-bold text-gray-900'>Welcome, God'swill School</h2>
                <FaCheckCircle className='text-blue-500' size={18} />
              </div>
              <p className='text-sm text-gray-600'>A WAEC accredited tutorial center focused</p>
              <p className='text-sm text-gray-600'>on Science and Technology <FaEdit className='inline text-gray-400' size={14} /></p>
            </div>
            <button className='w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-full'>
              <FaBell size={20} className='text-gray-700' />
            </button>
          </div>

          {/* Earnings Overview Card */}
          <div className='bg-gradient-to-r from-[#3D08BA] to-[#5010E0] rounded-2xl p-6 text-white'>
            <div className='flex items-center justify-between mb-4'>
              <h3 className='text-lg font-semibold'>Earnings Overview</h3>
              <span className='text-sm font-medium'>30%</span>
            </div>
            <div className='relative h-3 bg-white/20 rounded-full overflow-hidden mb-6'>
              <div className='absolute inset-y-0 left-0 w-[30%] bg-gradient-to-r from-[#F68C29] to-[#FF9F4D] rounded-full'></div>
            </div>
            
            {/* Subscription Status */}
            <div className='bg-white rounded-xl p-4 flex items-center justify-between'>
              <span className='text-gray-900 font-medium'>Subscription Status</span>
              <div className='flex gap-2'>
                <span className='px-4 py-1 bg-green-500 text-white rounded-full text-sm font-medium'>Active</span>
                <span className='px-4 py-1 bg-red-500 text-white rounded-full text-sm font-medium'>Expired</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className='grid grid-cols-3 gap-4 mb-6'>
          <div className='bg-white rounded-xl p-4 shadow-sm flex flex-col items-center justify-center'>
            <div className='w-12 h-12 rounded-full border-4 border-[#3D08BA] border-t-[#F68C29] animate-spin mb-3'></div>
            <p className='text-sm text-gray-600 font-medium'>Total Student</p>
            <p className='text-xs text-gray-500'>Registered</p>
          </div>
          <div className='bg-white rounded-xl p-4 shadow-sm flex flex-col items-center justify-center'>
            <div className='w-12 h-12 rounded-full border-4 border-[#3D08BA] border-t-[#F68C29] animate-spin mb-3'></div>
            <p className='text-sm text-gray-600 font-medium'>Total Tutor</p>
            <p className='text-xs text-gray-500'>Assigned</p>
          </div>
          <div className='bg-white rounded-xl p-4 shadow-sm flex flex-col items-center justify-center'>
            <div className='w-12 h-12 rounded-full border-4 border-[#3D08BA] border-t-[#F68C29] animate-spin mb-3'></div>
            <p className='text-sm text-gray-600 font-medium'>Active-Class</p>
            <p className='text-xs text-gray-500'>Now</p>
          </div>
        </div>

        {/* Main Menu Grid */}
        <div className='grid grid-cols-3 gap-4 mb-6'>
          {/* Finance */}
          <button className='bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center gap-3'>
            <div className='w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center'>
              <FaChartLine className='text-white' size={28} />
            </div>
            <span className='text-sm font-semibold text-gray-900'>Finance</span>
          </button>

          {/* Schedule Panel */}
          <button className='bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center gap-3'>
            <div className='w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center'>
              <FaCalendarAlt className='text-white' size={28} />
            </div>
            <span className='text-sm font-semibold text-gray-900'>Schedule</span>
            <span className='text-xs text-gray-500'>Panel</span>
          </button>

          {/* Live Class */}
          <button className='bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center gap-3'>
            <div className='w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-2xl flex items-center justify-center'>
              <FaVideo className='text-white' size={28} />
            </div>
            <span className='text-sm font-semibold text-gray-900'>Live Class</span>
          </button>

          {/* Grading & Feedback */}
          <button className='bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center gap-3'>
            <div className='w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center'>
              <FaFolder className='text-white' size={28} />
            </div>
            <span className='text-sm font-semibold text-gray-900'>Grading &</span>
            <span className='text-xs text-gray-500'>feedback</span>
          </button>

          {/* Student */}
          <button className='bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center gap-3'>
            <div className='w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center'>
              <FaIdCard className='text-white' size={28} />
            </div>
            <span className='text-sm font-semibold text-gray-900'>Student</span>
          </button>

          {/* Subscriptions */}
          <button className='bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center gap-3'>
            <div className='w-16 h-16 bg-black rounded-2xl flex items-center justify-center'>
              <FaCreditCard className='text-white' size={28} />
            </div>
            <span className='text-sm font-semibold text-gray-900'>Subscriptions</span>
          </button>
        </div>

        {/* Recorded Classroom Videos */}
        <div className='flex items-center gap-2 mb-6'>
          <span className='text-base font-semibold text-gray-900'>Recorded Classroom Videos</span>
          <FaQuestionCircle className='text-gray-400' size={16} />
        </div>

        {/* WAEC & International Module */}
        <div className='bg-white rounded-2xl shadow-sm overflow-hidden'>
          <div className='flex items-center justify-between p-4 border-b border-gray-100'>
            <h3 className='text-base font-semibold text-gray-900'>WAEC & International Module</h3>
            <button className='text-sm text-[#3D08BA] font-medium hover:underline'>See more</button>
          </div>
          <div className='p-6'>
            <div className='bg-gradient-to-r from-[#3D08BA] to-[#5010E0] rounded-2xl p-6 text-white relative overflow-hidden'>
              <h4 className='text-lg font-bold mb-2'>Past Questions & Mock Exams</h4>
              <p className='text-sm mb-4 max-w-md'>Providing access to official Waec past questions, marking schemes and mock examinations to familiarize students with the exam format and content</p>
              <button className='bg-white text-[#3D08BA] px-6 py-2 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors'>
                to Mock Test
              </button>
              <div className='absolute right-6 bottom-6'>
                <div className='w-16 h-16 bg-[#F68C29] rounded-2xl flex items-center justify-center transform rotate-12'>
                  <FaQuestionCircle className='text-white' size={32} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SchoolDashboard;
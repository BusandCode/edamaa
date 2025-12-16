import { useState } from 'react';
import NewLogo from '../../components/NewLogo';
import { FaBars, FaBell, FaBook, FaTasks, FaVideo, FaChartLine, FaFileAlt, FaDollarSign, FaPlus } from 'react-icons/fa';
import SubscriptionStatus from "../../components/SubscriptionStatus";
import RecordClasses from "../../components/RecordClasses";
import StudentProfile from "../../components/profiles/StudentProfile";
import { FaSearch } from 'react-icons/fa';

const StudentDashboard = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [profileSrc, setProfileSrc] = useState<string | null>(null);
  // const profileInputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState<string>('Andrew');
  const [username, setUsername] = useState<string>('andrew123');
  const [email, setEmail] = useState<string>('andrew@example.com');
  const [description, setDescription] = useState<string>('I am here to learn, unlearn and relearn');

  // Function to handle profile updates from StudentProfile component
  const handleProfileUpdate = (updatedProfile: { 
    name: string;
    username: string;
    email: string;
    bio: string; 
    profileImage: string | null;
  }) => {
    setName(updatedProfile.name);
    setUsername(updatedProfile.username);
    setEmail(updatedProfile.email);
    setDescription(updatedProfile.bio);
    setProfileSrc(updatedProfile.profileImage);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className={`bg-white shadow-sm sticky top-0 z-10 ${showProfile ? 'blur-sm' : ''}`}>
        <div className="max-w-7xl mx-auto px-3 sm:px-4 py-3 sm:py-4">
          {/* Logo, Search and Menu on same line */}
          <div className="flex items-center justify-between gap-2 sm:gap-3 mb-2 sm:mb-3">
            {/* Logo */}
            <div className='shrink-0'>
              <NewLogo logoWidth={40} logoHeight={40} textSize="text-[14px]" gap="gap-1.5" centered={false} />
            </div>

            {/* Search Bar */}
            <div className="flex-1 min-w-0 max-w-md">
              <div className="relative">
                <FaSearch className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={12} />
                <input
                  type="text"
                  placeholder="Search course, tutorial..."
                  className="w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-1.5 sm:py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3D08BA] text-xs sm:text-sm"
                />
              </div>
            </div>

            {/* Menu Button */}
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-lg shrink-0"
            >
              <FaBars className="text-gray-700 text-base sm:text-xl" />
            </button>
          </div>

          {/* Welcome Section */}
          <div className="flex items-center justify-between gap-2">
            {/* Profile Avatar + Info */}
            <div className="flex items-center gap-2 min-w-0 flex-1">
              <div className="relative shrink-0">
                <button
                  type="button"
                  aria-label="View profile"
                  title="Click to view profile"
                  onClick={() => setShowProfile(true)}
                  className="
                    group
                    relative
                    w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14
                    rounded-full
                    border-2 sm:border-3 md:border-4 border-[#F68C29]
                    overflow-hidden
                    bg-white
                    flex items-center justify-center
                    focus:outline-none
                    focus:ring-2 focus:ring-[#3D08BA]
                    transition
                    cursor-pointer
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
        {/* Plus Button to Open Profile */}
                      <button 
                        onClick={() => setShowProfile(true)}
                        className="relative p-1 sm:p-1.5 md:p-2 hover:bg-gray-100 rounded-full transition-colors"
                        aria-label="Open profile"
                      >
                        <FaPlus className="text-[#3D08BA] text-sm sm:text-base md:text-lg lg:text-xl" />
                      </button>
                  {/* Hover Overlay */}
                  <div className="
                    absolute inset-0
                    bg-black/40
                    hidden sm:flex items-center justify-center
                    text-white text-[8px] sm:text-[9px] md:text-[10px] font-medium
                    opacity-0 group-hover:opacity-100
                    transition-opacity
                    px-0.5
                  ">
                    View Profile
                  </div>
                </button>
              </div>

              {/* Welcome + Name */}
              <div className="min-w-0 flex-1">
                <h2 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-gray-800 truncate leading-tight">
                  Welcome, {name}
                </h2>

                {/* Description - Read Only */}
                <p className="text-[10px] sm:text-xs md:text-sm text-gray-600 truncate leading-tight mt-0.5">
                  {description}
                </p>
              </div>
            </div>

            {/* Plus Button and Notification Bell */}
            <div className="flex items-center gap-0.5 sm:gap-1 shrink-0">
              {/* Notification Bell */}
              <button className="relative p-1 sm:p-1.5 md:p-2 hover:bg-gray-100 rounded-full">
                <FaBell className="text-[#3D08BA] text-base sm:text-lg md:text-xl lg:text-2xl" />
                <span className="absolute top-0 right-0 sm:top-0.5 sm:right-0.5 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full"></span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={`max-w-7xl mx-auto px-3 sm:px-4 py-3 sm:py-4 ${showProfile ? 'blur-sm' : ''}`}>
        {/* Earnings Overview Card */}
        <div className='bg-linear-to-r from-[#3D08BA] to-[#5010E0] rounded-xl sm:rounded-2xl p-4 sm:p-5 text-white mb-4 sm:mb-6'>
          <div className='flex items-center justify-between mb-3 sm:mb-4'>
            <h3 className='text-sm sm:text-base md:text-lg font-semibold'>Earnings Overview</h3>
            <span className='text-xs sm:text-sm font-medium'>30%</span>
          </div>
          <div className='relative h-2 sm:h-3 bg-white/20 rounded-full overflow-hidden mb-4 sm:mb-5'>
            <div className='absolute inset-y-0 left-0 w-[30%] bg-linear-to-r from-[#F68C29] to-[#FF9F4D] rounded-full'></div>
          </div>
          
          {/* Subscription Status */}
          <SubscriptionStatus isActive={true} showBoth={true} />
        </div>

        {/* Quick Access Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6">
          {/* My Subjects */}
          <button className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center gap-2 sm:gap-3">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-linear-to-br from-blue-500 to-blue-700 rounded-xl sm:rounded-2xl flex items-center justify-center">
              <FaBook className="text-white text-lg sm:text-xl md:text-2xl" />
            </div>
            <span className="text-[10px] sm:text-xs md:text-sm font-semibold text-gray-800 text-center leading-tight">My Subjects</span>
          </button>

          {/* Assignments */}
          <button className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center gap-2 sm:gap-3">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-linear-to-br from-green-500 to-green-700 rounded-xl sm:rounded-2xl flex items-center justify-center">
              <FaTasks className="text-white text-lg sm:text-xl md:text-2xl" />
            </div>
            <span className="text-[10px] sm:text-xs md:text-sm font-semibold text-gray-800 text-center leading-tight">Assignments</span>
          </button>

          {/* Join Class */}
          <button className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center gap-2 sm:gap-3">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-linear-to-br from-red-500 to-red-700 rounded-xl sm:rounded-2xl flex items-center justify-center relative">
              <FaVideo className="text-white text-lg sm:text-xl md:text-2xl" />
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[8px] sm:text-xs px-1 sm:px-2 py-0.5 rounded-full font-bold">LIVE</span>
            </div>
            <span className="text-[10px] sm:text-xs md:text-sm font-semibold text-gray-800 text-center leading-tight">Join Class</span>
          </button>

          {/* Performance Report */}
          <button className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center gap-2 sm:gap-3">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-linear-to-br from-purple-500 to-purple-700 rounded-xl sm:rounded-2xl flex items-center justify-center">
              <FaChartLine className="text-white text-lg sm:text-xl md:text-2xl" />
            </div>
            <span className="text-[10px] sm:text-xs md:text-sm font-semibold text-gray-800 text-center leading-tight">Performance Report</span>
          </button>

          {/* Resource Library */}
          <button className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center gap-2 sm:gap-3">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-linear-to-br from-orange-500 to-orange-700 rounded-xl sm:rounded-2xl flex items-center justify-center">
              <FaFileAlt className="text-white text-lg sm:text-xl md:text-2xl" />
            </div>
            <span className="text-[10px] sm:text-xs md:text-sm font-semibold text-gray-800 text-center leading-tight">Resource Library</span>
          </button>

          {/* Payment & Subscriptions */}
          <button className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center gap-2 sm:gap-3">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-linear-to-br from-yellow-500 to-yellow-700 rounded-xl sm:rounded-2xl flex items-center justify-center">
              <FaDollarSign className="text-white text-lg sm:text-xl md:text-2xl" />
            </div>
            <span className="text-[10px] sm:text-xs md:text-sm font-semibold text-gray-800 text-center leading-tight">Payment & Subscriptions</span>
          </button>
        </div>

        {/* Recorded Class Section - Now using RecordClasses Component */}
        <RecordClasses />
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div 
          className={`fixed inset-0 bg-black bg-opacity-50 z-20 ${showProfile ? 'blur-sm' : ''}`}
          onClick={() => setMenuOpen(false)}
        >
          <div 
            className="absolute right-0 top-0 h-full w-56 sm:w-64 bg-white shadow-lg p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">Menu</h3>
            <nav className="space-y-3 sm:space-y-4">
              <a href="#" className="block text-sm sm:text-base text-gray-700 hover:text-[#3D08BA]">Profile</a>
              <a href="#" className="block text-sm sm:text-base text-gray-700 hover:text-[#3D08BA]">Settings</a>
              <a href="#" className="block text-sm sm:text-base text-gray-700 hover:text-[#3D08BA]">Help & Support</a>
              <a href="#" className="block text-sm sm:text-base text-gray-700 hover:text-[#3D08BA]">Logout</a>
            </nav>
          </div>
        </div>
      )}

      {/* Student Profile Modal */}
      {showProfile && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
          <div 
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setShowProfile(false)}
          ></div>
          <div className="relative z-10 w-full max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
            <StudentProfile 
              onClose={() => setShowProfile(false)}
              onSave={handleProfileUpdate}
              initialName={name}
              initialUsername={username}
              initialEmail={email}
              initialBio={description}
              initialProfileImage={profileSrc}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentDashboard;
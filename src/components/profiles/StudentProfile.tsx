import React, { useState } from 'react';
import { IoMdCamera } from 'react-icons/io';
import { MdEdit, MdClose } from 'react-icons/md';

interface StudentProfileProps {
  onClose?: () => void;
}

const StudentProfile: React.FC<StudentProfileProps> = ({ onClose }) => {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    username: 'johndoe',
    email: 'john.doe@example.com',
    bio: 'Computer Science student passionate about learning',
    profileImage: null as string | null
  });

  const [isEditing, setIsEditing] = useState({
    name: false,
    username: false,
    email: false,
    bio: false
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile({ ...profile, profileImage: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setProfile({ ...profile, [field]: value });
  };

  const toggleEdit = (field: keyof typeof isEditing) => {
    setIsEditing({ ...isEditing, [field]: !isEditing[field] });
  };

  const removeProfileImage = () => {
    setProfile({ ...profile, profileImage: null });
  };

  return (
    <div className='min-h-screen w-full bg-linear-to-br from-purple-50 to-white relative'>
      {/* Close Button - Top Right */}
      {onClose && (
        <button
          onClick={onClose}
          className='absolute top-4 right-4 sm:top-6 sm:right-6 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-all hover:scale-110'
          aria-label="Close profile"
        >
          <MdClose size={24} className='text-gray-700' />
        </button>
      )}

      <div className='max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10'>
        {/* Header */}
        <div className='mb-8 sm:mb-12'>
          <h1 className='text-3xl sm:text-4xl font-bold text-center mb-2' style={{ color: '#3D08BA' }}>
            Edit Profile
          </h1>
          <p className='text-center text-gray-600 text-sm sm:text-base'>
            Update your personal information
          </p>
        </div>

        {/* Profile Card */}
        <div className='bg-white rounded-3xl shadow-xl p-6 sm:p-8 md:p-10'>
          {/* Profile Photo Section */}
          <div className='flex flex-col items-center mb-8 sm:mb-10'>
            <div className='relative mb-4'>
              <div className='w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full overflow-hidden shadow-lg' style={{ border: '4px solid #3D08BA' }}>
                {profile.profileImage ? (
                  <img 
                    src={profile.profileImage} 
                    alt="Profile" 
                    className='w-full h-full object-cover'
                  />
                ) : (
                  <div className='w-full h-full flex items-center justify-center bg-linear-to-br from-purple-100 to-purple-50'>
                    <svg className='w-16 h-16 sm:w-20 sm:h-20' style={{ color: '#3D08BA' }} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                )}
              </div>
              
              {/* Camera Button */}
              <label className='absolute bottom-0 right-0 w-11 h-11 sm:w-12 sm:h-12 rounded-full shadow-lg flex items-center justify-center cursor-pointer transition-transform hover:scale-110' style={{ backgroundColor: '#3D08BA' }}>
                <IoMdCamera size={22} className='text-white' />
                <input 
                  type="file" 
                  accept="image/*" 
                  className='hidden'
                  onChange={handleImageChange}
                />
              </label>

              {/* Remove Button */}
              {profile.profileImage && (
                <button 
                  onClick={removeProfileImage}
                  className='absolute top-0 right-0 w-9 h-9 bg-red-500 rounded-full shadow-lg flex items-center justify-center hover:bg-red-600 transition-all hover:scale-110'
                >
                  <MdClose size={20} className='text-white' />
                </button>
              )}
            </div>
            <p className='text-xs sm:text-sm text-gray-500 text-center mt-2'>
              Click the camera icon to upload a photo
            </p>
          </div>

          {/* Profile Form */}
          <div className='space-y-6 sm:space-y-8'>
            {/* Name Field */}
            <div>
              <div className='flex items-center justify-between mb-2'>
                <label className='text-sm font-semibold text-gray-700'>
                  Name
                </label>
                <button
                  onClick={() => toggleEdit('name')}
                  className='p-2 rounded-full hover:bg-purple-50 transition-colors'
                  style={{ color: '#3D08BA' }}
                >
                  <MdEdit size={20} />
                </button>
              </div>
              <input
                type='text'
                value={profile.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                disabled={!isEditing.name}
                className='w-full px-2 py-2 bg-transparent text-gray-900 font-medium text-base sm:text-lg focus:outline-none disabled:text-gray-600 transition-colors'
                style={{ 
                  borderBottom: isEditing.name ? '2px solid #3D08BA' : '2px solid #e5e7eb'
                }}
              />
            </div>

            {/* Username Field */}
            <div>
              <div className='flex items-center justify-between mb-2'>
                <label className='text-sm font-semibold text-gray-700'>
                  Username
                </label>
                <button
                  onClick={() => toggleEdit('username')}
                  className='p-2 rounded-full hover:bg-purple-50 transition-colors'
                  style={{ color: '#3D08BA' }}
                >
                  <MdEdit size={20} />
                </button>
              </div>
              <input
                type='text'
                value={profile.username}
                onChange={(e) => handleInputChange('username', e.target.value)}
                disabled={!isEditing.username}
                className='w-full px-2 py-2 bg-transparent text-gray-900 font-medium text-base sm:text-lg focus:outline-none disabled:text-gray-600 transition-colors'
                style={{ 
                  borderBottom: isEditing.username ? '2px solid #3D08BA' : '2px solid #e5e7eb'
                }}
              />
            </div>

            {/* Email Field */}
            <div>
              <div className='flex items-center justify-between mb-2'>
                <label className='text-sm font-semibold text-gray-700'>
                  Email Address
                </label>
                <button
                  onClick={() => toggleEdit('email')}
                  className='p-2 rounded-full hover:bg-purple-50 transition-colors'
                  style={{ color: '#3D08BA' }}
                >
                  <MdEdit size={20} />
                </button>
              </div>
              <input
                type='email'
                value={profile.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                disabled={!isEditing.email}
                className='w-full px-2 py-2 bg-transparent text-gray-900 font-medium text-base sm:text-lg focus:outline-none disabled:text-gray-600 transition-colors'
                style={{ 
                  borderBottom: isEditing.email ? '2px solid #3D08BA' : '2px solid #e5e7eb'
                }}
              />
            </div>

            {/* Bio Field */}
            <div>
              <div className='flex items-center justify-between mb-2'>
                <label className='text-sm font-semibold text-gray-700'>
                  Bio
                </label>
                <button
                  onClick={() => toggleEdit('bio')}
                  className='p-2 rounded-full hover:bg-purple-50 transition-colors'
                  style={{ color: '#3D08BA' }}
                >
                  <MdEdit size={20} />
                </button>
              </div>
              <textarea
                value={profile.bio}
                onChange={(e) => handleInputChange('bio', e.target.value)}
                disabled={!isEditing.bio}
                rows={3}
                maxLength={150}
                className='w-full px-2 py-2 bg-transparent text-gray-900 font-medium text-base sm:text-lg focus:outline-none disabled:text-gray-600 resize-none transition-colors'
                style={{ 
                  borderBottom: isEditing.bio ? '2px solid #3D08BA' : '2px solid #e5e7eb'
                }}
              />
              <p className='mt-1 text-xs text-gray-500 text-right'>
                {profile.bio.length}/150 characters
              </p>
            </div>

            {/* Save Button */}
            <button 
              className='w-full py-3 sm:py-4 text-white font-semibold text-base sm:text-lg rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] mt-6 sm:mt-8'
              style={{ backgroundColor: '#3D08BA' }}
              onClick={() => {
                // Save logic here
                if (onClose) {
                  onClose();
                }
              }}
            >
              Save Changes
            </button>
          </div>
        </div>

        {/* Footer Space */}
        <div className='h-8'></div>
      </div>
    </div>
  );
};

export default StudentProfile;
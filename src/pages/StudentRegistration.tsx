import React, { type FormEvent, useState } from 'react';
import { IoMdCamera } from "react-icons/io";

// Mock imports - replace with your actual paths
const Logo = () => <div className="font-bold text-2xl text-[#3D08BA]">LOGO</div>;

// Import the languages data
import { languages } from '../components/languages/Language';

const StudentRegistration: React.FC = () => {
  const [dateLabel, setDateLabel] = useState('Date of Birth');

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    
    const formData = new FormData(event.currentTarget);
    
    const agreedToTerms = formData.get('agreedToTerms');
    if (!agreedToTerms) {
      alert('Please agree to the terms and conditions');
      return;
    }
    
    console.log('Student registration form submitted');
    
    // Navigate to Student Dashboard - Uncomment this line when you have react-router-dom
    // window.location.href = '/student-dashboard';
    alert('Registration successful! Redirecting to dashboard...');
  }

  return (
    <div className='fixed inset-0 w-full h-full overflow-y-auto bg-white'>
      <div className='min-h-full flex flex-col'>
        {/* Main Content */}
        <div className='flex-1 flex flex-col items-center px-4 sm:px-6 py-4 pb-8'>
          {/* Logo Section */}
          <div className='mb-4'>
            <Logo />
          </div>

          {/* Title */}
          <h1 className='text-[20px] sm:text-[24px] font-bold text-[#3D08BA] mb-6'>Student Registration</h1>

          {/* Profile Photo Upload */}
          <div className='relative mb-8'>
            <div className='w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-gray-200 overflow-hidden'>
              <div className='w-full h-full flex items-center justify-center'>
                <svg className='w-20 h-20 text-gray-400' fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
            </div>
            <label className='absolute bottom-0 right-0 w-10 h-10 bg-white rounded-full border-2 border-gray-300 flex items-center justify-center cursor-pointer hover:bg-gray-50'>
              <IoMdCamera size={20} className='text-gray-600' />
              <input 
                type="file" 
                accept="image/*" 
                className='hidden'
              />
            </label>
          </div>

          {/* Registration Form */}
          <form onSubmit={handleSubmit} className='w-full max-w-md space-y-4'>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3D08BA] transition-colors'
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3D08BA] transition-colors'
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number(Optional)"
              className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3D08BA] transition-colors'
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3D08BA] transition-colors'
            />

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3D08BA] transition-colors'
            />

            {/* Fixed Date Field with Label */}
            <div className='relative'>
              <input
                type="date"
                name="dateOfBirth"
                onFocus={() => setDateLabel('')}
                onBlur={(e) => {
                  if (!e.target.value) {
                    setDateLabel('Date of Birth');
                  }
                }}
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3D08BA] transition-colors'
              />
              {dateLabel && (
                <span className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none'>
                  {dateLabel}
                </span>
              )}
            </div>

            {/* Language Select - Using imported languages data */}
            <select
              name="language"
              className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3D08BA] transition-colors text-gray-500'
            >
              <option value="">Select Language</option>
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name} ({lang.nativeName})
                </option>
              ))}
            </select>

            <select
              name="gender"
              className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3D08BA] transition-colors text-gray-500'
            >
              <option value="">Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>

            <input
              type="text"
              name="address"
              placeholder="Address"
              className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3D08BA] transition-colors'
            />

            <select
              name="country"
              className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3D08BA] transition-colors text-gray-500'
            >
              <option value="">Country</option>
              <option value="nigeria">Nigeria</option>
              <option value="usa">United States</option>
              <option value="uk">United Kingdom</option>
              <option value="canada">Canada</option>
            </select>

            <select
              name="department"
              className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3D08BA] transition-colors text-gray-500'
            >
              <option value="">Department (Optional)</option>
              <option value="science">Science</option>
              <option value="arts">Arts</option>
              <option value="commerce">Commerce</option>
            </select>

            <select
              name="currentClass"
              className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3D08BA] transition-colors text-gray-500'
            >
              <option value="">Current Class</option>
              <option value="jss1">JSS 1</option>
              <option value="jss2">JSS 2</option>
              <option value="jss3">JSS 3</option>
              <option value="ss1">SS 1</option>
              <option value="ss2">SS 2</option>
              <option value="ss3">SS 3</option>
            </select>

            <div className='flex items-center gap-2 py-2'>
              <input
                type="checkbox"
                name="agreedToTerms"
                id="terms"
                className='w-5 h-5 border-2 border-gray-300 rounded cursor-pointer'
              />
              <label htmlFor="terms" className='text-sm text-[#3D08BA] cursor-pointer'>
                I agree to the terms and conditions
              </label>
            </div>

            <button type="submit" className='w-full bg-[#3D08BA] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity mt-6'>
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentRegistration;
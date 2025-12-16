import React, { type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoMdCamera } from "react-icons/io";
import Logo from "../components/Logo"

const StudentRegistration: React.FC = () => {
  const navigate = useNavigate();

  // To work on this later
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
  event.preventDefault();
  
  // Add your form validation logic here
  const formData = new FormData(event.currentTarget);
  
  // Example validation - check if terms are agreed
  const agreedToTerms = formData.get('agreedToTerms');
  if (!agreedToTerms) {
    alert('Please agree to the terms and conditions');
    return;
  }
  
  // Add your form submission logic here (API call, etc.)
  console.log('Student registration form submitted');
  
  // Navigate to School Dashboard
  navigate('/student-dashboard');
}


  return (
    <div className='fixed inset-0 w-full h-full overflow-y-auto bg-white'>
      <div className='min-h-full flex flex-col'>
        {/* Header with Navigation Arrows */}
        

        {/* Main Content */}
        <div className='flex-1 flex flex-col items-center px-4 sm:px-6 py-4 pb-8'>
          {/* Logo Section */}
          <div className='mb-4'>
            <Logo logoWidth={50} logoHeight={50} textSize="text-lg sm:text-xl" gap="gap-2" centered={false} />
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

            <input
              type="date"
              name="dateOfBirth"
              placeholder="Date of birth"
              className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3D08BA] transition-colors text-gray-500'
            />

            <input
              type="text"
              name="language"
              placeholder="Language"
              className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3D08BA] transition-colors'
            />

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
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBookOpen, FaUsers, FaGraduationCap, FaLaptop } from "react-icons/fa6";

const OpenScreen: React.FC = () => {
  const navigate = useNavigate();

  const handleNext = (): void => {
    navigate('/signup');
  };

  return (
    <div className='fixed inset-0 w-full h-full overflow-y-auto'>
      <div className='min-h-full flex flex-col justify-center items-center px-4 py-8'>
        
        {/* Main Content Container */}
        <div className='flex flex-col justify-center items-center gap-4 sm:gap-6 max-w-2xl w-full'>
          
          {/* Hero Section */}
          <div className='flex flex-col items-center gap-3 text-center'>
            <h1 className='text-[#3D08BA] text-2xl sm:text-3xl md:text-4xl font-bold leading-tight'>
              Transform Your Learning Journey
            </h1>
            <div className='flex flex-col items-center gap-2'>
              <p className='text-[#3D08BA] text-[12px] font-medium leading-relaxed opacity-80 max-w-sm'>
                An immersive learning experience that fosters active participation, peer interaction and effective learning transfer
              </p>
              <div className='h-1 w-20 bg-[#F68C29] rounded-full' />
            </div>
          </div>

          {/* Feature Cards */}
          <div className='grid grid-cols-2 gap-4 sm:gap-6 w-full'>
            <div className='bg-white border-2 border-[#3D08BA]/20 rounded-xl p-6 sm:p-8 flex flex-col items-center gap-3 shadow-sm hover:shadow-md transition-shadow'>
              <div className='w-16 h-16 sm:w-20 sm:h-20 bg-[#3D08BA] rounded-full flex items-center justify-center'>
                <FaBookOpen className='text-white' size={28} />
              </div>
              <p className='text-[#3D08BA] text-[12px] font-semibold text-center'>Study Resources</p>
            </div>

            <div className='bg-white border-2 border-[#3D08BA]/20 rounded-xl p-6 sm:p-8 flex flex-col items-center gap-3 shadow-sm hover:shadow-md transition-shadow'>
              <div className='w-16 h-16 sm:w-20 sm:h-20 bg-[#F68C29] rounded-full flex items-center justify-center'>
                <FaUsers className='text-white' size={28} />
              </div>
              <p className='text-[#3D08BA] text-[12px] font-semibold text-center'>Peer Learning</p>
            </div>

            <div className='bg-white border-2 border-[#3D08BA]/20 rounded-xl p-6 sm:p-8 flex flex-col items-center gap-3 shadow-sm hover:shadow-md transition-shadow'>
              <div className='w-16 h-16 sm:w-20 sm:h-20 bg-[#3D08BA] rounded-full flex items-center justify-center'>
                <FaLaptop className='text-white' size={28} />
              </div>
              <p className='text-[#3D08BA] text-[12px] font-semibold text-center'>Virtual Classes</p>
            </div>

            <div className='bg-white border-2 border-[#3D08BA]/20 rounded-xl p-6 sm:p-8 flex flex-col items-center gap-3 shadow-sm hover:shadow-md transition-shadow'>
              <div className='w-16 h-16 sm:w-20 sm:h-20 bg-[#F68C29] rounded-full flex items-center justify-center'>
                <FaGraduationCap className='text-white' size={28} />
              </div>
              <p className='text-[#3D08BA] text-[12px] font-semibold text-center'>Expert Teachers</p>
            </div>
          </div>

          {/* CTA Text */}
          <p className='text-[#3D08BA] text-xs sm:text-sm font-medium opacity-70'>
            Join thousands of students learning better
          </p>

          {/* Next Button */}
          <button onClick={handleNext} className='bg-[#3D08BA] hover:bg-[#F68C29] flex items-center justify-center transition-colors rounded-lg px-8 py-3 text-white text-[12px] font-semibold shadow-lg w-full sm:w-auto'>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default OpenScreen;
import { useState } from 'react';

interface ClassItem {
  id: number;
  title: string;
  instructor: string;
  duration: string;
  date: string;
  thumbnail: string;
}

interface RecordClassesProps {
  onClassClick?: (classItem: ClassItem) => void;
}

const RecordClasses = ({ onClassClick }: RecordClassesProps) => {
  const [showAll, setShowAll] = useState(false);

  const recordedClasses: ClassItem[] = [
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
    },
    {
      id: 4,
      title: 'Business Management Fundamentals',
      instructor: 'Prof Chinwe Okafor',
      duration: '2h 00m',
      date: 'May 17, 2024',
      thumbnail: 'https://api.dicebear.com/7.x/shapes/svg?seed=class4&backgroundColor=16A34A'
    },
    {
      id: 5,
      title: 'Introduction to Computer Science',
      instructor: 'Prof Tunde Adeyemi',
      duration: '1h 55m',
      date: 'May 16, 2024',
      thumbnail: 'https://api.dicebear.com/7.x/shapes/svg?seed=class5&backgroundColor=DC2626'
    },
    {
      id: 6,
      title: 'English Literature - Shakespeare',
      instructor: 'Prof Amaka Nwosu',
      duration: '1h 40m',
      date: 'May 14, 2024',
      thumbnail: 'https://api.dicebear.com/7.x/shapes/svg?seed=class6&backgroundColor=7C3AED'
    },
    {
      id: 7,
      title: 'Chemistry - Organic Compounds',
      instructor: 'Prof Ibrahim Yusuf',
      duration: '2h 10m',
      date: 'May 13, 2024',
      thumbnail: 'https://api.dicebear.com/7.x/shapes/svg?seed=class7&backgroundColor=EA580C'
    },
    {
      id: 8,
      title: 'Economics - Macro & Microeconomics',
      instructor: 'Prof Ngozi Eze',
      duration: '1h 50m',
      date: 'May 12, 2024',
      thumbnail: 'https://api.dicebear.com/7.x/shapes/svg?seed=class8&backgroundColor=0891B2'
    }
  ];

  // Show only first 3 classes unless "See more" is clicked
  const displayedClasses = showAll ? recordedClasses : recordedClasses.slice(0, 3);

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-gray-800">Recorded Class</h3>
        <button 
          onClick={() => setShowAll(!showAll)}
          className="text-[#3D08BA] font-medium text-sm hover:underline"
        >
          {showAll ? 'Show less' : 'See more........'}
        </button>
      </div>

      {/* Recorded Classes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayedClasses.map((classItem) => (
          <div
            key={classItem.id}
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => onClassClick?.(classItem)}
          >
            {/* Thumbnail */}
            <div className="relative h-40 bg-gradient-to-br from-[#3D08BA] to-[#5a2dd4] overflow-hidden">
              <img 
                src={classItem.thumbnail}
                alt={classItem.title}
                className="w-full h-full object-cover opacity-20"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-all">
                  {/* Play button triangle */}
                  <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[18px] border-l-[#3D08BA] border-b-[12px] border-b-transparent ml-1"></div>
                </div>
              </div>
              <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                {classItem.duration}
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <h4 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                {classItem.title}
              </h4>
              <div className="flex items-center justify-between text-xs text-gray-600">
                <span className="truncate mr-2">{classItem.instructor}</span>
                <span className="whitespace-nowrap">{classItem.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecordClasses;
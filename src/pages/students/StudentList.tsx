import { students } from './students'
const StudentList = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-[20px] font-bold text-[#3d08ba] mb-2">Student Directory</h1>
          <p className="text-gray-600">Total Students: {students.length}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {students.map((student, index) => (
            <div 
              key={student.id}
              className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-3 border border-gray-100 hover:border-indigo-300 hover:-translate-y-1"
              style={{
                animationDelay: `${index * 50}ms`
              }}
            >
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full bg-[#3d08ba] flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-110 transition-transform">
                  {student.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors">
                    {student.name}
                  </h3>
                </div>
              </div>
              
              <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-green-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentList;
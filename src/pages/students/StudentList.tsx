import { students } from './students'
const StudentList = () => {
  return (
    <div>
        {students.map((student)=>(
            <div>
                <h2>{student.name}</h2>
            </div>
        ))}
    </div>
  )
}

export default StudentList
import { Link } from 'react-router-dom';
import './styles.css';

const CourseCard = ({ course }) => {
  return (
    <div className="course-card">
      <div className="course-type">{course.type} Course</div>
      <h3 className="course-title">{course.title}</h3>
      <p className="course-description">{course.description}</p>
      
      <div className="course-details">
        <div className="detail-item">
          <span className="label">Instructor:</span>
          <span className="value">{course.instructor}</span>
        </div>
        <div className="detail-item">
          <span className="label">Duration:</span>
          <span className="value">{course.duration}</span>
        </div>
        <div className="detail-item">
          <span className="label">Level:</span>
          <span className="value">{course.level}</span>
        </div>
      </div>

      <Link to={`/course/${course.id}`} className="start-learning-btn">
        START LEARNING
      </Link>
    </div>
  );
};

export default CourseCard; 
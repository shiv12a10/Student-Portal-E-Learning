import { Link } from 'react-router-dom';
import './CourseCard.css';

const CourseCard = ({ course }) => {
  return (
    <div className="course-card-container">
      <div className="course-image-container">
        <img
          src={course.thumbnail || 'https://via.placeholder.com/300x200/1a1a1a/00ff00?text=Course+Image'}
          alt={course.title}
          className="course-image"
        />
      </div>
      <div className="course-content">
        <h3 className="course-title">{course.title}</h3>
        <p className="course-description">{course.description}</p>
        <div className="course-info">
          <div className="info-item">
            <span className="info-label">Instructor:</span>
            <span className="info-value">{course.instructor}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Duration:</span>
            <span className="info-value">{course.duration}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Level:</span>
            <span className="info-value">{course.level}</span>
          </div>
        </div>
        <Link
          to={`/course/${course.id}`}
          className="start-learning-btn"
        >
          Start Learning
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;

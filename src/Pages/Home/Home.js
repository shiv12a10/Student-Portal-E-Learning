import CourseCard from '../../Components/CourseCard/CourseCard';  
import { featuredCourses } from '../../data/courses'; 
import './Home.css';  

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">
          Welcome to EduLearn
        </h1>
        <div className="featured-courses">
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

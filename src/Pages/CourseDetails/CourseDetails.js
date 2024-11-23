import { useState } from 'react';
import { useParams } from 'react-router-dom';
import VideoPlayer from '../../Components/VideoPlayer/VideoPlayer';
import { allCourses } from '../../data/courses';
import './CourseDetails.css';

const CourseDetails = () => {
  const { courseId } = useParams();
  const [selectedModule, setSelectedModule] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState(0);

  const course = allCourses.find((c) => c.id === parseInt(courseId));

  if (!course) {
    return <div>Course not found</div>;
  }

  const currentModule = course.modules[selectedModule];
  const currentVideo = currentModule.videos[selectedVideo];

  return (
    <div className="course-details-container">
      <div className="course-details-content">
        <div className="video-section">
          <div className="video-container">
            <VideoPlayer
              videoUrl={currentVideo.videoUrl}
              title={currentVideo.title}
            />
          </div>
          <div className="video-info">
            <h1 className="video-title">{currentVideo.title}</h1>
            <div className="video-meta">
              <span className="video-duration">{currentVideo.duration}</span>
              <span className="video-views">1.2K views</span>
            </div>
            <div className="instructor-info">
              <img 
                src="https://via.placeholder.com/40" 
                alt="instructor" 
                className="instructor-avatar"
              />
              <div className="instructor-details">
                <span className="instructor-name">{course.instructor}</span>
                <span className="subscriber-count">10K subscribers</span>
              </div>
            </div>
            <div className="video-description">
              <h3>Description</h3>
              <p>{currentVideo.description || "No description available."}</p>
            </div>
          </div>
        </div>
        
        <div className="playlist-section">
          <h2 className="playlist-title">Course Content</h2>
          <div className="playlist-modules">
            {course.modules.map((module, moduleIndex) => (
              <div key={module.id} className="module-container">
                <h3 
                  className="module-title"
                  onClick={() => setSelectedModule(moduleIndex)}
                >
                  {module.title}
                </h3>
                <div className="module-videos">
                  {module.videos.map((video, videoIndex) => (
                    <div
                      key={video.id}
                      className={`video-item ${
                        selectedModule === moduleIndex &&
                        selectedVideo === videoIndex
                          ? 'active'
                          : ''
                      }`}
                      onClick={() => {
                        setSelectedModule(moduleIndex);
                        setSelectedVideo(videoIndex);
                      }}
                    >
                      <div className="video-thumbnail">
                        <img 
                          src={video.thumbnail || "https://via.placeholder.com/120x68"} 
                          alt={video.title}
                        />
                        <span className="video-duration-badge">{video.duration}</span>
                      </div>
                      <div className="video-details">
                        <h4 className="video-item-title">{video.title}</h4>
                        <p className="video-item-description">
                          {video.description?.substring(0, 80) + "..." || "No description"}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;

const VideoPlayer = ({ videoUrl, title }) => {
  return (
    <div className="video-player">
      <iframe
        src={videoUrl || "https://www.youtube.com/embed/mJKShU1a7L8"}
        title={title}
        className="video-frame"
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
};

export default VideoPlayer;

import React from 'react';

interface VideoEmbedProps {
  src: string;
  title: string;
}

const VideoEmbed: React.FC<VideoEmbedProps> = ({ src, title }) => {
  return (
    <div style={{ width: '100%', aspectRatio: '16 / 9', margin: '0 auto' }}>
      <iframe
        src={src}
        title={title}
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        style={{ width: '100%', height: '100%', border: 0 }}
      />
    </div>
  );
};

export default VideoEmbed;
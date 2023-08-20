import React from 'react';

interface PostProps {
  title: string;
  body: string;
}

const Post: React.FC<PostProps> = ({ title, body }) => {
  return (
    <div className='post'>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
};

export default Post;

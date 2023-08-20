import React, { useState } from 'react';

interface PostFormProps {
  onSubmit: (title: string, body: string) => void;
}

const PostForm: React.FC<PostFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(title, body);
    setTitle('');
    setBody('');
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <input
        name='title'
        type='text'
        placeholder='Title here'
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        name='body'
        placeholder='Write your post here'
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button type='submit' className='btn'>
        Post
      </button>
    </form>
  );
};

export default PostForm;

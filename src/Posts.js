import React, { useEffect, useState } from 'react';
import client from './sanityClient';

// Simple component that fetches and displays posts from Sanity.
export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client
      .fetch('*[_type == "post"]{_id, title}')
      .then(setPosts)
      .catch((err) => console.error('Sanity fetch error:', err));
  }, []);

  return (
    <div>
      <h2>Posts from Sanity</h2>
      <ul>
        {posts.map((post) => (
          <li key={post._id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

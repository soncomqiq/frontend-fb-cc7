import React from 'react';
import Post from '../Post/Post';

function PostList({ postList }) {
  return (
    <div>
      {postList.map(post => <Post post={post} />)}
    </div>
  );
}

export default PostList;

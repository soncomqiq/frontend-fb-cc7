import React from 'react';
import PostList from '../../../components/PostList/PostList';

const mockPostList = [
  {
    "id": 1,
    "caption": "Google",
    "picture_url": "https://i.pinimg.com/originals/b1/94/0e/b1940eb27d12eadbcdaa86dca0f1037d.jpg",
    "createdAt": "2020-11-04T04:54:05.000Z",
    "updatedAt": "2020-11-04T04:54:05.000Z",
    "Comments": [
      {
        "id": 1,
        "comment": "Hello",
        "User": {
          "id": 1,
          "name": "Sonter InwZa",
          "profile_url": "https://vignette.wikia.nocookie.net/kzorori/images/c/c2/Prologuebkg.png/revision/latest?cb=20110325181412"
        }
      }
    ],
    "User": {
      "id": 1,
      "name": "Sonter InwZa",
      "profile_url": "https://vignette.wikia.nocookie.net/kzorori/images/c/c2/Prologuebkg.png/revision/latest?cb=20110325181412"
    }
  },
  {
    "id": 2,
    "caption": "Hooley",
    "picture_url": "",
    "createdAt": "2020-11-04T04:54:22.000Z",
    "updatedAt": "2020-11-04T04:57:34.000Z",
    "Comments": [],
    "User": {
      "id": 1,
      "name": "Sonter InwZa",
      "profile_url": "https://vignette.wikia.nocookie.net/kzorori/images/c/c2/Prologuebkg.png/revision/latest?cb=20110325181412"
    }
  },
  {
    "id": 3,
    "caption": "Yahoo",
    "picture_url": "",
    "createdAt": "2020-11-04T04:55:21.000Z",
    "updatedAt": "2020-11-04T04:55:21.000Z",
    "Comments": [
      {
        "id": 2,
        "comment": "Hello",
        "User": {
          "id": 1,
          "name": "Sonter InwZa",
          "profile_url": "https://vignette.wikia.nocookie.net/kzorori/images/c/c2/Prologuebkg.png/revision/latest?cb=20110325181412"
        }
      }
    ],
    "User": {
      "id": 2,
      "name": "Pup Potato",
      "profile_url": "https://dolamon19.files.wordpress.com/2013/01/pup-potato.jpg"
    }
  },
  {
    "id": 4,
    "caption": "Yahoo",
    "picture_url": "",
    "createdAt": "2020-11-04T04:55:23.000Z",
    "updatedAt": "2020-11-04T04:55:23.000Z",
    "Comments": [],
    "User": {
      "id": 2,
      "name": "Pup Potato",
      "profile_url": "https://dolamon19.files.wordpress.com/2013/01/pup-potato.jpg"
    }
  },
  {
    "id": 5,
    "caption": "Yahoo",
    "picture_url": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
    "createdAt": "2020-11-04T04:55:24.000Z",
    "updatedAt": "2020-11-04T04:55:24.000Z",
    "Comments": [],
    "User": {
      "id": 2,
      "name": "Pup Potato", 
      "profile_url": "https://dolamon19.files.wordpress.com/2013/01/pup-potato.jpg"
    }
  }
];

function Feed() {
  return (
    <div>
      <PostList postList={mockPostList} />
    </div>
  );
}

export default Feed;

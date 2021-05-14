import React from 'react'
import FlexDiv from './components/helpers/FlexDiv'

function App() {

  const Posts = [
    {
      id: 1,
      username: 'Tyler',
      time: '12:35am',
      post: 'I am having an issue with my PC, please help!',
      comments:[],
      status: 'pending'
    },
    {
      id: 2,
      username: 'Drew',
      time: '2:00am',
      post: 'My game is frozen!',
      comments: [
        {
          id: 1,
          comment_username: 'Admin',
          comment: 'Try restarting :)',
          upvotes: 1
        },
        {
          id: 2,
          comment_username: 'Drew',
          comment: 'That worked, thanks!',
          upvotes: 1
        }
      ],
      status: 'complete'
    }
  ]

  return (
    <div>
      <FlexDiv>
        <div>
          <h1>Dashboard</h1>
          <br />
        </div>
        <input type='text' placeholder='search...' />
        <button>Log In</button>
      </FlexDiv>
      {Posts.map(post => (
        <div key={post.id}>
          <p>{post.username}</p>
          <p>{post.time}</p>
          <p>{post.post}</p>
          {post.comments.length > 0 ? 
            <div>
              {post.comments.map(comment => (
                <div key={comment.id}>
                  <p>{comment.comment_username}</p>
                  <p>{comment.comment}</p>
                  <p>{comment.upvotes}</p>
                </div>
              ))}
            </div> :
            ''
          }
          <p>{post.status}</p>
        </div>
      ))}
    </div>
  )
}

export default App

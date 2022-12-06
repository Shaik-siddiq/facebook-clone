import React, { useEffect, useState } from 'react'
import StoryReel from './StoryReel'
import "./Feed.css"
import MessageSender from './MessageSender'
import Post from './Post'
import db from "../Firebase";
const Feed = () => {
  const [posts, setPosts] = useState([]);
  useEffect(()=>{
   const unsubscribe= db.collection("posts").orderBy('timestamp', 'desc').onSnapshot((snapshot)=>{
      setPosts(snapshot.docs.map((doc)=>({
        id:doc.id, data:doc.data()}))) })
    console.log(posts);
    posts.map((post)=>console.log(post.data.message))
    return unsubscribe
  },[])
  return (
    <div className='feed'>
      <StoryReel />
      <MessageSender />
     {/*  {Array.from(posts).map((post)=>(
        <Post 
        key={post.data.id}
        profilePic={post.data.profilePic}
        message={post.data.message}
        timestamp={post.data.timestamp}
        username={post.data.username}
        image={post.data.image}
        />
      ))} */}
      {posts.map((post)=>(
        <Post
        key={post.id}
        message={post.data.message}
        username={post.data.username}
        image={post.data.image}
        profilePic={post.data.profilePic}
        />
      ))}
    </div>
  )
}

export default Feed
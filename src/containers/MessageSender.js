import { Avatar } from '@material-ui/core'
import React, {useState} from 'react'
import "./MessageSender.css"
import {Videocam, PhotoLibrary, InsertEmoticon} from "@material-ui/icons";
import {useStateValue} from "../context/StateProvider"
import db from "../Firebase";
import firebase from 'firebase/compat/app';
const MessageSender = () => {
  const [{user}, dispatch] = useStateValue()
  const [input, setInput] = useState("");
  const [imageurl, setImageUrl] = useState("")
  const handleSubmit = e => {
    e.preventDefault();
    db.collection("posts").add({
      message:input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: imageurl
    })
    console.log(input, imageurl);
    setInput("");
    setImageUrl("");
  }
  return (
    <div className='messageSender'>
     <div className='messageSender_top'>
    <Avatar src={user.photoURL} />
    <form onSubmit={handleSubmit}>
        <input value={input} onChange={e => setInput(e.target.value)} type="text" placeholder={`what's on your mind ${user.displayName}`} />
        <input value={imageurl} onChange={e => setImageUrl(e.target.value)} type="text" placeholder='image Url (capture)' />
        <button>Hidden Submit</button>
    </form>
     </div>
     <div className='messageSender_bottom'>
        <div className="messageSender_option">
          <Videocam style={{color:"red"}} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender_option">
          <PhotoLibrary style={{color:"green"}} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender_option">
          <InsertEmoticon style={{color:"orange"}} />
          <h3>Feeling/Activity</h3>
        </div>
     </div>
    </div>
  )
}

export default MessageSender
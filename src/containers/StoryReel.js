import React from 'react'
import Story from "../components/Story"
import "./StoryReel.css"
const StoryReel = () => {
  return (
    <div className='storyReel'>
        {/* Story */}
        <Story profileSrc="https://www.w3schools.com/w3images/team2.jpg" title="Jhon sin" image="https://webtrickz.com/wp-content/uploads/2021/09/reels-instagram.jpg" />
        <Story profileSrc="https://www.w3schools.com/w3images/team1.jpg" title="Devi mi" image="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        <Story profileSrc="https://www.w3schools.com/w3images/team3.jpg" title="muku mui" image="https://images.pexels.com/photos/919278/pexels-photo-919278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        <Story profileSrc="https://peoplehopes.org/images/team/team-2.jpg" title="Japanes actor" image="https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />

    </div>
  )
}

export default StoryReel
import React from 'react'
import SidebarRow from "../components/SidebarRow"
import {LocalHospital, EmojiFlags, People, Chat, Storefront, VideoLibrary} from "@material-ui/icons";
import {useStateValue} from "../context/StateProvider"
const Sidebar = () => {
  const [{user}, dispatch] = useStateValue()
  return (
    <div className='sidebar'>
        <SidebarRow src={user.photoURL} title={user.displayName} />
        <SidebarRow Icon={LocalHospital} title="COVID-19 Information Centre" />
        <SidebarRow Icon={EmojiFlags} title="Pages" />
        <SidebarRow Icon={People} title="Friends" />
        <SidebarRow Icon={Chat} title="Messenger" />
        <SidebarRow Icon={Storefront} title="MarketPlace" />
        <SidebarRow Icon={VideoLibrary} title="Videos" />
    </div>
  )
}

export default Sidebar
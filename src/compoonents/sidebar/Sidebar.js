import React from 'react'
import './styleSidebar.css'
import SidebarElement from './sidebarElement/sideBarElement'
import Copyright from './copyright/CopyRight'
import Subscribe from './subscribe/subscribe'
export default function Sidebar() {
  const elements = [
    {name:"Home",uid:1},
    {name:"About",uid:2},
    {name:"Pages",uid:3},
    {name:'Portfolio',uid:4},
    {name:'Contact',uid:5}
  ]
  return (
    <div className='parentSideBar'>
      <div className='collapse'><button className='collapsebtn'>≡</button></div>
      <h1 className='sideHead'>Splash</h1>
      <ul>
        {elements.map(elm=>{
          return <SidebarElement key={elm.uid} name={elm.name}/>
        })}
      </ul>
      <Copyright />
      <Subscribe />
    </div>
  )
}

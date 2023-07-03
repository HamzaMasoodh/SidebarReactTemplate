import React from 'react'
import Content from '../../compoonents/content/Content'
import Sidebar from '../../compoonents/sidebar/Sidebar'
import './styleHome.css'

export default function Home() {
  return (
    <div className='parentHome'>
      
      <Sidebar />
      {/* <button type="button" id="sidebarCollapse" class="btn btn-primary">
        <i class="fa fa-bars"></i>
        <span class="sr-only">Toggle Menu</span>
      </button> */}
      <Content />
    </div>
  )
}

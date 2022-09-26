import { useState } from 'react'
import TopMenu from './components/top_menu'
import Body_1 from './components/body_1'
import './App.css'
import Body_1_alter from './components/body_1'
import Body_2 from './components/Body_2'
import Body_3 from './components/body_3'

function App() {
  return (
    <div className="font-poppins bg-main_color bg-opacity-30 ">
      <Body_1_alter />
      <Body_2 />
      <Body_3 />
    </div>
  )
}

export default App

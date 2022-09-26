import { useState } from 'react'
import TopMenu from './components/top_menu'
import Body_1 from './components/body_1'
import './App.css'
import Body_1_alter from './components/body_1'
import Body_2 from './components/Body_2'
import Body_3 from './components/body_3'
import Body_4 from './components/body_4'
import Footer from './components/footer'
import Body_5 from './components/body_5'

function App() {
  return (
    <div className="font-poppins bg-main_color bg-opacity-20 ">
      <Body_1_alter />
      <Body_2 />
      <Body_3 />
      <Body_4 />
      <Body_5 />
      <Footer />
    </div>
  )
}

export default App

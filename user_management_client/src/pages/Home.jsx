import React from 'react'
import Navbar from '../components/Navbar'
import UserProfile from '../components/UserProfile'

const Home = () => {
  return (
    <div>
       <div>
       <Navbar/>
       </div>
        <div>
        <UserProfile/>
        </div>
    </div>
  )
}

export default Home
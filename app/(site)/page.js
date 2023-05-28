import { Header, HomeSidebar } from '@components'
import React from 'react'

const Home = () => {
  return (
    <div className="flex w-full min-h-screen">
      <div className="home__preview border-x w-3/5">
        <Header title="Home" />
      </div>
      <HomeSidebar />
    </div>
  )
}

export default Home
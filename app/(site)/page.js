import { HomeSidebar } from '@components'
import React from 'react'

const Home = () => {
  return (
    <div className="flex w-full min-h-screen">
      <div className="home__preview border-r w-3/5">
        this is a div
      </div>
      <HomeSidebar />
    </div>
  )
}

export default Home
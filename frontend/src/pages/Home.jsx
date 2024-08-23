import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import Policy from '../components/Policy'
import NewsLetter from '../components/NewsLetter'

const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollection/>
      <BestSeller/>
      <Policy/>
      <NewsLetter/>
    </div>
  )
}

export default Home

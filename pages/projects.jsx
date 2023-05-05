import Hero from '@/components/Hero'
import Portfolio from '@/components/portfolio'
import React from 'react'

const projects = () => {
  return (
    <div>
      <Hero heading="My Work" message="This is some of my recent work."/>
      <Portfolio/>
    </div>
  )
}
export default projects
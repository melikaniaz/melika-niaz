import About from '@/components/About'
import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import Work from '@/components/Work'
import React from 'react'

function page() {
  return (
    <div>
      <Hero />
      <About />
      <Work />
      <Contact />
    </div>
  )
}

export default page

import React from 'react'
import Books from '../components/Books'
// import Cookies from 'universal-cookie'

const Gallery = () => {

  return (
    <div className='flex flex-col min-h-screen pt-5'>
      <div className='w-full flex flex-wrap gap-7'>
            <div className='w-64'>
              <Books />
            </div>
      </div>
    </div>
  )
}

export default Gallery

import React from 'react'

const Home = () => {
    return (
        <div className='w-full flex justify-center'>
            <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
                <a href="#">
                    <img className="rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png" alt="image description" />
                </a>
                <figcaption className="absolute px-4 text-lg text-white bottom-6">
                    <p>Do you want to get notified when a new component is added to Flowbite?</p>
                </figcaption>
            </figure>
        </div>
    )
}

export default Home

import React from 'react';
import {
    MDBCarousel,
    MDBCarouselItem,
} from 'mdb-react-ui-kit';

export default function App() {
    return (
        <MDBCarousel showControls showIndicators light fade className='flex flex-col min-h-screen'>
            <MDBCarouselItem
                className='w-100 d-block'
                itemId={1}
                src='https://images.pexels.com/photos/12064/pexels-photo-12064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt='...'
            >
                <h5>First slide label</h5>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum nobis dolores, repudiandae suscipit, quis ducimus </p>
            </MDBCarouselItem>
            <MDBCarouselItem
                className='w-100 d-block'
                itemId={2}
                src='https://images.pexels.com/photos/2908984/pexels-photo-2908984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt='...'
            >
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum nobis dolores, repudiandae suscipit, quis ducimus </p>
            </MDBCarouselItem>

            <MDBCarouselItem
                className='w-100 d-block'
                itemId={3}
                src='https://images.pexels.com/photos/877971/pexels-photo-877971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt='...'
            >
                <h5>Third slide label</h5>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum nobis dolores, repudiandae suscipit, quis ducimus </p>
            </MDBCarouselItem>
        </MDBCarousel>
    );
}
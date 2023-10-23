import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageVideoCarousel = () => {
  return (
    <Carousel showArrows={true} infiniteLoop={true} autoPlay={true}>
      {/* Image Slide */}
      <div className=''>
        <img src="https://picsum.photos/id/10/200/300" alt="Image 1" />
        <p className="legend">CONCERTS</p>
      </div>
            {/* Image Slide */}
            <div>
        <img src="https://picsum.photos/id/20/200/300" alt="Image 1" />
        <p className="legend">PERFORMANCES</p>
      </div>
            {/* Image Slide */}
            <div>
        <img src="https://picsum.photos/id/30/200/300" alt="Image 1" />
        <p className="legend">SPORTS</p>
      </div>
                  {/* Image Slide */}
                  <div>
        <img src="https://picsum.photos/id/40/200/300" alt="Image 1" />
        <p className="legend">OUTDOOR</p>
      </div>

      {/* Video Slide */}
      <div>
        <video controls width="100%">
          <source src="https://youtu.be/Ojw5OHHCk2I" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p className="legend">Video 1</p>
      </div>

      {/* Add more slides as needed */}
    </Carousel>
  );
};

export default ImageVideoCarousel;

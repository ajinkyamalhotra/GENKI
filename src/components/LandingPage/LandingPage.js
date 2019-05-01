import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import "../../../node_modules/react-image-gallery/styles/css/image-gallery.css";
import '../../styles/LandingPage.css';
import BottomFooterBar from '../BottomFooterBar/BottomFooterBar';

//Importing all images required for slide show
import image1 from "./ImagesForSlideShow/image1.png";
import image2 from "./ImagesForSlideShow/download.jpg";

/**
 * This component will contain all the images for the slideshow on the landing
 * page.
 */
class LandingPage extends Component {

  render() {

    //Variable to contain all the images and their descriptions
    const images = [
      {
        original: image1,
        description: <h1>This is the description</h1>,
      },
      {
        original: image2,
        description: <h1>This is the description</h1>,
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/3/',
        description: <h1>This is the description</h1>,
      }
    ];

    return (
        //Container to display all the images
        <div id="slideShowContainer" className='slideShowContainer'>
          <ImageGallery showThumbnails={false} showFullscreenButton={false}
                    showPlayButton={false} items={images}
          />
          <BottomFooterBar />
        </div>
    );
  }

}

export default LandingPage;

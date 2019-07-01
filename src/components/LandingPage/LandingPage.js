import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import "../../../node_modules/react-image-gallery/styles/css/image-gallery.css";
import '../../styles/LandingPage.css';
import BottomFooterBar from '../BottomFooterBar/BottomFooterBar';

//Importing all images required for slide show
import image1 from "./ImagesForSlideShow/sampleTitleScreen.PNG";
import image2 from "./ImagesForSlideShow/gameChapters.PNG";
import image3 from "./ImagesForSlideShow/gameSample.PNG";
import image4 from "./ImagesForSlideShow/gameSampleTranslation.PNG";
import image5 from "./ImagesForSlideShow/sampleClassInformation.PNG";
import image6 from "./ImagesForSlideShow/sampleAnnouncements.PNG";


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
        description: <h1>Genki Visual Novel is a visual novel based on the textbook, Genki, for Japanese Learners.</h1>,
      },
      {
        original: image2,
        description: <h1>The visual novel is based on dialogues found in the textbook in chapters 11 through 17.</h1>,
      },
      {
        original: image3,
        description: <h1>The dialogue is in full Japanese.</h1>,
      },
      {
        original: image4,
        description: <h1>Whenever there is new vocabulary in the dialogue for the chapter, there is an option to view detailed definitions.</h1>,
      },
      {
        original: image5,
        description: <h1>In addition, there is a virtual classroom environment so teachers and students can organize.</h1>,
      },
      {
        original: image6,
        description: <h1>One feature of the virtual classrooms is the ability for teachers to create announcements.</h1>,
      },
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

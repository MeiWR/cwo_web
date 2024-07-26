import LightGallery from 'lightgallery/react';
// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import {useEffect, useRef, useCallback} from 'react';
import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';

// import plugins if you need
//import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgHash from 'lightgallery/plugins/hash';
import {motion} from "framer-motion"


function Galerie({listObr}) {
    const lightGallery = useRef(null);
    const onInit = useCallback((detail) => {
        if (detail) {
            lightGallery.current = detail.instance;
        }
    }, []);
    useEffect(() => {
        lightGallery.current.refresh();
        // Ensure the DOM element exists
        const container = document.querySelector('.masonry-gallery-demo');
        if (container) {
          // Initialize Masonry
          const msnry = new Masonry(container, {
            itemSelector: '.gallery-item',
            columnWidth: '.grid-sizer',
            percentPosition: true,
          });
    
          // Use imagesLoaded with Masonry
          imagesLoaded(container).on('progress', function () {
            // Layout Masonry after each image loads
            msnry.layout();
          });
        }
      }, [listObr]);



    return(
    <LightGallery
        elementClassNames={'masonry-gallery-demo'}
        speed={500}
        onInit={onInit}
        plugins={[lgZoom, lgHash]}
    >
        <div className="grid-sizer"></div>

        {Object.values(listObr).flat().map((image, index) => (
            
                <motion.a key={index} href={image[0]} className="gallery-item" 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}>
                    <img className="img-responsive" alt={""} src={image[1]} />
                </motion.a>
            
        ))}

    </LightGallery>);
};

export default Galerie;

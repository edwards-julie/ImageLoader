import React, {useState} from 'react';

import './ImageLoader.css'

/***

  This image loader creates an effect where images are initially displayed blurry,
  and then appear focused when the fullsize image finishes loading.

  This is accomplished by rendering a stretched thumbnail image on top of
  the fullsize image, and removing it once the fullsize image loads.

***/

function ImageLoader(props) {
  const { fullsize, thumb } = props;
  // useState hook tracks loading status of fullsize image
  const [isLoading, setIsLoading] = useState(true);

  // onLoad event handler sets isLoading state to false
  const handleOnLoad = () => {
    setIsLoading(false);
  }

  return (
    <div className={'image-loader'}>
      <img
        src={fullsize}
        // onLoad event handler is called when image finishes loading
        onLoad={handleOnLoad}
      />
      {/* Condiditonal rendering will remove thumbnail when onLoad event updates state */}
      {isLoading &&
        <img
          src={thumb}
        />
      }
    </div>
  )
}

export default ImageLoader;
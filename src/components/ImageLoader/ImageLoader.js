import React, {useState} from 'react';

import './ImageLoader.css'

function ImageLoader(props) {
  const { fullsize, thumb } = props;
  const [isLoading, setIsLoading] = useState(true);

  const handleOnLoad = () => {
    setIsLoading(false);
  }

  return (
    <div className={'image-loader'}>
      <img
        src={fullsize}
        onLoad={handleOnLoad}
      />
      {isLoading &&
        <img
          src={thumb}
        />
      }
    </div>
  )
}

export default ImageLoader;
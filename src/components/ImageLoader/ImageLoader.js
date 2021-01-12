import React from 'react';

import './ImageLoader.css'

function ImageLoader(props) {
  const { fullsize } = props;

  return (
    <div className={'image-loader'}>
      <img
        src={fullsize}
      />
    </div>
  )
}

export default ImageLoader;
import React from 'react';

import ImageLoader from './components/ImageLoader';
import fullsize from './images/fullsize.jpg';
import thumb from './images/thumb.jpg';

function App() {
  return (
    <React.StrictMode>
      <ImageLoader 
        fullsize={fullsize}
        thumb={thumb}
      />
    </React.StrictMode>
  )
}

export default App;
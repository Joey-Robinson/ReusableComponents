import React, { Component } from 'react';
import Header from '../../Component/ImageContainerComponents/Header';
import ImageGallery from '../../Component/ImageContainerComponents/ImageGallery';
import Sidebar from '../../Component/ImageContainerComponents/Sidebar';
import Footer from '../../Component/ImageContainerComponents/Footer';

class ImageContainer extends Component {
  render() {
    return (
      <div className="Container">
        <Header />
        <ImageGallery />
        <Sidebar />
        <Footer />
      </div>
    );
  }
};

export default ImageContainer;
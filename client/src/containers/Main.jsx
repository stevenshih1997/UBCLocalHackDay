import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import ImageCard from '../components/ImageCard/ImageCard';
import MainCarousel from '../components/MainCarousel/MainCarousel';
import Image1 from '../images/tree.png';
import Image2 from '../images/UBCLogo.png';
import Image3 from '../images/imgcardtest.png';
import './Main.css';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      text1: 'A tree',
      text2: 'A logo',
      text3: 'random',
    };
  }
  // Maybe use Row instead of div to contain the imagecards
  render() {
    return (
      <div>
      </div>
    );
  }
}

export default Main;

import React, { Component } from 'react';
import { NavItem, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Sponsors from './Sponsors';
import Image1 from '../../images/imgcardtest.png';
import './footer.css';

class Footer extends Component {
  constructor() {
    super();
    this.state = {
      images: [Image1, Image1, Image1],
    };
  }
  render() {
    return (
      <footer className="footer">
      </footer>
    );
  }
}

export default Footer;

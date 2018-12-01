import React, { Component } from 'react';

class About extends Component {
  constructor() {
    super();
    this.state = {
      text: [],
      appended: false,
    };
  }
  componentDidMount() {
  }
  render() {
    return (<article className="about">Loading...</article>);
  }
}

export default About;

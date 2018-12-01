import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

class Quotes extends Component {
  constructor() {
    super();
    this.state = {
      quote: [],
      author: [],
      appended: false,
    };
  }
  componentDidMount() {
    this.getQuote();
  }
  getQuote() {
    axios.get('/api/quote')
      .then((response) => {
        console.log(response.data.quote);
        console.log(response.data.author);
        this.setState({
          quote: response.data.quote,
          author: response.data.author,
          appended: true,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  handleClick = () => {
    this.getQuote();
  };
  render() {
    return (
      <div>
        <h1>
          {this.state.quote}
        </h1>
        <p>
          {this.state.author}
        </p>
        <Button bsSize="small" type="button" onClick={this.handleClick}>Get Quote</Button>
      </div>
    );
  }
}

export default Quotes;

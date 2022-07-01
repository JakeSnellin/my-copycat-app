import React from 'react';
import { CopyCat } from '../components/CopyCat';


export class CopyCatContainer extends React.Component {
    constructor(props) {
    super(props);

    this.state = { 
      copying: true,
      input: '',
    };

    this.toggleTape = this.toggleTape.bind(this);

    this.handleChange = this.handleChange.bind(this);
  }

  toggleTape() {
    this.setState({copying: !this.state.copying})
  }

  handleChange({ target }){
    this.setState({input: target.value});
  }
  
  render() {
    const copying = this.state.copying;
    const toggleTape = this.toggleTape;
    const value = this.state.input;
    
    return (
     <CopyCat copying={copying} toggleTape={toggleTape} onChange={this.handleChange} value={value} name={'Jake'}/>
    );
  };
}



import React from 'react';
import * as d3 from 'd3';

class Pointer extends React.Component{
  constructor(props){
    super(props)
    
    this.state = {}
  }

  componentDidMount(){
    document.onmousemove = e => {
      document.getElementById("pointer").style.left = e.screenX + "px"
      document.getElementById("pointer").style.top = e.screenY - 80 + "px"
    }
  }

  hoveringClass(){
    if(this.props.hover){
      return "shown"
    } else {
      return "hidden"
    }
  }

  render(){

    return(
      <div className={this.hoveringClass()} id="pointer">
          {this.props.hoverItem}
      </div>
    )
  }
}

export default Pointer
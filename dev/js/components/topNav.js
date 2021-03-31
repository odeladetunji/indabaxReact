import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';

class TopNav extends Component {
constructor(props, context) {
   super(props, context);

   this.handleSelect = this.handleSelect.bind(this);

   this.state = {
     index: 0,
     direction: null,
     interval: 1000,
     pauseOnHover: false
   };
 }

 handleSelect(selectedIndex, e) {
   alert(`selected=${selectedIndex}, direction=${e.direction}`);
   this.setState({
     index: selectedIndex,
     direction: e.direction
   });
 }

 render(){
   return(
      <div>
          <div className="topNavHeader">
              <div className="topNavLeft">
                  <p>{this.props.name}</p>
              </div>
              {/* <div className="topNavRight">
                  <i class="far fa-window-minimize"></i>
                  <i class="far fa-window-maximize"></i>
                  <i class="far fa-window-close"></i>
              </div> */}
          </div>
      </div>
   )
 }
}

export default TopNav;


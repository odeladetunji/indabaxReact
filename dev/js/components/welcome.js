import React, {Component} from 'react';
import TopNav from './topNav';
import LargButtons from './largebuttons';
import { NavLink, Link } from 'react-router-dom';

class Welcome extends Component {
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
          <div className="mainBody">
              <TopNav name="FAQs"/>
              <div className="midsection">
                   <div className="pictureFrame"></div>
              </div>
              <div className="bottomNav">
              <NavLink to="/aboutus" style={{color: 'black', textDecoration: 'none'}}> 
                   <LargButtons  name="GET STARTED" />
             </NavLink>
              </div>
          </div>
          <div className="welcomeBackground">
              <div className="topSection">
                <p>.</p>
              </div>
              <div className="buttomSection">
                <p>@ Carcinoma Project</p>
              </div>
          </div>
      </div>
   )
 }
}

export default Welcome;


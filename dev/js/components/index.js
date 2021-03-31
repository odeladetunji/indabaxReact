import React, {Component} from 'react';
import {Col, Row, Grid, xs, sm, md} from 'react-bootstrap';
import Welcome from './welcome';
import AboutUs from './aboutus';
import Computations from "./computation";

class App extends Component {
      render(){
        return(
            <div>
              <Welcome />
              {/* <AboutUs /> */}
              {/* <Computations /> */}
            </div>
        );
      }
}

export default App;

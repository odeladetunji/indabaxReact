import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';

class bander extends Component {
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
        <Carousel>

             <Carousel.Item>
               <img width={900} height={500} alt="900x500" src="dev/public/images/picture1.jpg" />
             </Carousel.Item>

             <Carousel.Item>
               <img width={900} height={500} alt="900x500" src="dev/public/images/picture2.jpeg" />
             </Carousel.Item>

             <Carousel.Item>
               <img width={900} height={500} alt="900x500" src="dev/public/images/picture3.jpg" />
             </Carousel.Item>

         </Carousel>
      </div>
   )
 }
}

export default bander;
// export default () => {
//
// }

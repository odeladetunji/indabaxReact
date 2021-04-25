import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';
import LargeButtons from './largebuttons';
import TopNav from './topNav';
import {NavLink} from 'react-router-dom';
import imageActions from '../actions/imageActions';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

class Computations extends Component {
constructor(props, context) {
   super(props, context);

   this.handleSelect = this.handleSelect.bind(this);
   this.showNextImage = this.showNextImage.bind(this);

   this.state = {
     index: 0,
     direction: null,
     interval: 1000,
     pauseOnHover: false,
     imageList: []
   };
 }

 componentDidMount(){
  console.log('Component Did Mount Fired');
  console.log(this.props.imageList);
  let parentState = this.props.imageList;
  this.setState({
    imageList: parentState
  })
 }


 handleSelect(selectedIndex, e) {
   alert(`selected=${selectedIndex}, direction=${e.direction}`);
   this.setState({
     index: selectedIndex,
     direction: e.direction
   });
 }

 showNextImage(event){
   let currentState = this.props.imageList.imageFiles;
   let poppedFile = currentState.pop();
   currentState.unshift(poppedFile);
   this.setState({
      imageList: currentState
   });

   this.props.imageActions({
      'type': 'Array of Files',
      'payload': currentState
   })
 }

 fetchScannedImage(nameOfFile){
   let formData = new formData();
   formData.set('firstImage', this.props.imageList.imageFiles[this.props.imageList.imageFiles.length - 1]);

   axios({
    method: "post",
    url: "http://localhost:8000/static/" + nameOfFile,
    data: formData,
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then(function (response) {
      //handle success
      console.log(response);
    })
    .catch(function (response) {
      //handle error
      console.log(response);
    });
 }

 render(){
   return(
      <div>
        <div className="aboutHeader">
             <TopNav name="Go Back"/>
         </div>
          <div className="computations">
          <div className="compFirstSection">
              <h5>Input Image</h5>
              <p>image</p>
              <div className="scanImageDiv" style={{backgroundImage: "url(" + "http://localhost:8000/static/IMG-20210323-WA0011.jpg"}}></div>
          </div>
          <div className="compSecondSection">
             <h5>HeatMap</h5>
             <div className="scanImageDiv" style={{backgroundImage: "url(" + "http://localhost:8000/static/IMG-20210323-WA0010.jpg"}}></div>
          </div>
          <div className="compThirdSection">
              <h5>Charts of Predictions in the</h5>
              <h5>range of 0 to 1</h5>
             <div className="rangeItSelf">
                 <div className="typeOfRange">
                     <p>Normal</p>
                     <p>Benign</p>
                     <p>Invasive</p>
                     <p>InSitu</p>
                 </div>
                 <div className="rangeDrawers">
                     <div className="rangeDiv">
                          <div className="first">
                              <p>0</p>
                          </div>
                          <div className="second">
                               <input type="range" min="0" value="2" max="10" class="slider" id="myRange" />
                          </div>
                          <div className="third">
                              <p>1</p>
                          </div>
                     </div>
                     <div className="rangeDiv benign" >
                          <div className="first">
                              <p>0</p>
                          </div>
                          <div className="second">
                               <input type="range" min="0" value="4" max="10" class="slider" id="myRange" />
                          </div>
                          <div className="third">
                              <p>1</p>
                          </div>
                     </div>
                     <div className="rangeDiv invasive">
                          <div className="first">
                              <p>0</p>
                          </div>
                          <div className="second">
                               <input type="range" min="0" value="2" max="10" class="slider" id="myRange" />
                          </div>
                          <div className="third">
                              <p>1</p>
                          </div>
                     </div>
                     <div className="rangeDiv insitu">
                          <div className="first">
                              <p>0</p>
                          </div>
                          <div className="second">
                               <input type="range" min="0" value="9" max="10" class="slider" id="myRange" />
                          </div>
                          <div className="third">
                              <p>1</p>
                          </div>
                     </div>
                 </div>
             </div>
          </div>
          </div>
          
          <div className="twoButtonNav">
              <div className="first" onClick={this.showNextImage}>
              <NavLink to="/computation" style={{color: 'black', textDecoration: 'none'}}> 
                   <LargeButtons name="Previous Result"/>
                    {/* <LargButtons  name="GET STATED" onClick={event => this.processImages(event)}/> */}
             </NavLink>
                
              </div>
              <div className="second">
                <LargeButtons name="Download"/>
              </div>
          </div>
        
      </div>
   )
 }
}

function mapStateToProps(state){
  return {
    imageList: state.imageList
  }
}

function matchDispatchToState(dispatch){
  return bindActionCreators({
     imageActions: imageActions
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToState)(Computations);



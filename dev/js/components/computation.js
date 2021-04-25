import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';
import LargeButtons from './largebuttons';
import TopNav from './topNav';
import {NavLink} from 'react-router-dom';
import imageActions from '../actions/imageActions';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import axios from 'axios';

class Computations extends Component {
constructor(props, context) {
   super(props, context);
   this.state = {
     index: 0,
     direction: null,
     interval: 1000,
     pauseOnHover: false,
     imageList: [],
     currentImage: null,
     InSitu: 0,
     Benign: 0,
     Invasive: 0,
     Normal: 0,
     display: "block"
   };

   this.handleSelect = this.handleSelect.bind(this);
   this.showNextImage = this.showNextImage.bind(this);
  //  this.setCurrentImage = this.setCurrentImage.bind(this);

 }

 componentDidMount (){
  console.log('Component Did Mount Fired');
  console.log(this.props.imageList);
  let parentState = this.props.imageList;
  this.setState({
    imageList: parentState
  })

  // this.setCurrentImage(parentState)

  let formData = new FormData();
  formData.set("firstImage", this.props.imageList.imageFiles[this.props.imageList.imageFiles.length - 1].image);

  this.setState({display: "block"})

  axios({
   method: "POST", 
   url: "http://localhost:8000/imageprocessor/processImages",
   data: formData,
   headers: { "Content-Type": "multipart/form-data" },
  })
  .then(response=>{
    let image = response.data.payload[0].nameOfHeatMap.split("/")[1];
    this.setCurrentImage(image);
    this.updateCurrentProps(response.data.payload[0])
    this.setState({display: "none"})
   }).catch(err=>{ 
    console.log(response);
   })
   
 }

 setCurrentImage = (image) => {
  this.setState({'currentImage': image}, () => {
    console.log(this.state.currentImage)
  });

  // this.showNextImageOnProp();
 }

 updateCurrentProps = (params) => {
  if (params.predictions.Benign.toString().split('e-').length < 2) {
    this.setState({Benign: Math.ceil(params.predictions.Benign)})
  }else{
    this.setState({Benign: Math.ceil(params.predictions.Benign.toString().split('e-')[0])})
  }

  if (params.predictions.Normal.toString().split('e-').length < 2) {
    this.setState({Normal: Math.ceil(params.predictions.Normal)})
  }else{
    this.setState({Normal: Math.ceil(params.predictions.Normal.toString().split('e-')[0])})
  }

  if (params.predictions.InSitu.toString().split('e-').length < 2) {
    this.setState({InSitu: Math.ceil(params.predictions.InSitu)})
  }else{
    this.setState({InSitu: Math.ceil(params.predictions.InSitu.toString().split('e-')[0])});
  }

  if (params.predictions.Invasive.toString().split('e-').length < 2) {
    this.setState({Invasive: Math.ceil(params.predictions.Invasive)})
  }else{
    this.setState({Invasive: Math.ceil(params.predictions.Invasive.toString().split('e-')[0])})
  }
 }

 handleSelect(selectedIndex, e) {
   alert(`selected=${selectedIndex}, direction=${e.direction}`);
   this.setState({
     index: selectedIndex,
     direction: e.direction
   });
 }

 showNextImageOnProp = () => {
  let formData = new FormData();
  formData.set("firstImage", this.props.imageList.imageFiles[this.props.imageList.imageFiles.length - 1].image);
  console.log(this.props.imageList.imageFiles[this.props.imageList.imageFiles.length - 1].image)

  this.setState({display: "block"})

  axios({
   method: "POST",
   url: "http://localhost:8000/imageprocessor/processImages",
   data: formData,
   headers: { "Content-Type": "multipart/form-data" },
  })
  .then(response=>{
    console.log(response.data.payload[0])
    let image = response.data.payload[0].nameOfHeatMap.split("/")[1];
    this.setCurrentImage(image)
    this.updateCurrentProps(response.data.payload[0])
    this.setState({display: "none"})
   }).catch(err=>{ 
    console.log(err);
   })
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

   this.showNextImageOnProp();
 }


 render(){
   
   return(
      <div>
        <div className="LoaderN" style={{display: this.state.display}}>
               <p>...processing heatmap, please wait</p>
        </div>
        <div className="aboutHeader">
        <NavLink to="/aboutus" style={{color: 'black', textDecoration: 'none'}}> 
            <TopNav name="Go Back"/>
        </NavLink>
             
         </div>
          <div className="computations">
          <div className="compFirstSection">
              <h5>Input Image</h5>
              <p>{this.props.imageList.imageFiles[this.props.imageList.imageFiles.length - 1].image.name}</p>
              <div className="scanImageDiv" style={{backgroundImage: "url(" + "http://localhost:8000/static/" 
              + this.props.imageList.imageFiles[this.props.imageList.imageFiles.length - 1].image.name + ")"}}></div>
          </div>
          <div className="compSecondSection">
             <h5>HeatMap</h5>
             <div className="scanImageDiv" style={{backgroundImage: "url(" + "http://localhost:8000/static/" + this.state.currentImage + ")"}}></div>
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
                             <input type="range" min="0" max="10" value={this.state.Normal} class="slider" id="myRange" />
                          </div>
                          <div className="third">
                              <p>1</p>
                          </div>
                     </div>
                     <div className="rangeDiv benign" >
                          <div className="first">
                              <p>0</p>
                          </div>
                             <input type="range" min="0" max="10" value={this.state.Benign} class="slider" id="myRange" />
                          <div className="third">
                              <p>1</p>
                          </div>
                     </div>
                     <div className="rangeDiv invasive">
                          <div className="first">
                              <p>0</p>
                          </div>
                             <input type="range" min="0" max="10" value={this.state.Invasive} class="slider" id="myRange" />
                          <div className="third">
                              <p>1</p>
                          </div>
                     </div>
                     <div className="rangeDiv insitu">
                          <div className="first">
                              <p>0</p>
                          </div>
                             <input type="range" min="0" max="10" value={this.state.InSitu} class="slider" id="myRange" />
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
              <NavLink to="/computations" style={{color: 'black', textDecoration: 'none'}}> 
                    <LargeButtons name="Next Result"/>
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



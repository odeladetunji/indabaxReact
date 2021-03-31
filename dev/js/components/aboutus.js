import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';
import TopNav from './topNav';
import LargButtons from './largebuttons';
import {NavLink} from 'react-router-dom';
import imageActions from '../actions/imageActions';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

class AboutUs extends Component {
constructor(props, context) {
   super(props, context);

   this.handleSelect = this.handleSelect.bind(this);
   this.processImages = this.processImages.bind(this);
   this.handleSelectedUpload = this.handleSelectedUpload.bind(this);

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
  let arrayStore = JSON.stringify([]);
  localStorage.setItem("imageContainer", arrayStore);
 }

 handleSelect(selectedIndex, e){
   alert(`selected=${selectedIndex}, direction=${e.direction}`);
   this.setState({
     index: selectedIndex,
     direction: e.direction
   });
 }

 handleSelectedUpload(event){  
   let aFile = event.target.files[0];
   let fileObject = {};
   fileObject["image"] = aFile;
   let storedObject = this.state.imageList;
   storedObject.push(fileObject)
   console.log(storedObject);

   this.setState({
     imageList: storedObject
   })

   setTimeout(()=> {
    console.log(this.state.imageList)
   }, 3000)
  
 }

 processImages(event){
      console.log("Image processing was clicked");
      this.props.imageActions({
        'type': 'Array of Files',
        'payload': this.state.imageList
      })
 }

 render(){
   return(
      <div>
         <div className="aboutHeader">
         <NavLink to="/welcome" style={{color: 'black', textDecoration: 'none'}}> 
              <TopNav name="Go Back"/>
         </NavLink>
            
         </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
         <div className="aboutUsPage">        
         <div className="leftSectionAboutUs">
             <div className="leftCentralizer">
                <input type="file" className="fileUpload" onChange={this.handleSelectedUpload}></input>
                <input type="file" className="fileUpload" onChange={this.handleSelectedUpload}></input>
                <input type="file" className="fileUpload" onChange={this.handleSelectedUpload}></input>
                <input type="file" className="fileUpload" onChange={this.handleSelectedUpload}></input>
                <input type="file" className="fileUpload" onChange={this.handleSelectedUpload}></input>
                <p id="addMoreFiles">Add more files</p>
                <p id="uploadInstructions">You can only select a maximum of 5 per time</p>
             </div>
             <NavLink to="/computations" style={{color: 'black', textDecoration: 'none'}}> 
                    <LargButtons  name="Predict" onClick={event => this.processImages(event)}/>
             </NavLink>
         </div>
         <div className="rightSectionAboutUs">
             <h3>About Us</h3>
             <p>Carcinoma is a desktop-based application that sits on a deep 
               learning technology, to diagnose Breast cancer from Histology Images, 
               our solution also provides Interpretability for the Medical practitioner 
               examining our model result, we have provided this by the heatmap generated by 
               our Model.</p>
               <h3>About Carcinoma</h3>
              <p>
              We are a team of Medical Practitioners and AI researchers, on a mission to make 
              diagnosis and treatment better using a combination of Computer vision, Reinforcement
               Learning and Robotics to build state-of-the-art-solutions to Health Challenges, 
               with a focus in the African Community.
              </p>
         </div>
         </div>
         <p id="warningAbout">You have not selected an image for processing</p>
         <p id="processingMsg">Processing Images ...</p>
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

export default connect(mapStateToProps, matchDispatchToState)(AboutUs);



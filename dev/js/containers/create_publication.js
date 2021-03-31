import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import Footer from '../components/footer';
import Banner from './banner';
import MobileNav from '../containers/mobileHeader';
import liveEdit from '../actions/liveEdit';
import defaultContent from '../actions/defaultContent';
import { Grid, Row, Col } from 'react-bootstrap';


class CreatePublication extends Component {
    constructor(props){
        super(props);
        this.state = {
           authors_name: null,
           publication_heading: null,
           publication_date: null,
           currentInput: {
             paragraph: null,
             inputFiles: []
           },
           newParagraph: [],
           paragraph_pictures: [],
           theFiles: []
        }

        this.theFileRef = React.createRef();
        this.textareaRef = React.createRef();
        // this.displayPictures = this.displayPictures.bind(this);
        this.getHeading = this.getHeading.bind(this);
        this.getPictures = this.getPictures.bind(this);
        this.getParagraphs = this.getParagraphs.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearContent = this.clearContent.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    getParagraphs = () => {
      console.log(this.props.paragraph);
      if(this.props.paragraph == null) return '';
      return this.props.paragraph.generated_paragraph;
    }

    getHeading = () => {
      if (this.props.pubHead == null) return '';
      return this.props.pubHead.publication_heading;
    }

    getPictures = () => {
      console.log(this.props.theFiles);
      if (this.props.theFiles == null) return '';
      return this.props.theFiles.map(elem => {
                           <div style={{'backgroundImage': url(elem.path)}}>
                           </div>
                       });
    }

    handleSubmit(event){
          console.log(event.target);
          event.preventDefault();
          const formData = new FormData(); // empty form object
          formData.append('publication_heading', this.state.publication_heading);
          formData.append('publication_date', this.state.publication_date);
          formData.append('authors_name', this.state.authors_name);
          formData.append('paragraph_pictures', this.state.paragraph_pictures);
          if (this.state.newParagraph.length == 0) {
                formData.append('paragraph0', this.state.currentInput.paragraph);
                defaultContent({
                   type: 'submit publication to server',
                   payload: formData
                });
                console.log(formData);
                return;
          }
          const paragraghs = this.state.newParagraph.map(element => {
              element.paragraph;
          });

          //an array in arrays
          const theFiles = this.state.newParagraph.map(element => {
              element.inputFiles.map(elem => {
                  elem;
              });
          });

          theFiles.map(element => {
             formData.append('selected_files', element);
          });

          var akey = 'paragraph';
          var count = 0;
          for(var i=0; i<paragraphs.length; i++){
             formData.append(akey.concat(count), paragraphs[i]);
             count++;
             if (count == paragraphs.length) break;
          }

          defaultContent({
            type: 'submit publication to server',
            payload: formData
          })
    }

    clearContent = (event) => {
        console.log('picture is beeing added to publication!');
        console.log(event.target);
        const currentInput = this.state.currentInput;
        // element is initialized here because systhetic event is nullified
        // after callback is called!
        const element = event.target;
        console.log(currentInput);
        this.setState(() => {
          currentInput: currentInput.inputFiles.push(element)
        });

        const theFiles = this.state.theFiles;  //needed for file path
        theFiles.push(event.target.path);  // path is not a property
        console.log(event.target.files);
        this.setState({
          theFiles: theFiles
        });

        this.props.liveEdit({
          type: 'selecting files',
          payload: this.state.theFiles
        });

        // this is for debugging purpose!
        // it was used because of the callback that was passed to setState()
        // function above!
        setTimeout(function(){
           console.log(currentInput);
        }, 5);
    }

    handleChange = (event) => {
         switch (event.target.name) {
           case 'writing paragraph':
             this.props.liveEdit({
               type: 'writing paragraph',
               payload: event.target.value
             });

             const currentInput = this.state.currentInput;
             const value = event.target.value;
             currentInput.paragraph = event.target.value;
             this.setState({
               currentInput: currentInput
             })
             break;

           case 'selected_files':
             // this.props.liveEdit({
             //   type: 'selecting files',
             //   payload: event.target
             // });
             this.clearContent(event);
             break;

           case 'authors name':
             this.props.liveEdit({
               type: 'authors name',
               payload: event.target.value
             });
             this.setState({
                authors_name: event.target.value
             })
             break;

           case 'inputting date':
             this.props.liveEdit({
               type: 'inputting date',
               payload: event.target.value
             });
             this.setState({
               publication_date: event.target.value
             })
             break;

           case 'inputting publication heading':
             this.props.liveEdit({
               type: 'inputting publication heading',
               payload: event.target.value
             });

             this.setState({
               publication_heading: event.target.value
             })
             break;
         }
    }

    newParagraph = (event) => {
            if (this.state.currentInput.paragraph == null) {
                window.alert('No Paragraph Entered Yet');
                return;
            }

            const another_node = this.theFileRef.current;

            if(another_node.value == ''){
               window.alert('please attach a file to the paragraph')
               return;
            }

            const anewParagraph = this.state.newParagraph;
            anewParagraph.push(this.state.currentInput);
            this.setState({
               newParagraph: anewParagraph
            });

            // reseting the new paragraph to empty value!
            const newInput = this.state.currentInput;
            newInput.paragraph = null;
            newInput.inputFiles = [];
            this.setState(() => {
               currentInput: newInput
            });

            another_node.value = ''; //removing the file!
            const myPix = this.state.paragraph_pictures; //an array
            const nameOfPix = this.state.currentInput.inputFiles.map(elem => {
               event.target.filename;
            });

            myPix.push(nameOfPix);
            this.setState(() => {
                paragraph_pictures: myPix
            })

            const node = this.textareaRef.current;
            node.value = "";

            console.log(this.state.currentInput);
            console.log(this.state.newParagraph);

    }

    render(){
       return(
          <div>
              <Banner />
              <MobileNav />
                  <Grid>
                     <Row className='theBlog'>
                        <Col xs={12} sm={12} md={12} lg={12}>
                           <h1 id='pubHeading'>{this.getHeading()}</h1>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={12}>
                           <p id='theContent'>{this.getParagraphs()}</p>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={12}>
                          {this.getPictures()}
                        </Col>
                     </Row>
                  </Grid>
                  <Grid className='myPublication'>
                     <Col xs={12} sm={12} md={12} lg={10} className="create_publication">
                       <div>
                         <form action="" className='createForm' onSubmit={this.handleSubmit}>
                            <p><span>Create a Publication</span></p>
                            <label>Publication Heading</label>
                            <input type="text" placeholder='Enter Publication Heading' name='inputting publication heading' onChange={this.handleChange} required/>
                            <label>Author</label> <input type="text" placeholder='Enter Authors name' name='authors name' onChange={this.handleChange} required/>
                            <label>Date</label><input type="date" name='inputting date' onChange={this.handleChange} placeholder='Enter Date' required/>
                            <div>
                                <div className="editor">
                                   <ul>
                                     <li id='new paragraph' key="newParagraph" onClick={this.newParagraph}>{"new paragraph"}</li>
                                   </ul>
                                   <input type="file" name='selected_files' placeholder="Select files" onChange={this.handleChange} ref={this.theFileRef} required/>
                                </div>
                                <textarea placeholder='Type a new paragraph' onChange={this.handleChange} name='writing paragraph' ref={this.textareaRef}></textarea>
                            </div>
                            <button>submit publication</button>
                         </form>
                       </div>
                     </Col>
                  </Grid>
              <Footer />
          </div>
       )
    }
}


function mapStateToProps(state){
    return {
       paragraph: state.generated_paragraph,
       theFiles: state.selected_files,
       pubHead: state.pubHead
    }
}

function matchDispatchToState(dispatch){
    return bindActionCreators({
       liveEdit: liveEdit,
       defaultContent: defaultContent
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToState)(CreatePublication);

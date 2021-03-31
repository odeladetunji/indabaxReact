import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Col, Row, Grid} from 'react-bootstrap';
import toggleNav from '../actions/togglenav';
import scroll from '../actions/scroll';
import defaultContent from '../actions/defaultContent';
import Banner from './banner';
import MobileNav from '../containers/mobileHeader';
import Footer from '../components/footer';

class Publications extends Component {
    constructor(props){
       super(props);
       this.defaultContent = this.defaultContent.bind(this);
       this.no_Publication_present = this.no_Publication_present.bind(this);
    }

    ComponentDidMount(){
        if (this.props.goToPublications == true) {
            this.defaultContent({
                 type: 'load publications',
                 payload: ''
            });
        }
    }

    no_Publication_present = () => {
       return(
           <Grid>
              <Row className='publication_unavailable'>
                <Col xs={12} sm={12} md={3}>
                   <img src="" alt=""/>
                </Col>
                <Col xs={12} sm={12} md={9}>
                  <p>Sorry!! No publication available at this time!</p>
                </Col>
              </Row>
           </Grid>
       )
    }

    scroll_into_view (param) {
        console.log(param)
        param.scrollIntoView({block: 'end', behavior: 'smooth'});
    }

    defaultContent = () => {
        //generate default content here
        if(this.props.defaultContent == null) return this.no_Publication_present();


        const elements = this.props.defaultContent.map((elem) => {
          switch (this.props.defaultContent.length) {
              case 1:
                  return <Grid>
                              <Row>
                                  <Col xs={12} sm={4} md={4} lg={4}>
                                  </Col>
                              </Row>
                         </Grid>
                  break;

              case 2:
                  return <Grid>
                              <Row>
                                  <Col xs={12} sm={6} md={4} lg={4}>
                                  </Col>
                                  <Col xs={12} sm={6} md={4} lg={4}>
                                  </Col>
                              </Row>
                         </Grid>
                  break;
              case 3:
                  return <Grid>
                              <Row>
                                  <Col xs={12} sm={6} md={4} lg={4}>
                                  </Col>
                                  <Col xs={12} sm={6} md={4} lg={4}>
                                  </Col>
                                  <Col xs={12} sm={6} md={4} lg={4}>
                                  </Col>
                              </Row>
                         </Grid>
                  break;
            }

            if(this.props.defaultContent.length > 3){
               var gridContainer = [];
               var tempHolder;
               var finalContainer = [];
               var colm;
               var aGrid;
               var count = 0;
               var count1 = 0;

               const genGrid = (param)  => {
                   var addCol = param.map((elem) => {
                        elem
                   });
                   aGrid =  <Grid>
                                addCol
                             </Grid>;
                   finalContainer.push(aGrid);

               }

               for(var i=0; i<this.props.defaultContent.length; i++){
                    count++;
                    count1++;
                    colm = <Col xs={12} sm={4} md={4} lg={4}>
                           </Col>;
                    gridContainer.push(colm);
                    if(count / 3 == 1){
                        count1 = 0;
                        tempHolder = gridContainer;
                        gridContainer = [];
                        genGrid(tempHolder);
                    }

                    if (count == his.props.defaultContent.length) {
                       setTimeout(() => {
                          return finalContainer.map((elem) => {
                               elem
                          });
                       }, 100);
                       break;
                    }
               }
             }
       });

    }

    render(){
       return(
         <div>
             <MobileNav />
             <Banner />
                {this.defaultContent()}
             <Footer />
         </div>
       )
    }
}

function mapStateToProps(state){
    return {
        showNav: state.toggleNav.showNav,
        showBar: state.toggleNav.showBar,
        defaultContent: state.defaultContent.publications,
        goToPublications: state.defaultContent.toPubPage
    }
}

function matchDispatchToState(dispatch){
    return bindActionCreators({
       toggleNav: toggleNav,
       scroll: scroll,
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToState)(Publications);

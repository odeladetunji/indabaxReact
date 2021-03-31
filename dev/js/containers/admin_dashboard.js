import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import Footer from '../components/footer';
import Banner from '../containers/banner';
import MobileNav from '../containers/mobileHeader';
import { Grid, Col, Row } from 'react-bootstrap';
import defaultContent from '../reducers/admin';

class AdminDashBoard extends Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (event) => {
      event.preventDefault();
      defaultContent({
          type: 'login request',
          payload: event.target  //this points to the object that triggered the event
      })
  }

  ComponentDidUpdate(){
    if(this.props.admin == 'admin'){
      /// will have to direct to the publication page!
    }
  }

  render(){
    return(
      <div>
        <Banner />
        <MobileNav />
        <div className='subheader'>
           <p><span>Admin</span></p>
        </div>
        <Grid>
          <Row>
            <Col xs={10} sm={7} md={4} lg={6} className='login_form'>
              <form action="" onSubmit={this.handleSubmit}>
                 <p id={this.props.warning}>Wrong user or password!</p>
                 <label>welcome</label>
                 <input type="email" placeholder='username' required/><br/>
                 <input type="password" placeholder='password' required/><br/>
                 <button>submit</button>
              </form>
            </Col>
          </Row>
        </Grid>
        <Footer />
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
     admin: state.admin.status,
     warning: state.admin.warning
  }
}

function matchDispatchToState(dispatch){
    return bindActionCreators({
       admin: defaultContent
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToState)(AdminDashBoard);

import React, { Component } from 'react';
import { bindActionCreators }from 'redux';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import toggleNav from '../actions/togglenav';

class MobileNav extends Component {
  constructor(props) {
     super(props);
  }

  render(){
    return(
      <div className="mobile">
        <div className="theFirstDiv">
          <i className={"fas fa-bars" + ' ' + this.props.showBar} onClick={ () => {
              if(this.props.showMobileNav == 'on')
              this.props.toggleNav({
                type: 'mobile_nav',
                payload: 'off'
              });

              if(this.props.showMobileNav == 'off')
              this.props.toggleNav({
                type: 'mobile_nav',
                payload: 'on'
              });

          }}></i><p>LanreAbidakun & Co</p>
        </div>
        <div className={"mobile_headers" + " " + this.props.showMobileNav}>
          <ul>
            <li className="nav_headers"
              onClick={ ()  => {
                 if(this.props.showServices == 'on')
                    this.props.toggleNav({
                       'type': 'show services',
                       'payload': 'off'
                    })
                 if(this.props.showServices == 'off')
                    this.props.toggleNav({
                       'type': 'show services',
                       'payload': 'on'
                    })
              }}>SERVICES</li>
              <div className={"mobile_services" + " " + this.props.showServices}>
                <ul>
                  <li className=''>Audit</li>
                  <li>Private-Audit</li>
                  <li>Pension Fund Audit</li>
                  <li>Management-Audit</li>
                </ul>
                <ul>
                  <li className=''>Consulting</li>
                  <li>Accounting</li>
                  <li>Share Registration</li>
                  <li>Design and Installation of accounting system</li>
                </ul>
                <ul>
                  <li className=''>Financial Adversory</li>
                  <li>Aquisition Mergers and Absorbtion</li>
                  <li>Project Financing</li>
                  <li>Management of ailing Projects</li>
                  <li>Profitablity planning and improvement</li>
                </ul>
                <ul>
                  <li className=''>Risk</li>
                  <li>Credit risk analysis and controls</li>
                  <li>Investment analysis and appraisal</li>
                  <li>Cooperate Governnace</li>
                  <li>Production planning and controll</li>
                  <li>Inventory planning and control</li>
                </ul>
                <ul>
                  <li className=''>Tax</li>
                  <li>Tax Management</li>
                  <li>Recovery of withholding Tax (WHT) of dividends and Interest</li>
                </ul>
                <ul>
                  <li className=''>Government Adviser</li>
                  <li>Recovery of withholding Tax (WHT) of Dividends and interest</li>
                  <li>Recovery of excess bank Charges Recovery and Interest Waiver</li>
                  <li></li>
                </ul>
                <ul>
                  <li className=''>Business Solution</li>
                  <li>Executive man power Solution</li>
                  <li>Provision of Technical Manpower</li>
                  <li>Staff Trainings and Developments</li>
                  <li>Work and Routings Developments</li>
                </ul>

              </div>
            <li className="nav_headers" onClick={
                () => {
                   if(this.props.showContacts == 'on')
                      this.props.toggleNav({
                        'type': 'show contacts',
                        'payload': 'off'
                      });
                   if(this.props.showContacts == 'off')
                      this.props.toggleNav({
                        'type': 'show contacts',
                        'payload': 'on'
                      })
                }}>CONTACTS</li>
              <div className={"mobile_contact" + " " + this.props.showContacts}>
                <div className="">
                   <h6>Abuja</h6>
                   <p>House 90, 693 Road, Off 69 Road, (Hamza Zayyad Close) Model City, Gwarinpa</p>
                   <p>Telephone:  +234-803 314 6703</p>
                </div>
                <div className="">
                  <h6>Lagos</h6>
                  <p>All Season Place Suite 220, 74 Isheri Road, Beside Federal Road Safety Corps, Ojodu, Ikeja</p>
                  <p>Telephone:  +234-803 314 6703</p>
                </div>
              </div>
            <li className="nav_headers" onClick={ () => {
                if(this.props.showAbout == 'on')
                   this.props.toggleNav({
                     'type': 'show about',
                     'payload': 'off'
                   })
                if(this.props.showAbout == 'off')
                   this.props.toggleNav({
                     'type': 'show about',
                     'payload': 'on'
                   })
              }}>ABOUT US</li>
              <div className={"mobile_about " + " " + this.props.showAbout}>
                <div>
                  <h6>About Us</h6>
                  <p>
                    Lanre Abidakun & Co. (Chartered Accountants) is a firm of accountants with extensive knowledge and experience in auditing and investigation, taxation receivership and liquidation. The Firm was established about 20 years ago and has engaged in several specialized and statutory audits. During this period, we have strengthened our tax unit having realized the importance that government now place on tax as revenue pot due to dwindling in other sector of income generation. cannot but ensure adequate tax planning and protection of our clients from both State and Federal taxes i.e PAYE, CIT, VAT and others. We are also, a major player in the financial sector having proved our professional competence as External Auditor to a Mortgage bank for over 9 years with Assets based of N5billion. We are currently CBN Consultant, and in providing other financial advisory services, we have procured pioneer Certificate for some Companies in Abuja which guarantee them tax holidays TheseCompanies are listed in our clientele list.
                  </p>
                </div>
                <div>
                  <h6>Mission</h6>
                  <p>
                     Our MISSION is to ensure the provision of a comprehensive, world class, affordable and value-adding professional services to our clients, thereby contributing significantly towards the achievement of their goals and objectives. The array of specialized services provided by our firm are described below under the following headings:
                  </p>
                </div>
              </div>
            <li className="nav_headers"><NavLink to="/publications" style={{color: 'white', textDecoration: 'none'}}>PUBLICATIONS</NavLink></li>
            <li className="nav_headers"><NavLink to="/create_publications" style={{color: 'white', textDecoration: 'none'}}>Create Publications</NavLink></li>
            <li className="nav_headers"><NavLink to="/admin" style={{color: 'white', textDecoration: 'none'}}>STAFFS</NavLink></li>
            <li className="nav_headers"><NavLink to="/" style={{color: 'white', textDecoration: 'none'}}>HOME</NavLink></li>
          </ul>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    showMobileNav: state.toggleNav.showMobileNav,
    showContacts: state.toggleNav.showContacts,
    showServices: state.toggleNav.showServices,
    showAbout: state.toggleNav.showAbout
  }
}

function matchDispatchToState(dispatch){
  return bindActionCreators({
     toggleNav: toggleNav,
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToState)(MobileNav);

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import {Col, Row, Grid} from 'react-bootstrap';
import toggleNav from '../actions/togglenav';
import Publications from './publications';
import scroll from '../actions/scroll';
import backgroundBannerImg from '../../public/images/pictures4.jpg';
import companylogo from '../../public/images/companylogo.png';
console.log(backgroundBannerImg);
// import defaultContent from '../actions/defaultContent';

class Banner extends Component {
    constructor(props){
       super(props);
    }

    scroll_into_view (param) {
        console.log(param)
        param.scrollIntoView({block: 'end', behavior: 'smooth'});
    }

    render(){
       return(
               <div className="banner" style={ { backgroundImage: 'url(' + backgroundBannerImg + ')' }} >
                 <div className='bannerCover outer'>
                     <ul className={this.props.showNav} id="bigNav">
                       <li><NavLink to="/" style={{color: 'white', textDecoration: 'none'}} >Home</NavLink></li>
                       <li><NavLink to="/create_publications" style={{color: 'white', textDecoration: 'none'}}>Create Publication</NavLink></li>
                       <li><NavLink to="/admin" style={{color: 'white', textDecoration: 'none'}}>Staffs</NavLink></li>
                       <li id="ourServices">Services
                         <div className="floatingHeader">
                             <div className="leftSection">
                                  <div>
                                      <h6>{ "Whats New" }</h6>
                                      <p></p>
                                  </div>
                                  <div>
                                      <h6>{ "Future of Investment"}</h6>
                                      <p></p>
                                  </div>
                             </div>
                             <div className="rightSection">
                                  <div className="rowOne">
                                    <div className="rightDiv">
                                        <ul>
                                          <li className=''>Audit</li>
                                          <li>Private-Audit</li>
                                          <li>Pension Fund Audit</li>
                                          <li>Management-Audit</li>
                                        </ul>
                                    </div>
                                    <div className="rightDiv">
                                        <ul>
                                          <li className=''>Consulting</li>
                                          <li>Accounting</li>
                                          <li>Share Registration</li>
                                          <li>Design and Installation of accounting system</li>
                                        </ul>
                                    </div>
                                    <div className="rightDiv">
                                        <ul>
                                          <li className=''>Financial Adversory</li>
                                          <li>Aquisition Mergers and Absorbtion</li>
                                          <li>Project Financing</li>
                                          <li>Management of ailing Projects</li>
                                          <li>Profitablity planning and improvement</li>
                                        </ul>
                                    </div>
                                  </div>
                                  <div className="rowTwo">
                                     <div className="rightDiv">
                                       <ul>
                                         <li className=''>Risk</li>
                                         <li>Credit/risk analysis and controls</li>
                                         <li>Investment analysis and appraisal</li>
                                         <li>Cooperate Governnace</li>
                                         <li>Production planning and controll</li>
                                         <li>Inventory planning and control</li>
                                       </ul>
                                     </div>
                                     <div className="rightDiv">
                                       <ul>
                                         <li className=''>Tax</li>
                                         <li>Tax Management</li>
                                         <li>Recovery of withholding Tax (WHT) of dividends and Interest</li>
                                       </ul>
                                     </div>
                                     <div className="rightDiv">
                                       <ul>
                                         <li className=''>Government Adviser</li>
                                         <li>Recovery of withholding Tax (WHT) of Dividends and interest</li>
                                         <li>Recovery of excess bank Charges Recovery and Interest Waiver</li>
                                         <li></li>
                                       </ul>
                                     </div>
                                  </div>
                                  <div className="rowThree">
                                    <div className="rightDiv">
                                      <ul>
                                        <li className=''>Business Solution</li>
                                        <li>Executive man power Solution</li>
                                        <li>Provision of Technical Manpower</li>
                                        <li>Staff Trainings and Developments</li>
                                        <li>Work and Routings Developments</li>
                                      </ul>
                                    </div>
                                    <div className="rightDiv">

                                    </div>
                                    <div className="rightDiv">

                                    </div>
                                  </div>
                             </div>
                         </div></li>
                       <li><NavLink to="/publications" style={{color: 'white', textDecoration: 'none'}}>Publications</NavLink></li>
                       <li id="aboutLanre">About
                         <div className="aboutFloating">
                              <div className="leftSection">
                              </div>
                              <div className="rightSection">
                                <div className="segmentA">
                                    <h5>about Us</h5>
                                    <p>
                                      Lanre Abidakun & Co. (Chartered Accountants) is a firm of accountants with extensive knowledge and experience in auditing and investigation, taxation receivership and liquidation. The Firm was established about 20 years ago and has engaged in several specialized and statutory audits. During this period, we have strengthened our tax unit having realized the importance that government now place on tax as revenue pot due to dwindling in other sector of income generation. cannot but ensure adequate tax planning and protection of our clients from both State and Federal taxes i.e PAYE, CIT, VAT and others. We are also, a major player in the financial sector having proved our professional competence as External Auditor to a Mortgage bank for over 9 years with Assets based of N5billion. We are currently CBN Consultant, and in providing other financial advisory services, we have procured pioneer Certificate for some Companies in Abuja which guarantee them tax holidays TheseCompanies are listed in our clientele list.
                                    </p>
                                </div>
                                <div className="segmentB">
                                  <h5>Mission</h5>
                                  <p>
                                     Our MISSION is to ensure the provision of a comprehensive, world class, affordable and value-adding professional services to our clients, thereby contributing significantly towards the achievement of their goals and objectives. The array of specialized services provided by our firm are described below under the following headings:
                                  </p>
                                </div>
                              </div>
                         </div>
                       </li>
                       <li id="myContact">Contacts
                         <div className="contactFloating">
                             <div className="leftSection">

                             </div>
                             <div className="rightSection">
                                 <div className="theContact">
                                    <h5>Abuja</h5>
                                    <p>House 90, 693 Road, Off 69 Road, (Hamza Zayyad Close) Model City, Gwarinpa</p>
                                    <p>Telephone:  +234-803 314 6703</p>
                                 </div>
                                 <div className="theContact">
                                   <h5>Lagos</h5>
                                   <p>All Season Place Suite 220, 74 Isheri Road, Beside Federal Road Safety Corps, Ojodu, Ikeja</p>
                                   <p>Telephone:  +234-803 314 6703</p>
                                 </div>
                             </div>
                         </div></li>
                       <i className='fas fa-window-close' onClick={
                           () => { this.props.toggleNav('hide nav') }
                       }></i>
                     </ul>
                     <h1>Lanre Abidakun & Co</h1>
                     <h3>(chartered accountants)</h3>
                     <div id={this.props.showBar} className='bannerCover InnerDiv' style={ {backgroundImage: 'url(' + companylogo + ')' }}>

                     </div>
                 </div>
               </div>
        )
    }
}

function mapStateToProps(state){
    return {
        showNav: state.toggleNav.showNav,
        showBar: state.toggleNav.showBar
    }
}

function matchDispatchToState(dispatch){
    return bindActionCreators({
       toggleNav: toggleNav,
       scroll: scroll,
       // defaultContent: defaultContent
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToState)(Banner);

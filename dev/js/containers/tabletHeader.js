import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';


class TabletHeader extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className='tabletHeader'>
        <div className='topTabletHeader'>
          <ul>
            <li><NavLink to='/create_publications' style={{color: 'white'}}>Create Publication</NavLink></li>
            <li><NavLink to='/admin' style={{color: 'white'}}>Staffs</NavLink></li>
            <li><NavLink to='/' style={{color: 'white'}}>Home</NavLink></li>
          </ul>
        </div>
        <div className='bottomTabletHeader'>
          <ul>
            <li className='tabletHeaderli'>Services
              <div className='tabletServices'>
                   <div className='row'>
                     <div className='col-sm-6'>
                          <div className='tabletServ'>
                            <p>Audit</p>
                            <ul>
                              <li>Pension Fund Audit</li>
                              <li>Private Audit</li>
                              <li>Management-Audit</li>
                            </ul>
                          </div>
                     </div>
                     <div className='col-sm-6'>
                        <div className='tabletServ'>
                          <p>Consulting</p>
                          <ul>
                            <li>Accounting</li>
                            <li>Share Registration</li>
                            <li>Design and Installation of accounting system</li>
                          </ul>
                        </div>
                     </div>
                   </div>
                   <div className='row'>
                     <div className='col-sm-6'>
                       <div className='tabletServ'>
                         <p>Risk</p>
                         <ul>
                           <li>Credit/risk analysis and controls</li>
                           <li>Investment analysis and appraisal</li>
                           <li>Cooperate Governnace</li>
                           <li>Production planning and controll</li>
                           <li>Inventory planning and control</li>
                         </ul>
                       </div>
                     </div>
                     <div className='col-sm-6'>
                       <div className='tabletServ'>
                         <p>Tax</p>
                         <ul>
                           <li>Tax Management</li>
                           <li>Recovery of withholding Tax (WHT) of dividends and Interest</li>
                         </ul>
                       </div>
                     </div>
                   </div>
                   <div className='row'>
                     <div className='col-sm-6'>
                        <div className='tabletServ'>
                          <p>Financial Adversory</p>
                          <ul>
                            <li>Aquisition Mergers and Absorbtion</li>
                            <li>Project Financing</li>
                            <li>Management of ailing Projects</li>
                            <li>Profitablity planning and improvement</li>
                          </ul>
                        </div>
                     </div>
                     <div className='col-sm-6'>
                          <div className='tabletServ'>
                            <p>Government Adviser</p>
                            <ul>
                              <li>Recovery of withholding Tax (WHT) of Dividends and interest</li>
                              <li>Recovery of excess bank Charges Recovery and Interest Waiver</li>
                              <li></li>
                            </ul>
                          </div>
                     </div>
                   </div>
                   <div className='row'>
                     <div className='col-sm-6'>
                         <div className='tabletServ'>
                           <p>Business Solution</p>
                           <ul>
                             <li>Executive man power Solution</li>
                             <li>Provision of Technical Manpower</li>
                             <li>Staff Trainings and Developments</li>
                             <li>Work and Routings Developments</li>
                           </ul>
                         </div>
                     </div>
                   </div>
              </div></li>
            <li className='tabletHeaderli'>About
              <div className='tabletAbout'>
                 <div className='row'>
                   <div className='col-sm-6'>
                     <div className="aboutLanre">
                         <h5>About Us</h5>
                         <p>
                           Lanre Abidakun & Co. (Chartered Accountants) is a firm of accountants with extensive knowledge and experience in auditing and investigation, taxation receivership and liquidation. The Firm was established about 20 years ago and has engaged in several specialized and statutory audits. During this period, we have strengthened our tax unit having realized the importance that government now place on tax as revenue pot due to dwindling in other sector of income generation. cannot but ensure adequate tax planning and protection of our clients from both State and Federal taxes i.e PAYE, CIT, VAT and others. We are also, a major player in the financial sector having proved our professional competence as External Auditor to a Mortgage bank for over 9 years with Assets based of N5billion. We are currently CBN Consultant, and in providing other financial advisory services, we have procured pioneer Certificate for some Companies in Abuja which guarantee them tax holidays TheseCompanies are listed in our clientele list.
                         </p>
                     </div>
                   </div>
                   <div className='col-sm-6'>
                     <div className="aboutLanre">
                       <h5>Mission</h5>
                       <p>
                          Our MISSION is to ensure the provision of a comprehensive, world class, affordable and value-adding professional services to our clients, thereby contributing significantly towards the achievement of their goals and objectives. The array of specialized services provided by our firm are described below under the following headings:
                       </p>
                     </div>
                   </div>
                 </div>
              </div></li>
            <li className='tabletHeaderli'>Contacts
              <div className='tabletContact'>
                 <div className='row'>
                    <div className='col-sm-6'>
                        <div className='tabletCont'>
                          <h5>Abuja</h5>
                          <p>House 90, 693 Road, Off 69 Road, (Hamza Zayyad Close) Model City, Gwarinpa</p>
                          <p>Telephone:  +234-803 314 6703</p>
                        </div>
                    </div>
                    <div className='col-sm-6'>
                        <div className='tabletCont'>
                          <h5>Lagos</h5>
                          <p>All Season Place Suite 220, 74 Isheri Road, Beside Federal Road Safety Corps, Ojodu, Ikeja</p>
                          <p>Telephone:  +234-803 314 6703</p>
                        </div>
                    </div>
                 </div>
              </div></li>
            <li className='tabletHeaderli'><NavLink to='/publications' style={{color: 'white'}}>Publications</NavLink></li>
          </ul>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    tabletHeader: state.toggleNav.tabletHeader
  }
}

// function matchDispatchToState(dispatch){
//   return bindActionCreators({
//
//   }, dispatch)
// }

export default connect(mapStateToProps)(TabletHeader);

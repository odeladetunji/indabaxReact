import React, {Component} from 'react';
import companylogo from '../../public/images/companylogo.png';

export default () => {
     return(
          <div>
            <div className='footer_Top_Logo'>
                <div className='coverForDiv'>
                  <div className='forLogo' style={{ backgroundImage: 'url(' + companylogo + ')' }}>
                  </div>
                </div>
            </div>
            <div className='row the_footer'>
                  <div className='col-md-3 foot'>
                     <div>
                       <ul>
                         <li className='footer_headings'>Tax</li>
                         <li>Tax Management</li>
                         <li>Recovery of withholding Tax (WHT) of dividends and Interest</li>
                       </ul>
                     </div>
                  </div>
                  <div className='col-md-3 foot'>
                     <div>
                       <ul>
                         <li className='footer_headings'>Government Adviser</li>
                         <li>Recovery of withholding Tax (WHT) of Dividends and interest</li>
                         <li>Recovery of excess bank Charges Recovery and Interest Waiver</li>
                         <li></li>
                       </ul>
                     </div>
                  </div>
                  <div className='col-md-3 foot'>
                    <div>
                      <ul>
                        <li className='footer_headings'>Business Solution</li>
                        <li>Executive man power Solution</li>
                        <li>Provision of Technical Manpower</li>
                        <li>Staff Trainings and Developments</li>
                        <li>Work and Routings Developments</li>
                      </ul>
                    </div>
                  </div>
                  <div className='col-md-3 foot'>
                     <div>
                         <ul>
                           <li className='footer_headings'>Risk</li>
                           <li>Credit risk analysis and controls</li>
                           <li>Investment analysis and appraisal</li>
                           <li>Cooperate Governnace</li>
                           <li>Production planning and controll</li>
                           <li>Inventory planning and control</li>
                         </ul>
                     </div>
                  </div>
            </div>
            <div className='row the_footer'>
              <div className='col-md-3 foot'>
                  <div>
                    <ul>
                      <li className='footer_headings'>Financial Adversory</li>
                      <li>Aquisition Mergers and Absorbtion</li>
                      <li>Project Financing</li>
                      <li>Management of ailing Projects</li>
                      <li>Profitablity planning and improvement</li>
                    </ul>
                  </div>
              </div>
              <div className='col-md-3 foot'>
                 <div>
                    <ul>
                      <li className='footer_headings'>Consulting</li>
                      <li>Accounting</li>
                      <li>Share Registration</li>
                      <li>Design and Installation of accounting system</li>
                    </ul>
                 </div>
              </div>
              <div className='col-md-3 foot'>
                 <div>
                    <ul>
                      <li className='footer_headings'>Audit</li>
                      <li>Pension Fund Audit</li>
                      <li>Private Audit</li>
                      <li>Management-Audit</li>
                    </ul>
                 </div>
              </div>
            </div>
            <div className='social'>
               <div className='facebook'>
                   <i className="fab fa-facebook-f"></i>
               </div>
               <div className='linkedIn'>
                   <i className="fab fa-linkedin-in"></i>
               </div>
               <div className='instagram'>
                   <i className="fab fa-instagram"></i>
               </div>
            </div>
            <div className='copyright'>
              <p>{'Copyright Lanre Abidakun Accounting @ 2019.All Right Reserved'}</p>
            </div>
          </div>
     )
}

import React, {Component} from 'react';

export default () => {
    const para = 'Lanre Abidakun & Co. (Chartered Accountants) is a firm of accountants with extensive knowledge and experience in auditing and investigation, taxation receivership and liquidation. The Firm was established about 20 years ago and has engaged in several specialized and statutory audits. During this period, we have strengthened our tax unit having realized the importance that government now place on tax as revenue pot due to dwindling in other sector of income generation. cannot but ensure adequate tax planning and protection of our clients from both State and Federal taxes i.e PAYE, CIT, VAT and others. We are also, a major player in the financial sector having proved our professional competence as External Auditor to a Mortgage bank for over 9 years with Assets based of N5billion. We are currently CBN Consultant, and in providing other financial advisory services, we have procured pioneer Certificate for some Companies in Abuja which guarantee them tax holidays These';
    const para1 = 'Companies are listed in our clientele list.';

    return(
       <div className='row'>
          <div className='col-md-6 aboutUs'>
               <h3>WHO WE ARE</h3>
               <i className="fal fa-users"></i>
               <p> { para + para1 } </p>
          </div>
          <div className='col-md-6 mission'>
              <h3>
                OUR MISSION
              </h3>
               <p>
                 Our MISSION is to ensure the provision of a comprehensive, world class, affordable and value-adding professional services to our clients, thereby contributing significantly towards the achievement of their goals and objectives.
The array of specialized services provided by our firm are described below under the following headings:
               </p>
          </div>
       </div>
    )
}

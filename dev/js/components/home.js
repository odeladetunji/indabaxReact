import React, {Component} from 'react';
// import React, {Component} from 'react';
import Services from './services';
import Banner from '../containers/banner';
import About from './about';
import Contact from './contact';
import Carousel from './carousel';
import MobileNav from '../containers/mobileHeader';
import TabletHeader from '../containers/tabletHeader';

export default () => {
       return(
           <div>
               <TabletHeader />
               <Banner />
               <About />
               <MobileNav />
           </div>
       );
}

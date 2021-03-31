import React, {Component} from 'react';

export default (param) => {
   if(param == 'scroll to services'){
      return {
         type: 'scroll to services',
         payload: {

         }
      }
   }

   if(param == 'scroll to contacts'){
       return {
         type: 'scroll to contacts',
         payload: {

         }
       }
   }

   if(param == 'scroll to about'){
       return {
         type: 'scroll to about',
         payload: {

         }
       }
   }
}

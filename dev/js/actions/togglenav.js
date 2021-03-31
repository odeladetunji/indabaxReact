import React, {Component} from 'react';

export default (param) => {
   if(param.type == 'show contacts'){
       return {
         type: 'show contacts',
         payload: param.payload
       }
   }

   if (param.type == 'show services') {
       return {
         type: 'show services',
         payload: param.payload
       }
   }

   if(param.type == 'show about') {
       return {
         type: 'show about',
         payload: param.payload
       }
   }

   if(param.type == 'mobile_nav'){
       return {
         type: 'mobile_nav',
         payload: param.payload
       }
   }
}

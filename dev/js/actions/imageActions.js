import React, {Component} from 'react';

export default (param) => {
   if(param.type == 'Array of Files'){
       return {
         type: 'Array of Files',
         payload: param.payload
       }
   }

   if(param.type == 'Current Image'){
       return {
         type: 'Current Image',
         payload: param.payload
       }
    }

}

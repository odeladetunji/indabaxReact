import React, {Component} from 'react';

export default (state = null, action) => {
     switch(action.type){
        case 'load publications_FULFILLED':
           return  Object.assign({}, state, {
                       publications: [
                           action.payload.data
                       ],
                       toPubPage: true
                   });
                   break;

         case 'submit publication to server_FULFILLED':
           return Object.assign({}, state, {
                      result: action.payload.data
                  });
                  break;
     }

     return Object.assign({}, state, {
                 publications: null, //
                 toPubPage: false
             });
}

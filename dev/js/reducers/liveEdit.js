import React, {Component} from 'react';

export default (state = null, action) => {
     switch(action.type){
        case 'authors name':
           return  Object.assign({}, state, {
                       publications: [
                           action.payload.data
                       ],
                       toPubPage: true
                   });
                   break;
     }

     return Object.assign({}, state, {
                 paragraphs: null, //
                 toPubPage: false
             });
}

import React, {Component} from 'react';

export default (state = null, action) => {
     switch(action.type){
        case 'inputting date':
           return  Object.assign({}, state, {
                       date_generated: action.payload,
                       toPubPage: true
                   });
                   break;
     }

     return state;
}

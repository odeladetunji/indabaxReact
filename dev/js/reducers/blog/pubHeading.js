import React, {Component} from 'react';

export default (state = null, action) => {
     switch(action.type){
        case 'inputting publication heading':
           return  Object.assign({}, state, {
                       publication_heading: action.payload,
                       toPubPage: true
                   });
                   break;
     }

     return state;
}

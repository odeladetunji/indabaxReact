import React, {Component} from 'react';

export default (state = null, action) => {
     switch(action.type){
        case 'authors name':
           return  Object.assign({}, state, {
                       authors_name: action.payload,
                       toPubPage: true
                   });
                   break;
     }

     return state;
}

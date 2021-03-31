import React, {Component} from 'react';

export default (state = null, action) => {
     switch(action.type){
        case 'selecting files':
           return  Object.assign({}, state, {
                       selected_files: action.payload,
                       toPubPage: true
                   });
                   break;
     }

     return state;
}

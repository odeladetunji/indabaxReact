import React, {Component} from 'react';

export default (state = null, action) => {
     switch(action.type){
        case 'scroll to services':
           return  Object.assign({}, state, {

                   });
                   break;

        case 'scroll to about':
            return Object.assign({}, state, {

                   });
                   break;

        case 'scroll to contacts':
            return Object.assign({}, state, {

            });
            break;
     }

     return {
         showNav: 'showNav',
         hideNav: 'hideNav'
     };
}

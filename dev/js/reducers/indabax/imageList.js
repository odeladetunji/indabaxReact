import React, {Component} from 'react';

export default (state = null, action) => {
     switch(action.type){
        case 'Array of Files':
              console.log(action.payload)
              return  Object.assign({}, state, {
                       imageFiles: action.payload
                   });      
     }

     return state;
}

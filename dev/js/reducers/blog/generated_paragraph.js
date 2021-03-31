import React, {Component} from 'react';

export default (state = null, action) => {
     switch(action.type){
        case 'writing paragraph':
              console.log(action.payload)
              return  Object.assign({}, state, {
                       generated_paragraph: action.payload,
                       toPubPage: true
                   });
                   break;
     }

     return state;
}

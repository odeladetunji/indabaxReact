import React, {Component} from 'react';

export default (state = null, action) => {
     switch(action.type){
         case 'Current Image':
               console.log(action.payload)
               return  Object.assign({}, state, {
                         currentImage: action.payload
                    });         
     }

     return state;
}
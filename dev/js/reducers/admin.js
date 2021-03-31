import React, {Component} from 'react';

export default (state = null, action) => {
     switch(action.type){
        case 'login request_FULFILLED':
           return Object.assign({}, state, {
                                               status: () => {
                                                  if(action.payload.data == 'admin'){
                                                      return 'admin';
                                                  }
                                                  if(action.payload.data == 'not_admin'){
                                                      return 'not_admin';
                                                  }
                                               },
                                               warning: () => {
                                                  if(action.payload.data == 'admin'){
                                                      return 'admin';
                                                  }
                                                  if(action.payload.data == 'not_admin'){
                                                      return 'not_admin';
                                                  }
                                               }
                   });
                   break;
     }

     return Object.assign({}, state, {
                 status: 'not_admin', //
                 warning: 'not_admin'
             });
}

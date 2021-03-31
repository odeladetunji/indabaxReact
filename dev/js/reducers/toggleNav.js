import React, {Component} from 'react';

export default (state = null, action) => {
     switch(action.type){
        case 'mobile_nav':
           return Object.assign({}, state, {
                                              showMobileNav: action.payload
           });
           break;

        case 'show contacts':
           return Object.assign({}, state, {
                                              showContacts: action.payload,
                                              showServices: 'off',
                                              showAbout: 'off'
                  });
                  break;

        case 'show services':
           return Object.assign({}, state, {
                                              showContacts: 'off',
                                              showServices: action.payload,
                                              showAbout: 'off'
                  });
                  break;

        case 'show about':
           return Object.assign({}, state, {
                                              showContacts: 'off',
                                              showServices: 'off',
                                              showAbout: action.payload
                  });
                  break;
     }

     return {
         tabletHeader: 'off',
         showMobileNav: 'off',
         showContacts: 'off',
         showAbout: 'off',
         showServices: 'off'
     };
}

import React, {Component} from 'react';
import axios from 'axios';

export default (param) => {
    switch (param.type) {
      case 'load publications':
           return {
                type: 'load publications',
                payload: axios('http://localhost:8080/publications')
           }
           break;
      case 'login request':
          return {
            type: 'login request',
            payload: axios('http://lanreabidakun:8080/request_login')
          }
          break;
      case 'submit publication to server':
          return {
            type: 'submit publication to server',
            payload: axios('http://lanreabidakun:8080/submit_publication')
          }
          break;
    }
}

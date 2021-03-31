import React, {Component} from 'react';
import axios from 'axios';

export default (param) => {
    switch (param.type) {
      case 'liveEdit':
           return {
              type: 'liveEdit',
              payload: param.payload
           }
           break;

      case 'submit publication':
           return {
                type: 'load publications',
                payload: axios('http://localhost:8080/publications')
           }
           break;

      case 'writing paragraph':
           return {
                type: 'writing paragraph',
                payload: param.payload
           }
           break;

       case 'authors name':
           return {
                type: 'authors name',
                payload: param.payload
           }
           break;

        case 'inputting date':
           return {
                type: 'inputting date',
                payload: param.payload
           }
           break;

         case 'selecting files':
           return {
                type: 'selecting files',
                payload: param.payload
           }
           break;

          case 'inputting publication heading':
             return {
                 type: 'inputting publication heading',
                 payload: param.payload
             }
             break;
    }
}

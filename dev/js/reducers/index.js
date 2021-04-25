import {combineReducers} from 'redux';
import toggleNav from './toggleNav';
import scroll from './scroll';
import defaultContent from './defaultContent';
import admin from './admin';
import liveEdit from './liveEdit';
// blog reducers
import authors_name from './blog/authors_name';
import date_created from './blog/date_created';
import generated_paragraph from './blog/generated_paragraph';
import pubHead from './blog/pubHeading';
import selected_files from './blog/selected_files';
import imageList from './indabax/imageList';
import currentImage from './indabax/currentImage';

const allReducers = combineReducers({
    toggleNav: toggleNav,
    scroll: scroll,
    defaultContent: defaultContent,
    admin: admin,
    authors_name: authors_name,
    date_created: date_created,
    generated_paragraph: generated_paragraph,
    pubHead: pubHead,
    selected_files: selected_files,
    liveEdit: liveEdit,
    imageList: imageList,
    currentImage: currentImage
});

export default allReducers;

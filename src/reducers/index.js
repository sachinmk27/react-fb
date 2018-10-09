import { combineReducers } from "redux";
import selector from './testSelectors';
import feedItems from './feedItems';

export default combineReducers({
    feedItems,
    selector
})
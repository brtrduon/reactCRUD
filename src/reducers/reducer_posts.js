import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST } from '../actions';

export default function(state = {}, action) {
    switch (action.type) {
    case FETCH_POST:
        // const post = action.payload.data;
        // const newState = { ...state };
        // newState[post.id] = post;
        // return newState;

        // instead of writing all the lines that are commented out above, thanks to ES6 syntax, we can write: 
        return { ...state, [action.payload.data.id]: action.payload.data };
        // i.e. take all the posts that we've previously fetched in the state object and include the posts inside the new object
    case FETCH_POSTS:
        return _.mapKeys(action.payload.data, 'id');
    default:
        return state;
    }
}
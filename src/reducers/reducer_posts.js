import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

export default function(state = {}, action) {
    switch (action.type) {
    case DELETE_POST:
        return _.omit(state, action.payload);
        // if the state object has a key of the post id, then it will be omitted and be returned with a new object that doesn't contain that id
        // does not modify the existing state object, but it returns a new state object with that particular state id not present anymore
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
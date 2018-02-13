import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
// we refer to the form as 'formReducer' rather than simply as 'reducer.'
// we do this because apparently 'reducer' is too generic of a keyword
import PostsReducer from './reducer_posts';

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer
});

export default rootReducer;

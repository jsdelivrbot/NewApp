import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import UsersList from './users_reducer';
import activeUser from './active_user_reducer';

const rootReducer = combineReducers({
  users: UsersList,
  user: activeUser,
  form: formReducer
});

export default rootReducer;

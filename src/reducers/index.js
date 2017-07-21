import { combineReducers } from 'redux';
import UsersList from './users_reducer';
import activeUser from './active_user_reducer';

const rootReducer = combineReducers({
  users: UsersList,
  user: activeUser
});

export default rootReducer;

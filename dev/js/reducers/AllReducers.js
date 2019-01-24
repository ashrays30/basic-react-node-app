import { combineReducers } from "redux";
import UserReducer from './UserReducer';

const AllReducers = combineReducers({
	userState: UserReducer,
});

export default AllReducers;
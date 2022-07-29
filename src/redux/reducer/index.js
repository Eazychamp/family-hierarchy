import { combineReducers } from "redux";
import ACTION from "../constants";

const SnackbarReducer = (
	state = {
		open: false,
		content: "",
		type: "success",
	},
	action
) => {
	switch (action.type) {
		case ACTION.SNACKBAR_OPEN:
			return {
				...state,
				open: true,
				content: action.payload.content,
				type: action.payload.type,
				duration: action.payload.duration,
			};
		case ACTION.SNACKBAR_CLOSE:
			return {
				...state,
				open: false,
				content: "",
				type: "",
				duration: 2000,
			};
		default:
			return state;
	}
};

const reducers = combineReducers({
	snackbarState: SnackbarReducer,
});

export default reducers;

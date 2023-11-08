const initialState = {
	todoLists: [],
};

const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_LIST":
			return { ...state, todoLists: [...state.todoLists, action.payload] };
		default:
			return state;
	}
};

export default todoReducer;

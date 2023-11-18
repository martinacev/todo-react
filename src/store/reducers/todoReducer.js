let initialState = {
	todoLists: [],
	shopping: [],
};

const cachedlists = localStorage.getItem("todos");
if (cachedlists) {
	initialState = {
		...initialState,
		todoLists: JSON.parse(cachedlists),
	};
}

const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_LIST":
			localStorage.setItem("todos", JSON.stringify([...state.todoLists, action.payload]));
			return { ...state, todoLists: [...state.todoLists, action.payload] };

		case "DELETE_LIST":
			localStorage.setItem("todos", JSON.stringify(state.todoLists.filter((list) => list.id !== action.payload)));
			return { ...state, todoLists: state.todoLists.filter((list) => list.id !== action.payload) };
		default:
			return state;
	}
};

export default todoReducer;

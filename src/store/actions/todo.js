export const addList = (payload) => {
	return {
		type: "ADD_LIST",
		payload: payload,
	};
};

export const deleteList = (id) => {
	return {
		type: "DELETE_LIST",
		payload: id,
	};
};

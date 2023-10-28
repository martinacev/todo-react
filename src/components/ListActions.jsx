import React from "react";

const ListActions = (handleAddTodo, handleDeleteAll) => {
	return (
		<div>
			<button onClick={handleAddTodo}>Add ✔</button>
			<button onClick={handleDeleteAll} className="deleteTodoItems">
				Delete ⨉
			</button>
		</div>
	);
};

export default ListActions;

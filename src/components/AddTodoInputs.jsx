import React, { useState } from "react";

const AddtodoInputs = ({ newTodo, setNewTodo, handleAddTodo }) => {
	const handleKeyPress = (event) => {
		if (event.key === "Enter") {
			handleAddTodo();
		}
	};

	return (
		<input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} onKeyDown={handleKeyPress} />
	);
};

export default AddtodoInputs;

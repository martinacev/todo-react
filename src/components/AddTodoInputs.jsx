import React from "react";

const AddtodoInputs = ({ handleAddTodo, handleKeyPress }) => {
	const [newTodo, setNewTodo] = useState("");

	const handleKeyPress = (event) => {
		if (event.key === "Enter") {
			handleAddTodo(newTodo.trim());
			setNewTodo();
		}
	};

	return (
		<input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} onKeyDown={handleKeyPress} />
	);
};
export default AddtodoInputs;

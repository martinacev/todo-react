import { useState } from "react";

const TodoList = () => {
	const [todos, setTodos] = useState([]);
	const [newTodo, setNewTodo] = useState("");

	const handleAddTodo = () => {
		if (newTodo.trim() !== "") {
			setTodos([...todos, { text: newTodo.trim() }]);
			setNewTodo("");
		}
	};

	const handleDeleteAll = () => {
		setTodos([]);
	};

	const handleKeyPress = (event) => {
		if (event.key === "Enter") {
			handleAddTodo();
		}
	};

	return (
		<div>
			<h1>To-Do List</h1>
			<input
				type="text"
				value={newTodo}
				onChange={(e) => setNewTodo(e.target.value)}
				onKeyPress={handleKeyPress}
			/>
			<button onClick={handleAddTodo}>Add ✔</button>
			<button onClick={handleDeleteAll} className="deleteTodoItems">
				delete ⨉
			</button>
			<ul>
				{todos.map((todo, index) => (
					<li key={index}>
						<span>{todo.text}</span>
					</li>
				))}
			</ul>
		</div>
	);
};

export default TodoList;

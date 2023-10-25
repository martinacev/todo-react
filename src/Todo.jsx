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

	const handleDeleteTodo = (index) => {
		const newTodos = [...todos];
		newTodos.splice(index);
		setTodos(newTodos);
	};

	const handleKeyPress = (event) => {
		if (event.key === "Enter") {
			handleAddTodo();
		}
	};

	return (
		<div>
			<button onClick={handleDeleteTodo} className="deleteTodoItems">
				delete ⨉
			</button>
			<h1>To-Do List</h1>
			<input
				type="text"
				value={newTodo}
				onChange={(e) => setNewTodo(e.target.value)}
				onKeyPress={handleKeyPress}
			/>
			<button onClick={handleAddTodo}>Add ✔</button>
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

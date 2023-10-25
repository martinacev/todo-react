import { useState, useRef } from "react";

const TodoList = () => {
	const inputRef = useRef();

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
		newTodos.splice(index, 1);
		setTodos(newTodos);
	};

	const handleEnterKeyPress = (e) => {
		if (e.key === "Enter") {
			e.preventDefault();
			const button = inputRef.current.nextElementSibling;
			button.click();
		}
	};

	return (
		<div>
			<h1>To-Do List</h1>
			<input
				ref={inputRef}
				onKeyDown={handleEnterKeyPress}
				type="text"
				value={newTodo}
				onChange={(e) => setNewTodo(e.target.value)}
			/>
			<button onClick={handleAddTodo}>Add</button>
			<ul>
				{todos.map((todo, index) => (
					<li onClick={handleDeleteTodo} key={index}>
						<span>{todo.text}</span>
					</li>
				))}
			</ul>
		</div>
	);
};

export default TodoList;

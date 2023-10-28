import { useState } from "react";
import ListActions from "./components/ListActions";

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

	const handleDeleteItems = (index) => {
		const newTodos = [...todos];
		newTodos.splice(index, 1);
		setTodos(newTodos);
	};

	const handleKeyPress = (event) => {
		if (event.key === "Enter") {
			handleAddTodo();
		}
	};

	return (
		<div>
			<h1>To-Do List</h1>
			<div className="wrap">
				<input
					type="text"
					value={newTodo}
					onChange={(e) => setNewTodo(e.target.value)}
					onKeyDown={handleKeyPress}
				/>
				<ListActions handleAddTodo={handleAddTodo} handleDeleteAll={handleDeleteAll} />
			</div>
			<ul>
				{todos.map((todo, index) => (
					<li onClick={() => handleDeleteItems(index)} key={index}>
						<span>{todo.text}</span>
					</li>
				))}
			</ul>
		</div>
	);
};

export default TodoList;

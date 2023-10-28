import { useState } from "react";
import ListActions from "./components/ListActions";
import AddtodoInput from "./components/AddTodoInput";
import TodoList from "./components/TodoList";

const Todo = () => {
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

	return (
		<div>
			<h1>To-Do List</h1>
			<div className="wrap">
				<AddtodoInput value={newTodo} setValue={setNewTodo} handleAdd={handleAddTodo} />
				<ListActions handleAddTodo={handleAddTodo} handleDeleteAll={handleDeleteAll} />
			</div>
			<TodoList handleDeleteItems={handleDeleteItems} todos={todos} />
		</div>
	);
};

export default Todo;

import { useState } from "react";
import ListActions from "./components/ListActions";
import AddtodoInput from "./components/AddTodoInput";
import TodoList from "./components/TodoList";

const Todo = () => {
	const [todos, setTodos] = useState([]);
	const [newTodo, setNewTodo] = useState("");
	const [selectedItems, setSelectedItems] = useState([]);

	const handleAddTodo = () => {
		if (newTodo.trim() !== "") {
			const newTodoItem = {
				id: new Date().getTime().toString(),
				text: newTodo.trim(),
			};

			setTodos([...todos, newTodoItem]);
			setNewTodo("");
		}
	};

	const handleDeleteAll = () => {
		setTodos([]);
	};

	const handleDeleteItems = (id) => {
		const newTodos = todos.filter((todo) => todo.id !== id);
		setTodos(newTodos);
	};

	const handleToggSelection = (id) => {
		if (selectedItems.includes(id)) {
			setSelectedItems(selectedItems.filter((item) => item.id !== id));
		} else {
			setSelectedItems([...selectedItems, id]);
		}
	};

	const handleDeleteSelected = () => {
		const newTodos = todos.filter((todo) => !selectedItems.includes(todo.id));
		setTodos(newTodos);
		setSelectedItems([]);
	};

	return (
		<div className="main">
			<div className="listTitle">
				<h2>List Title</h2>
				<input className="inputStyle" type="text" />
			</div>

			<h1>To-Do List</h1>
			<div className="wrap">
				<AddtodoInput value={newTodo} setValue={setNewTodo} handleAdd={handleAddTodo} />
				<ListActions
					handleAddTodo={handleAddTodo}
					handleDeleteAll={handleDeleteAll}
					handleDeleteSelected={handleDeleteSelected}
				/>
			</div>
			<TodoList
				handleToggleSelection={handleToggSelection}
				selectedItems={selectedItems}
				handleDeleteItems={handleDeleteItems}
				todos={todos}
			/>
			{todos.length > 1 && (
				<div className="button-container">
					<button className="deleteTodoItems" onClick={handleDeleteSelected}>
						Delete Selected ⨉
					</button>
				</div>
			)}
		</div>
	);
};

export default Todo;

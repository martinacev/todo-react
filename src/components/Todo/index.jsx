import { useState } from "react";
import ListActions from "./ListActions";
import AddtodoInput from "./AddTodoInput";
import TodoList from "./TodoList";
import ListTitle from "./ListTitle";
import ButtonSelect from "./ButtonSelect";

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
			<ListTitle />
			<h1 className="todoName">To-Do List</h1>
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
			{todos.length > 1 && <ButtonSelect handleDeleteSelected={handleDeleteSelected} />}
		</div>
	);
};

export default Todo;

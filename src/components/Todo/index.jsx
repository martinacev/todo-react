import { useState } from "react";
import ListActions from "./ListActions";
import AddtodoInput from "./AddTodoInput";
import TodoList from "./TodoList";
import ListTitle from "./ListTitle";
import ButtonSelect from "./ButtonSelect";

import { v4 as uuidv4 } from "uuid";

const Todo = () => {
	const [todos, setTodos] = useState([]);
	const [newTodo, setNewTodo] = useState("");
	const [selectedItems, setSelectedItems] = useState([]);
	const [title, setTitle] = useState();

	const dispatch = useDispatch();

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

	const handleSaveList = () => {
		const list = {
			title: title,
			content: todos,
		};
		dispatch(addList(list));
	};

	return (
		<div className="todo-container">
			<ListTitle />
			<div className="main">
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
					handleToggleSelection={handleToggleSelection}
					selectedItems={selectedItems}
					handleDeleteItems={handleDeleteItems}
					todos={todos}
				/>
				{todos.length > 1 && <ButtonSelect handleDeleteSelected={handleDeleteSelected} />}
			</div>
		</div>
	);
};

export default Todo;

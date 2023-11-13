import { useEffect, useState } from "react";
import ListActions from "./ListActions";
import AddtodoInput from "./AddTodoInput";
import TodoList from "./TodoList";
import ListTitle from "./ListTitle";
import ButtonSelect from "./ButtonSelect";
import classes from "./ListActions.module.css";

import { v4 as uuidv4 } from "uuid";
import { addList } from "../../store/actions/todo";
import { useDispatch } from "react-redux";

const Todo = () => {
	const [todos, setTodos] = useState([]);
	const [newTodo, setNewTodo] = useState("");
	const [selectedItems, setSelectedItems] = useState([]);
	const [title, setTitle] = useState();

	const dispatch = useDispatch();

	useEffect(() => {
		const storedTodos = localStorage.getItem("todos");
		if (storedTodos) {
			setTodos(JSON.parse(storedTodos));
			console.log("Todos loaded from localStorage:", JSON.parse(storedTodos));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
		console.log("Todos saved to localStorage:", todos);
	}, [todos]);

	const handleAddTodo = () => {
		uuidv4();
		if (newTodo.trim() !== "") {
			const newTodoItem = {
				id: uuidv4(),
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

	const handleToggleSelection = (id) => {
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
			<ListTitle setTitle={setTitle} />
			<div className="containerwrap">
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
					<div className="listbtn">
						<button className={classes.btn} onClick={handleSaveList}>
							Save List
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Todo;

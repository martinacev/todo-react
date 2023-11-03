import PropTypes from "prop-types";
import classes from "./TodoList.module.css";

const TodoList = ({ todos, handleToggleSelection, handleDeleteItems }) => {
	return (
		<ul className={classes.items}>
			{todos.map((todo) => (
				<li key={todo.id}>
					<input type="checkbox" onChange={() => handleToggleSelection(todo.id)} />
					{todo.text}
					<span className={classes.deleteButton} onClick={() => handleDeleteItems(todo.id)}>
						⨉
					</span>
				</li>
			))}
		</ul>
	);
};

TodoList.propTypes = {
	handleDeleteItems: PropTypes.func.isRequired,
	todos: PropTypes.array.isRequired,
	handleToggleSelection: PropTypes.func.isRequired,
	selectedItems: PropTypes.array.isRequired,
};

export default TodoList;

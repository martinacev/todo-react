import PropTypes from "prop-types";

const TodoList = ({ todos, handleToggleSelection, selectedItems }) => {
	return (
		<ul>
			{todos.map((todo) => (
				<li key={todo.id}>
					<input
						type="checkbox"
						checked={selectedItems.includes(todo.id)}
						onChange={() => handleToggleSelection(todo.id)}
					/>
					{todo.text}
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

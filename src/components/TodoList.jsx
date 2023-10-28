import PropTypes from "prop-types";

const TodoList = ({ handleDeleteItems, todos }) => {
	return (
		<ul>
			{todos.map((todo, index) => (
				<li onClick={() => handleDeleteItems(index)} key={index}>
					<span>{todo.text}</span>
				</li>
			))}
		</ul>
	);
};

TodoList.propTypes = {
	handleDeleteItems: PropTypes.func.isRequired,
	todos: PropTypes.array.isRequired,
};

export default TodoList;

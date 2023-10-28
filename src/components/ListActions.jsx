import PropTypes from "prop-types";

const ListActions = ({ handleAddTodo, handleDeleteAll }) => {
	return (
		<div>
			<button onClick={handleAddTodo}>Add ✔</button>
			<button onClick={handleDeleteAll} className="deleteTodoItems">
				Delete ⨉
			</button>
		</div>
	);
};

ListActions.propTypes = {
	handleAddTodo: PropTypes.func.isRequired,
	handleDeleteAll: PropTypes.func.isRequired,
};

export default ListActions;

import PropTypes from "prop-types";
import classes from "./ListActions.module.css";

const ListActions = ({ handleAddTodo, handleDeleteAll }) => {
	return (
		<div>
			<button onClick={handleAddTodo}>Add ✔</button>
			<button onClick={handleDeleteAll} className={classes.deletebtn}>
				Delete ⨉
			</button>
		</div>
	);
};

ListActions.propTypes = {
	handleAddTodo: PropTypes.func.isRequired,
	handleDeleteAll: PropTypes.func.isRequired,
	handleDeleteSelected: PropTypes.func.isRequired,
};

export default ListActions;

import PropTypes from "prop-types";
import classes from "./ListActions.module.css";

const ListActions = ({ handleAddTodo, handleDeleteAll }) => {
	return (
		<div className={classes.buttons}>
			<div className={classes.wraper}>
				<button onClick={handleAddTodo} className={classes.button}>
					Add ✔
				</button>
				<button onClick={handleDeleteAll} className={classes.button}>
					Delete ⨉
				</button>
			</div>
		</div>
	);
};

ListActions.propTypes = {
	handleAddTodo: PropTypes.func.isRequired,
	handleDeleteAll: PropTypes.func.isRequired,
	handleDeleteSelected: PropTypes.func.isRequired,
};

export default ListActions;

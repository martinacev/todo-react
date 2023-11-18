import PropTypes from "prop-types";
import classes from "./ListActions.module.css";

const ListActions = ({ handleAddTodo, handleDeleteAll }) => {
	return (
		<div className={classes.handleButtons}>

			<div className={classes.wrapper}>

				<button onClick={handleAddTodo} className={classes.btn}>
					Add ✔
				</button>
				<button onClick={handleDeleteAll} className={classes.btn}>
					Delete All ⨉
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

import PropTypes from "prop-types";
import classes from "./ButtonSelect.module.css";

const ButtonSelect = ({ handleDeleteSelected }) => {
	return (
		<div className={classes.button}>
			<button className={classes.select} onClick={handleDeleteSelected}>
				Delete Selected ⨉
			</button>
		</div>
	);
};

ButtonSelect.propTypes = {
	handleDeleteSelected: PropTypes.func.isRequired,
};

export default ButtonSelect;

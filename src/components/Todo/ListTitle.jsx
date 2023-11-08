import classes from "./ListTitle.module.css";
import PropTypes from "prop-types";

const ListTitle = ({ setTitle }) => {
	return (
		<div className={classes.title}>
			<h2>List Title</h2>
			<input onChange={(e) => setTitle(e.target.value)} className={classes.input} type="text" />
		</div>
	);
};

ListTitle.propTypes = {
	setTitle: PropTypes.func.isRequired,
};

export default ListTitle;

import classes from "./ListTitle.module.css";

const ListTitle = () => {
	return (
		<div className={classes.title}>
			<h2>List Title</h2>
			<input className={classes.input} type="text" />
		</div>
	);
};

export default ListTitle;

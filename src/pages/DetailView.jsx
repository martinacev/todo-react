import TodoList from "../components/Todo/TodoList";
import ListTitle from "../components/Todo/ListTitle";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import classes from "../components/Todo/ListActions.module.css";

const DetailView = ({ lists }) => {
	const { title } = useParams();

	if (!lists || !Array.isArray(lists)) {
		return (
			<>
				<div>No details available</div>
				<button className={classes.button}>
					<Link to="/" style={{ color: "white" }}>
						Back
					</Link>
				</button>
			</>
		);
	}

	const list = lists.find((l) => l.title === title);

	return (
		<div>
			<h1>Detail View Page</h1>
			{list ? (
				<>
					<ListTitle title={list.title} />
					<TodoList todos={list.content} />
				</>
			) : (
				<div>List not found</div>
			)}
			<button className={classes.button}>
				<Link to="/" style={{ color: "white" }}>
					Back
				</Link>
			</button>
		</div>
	);
};

export default DetailView;

DetailView.propTypes = {
	lists: PropTypes.array,
};

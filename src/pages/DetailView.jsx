import TodoList from "../components/Todo/TodoList";
import ListTitle from "../components/Todo/ListTitle";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const DetailView = ({ match, lists }) => {
	const list = lists.find((l) => l.title === match.params.title);

	return (
		<div>
			<h1>Detail View Page</h1>
			{list && (
				<>
					<ListTitle title={list.title} />
					<TodoList todos={list.content} />
				</>
			)}
			<Link to="/">
				<button>Back</button>
			</Link>
		</div>
	);
};

export default DetailView;

DetailView.propTypes = {
	match: PropTypes.func.isRequired,
	lists: PropTypes.array.isRequired,
};

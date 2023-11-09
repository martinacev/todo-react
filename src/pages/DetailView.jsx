import TodoList from "../components/Todo/TodoList";
import ListTitle from "../components/Todo/ListTitle";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";

const DetailView = ({ lists }) => {
	const { title } = useParams();

	if (!lists || !Array.isArray(lists)) {
		return <div>No details available</div>;
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
			<Link to="/">
				<button>Back</button>
			</Link>
		</div>
	);
};

export default DetailView;

DetailView.propTypes = {
	lists: PropTypes.array,
};

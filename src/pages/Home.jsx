import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import DashboardList from "../components/DashboardList";

const Home = () => {
	const lists = useSelector((state) => state.todoLists);

	return (
		<div>
			<h1>Home Page</h1>
			<div>
				{lists.map((list) => (
					<DashboardList key={list.title} title={list.title} content={list.content} />
				))}
			</div>
		</div>
	);
};

export default Home;

Home.propTypes = {
	lists: PropTypes.array.isRequired,
};

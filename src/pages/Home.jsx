import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Home = ({ lists }) => {
	console.log("lists:", lists);
	return (
		<div>
			<h1>Home Page</h1>
			<Link to="/">Back</Link>
			<div>
				{lists.map((list) => (
					<div key={list.title}>{list.title}</div>
				))}
			</div>
		</div>
	);
};

export default Home;

Home.propTypes = {
	lists: PropTypes.array.isRequired,
};

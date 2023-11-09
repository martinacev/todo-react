import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ListTitle from "../components/Todo/ListTitle";

const Home = ({ lists }) => {
	return (
		<div>
			<h1>Home Page</h1>
			<div>
				{lists.map((list) => (
					<Link to={`/detail/${list.title}`} key={list.title}>
						<div>
							<ListTitle title={list.title} />
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Home;

Home.propTypes = {
	lists: PropTypes.func.isRequired,
};

import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import classes from "../components/Todo/ListActions.module.css";

const Home = ({ lists }) => {
	return (
		<div>
			<button className={classes.button}>
				<Link to="/" style={{ color: "white" }}>
					Back
				</Link>
			</button>
			<h1>Home Page</h1>
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

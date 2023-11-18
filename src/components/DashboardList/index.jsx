import { PropTypes } from "prop-types";
import classes from "../DashboardList/index.module.css";
import { useDispatch } from "react-redux";
import { deleteList } from "../../store/actions/todo";

export default function DashboardList({ id, title, content }) {
	const dispatch = useDispatch();

	const handleDeleteList = () => {
		dispatch(deleteList(id));
	};

	return (
		<div className={classes.list}>
			<h4>{title}</h4>
			<ul className={classes.ulstyle}>
				{content.map((item) => (
					<li className={classes.listyle} key={item.id}>
						{item.text}
					</li>
				))}
			</ul>
			<div>
				<button onClick={handleDeleteList}>Delete list</button>
			</div>
		</div>
	);
}

DashboardList.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	content: PropTypes.array,
};

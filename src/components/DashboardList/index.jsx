import { PropTypes } from "prop-types";
import classes from "../DashboardList/index.module.css";

export default function DashboardList({ title, content }) {
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
		</div>
	);
}

DashboardList.propTypes = {
	title: PropTypes.string.isRequired,
	content: PropTypes.array,
};

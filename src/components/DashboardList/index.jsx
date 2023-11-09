import { PropTypes } from "prop-types";

export default function DashboardList({ title, content }) {
	return (
		<div
			style={{
				borderRadius: 8,
				backgroundColor: "whitesmoke",
				color: "#333",
			}}
		>
			<h4>{title}</h4>
			<ul>
				{content.map((item) => (
					<li key={item.id}>{item.text}</li>
				))}
			</ul>
		</div>
	);
}

DashboardList.propTypes = {
	title: PropTypes.string.isRequired,
	content: PropTypes.array,
};

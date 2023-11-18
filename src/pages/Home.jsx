import { useSelector } from "react-redux";
import DashboardList from "../components/DashboardList";
import classes from "../pages/Home.module.css";

const Home = () => {
	const lists = useSelector((state) => state.todoLists);

	return (
		<div className={classes.wrapper}>
			<h1>Home Page</h1>
			<div className={classes.wrap}>
				{lists.map((list) => (
					<DashboardList key={list.id} id={list.id} title={list.title} content={list.content} />
				))}
			</div>
		</div>
	);
};

export default Home;

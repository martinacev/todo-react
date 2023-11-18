import { Link } from "react-router-dom";
import Todo from "../components/Todo";
import classes from "..//pages/CreateTodo.module.css";

const CreateTodo = () => {
	return (
		<div>

			<div className={classes.wrapper}>

				<Link className={classes.backbtn} to="/">
					Back
				</Link>
			</div>
			<Todo />
		</div>
	);
};

export default CreateTodo;

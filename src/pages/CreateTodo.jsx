import { Link } from "react-router-dom";
import Todo from "../components/Todo";
import classes from "..//pages/CreateTodo.module.css";

const CreateTodo = () => {
	return (
		<div>
			<div className={classes.wrapbtn}>
				<button className={classes.button}>
					<Link className={classes.backbtn} to="/">
						Back
					</Link>
				</button>
			</div>
			<Todo />
		</div>
	);
};

export default CreateTodo;

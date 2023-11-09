import { Link } from "react-router-dom";
import Todo from "../components/Todo";

const CreateTodo = () => {
	return (
		<div>
			<button>
				<Link to="/" style={{ color: "white" }}>
					Back
				</Link>
			</button>
			<Todo />
		</div>
	);
};

export default CreateTodo;

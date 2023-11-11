import { Link } from "react-router-dom";
import classes from "../Navbar/index.module.css";

export default function Navbar() {
	return (
		<ul className={classes.menu}>
			<li>
				<Link className={classes.btnStyle} to={"/"}>
					Home
				</Link>
			</li>

			<li>
				<Link className={classes.btnStyle} to={"/create-list"}>
					Create list
				</Link>
			</li>
		</ul>
	);
}

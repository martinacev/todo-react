import { Link } from "react-router-dom";
import classes from "../Navbar/index.module.css";

export default function Navbar() {
	return (
		<ul className={classes.menu}>
			<li>
				<button className={classes.button}>
					<Link className={classes.dsg} to={"/"}>
						Home
					</Link>
				</button>
			</li>
			<button className={classes.button}>
				<li>
					<Link className={classes.dsg} to={"/create-list"}>
						Create list
					</Link>
				</li>
			</button>
		</ul>
	);
}

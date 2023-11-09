import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<ul
			style={{
				display: "flex",
				gap: 10,
			}}
		>
			<li>
				<Link to={"/"}>Home</Link>
			</li>
			<li>
				<Link to={"/create-list"}>Create list</Link>
			</li>
		</ul>
	);
}

import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store";
import CreateTodo from "./pages/CreateTodo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<CreateTodo />} />
					<Route path="/home" element={<Home />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	);
}

export default App;

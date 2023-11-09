import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store";
import CreateTodo from "./pages/CreateTodo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DetailView from "./pages/DetailView";
import Navbar from "./components/Navbar";

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/create-list" element={<CreateTodo />} />
					<Route path="/detail-view" element={<DetailView />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	);
}

export default App;

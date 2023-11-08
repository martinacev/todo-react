import "./index.css";
import TodoList from "./components/Todo";

import { Provider } from "react-redux";
import store from "./store/store";

function App() {
	return (
		<Provider store={store}>
			<TodoList />
		</Provider>
	);
}

export default App;

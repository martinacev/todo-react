import PropTypes from "prop-types";

const AddtodoInput = ({ value, setValue, handleAdd }) => {
	const handleKeyPress = (event) => {
		if (event.key === "Enter") {
			handleAdd();
		}
	};

	return <input type="text" value={value} onChange={(e) => setValue(e.target.value)} onKeyDown={handleKeyPress} />;
};

AddtodoInput.propTypes = {
	value: PropTypes.func.isRequired,
	setValue: PropTypes.func.isRequired,
	handleAdd: PropTypes.func.isRequired,
};

export default AddtodoInput;
